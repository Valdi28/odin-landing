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

const container = document.querySelector('.container')

document.addEventListener('DOMContentLoaded', () => container.append(generateGrid(100, 100)))