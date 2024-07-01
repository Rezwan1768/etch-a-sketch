const INITIAL_GRID_SIZE = 16;
let gridSize = INITIAL_GRID_SIZE;
let gridSquares = [];

//----------------Grid Size Button---------------------
const gridSizeButton = document.querySelector(".grid-size");
gridSizeButton.addEventListener("click", changeSize)

// Allow user to chagne the size of the grid
function changeSize() {
    gridSize = +prompt("Enter grid size (max 100):", INITIAL_GRID_SIZE);
    if (gridSize > 100 || gridSize <= 10)
        gridSize = INITIAL_GRID_SIZE;
    removeGrid();
    generateGrid();
}

//----------------Reset Button---------------------
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetGrid);
function resetGrid() {
    gridSquares.forEach(div => div.classList.remove("color"))
}


const container = document.body.lastElementChild;
container.classList.add("container");

function generateGrid() {
    let totalGridSquares = gridSize * gridSize;
    for (let i = 0; i < totalGridSquares; ++i) {
        const div = document.createElement("div");
        div.classList.add("item");
        div.style.width = `calc((100% / ${gridSize}) - (${gridSize - 1}px  / ${gridSize}))`;
        // Change square color on hover, like a pen
        div.addEventListener("mouseenter", function () {
            div.classList.add("color");
        });
        gridSquares.push(div);
        container.appendChild(div);
    }
}

function removeGrid() {
    gridSquares.forEach(element => {
        container.removeChild(element);
    });

    gridSquares = [];
}

generateGrid();
