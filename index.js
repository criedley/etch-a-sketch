const grid = document.querySelector(".grid");

let gridSize = 16;

function createGrid (gridSize) {
    // Create <gridSize> amount of rows
    for (let i = 0; i < gridSize; i++) {
        newRow = document.createElement("div");
        newRow.classList.add('gridRow')

        // Create <gridSize amount of gridSquares in each gridRow
        for (let j = 0; j < gridSize; j++) {
            newGridSquare = document.createElement("div");
            newGridSquare.classList.add('gridSquare');
            newRow.appendChild(newGridSquare);
        }
        grid.appendChild(newRow);
    }
}

createGrid(gridSize);