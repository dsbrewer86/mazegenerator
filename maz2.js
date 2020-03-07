var cols, rows;
var cellSize = 25;
var grid = [];
var count = 0;

function setup() {
  createCanvas(600, 600);
  background(50);

  cols = 500 / cellSize;
  rows = 500 / cellSize;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let cell = new Cell(i, j, cols, rows);

      grid.push(cell);
    }
  }

}


function Cell(i, j, cols, rows) {
  this.i = i;
  this.j = j;
  this.neighbors = {
    top: [],
    right: [],
    bottom: [],
    left: []
  };
  this.connected = {
    top: false,
    right: false,
    bottom: false,
    left: false,
  };
  this.visited = false;

if ((this.j - 1) >= 0) {

  this.neighbors.top = [this.i, this.j - 1];
}
else {
  this.neighbors.top = null;
}
if ((this.i + 1) <= cols) {
  this.neighbors.right = [this.i + 1,this.j];
}
else {
  this.neighbors.right = null;
}
if ((this.j + 1) <= rows) {
  this.neighbors.bottom = [this.i,this.j + 1];
}
else {
  this.neighbors.bottom = null;
}
if ((this.i - 1) >= 0) {
  this.neighbors.left = [this.i - 1,this.j];
}
else {
  this.neighbors.left = null;
}


  this.display = function() {

    let x = (this.i * cellSize) + 50;
    let y = (this.j * cellSize) + 50;




    if (!this.connected.top) {

      //top
      stroke(255);
      line(x,y, x + cellSize, y);
    } else {

      stroke(55);
      line(x,y, x + cellSize, y);
    }

    if (!this.connected.right) {
      //right
      stroke(255);
      line(x + cellSize,y, x + cellSize, y + cellSize);
    } else {

      stroke(55);
      line(x + cellSize,y, x + cellSize, y + cellSize);
    }

    if (!this.connected.bottom) {
      //bottom
      stroke(255);
      line(x,y + cellSize, x + cellSize, y + cellSize);
    } else {

      stroke(55);
      line(x,y + cellSize, x + cellSize, y + cellSize);

    }

    if (!this.connected.left) {
      //left
      stroke(255);
      line(x,y, x, y + cellSize);
    } else {

      stroke(55);
      line(x,y, x, y + cellSize);
    }

  }

}

function maze(x,y) {

  this.getLoc = function(x,y) {

    for (let i = 0; i < grid.length; i++){
      if (grid[i].i == x && grid[i].j == y) {
        return i;
      }
    }

  }

  let tries = [];
  let direction;






  let current = this.getLoc(x,y);
  let neighbors = {};

  if (grid[current].neighbors.top != null) {
    neighbors.top = this.getLoc(grid[current].neighbors.top[0], grid[current].neighbors.top[1]);
  } else {
    neighbors.top = null;
  }
  if (grid[current].neighbors.right != null) {
    neighbors.right = this.getLoc(grid[current].neighbors.right[0], grid[current].neighbors.right[1]);
  } else {
    neighbors.right = null;
  }
  if (grid[current].neighbors.bottom != null) {
    neighbors.bottom = this.getLoc(grid[current].neighbors.bottom[0], grid[current].neighbors.bottom[1]);
  } else {
    neighbors.bottom = null;
  }
  if (grid[current].neighbors.left != null) {
    neighbors.left = this.getLoc(grid[current].neighbors.left[0], grid[current].neighbors.left[1]);
  } else {
    neighbors.left = null;
  }




var allFour = [];

    while (allFour.length < 4) {

      direction = Math.floor(Math.random() * 4);
      switch (direction) {
        case 0:
          //top
          if (neighbors.top != null && !grid[neighbors.top].visited) {

            grid[neighbors.top].visited = true;
            grid[neighbors.top].connected.bottom = true;
            grid[current].connected.top = true;

            maze(grid[neighbors.top].i,grid[neighbors.top].j);

          }
          if (!allFour.includes(0)) {
            allFour.push(0);
          }
          break;
        case 1:
          //right
          if (neighbors.right != null && !grid[neighbors.right].visited) {
            grid[neighbors.right].visited = true;
            grid[neighbors.right].connected.left = true;
            grid[current].connected.right = true;

            maze(grid[neighbors.right].i,grid[neighbors.right].j)
          }
          if (!allFour.includes(1)) {
            allFour.push(1);
          }
          break;
        case 2:
          //bottom
          if (neighbors.bottom != null && !grid[neighbors.bottom].visited) {
            grid[neighbors.bottom].visited = true;
            grid[neighbors.bottom].connected.top = true;
            grid[current].connected.bottom = true;

            maze(grid[neighbors.bottom].i,grid[neighbors.bottom].j)
          }
          if (!allFour.includes(2)) {
            allFour.push(2);
          }
          break;
        case 3:
          //left
          if (neighbors.left != null && !grid[neighbors.left].visited) {
            grid[neighbors.left].visited = true;
            grid[neighbors.left].connected.right = true;
            grid[current].connected.left = true;

            maze(grid[neighbors.left].i,grid[neighbors.left].j)
          }
          if (!allFour.includes(3)) {
            allFour.push(3);
          }
          break;
        default:

      }

    }

    return;

  }


var once = 0;
var twice = 0;
function draw() {

if (once < 1) {


let xStrt = Math.floor(Math.random() * cols);
let yStrt = Math.floor(Math.random() * rows);

console.log(xStrt + " - " + yStrt);
  maze(xStrt,yStrt);
  once++
  for (let i = 0; i < grid.length; i++) {
    grid[i].display();
  }


}




}
