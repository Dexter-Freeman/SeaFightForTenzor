
export const ships = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

export const comp = 'Comp';
export const player = 'Player'

export const createEmptyCell = (x, y, id, whose) => { // Create empty ceil
    if (whose === player) {
        return {
            hasShip: false,
            x,
            y,
            id,
            shooted: false,
            isShipVisible: true,
            className: 'cell'
        }
    }

    return {
        hasShip: false,
        x,
        y,
        id,
        shooted: false,
        isShipVisible: false,
        className: 'cell'
    }

};

export const random = (num) => {
    return Math.floor(Math.random() * num);
};

export const createEmptyField = (whose) => { // Create empty field
    let field = [], id = 0;

    for (let y = 0; y < 10; y++) {

        for (let x = 0; x < 10; x++) {

            field.push(createEmptyCell(x, y, id, whose));
            id += 1;

        }

    }
    return field;
};

export const chooseVerticalOrientation = () => random(100) > 50 ? true : false;

export const chooseRandomCellId = () => random(100);

    // console.log(`chooseRandomCellId - id - ${id}`);


export const cloneField = (field) => field.map(cell => ({...cell})); // create deep copy of field

export const placeShip = (initialField, newField, shipLength, cellId, length, isVertical) => {

    // console.log(`start placeShip`);
    // // console.log(`initialField - ${JSON.stringify(initialField)}`);
    // console.log(`newField - ${JSON.stringify(newField)}`);
    // console.log(`shipLength - ${JSON.stringify(shipLength)}`);
    // console.log(`cellId - ${JSON.stringify(cellId)}`);
    // console.log(`length - ${JSON.stringify(length)}`);
    // console.log(`isVertical - ${JSON.stringify(isVertical)}`);

    if (newField[cellId].hasShip === true) { // New attempt
            // console.log(`newField[cellId].hasShip == true  - // New attempt`);
        return placeShip(initialField, cloneField(initialField), shipLength, chooseRandomCellId(), shipLength, chooseVerticalOrientation());
    } else {
            // console.log(`newField[cellId].hasShip == false`);
        newField[cellId].hasShip = true; // Occupy the cell
        const restLength = length - 1; // Reduce the length
            // console.log(`restLength = ${restLength}`);
        if (restLength === 0) {
                // console.log(`restLength = ${restLength} - return newField`);
                // console.log(`${JSON.stringify(newField)}`);
            return newField; // Все палубы корабля расставлены, возвращаем новое поле

        } else {
            if (isVertical) {
                    // console.log(`isVertical = ${isVertical}`);
                const x = newField[cellId].x; // Координата Х следующей ячейки
                    // console.log(`x = ${x}`);
                const nextY = newField[cellId].y + 1; // Координата Y следующей ячейки
                    //  console.log(`nextY = ${nextY}`);
                if (nextY > 9) { // Такой ячейки не существует. Пробуем снова
                        // console.log(`nextY = ${nextY}  // Такой ячейки не существует. Пробуем снова ------------------`);
                    return placeShip(initialField, cloneField(initialField), shipLength, chooseRandomCellId(), shipLength, chooseVerticalOrientation());
                }
                 
                const newCellId = newField.findIndex(cell => cell.x === x && cell.y === nextY); // id следующей ячейки
                    // console.log(`newCellId = ${newCellId}`);
                return placeShip(initialField, cloneField(newField), shipLength, newCellId, restLength, isVertical);
            } else {
                // console.log(`isVertical = ${isVertical}`);
                const y = newField[cellId].y; // Координата Y следующей ячейки
                    // console.log(`y = ${y}`);
                const nextX = newField[cellId].x + 1; // Координата Х следующей ячейки
                    //  console.log(`nextX = ${nextX}`);
                if (nextX > 9) { // Такой ячейки не существует. Пробуем снова
                        // console.log(`nextX = ${nextX}  // Такой ячейки не существует. Пробуем снова -------------`);
                    return placeShip(initialField, cloneField(initialField), shipLength, chooseRandomCellId(), shipLength, chooseVerticalOrientation());
                }
                 
                const newCellId = newField.findIndex(cell => cell.x === nextX && cell.y === y); // id следующей ячейки
                    // console.log(`newCellId = ${newCellId}`);
                return placeShip(initialField, cloneField(newField), shipLength, newCellId, restLength, isVertical);
            }
        };
    }
};

// console.log(`Plase ship 4 length -----------------------------`);
// placeShip(createEmptyField(), createEmptyField(), 4, 92, 4, true);

// const countShips = (field) => field.filter(cell => cell.hasShip === true).length;

// const shipsCellsIds = field => JSON.stringify(field.filter(cell => cell.hasShip === true));


export const fillField = (field, ships) => {
    // console.log(`start fillField  --- ships - ${ships.length}`);
    // console.log(`countShips  --- ships - ${countShips(field)}`);
    if (ships.length === 0) { // All ships are placed, return the completed field
        // console.log(`ships.length == 0 ------ return field`)
        return field;
    }
    const shipLength = ships[0];
    // console.log(`shipLength  ---  ${shipLength}`);
    // console.log(`// Place the ship`);
    // Place the ship
    const newField = placeShip(field, cloneField(field), shipLength, chooseRandomCellId(), shipLength, chooseVerticalOrientation());

    const newShips = ships.slice(1); // Remove this ship from the array
    // console.log(`return fillField(newField, newShips);`);
    return fillField(newField, newShips);
};

// console.log(`fillField  ---  ${fillField(createEmptyField(), ships)}`);

// const field = fillField(createEmptyField(), ships);
// console.log(`shipsCellsIds ------  ${shipsCellsIds(field)}`)
// console.log(`field str 137  - ${JSON.stringify(field)}`);


// console.log(`emptyCeil - ${JSON.stringify(createEmptyCeil(1, 1))}`);
// console.log(`emptyField - ${JSON.stringify(createEmptyField())}`);
// console.log(`vertical - ${chooseVerticalOrientation()}`)