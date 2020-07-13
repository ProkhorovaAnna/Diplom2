function drawBoard() {
  let container = document.querySelector(".container");
  let field;
  for (let i = 0; i < 100; i++) {
    field = document.createElement("div");
    field.classList.add("cell");
    field.classList.add("cell" + i);
    container.appendChild(field);
  }
}

drawBoard();


function randomFigure() {

  for (i = 0; i < 100; i++) {
    let figureNumber = Math.floor(Math.random() * Math.floor(4));

    switch (figureNumber) {
      case 0:
        document.querySelector(".cell" + i).setAttribute('style','background-image: url(img/circle.png); background-repeat: no-repeat; background-size: cover;');
        break;
      case 1:
        document.querySelector(".cell" + i).setAttribute('style','background-image: url(img/square.png); background-repeat: no-repeat; background-size: cover;');
        break;
      case 2:
        document.querySelector(".cell" + i).setAttribute('style','background-image: url(img/star.png); background-repeat: no-repeat; background-size: cover;');
        break;
      case 3:
        document.querySelector(".cell" + i).setAttribute('style','background-image: url(img/triangle.png); background-repeat: no-repeat; background-size: cover;');
        break;
    }
  }
}

randomFigure();

let cells = document.querySelectorAll(".cell");
for (let cell of cells) {
	cell.addEventListener("click", function (e) {
    e.target.classList.toggle("borderClick");
  });
}
/*
// обрабатываем нажатие по клавиатуре
function keyboardEvent(e) {
  switch(e.keyCode) {
      case 5: key('up');    break;
      case 6: key('down');  break;
      case 7: key('left');  break;
      case 8: key('right'); break;
  }
  checkWin();
}

/*$(function(){
  jQuery.fn.swap = function(b) {
    b = jQuery(b)[0];
    var a = this[0],
        a2 = a.cloneNode(true),
        b2 = b.cloneNode(true),
        stack = this;

    a.parentNode.replaceChild(b2, a);
    b.parentNode.replaceChild(a2, b);

    stack[0] = a2;
    return this.pushStack( stack );
};

$('button').on('click', function(){
  $('.left').swap('.right');
});
  });
/*window.onload = function(){
  let c1 = document.getElementById("cell1");
  let c2 = document.getElementById("cell2");
  c1.parentNode.insertBefore(c2, c1);
}
/* Клик Мыши по клетке
choose cell
field.onclick = function(event) {
  if (event.target.tagName != "cell") return;

  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }

}

// предотвращает ненужное выделение элементов поля при клике
field.onmousedown = function() {
  return false;
};

function toggleSelect(cell) {
  cell.classList.toggle('selected');
}

function singleSelect(cell) {
  let selected = field.querySelectorAll('.selected');
  for(let elem of selected) {
    elem.classList.remove('selected');
  }
  cell.classList.add('selected');
}



// обрабатываем сдвиг одной клетки по направлениям up/down/left/right
function key( type ) {
  for(let a = 1; a <= 10; a++)
      for(let b = 1; b <= 9; b++) {
          switch( type ) {
              case 'up':
                  let from = 'x'+a+'y'+(b+1);
                  let to   = 'x'+a+'y'+b;
                  break;
              case 'down':
                  let from = 'x'+a+'y'+(10-b);
                  let to   = 'x'+a+'y'+(11-b);
                  break;
              case 'left':
                  let from = 'x'+(b+1)+'y'+a;
                  let to   = 'x'+b+'y'+a;
                  break;
              case 'right':
                  let from = 'x'+(10-b)+'y'+a;
                  let to   = 'x'+(11-b)+'y'+a;
                  break;
          }
          if( !$('.'+to).length ) {$('.'+from).removeClass(from).addClass(to);return}
      }
}

if (i & i+1 & i-1) = ("cell" + i) of case1 each or case2 each or case3 each or case4 each => delete & score + 10;

//общий счет в игре
let score = 0;
// создаем игровое поле 10 на 10 клеток(10 строк и 10 столбиков)
/* function drawBoard() {
    let container = document.querySelector("div.container");
    let field;
    let cell = true;
    for (let i = 0; i <= 9; i++)
    { for (let j = 0; j <= 9; i++)
        { 
          if (j == 0)
            cell = !cell;
            field = document.createElement("div");
            if (cell)
            field.className = "field goal";
            else
            field.className = "field goal";
            container.appendChild(field);
            cell = !cell;
          }
          
        }
       
      }

drawBoard();  */
// сщздаем игровое поле с использованием массива (по его длине получаем строку дивов в контейнере)
/*  let chessWrap = document.querySelector(".container");

    let i = 0,
      count = 0;

      let field = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]; 

    while (count < field.length) {
      let item = document.createElement("div");
      chessWrap.appendChild(item);
      item.classList.add("cell");

      i += ((i + 2) % 9) ? 1 : 2;
      count++;
    }

class cell {
  constructor(classCell, classFigures) {
    this.classCell = classCell;
    this.classFigures = function Figures() {
      this.figures = ["circle", "triangle", "square", "star"];
      this.add = function getRandomInt(){
          this.Figures.push(figures[Math.floor(Math.random()*figures.length)]);}};
  }
}

/*массив фигур для игрового поля (круг, треугольник, прямоугольник, звездочка)
function Figures() {
  this.figures = ["circle", "triangle", "square", "star"];
  this.add = function getRandomInt(){
      this.figures.push(figures[Math.floor(Math.random()*figures.length)]);}}*/

// круг
/*  let circle = new Image();
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

// появление в массиве клеток поля случайных фигур из массива фигур
/* Рандомная функция: function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; } */
/*function getRandomInt(){
for (i = 0; i <= field.length; i++) {
  cell.push(figures[Math.floor(Math.random()*figures.length)]);}
let item = document.querySelector("figures");
chessWrap.appendChild(item);
item.classList.add("figures");}*/
//ЭТО НЕПРАВИЛЬНО. ПОКА НЕ МОГУ ПОНЯТЬ

// включить сенсорное взаимодействие
/* createjs.Touch.enable(stage);
  
// включить наведение курсора мыши на фигуру
stage.enableMouseOver(10);
stage.mouseMoveOutside = true; // отслеживание мыши, даже когда она покидает холст

//цикл игры, который постоянно обновляет и отображает игру. 
let lastTime;
function main() {
  let now = Date.now();
  let dt = (now - lastTime) / 1000.0;

  update(dt);
  render();

  lastTime = now;
  requestAnimFrame(main);
}
*/