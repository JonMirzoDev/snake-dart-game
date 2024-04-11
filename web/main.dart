import 'dart:html';
import 'dart:math';

const int CELL_SIZE = 10;

CanvasElement? canvas;
CanvasRenderingContext2D? ctx;

void main() {
  canvas = querySelector('#canvas') as CanvasElement;
  ctx = canvas?.getContext('2d') as CanvasRenderingContext2D?;
}

void drawCell(Point coords, String color) {
  ctx
    ?..fillStyle = color
    ..strokeStyle = "white";

  final x = (coords.x * CELL_SIZE).toInt();
  final y = (coords.y * CELL_SIZE).toInt();

  ctx
    ?..fillRect(x, y, CELL_SIZE, CELL_SIZE)
    ..strokeRect(x, y, CELL_SIZE, CELL_SIZE);
}

void clear() {
  ctx
    ?..fillStyle = "white"
    ..fillRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
}
