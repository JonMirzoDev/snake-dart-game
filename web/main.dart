import 'dart:html';
import 'dart:math';
import 'dart:collection';

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

class Keyboard {
  final Map<int, bool> _keys = {};

  Keyboard() {
    window.onKeyDown.listen((KeyboardEvent event) {
      _keys[event.keyCode] = true;
    });

    window.onKeyUp.listen((KeyboardEvent event) {
      _keys[event.keyCode] = false;
    });
  }

  bool isPressed(int keyCode) => _keys[keyCode] ?? false;
}

class Snake {
  // directions
  static const Point LEFT = Point(-1, 0);
  static const Point RIGHT = Point(1, 0);
  static const Point UP = Point(0, -1);
  static const Point DOWN = Point(0, 1);
}
