import "allocator/tlsf";
import { CanvasRenderingContext2D, TextureMap, Image  } from "../node_modules/canvas-as/assembly/index";

var ctx: CanvasRenderingContext2D = new CanvasRenderingContext2D();

export function init(): void {
  ctx.init();
}

export function update(): void {

}

export function draw(): Float64Array {
  ctx.clearRect(0, 0, 800, 600);
  if (TextureMap.has("kitten")) {
    var kitten: Image = TextureMap.get("kitten");
    ctx.drawImagePosition(kitten, 100.0, 100.0);
    ctx.fillStyle = "red";
    ctx.fillText("Loaded a kitten!", 300.0, 300.0);
  } else {
    ctx.fillStyle = "black";
    ctx.fillRect(100.0, 100.0, 400.0, 300.0);
  }

  return ctx.commit();
}

export { memory }
