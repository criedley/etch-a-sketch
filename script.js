const grid = document.querySelector('.grid');

let gridSize = 16;

function createGrid (gridSize) {
    let gridHeight = document.querySelector('.grid').offsetHeight;
    let elementSize = gridHeight / gridSize - 2;
    
    for (let rows = 0; rows < gridSize; rows++) {
        for (let cols = 0; cols < gridSize; cols++) {
            const gridElement = document.createElement('div');
            gridElement.classList.add('gridElement');
            gridElement.style.height = `${elementSize}px`;
            gridElement.style.width = `${elementSize}px`;
            grid.appendChild(gridElement);
        }
    }
}

createGrid(gridSize);