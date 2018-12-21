import "allocator/tlsf";
import { CanvasRenderingContext2D  } from "../node_modules/canvas-as/assembly/index";

var ctx: CanvasRenderingContext2D = new CanvasRenderingContext2D();

export function init(): void {
  ctx.init();
}

export function update(): void {

}

export function draw(): Float64Array {
  ctx.fillStyle = "red";
  ctx.fillRect(100.0, 100.0, 200.0, 200.0);
  return ctx.commit();
}