"""Validate the exported public site and exact inline-script CSP hashes."""
import base64
import hashlib
from html.parser import HTMLParser
from pathlib import Path
import re
import subprocess
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "out"
errors = []


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=False)
        self.path = path
        self.csp = ""
        self.referrer = None
        self.inline = False
        self.body = ""
        self.hashes = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if any(name.lower().startswith("on") for name in attrs):
            errors.append(f"{self.path.relative_to(OUT)}: inline event handler")
        if tag in ("form", "base", "object", "embed"):
            errors.append(f"{self.path.relative_to(OUT)}: forbidden {tag} element")
        if tag == "script":
            self.inline = not attrs.get("src")
            self.body = ""
        if tag == "meta":
            if attrs.get("http-equiv", "").lower() == "content-security-policy":
                self.csp = attrs.get("content", "")
            if attrs.get("name") == "referrer":
                self.referrer = attrs.get("content")
        for key in ("src", "href"):
            value = attrs.get(key, "")
            url = urlsplit(value)
            if url.scheme.lower() in ("http", "javascript") or value.startswith("//"):
                errors.append(f"{self.path.relative_to(OUT)}: unsafe URL")
            if not value or url.scheme or url.netloc or not url.path:
                continue
            target = OUT / unquote(url.path.lstrip("/")) if url.path.startswith("/") else self.path.parent / unquote(url.path)
            target = target.resolve()
            if not target.is_relative_to(OUT) or not target.exists():
                errors.append(f"{self.path.relative_to(OUT)}: missing/outside resource {value}")

    def handle_data(self, data):
        if self.inline:
            self.body += data

    def handle_endtag(self, tag):
        if tag == "script" and self.inline:
            if self.body:
                value = base64.b64encode(hashlib.sha256(self.body.encode()).digest()).decode()
                self.hashes.append(f"'sha256-{value}'")
            self.inline = False


for name in subprocess.check_output(["git", "ls-files", "-z"], cwd=ROOT).decode().split("\0"):
    if not name:
        continue
    if any(part == ".env" or part.startswith(".env.") for part in Path(name).parts) or re.search(
        r"\.(?:pem|key|pfx|p12|sqlite|sqlite3|db|sql|bak)$", name, re.I
    ):
        errors.append(f"{name}: private file must not be committed")

pages = list(OUT.rglob("*.html"))
if len(pages) < 9:
    errors.append("Missing exported website pages")
for path in pages:
    page = Page(path)
    page.feed(path.read_text(encoding="utf-8"))
    directives = {}
    for item in page.csp.split(";"):
        values = item.strip().split()
        if values:
            directives[values[0]] = values[1:]
    for directive in ("default-src", "object-src", "base-uri", "form-action"):
        if directives.get(directive) != ["'none'"]:
            errors.append(f"{path.relative_to(OUT)}: {directive} must deny by default")
    scripts = directives.get("script-src", [])
    if "'self'" not in scripts or any(value not in ["'self'", *page.hashes] for value in scripts):
        errors.append(f"{path.relative_to(OUT)}: scripts must use same origin and exact hashes")
    if any(value not in scripts for value in page.hashes):
        errors.append(f"{path.relative_to(OUT)}: inline script hash missing")
    if page.referrer != "no-referrer":
        errors.append(f"{path.relative_to(OUT)}: referrer policy missing")
if not (OUT / "CNAME").exists() or (OUT / "CNAME").read_text().strip() != "claudiahouse.com":
    errors.append("Unexpected publishing domain")
if not (OUT / ".nojekyll").exists():
    errors.append("Missing .nojekyll")
if errors:
    raise SystemExit("\n".join(errors))
print(f"Site safety passed: {len(pages)} pages, exact script hashes, no form submissions.")
