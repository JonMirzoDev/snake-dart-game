import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'dart:collection';

const int CELL_SIZE = 10;
Keyboard keyboard = Keyboard();
late Game game;

CanvasElement? canvas;
CanvasRenderingContext2D? ctx;
DivElement? scoreDisplay; // Element to display the score

void main() {
  canvas = querySelector('#canvas') as CanvasElement?;
  canvas?.focus();
  ctx = canvas?.getContext('2d') as CanvasRenderingContext2D?;

  game = Game();
  game.run();
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

class Game {
  // smaller numbers make the game run faster
  static const num GAME_SPEED = 60;
  num _lastTimeStamp = 0;

  // a few convenience variables to simplify calculations
  late int _rightEdgeX;
  late int _bottomEdgeY;

  late Snake _snake;
  late Point _food;

  Game() {
    _rightEdgeX = canvas!.width! ~/ CELL_SIZE;
    _bottomEdgeY = canvas!.height! ~/ CELL_SIZE;

    init();
  }

  void init() {
    _snake = Snake();
    _food = _randomPoint();
  }

  Point _randomPoint() {
    Random random = Random();
    return Point(random.nextInt(_rightEdgeX), random.nextInt(_bottomEdgeY));
  }

  void _checkForCollisions() {
    if (_snake.head == _food) {
      _snake.grow();
      _food = _randomPoint();
    }

    if (_snake.head.x <= -1 ||
        _snake.head.x >= _rightEdgeX ||
        _snake.head.y <= -1 ||
        _snake.head.y >= _bottomEdgeY ||
        _snake.checkForBodyCollision()) {
      init(); // Restart the game
    }
  }

  Future<void> run() async {
    update(await window.animationFrame);
  }

  void update(num delta) {
    final num diff = delta - _lastTimeStamp;

    if (diff > GAME_SPEED) {
      _lastTimeStamp = delta;
      clear();
      drawCell(_food, "blue");
      _snake.update();
      _checkForCollisions();
    }

    // Request the next animation frame to continue the loop
    run();
  }
}
