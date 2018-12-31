import { instantiateStreaming, CanvasASInterop } from "canvas-as";
const canvas: HTMLCanvasElement = document.querySelector("canvas") || document.createElement("canvas");
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
ctx.canvas.width = 800;
ctx.canvas.height = 600;

if (!ctx.canvas.parentElement) {
  document.body.appendChild(ctx.canvas);
}

async function main(): Promise<void> {
  const interop: CanvasASInterop<any> = await instantiateStreaming<any>(fetch("../build/untouched.wasm"), {});

  interop.useContext("main", ctx)
    .useImage("kitten", fetch("https://placekitten.com/400/300"));
  var target = window as any;

  interop.wasm.init();
  function frame() {
    requestAnimationFrame(target.frame);
    interop.wasm.draw();
  }
  if (!target.frame) {
    requestAnimationFrame(frame);
  }
  target.frame = frame;
}

main();
