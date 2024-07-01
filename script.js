const INITIAL_GRID_SIZE = 16;
let gridSize = INITIAL_GRID_SIZE;

const button = document.querySelector("button");
button.addEventListener("click", handleButtonClick)

// Allow user to chagne the size of the grid
function handleButtonClick() {
    gridSize = +prompt("Enter grid size (max 100):", INITIAL_GRID_SIZE);
    if (gridSize > 100 || gridSize <= 10)
        gridSize = INITIAL_GRID_SIZE;
    removeGrid();
    generateGrid();
}


const container = document.querySelector("div");
container.classList.add("container");


let gridSquares = [];
function generateGrid() {
    let totalGridSquares = gridSize * gridSize;
    for (let i = 0; i < totalGridSquares; ++i) {
        const div = document.createElement("div");
        div.classList.add("item");
        div.style.width = `calc((100% / ${gridSize}) - (${gridSize - 1}px  / ${gridSize}))`;
        // Change square color on hover, like a pen
        div.addEventListener("mouseenter", function () {
            div.style.backgroundColor = "blue";
            // div.classList.add("color")
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
