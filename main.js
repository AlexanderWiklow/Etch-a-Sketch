

const button = document.getElementById('button');
let userNum = 0;
let num1 = 16;


const container = document.getElementById("grid-container");

function random(number) {
    return Math.floor(Math.random() * number + 1);
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", function bgChange() {
        const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
        cell.style.backgroundColor = rndCol;
    })
  };
};

// =====================================
// Button functions:

// button.onclick = function();

// document.getElementById("button").onclick = function() {changeColor()};

// function changeColor() {
//     document.getElementById("button").style.backgroundColor = "red";
// }
// makeRows(num1,num1);
// document.getElementById("button").onClick = function() {makeRows(0,0)};
makeRows(16, 16);

document.getElementById("button").onclick = function() {askNum()};

function askNum() {
    userNum = prompt("Enter a number for the square:");
    size = parseInt(userNum);
    // makeRows(0,0);
    // return num1;
    // makeRows(num1, num1);

    // size = prompt("Enter a value between 0 to 101");
    container.innerHTML = "";
    if (0 < size && size <= 100) {
        makeRows(size, size);
    } else {
        makeRows(16, 16);
        alert ("Only type values between 1 to 100");
    }

}

// Clear current grid

// alert ask the user for the number of squares per side for the new grid

// Should remain e.g. 960px wide. 

// Set limit of 10. 

// =====================================

// makeRows(16, 16);

// document.querySelector("grid-item").onmouseover = function() {mouseOver()};

// function mouseOver() {
//     document.querySelector("grid-item").style.color = "red";
// }

// document.getElementsByClassName("grid-item").onmouseover = function() {mouseOver()};
// document.getElementsByClassName("grid-item").onmouseout = function() {mouseOut()};

// function mouseOver() {
//   document.getElementsByClassName("grid-item").style.color = "red";
// }

// function mouseOut() {
//   document.getElementsByClassName("grid-item").style.color = "black";
// }

// var Button=document.getElementById(cell);
// /* Clear all previous hover classes */
// Button.classList.remove('HoverClass1','HoverClass2');
// /* Set the desired hover class */
// Button.classList.add('HoverClass1');