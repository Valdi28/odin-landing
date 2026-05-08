function generateGrid(x, y) {
    if (x > 100 || y > 100) {return};
    if (x < 0 || y < 0) {return};


    const grid = document.createElement('div');
    grid.classList.toggle('grid');

    for (let i = 0; i < y; i++) {
        const row = document.createElement('div');
        row.classList.toggle('row')

        for (let j = 0; j < x; j++) {
            const cell = document.createElement('div');
            cell.classList.toggle('cell');

            row.append(cell);
        };

        grid.append(row);

    };

    return grid;
};

function regenerateGrid(x, y) {
    const thereIsAGrid = checkIfThereIsAGrid();
    const container = document.querySelector('.container')

    if (thereIsAGrid) {
        const grid = document.querySelector(".grid");
        grid.remove();
    }

    container.appendChild(generateGrid(x, y));
}

function paintCell(cell, color) {
    cell.style.backgroundColor = color;
};

function checkIfThereIsAGrid() {
    const grid = document.querySelector(".grid");

    if (grid) {
        return true;
    } else {
        return false;
    };
};

function getGridSizeInput() {
    const xValue = document.querySelector(".xValue");
    const yValue = document.querySelector(".yValue");

    const x = Number(xValue.value);
    const y = Number(yValue.value);

    if (!x || !y) {
        return undefined
    };

    return [x, y];
};

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    container.append(generateGrid(10, 10));

    container.addEventListener('mouseover', (event) => {

        const target = event.target;

        if (target.classList.contains("cell")) {
            paintCell(target, "#000");
        };
        
    
    });
});


const generateBtn = document.querySelector('.generateBtn');
generateBtn.addEventListener('click', () => {
    const gridSize = getGridSizeInput();
    const x = gridSize[0];
    const y = gridSize[1];

    if (!gridSize) {return};
    
    regenerateGrid(x, y);
});

