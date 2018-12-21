import { CanvasASInterop } from "canvas-as";
const fs = require("fs");

const result: Buffer = fs.readFileSync("./build/untouched.wasm");
const blob: Blob = new Blob([result], { type: "application/wasm" });
const url: string = URL.createObjectURL(blob);
const ctx: CanvasRenderingContext2D = (document.createElement("canvas") || document.querySelector("canvas"))
  .getContext("2d")!;
ctx.canvas.width = 800;
ctx.canvas.height = 600;

if (!ctx.canvas.parentElement) {
  document.body.appendChild(ctx.canvas);
}

async function main(): Promise<void> {
  const interop: CanvasASInterop = new CanvasASInterop(ctx, fetch(url), {});
  await interop.loaded;
  interop.update();
  interop.draw();
}

main();