
const ships = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

const createEmptyCell = (x, y, id) => { // Create empty ceil

    return {
        hasShip: false,
        x: x,
        y: y,
        id,
        shooted: false,
        className: 'ceil'
    }

};

const random = (num) => {
    return Math.floor(Math.random() * num);
};

const createEmptyField = () => { // Create empty field
    let field = [], id = 0;

    for (y = 0; y < 10; y++) {

        for (x = 0; x < 10; x++) {

            field.push(createEmptyCell(x, y, id));
            id += 1;

        }

    }
    return field;
};

const chooseVerticalOrientation = () => random(100) > 50 ? true : false;

const chooseRandomCellId = () => { 
    const id = random(100);
    console.log(`id - ${id}`);
    return id;
};

const fillField = (field, ships) => {

    if (ships.length == 0) {
        return field;
    }

    let newField = field.map(cell => ({...cell})); // create deep copy of field
    let  shipLength = ships[0];
    const isVerticalShip = chooseVerticalOrientation();
    const startCellId = chooseRandomCellId(); // Ship's starting cell
    let xCoord = newField[startCellId].x;
    let yCoord = newField[startCellId].y;

    const fitShip = (field, shipLength, isVertical, cellId) => {
        if (shipLength == 0) {
            return field;
        }
        let cellsForShip = [];
        cellsForShip.push(field[startCellId]);
        shipLength -= 1;
        let nex
    };

    const f = (initialField, newField, shipLength, startCellId, cellId, isVertical) => {
        if (shipLength == 0 ) {
            return newField;
        }

        if (newField[cellId].hasShip) {
            return f(initialField, )
        }
    };
    

    // const willTheShipFit = (shipLength, isVertical)

    if (newField[startCellId].hasShip) {
        return fillField(field, ships);
    } else {
        newField[startCellId].hasShip = true;
        shipLength -= 1;

    }

    // разместить корабль
    // if (isVertical) {

    // }

}


// console.log(`emptyCeil - ${JSON.stringify(createEmptyCeil(1, 1))}`);
// console.log(`emptyField - ${JSON.stringify(createEmptyField())}`);
// console.log(`vertical - ${chooseVerticalOrientation()}`)