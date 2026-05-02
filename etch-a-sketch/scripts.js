function generateGrid(x, y) {
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