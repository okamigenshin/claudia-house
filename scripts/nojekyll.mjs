// Create out/.nojekyll so GitHub Pages does not run Jekyll (which ignores _next/).
import { writeFileSync } from "node:fs";
writeFileSync("out/.nojekyll", "");
console.log("created out/.nojekyll");
