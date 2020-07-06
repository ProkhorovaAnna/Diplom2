//создаем игровое поле

let canvas = document.createElement('canvas');
let cells = [];
let cellSize = 35;
let ctx = canvas.getContext('2d');
let field = new game();

let newGame = document.querySelector('#newGame');
let mixItems = [];

let mouseTarget; // экранный объект, находящийся в данный момент под мышью или перетаскиваемый
let dragStarted;	// указывает, находимся ли мы в данный момент в операции перетаскивания
let offset;
let update = true;

function drawField() {
  let canvas = document.querySelector('canvas');
  let ctx = canvas.getContext('2d');
  //поле
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let canvasWidth = 525;
  let canvasHeigth = 525;
  canvas.width = canvasWidth;
  canvas.height = canvasHeigth;
  let cellWidth = 35;
  let cellHeight = 35;
  let cellsInRow = Math.floor(canvasWidth / cellWidth);
  let cellsInColomn = Math.floor(canvasHeigth / cellHeigth);
  for (var top = 0; top < canvasWidth; top += cellWidth) {
    for (var left = 0; left < canvasHeight; left += cellHeight) {
      var cell = {
        top: top,
        left: left,
        solid: false,
        // аргумент говорит о том каким цветом закрашивать клетку. Предполагается что у клетки может быть 2 цвета. 
        fill: function (solid) {
          // запоминаем состояние закрашенности клетки
          this.solid = solid
          context.fillStyle = solid ? '#000' : '#fff';
          context.fillRect(this.top, this.left, cellWidth,cellHeight);
        },
        drawBorder: function () {
          context.beginPath();
          context.strokeStyle = 'yellow';
          context.moveTo(this.top - 0.5, this.left - 0.5)
          context.lineTo(this.top - 0.5, this.left + cellWidth - 0.5)
          context.lineTo(this.top + cellHeight - 0.5, this.left + cellWidth - 0.5)
          context.lineTo(this.top + cellHeight - 0.5, this.left - 0.5)
          context.lineTo(this.top - 0.5, this.left - 0.5)
          context.stroke()
        },
        getTop: function () {
          return this.top
        },
        getLeft: function () {
          return this.left
        }
      }
      cells.push(cell)
      cell.fill(true)
      cell.drawBorder()
    }
  }
  
  function getCellByPosition(top, left) {
    var topIndex = Math.floor(top / cellHeight) * cellsInRow
    var leftIndex = Math.floor(left / cellWidth)
    return cells[topIndex + leftIndex]
  }
  
  // Взаимодействие
  var filling = false
  
  function fillCellAtPositionIfNeeded(x, y, fillingMode) {
    var cellUnderCursor = getCellByPosition(x, y)
    if (cellUnderCursor.solid !== fillingMode) {
      cellUnderCursor.fill(fillingMode)
    }
    cell.drawBorder()
  }
}

function init() {
	// создание уровня и наведение его на холст
	canvas = document.getElementById('canvas');
  stage = new createjs.Stage(canvas);

  // включить сенсорное взаимодействие
  createjs.Touch.enable(stage);
  
  // включить наведение курсора мыши на фигуру
	stage.enableMouseOver(10);
  stage.mouseMoveOutside = true; // отслеживание мыши, даже когда она покидает холст
  

  //массив фигур для игрового поля (круг, треугольник, прямоугольник, звездочка)
  let figures = ['circle', 'triangle', 'square', 'star'];

  // круг
	let circle = new Image();
	circle.src = 'img/circle.png';
  circle.onload = handleImageLoad;

  // треугольник
	let triangle = new Image();
	triangle.src = 'img/triangle.png';
  triangle.onload = handleImageLoad;

  // квадрат
  let square = new Image();
	square.src = 'img/square.png';
  square.onload = handleImageLoad;

  // звездочка
  let star = new Image();
	star.src = 'img/star.png';
  star.onload = handleImageLoad;

}

//функции для отрисовки фигур на игровом поле
function drawCIR(x,y) {
  context.drawImage(circle,x,y);
}

function drawTRIA(x,y) {
  context.drawImage(triangle,x,y);
}

function drawSQU(x,y) {
  context.drawImage(square,x,y);
}

function drawSTAR(x,y) {
  context.drawImage(star,x,y);
}


function stop() {
  createjs.Ticker.removeEventListener('tick', tick);
}

function handleImageLoad(event) {
	let image = event.target;
	let bitmap;
	let container = new createjs.Container();
  stage.addChild(container);
}
  // загрузить изображение фигур:
function drawBoard() {
    let container = document.querySelector('div.canvas');
    let Square;
    let flag = true;
  for (let i = 0; i < 15; i++) {
    push(figures[Math.floor(Math.random()*figures.length)]);
      for (let j = 0; j <= 15; j++) {
          Square = document.createElement('div.canvas');
              Square.className = 'Square blue';
      }
  }
}

    
// использование параметра ON- выполняет в области действия кнопки
bitmap.on("mousedown", function (evt) {
	this.parent.addChild(this);
	this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
});
    
// событие отправляется, когда мышь перемещается на целевой объект, пока мышь не будет отпущена
bitmap.on("pressmove", function (evt) {
	this.x = evt.stageX + this.offset.x;
	this.y = evt.stageY + this.offset.y;
	// этот этап обновляется на следующем тике
	update = true;
});
    
// опрокидывание
bitmap.on("rollover", function (evt) {
	this.scale = this.originalScale * 1.2;
	update = true;
});
    
// выкатка
bitmap.on("rollout", function (evt) {
	this.scale = this.originalScale;
	update = true;
});

examples.hideDistractor();
createjs.Ticker.addEventListener("tick", tick);



//цикл игры, который постоянно обновляет и отображает игру. 
let lastTime;
function main() {
  let now = Date.now();
  let dt = (now - lastTime) / 1000.0;

  update(dt);
  render();

  lastTime = now;
  requestAnimFrame(main);
};


function tick(event) {
	// этап отображается повторно, когда обработчик событий указывает, что произошло изменение
	if (update) {
		update = false; // only update once
		stage.update(event);
	}
}



//размер ячейки
let box = 35;

//общий счет в игре
let score = 0;


function move(data) {
  empty = mixItems.indexOf(225);
    switch(e.keyCode)
    {
        case '1': //Влево
        keyLeft();
        break;
 
        case '2': //Вправо
        keyRight();
        break;
 
        case '3': //Вверх
        keyUp();
        break;
 
        case '4': //Вниз
        keyDown();
        break;
    }
}

function keyDown() {
  if (empty < 15) return;
  mixItems[empty] = mixItems[empty - 15];
  mixItems[empty - 15] = 225;
  getScore();
}

function keyUp() {
  if (empty > 15) return;
  mixItems[empty] = mixItems[empty + 15];
  mixItems[empty + 15] = 225;
  getScore();
}

function keyLeft() {
  if ((empty % 15) == 14) return;
  mixItems[empty] = mixItems[empty + 1];
  mixItems[empty + 1] = 225;
  getScore();
}
 
function keyRight() {
  if (empty % 15 == 0) return;
  mixItems[empty] = mixItems[empty - 1];
  mixItems[empty - 1] = 225;
  getScore();
}

function Resize()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

