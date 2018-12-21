const { Buffer } = require("buffer");
const regeneratorRuntime = require("regenerator-runtime");
window.Buffer = Buffer;
window.regeneratorRuntime = regeneratorRuntime;
require("./index.ts");
