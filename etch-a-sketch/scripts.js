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

function paintCell(cell, color="random") {
    if (color === "random") {
        const r = Math.random() * 255
        const g = Math.random() * 255
        const b = Math.random() * 255

        color = `rgb(${r}, ${g}, ${b})`
    }

    cell.style.backgroundColor = color;
};

function decreaseOpacity(element, amount=0.1) {
    let style = element.style
    if(style.opacity  === "") {
        style.opacity  = 1;
    }

    style.opacity  -= amount;
}

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

function getGridSize(grid) {
    if (!grid) {return undefined};

    const row = grid.querySelector(".row");
    if (!row) {return undefined};

    const x = row.childElementCount;
    const y = grid.childElementCount;

    return [x, y]
};


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    container.append(generateGrid(10, 10));

    container.addEventListener('mouseover', (event) => {

        const target = event.target;

        if (target.classList.contains("cell")) {
            paintCell(target, "random");
            decreaseOpacity(target);
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

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener('click', () => {
    const grid = document.querySelector('.grid');
    const gridSize = getGridSize(grid);
    const x = gridSize[0];
    const y = gridSize[1];


    regenerateGrid(x, y);
})
