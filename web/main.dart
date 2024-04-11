import 'dart:html';
import 'dart:math';
import 'dart:collection';

const int CELL_SIZE = 10;
Keyboard keyboard = Keyboard();

CanvasElement? canvas;
CanvasRenderingContext2D? ctx;

void main() {
  canvas = querySelector('#canvas') as CanvasElement;
  ctx = canvas?.getContext('2d') as CanvasRenderingContext2D?;

  Snake snake = Snake();
  clear();
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
  // Directions
  static const Point LEFT = Point(-1, 0);
  static const Point RIGHT = Point(1, 0);
  static const Point UP = Point(0, -1);
  static const Point DOWN = Point(0, 1);

  // Start length
  static const int START_LENGTH = 6;

  // Body segments coordinates
  late List<Point> _body;

  // Current travel direction
  Point _dir = RIGHT;

  Snake() {
    int i = START_LENGTH - 1;
    _body = List<Point>.generate(START_LENGTH, (int index) => Point(i--, 0));
  }

  Point get head => _body.first;

  void _checkInput() {
    if (keyboard.isPressed(KeyCode.LEFT) && _dir != RIGHT) {
      _dir = LEFT;
    } else if (keyboard.isPressed(KeyCode.RIGHT) && _dir != LEFT) {
      _dir = RIGHT;
    } else if (keyboard.isPressed(KeyCode.UP) && _dir != DOWN) {
      _dir = UP;
    } else if (keyboard.isPressed(KeyCode.DOWN) && _dir != UP) {
      _dir = DOWN;
    }
  }

  void grow() {
    _body.insert(0, head + _dir);
  }

  void _move() {
    grow();
    _body.removeLast();
  }

  void _draw() {
    for (Point p in _body) {
      drawCell(p, "green");
    }
  }

  bool checkForBodyCollision() {
    for (Point p in _body.skip(1)) {
      if (p == head) {
        return true;
      }
    }
    return false;
  }

  void update() {
    _checkInput();
    _move();
    _draw();
  }
}
