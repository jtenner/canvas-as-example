import "allocator/tlsf";
import { OptimizedCanvasRenderingContext2D, TextureMap, Image, CanvasMap  } from "../node_modules/canvas-as/assembly";

var ctx: OptimizedCanvasRenderingContext2D;
export function init(): void {
  ctx = CanvasMap.getOptimized("main");
}

export function draw(): void {
  ctx.clearRect(0.0, 0.0, 800.0, 600.0);
  if (TextureMap.has("kitten")) {
    var kitten: Image = TextureMap.get("kitten");
    ctx.drawImagePosition(kitten, 100.0, 100.0);
    ctx.fillStyle = "red";
    ctx.fillText("Loaded a kitten!", 300.0, 300.0);
  } else {
    ctx.fillStyle = "black";
    ctx.fillRect(100.0, 100.0, 400.0, 300.0);
  }

  ctx.commit();
}

export { memory }
