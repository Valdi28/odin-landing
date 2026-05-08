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

function paintCell(cell, color) {
    cell.style.backgroundColor = color;
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


