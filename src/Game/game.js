
export const ships = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

export const comp = 'Comp';

export const createEmptyCell = (x, y, id, isShipVisible) => { // Create empty ceil
   
    return {
        hasShip: false,
        x,
        y,
        id,
        shooted: false,
        isShipVisible
    }

};

export const random = (num) => {
    return Math.floor(Math.random() * num);
};

export const createEmptyField = (isShipVisible) => { // Create empty field
    let field = [], id = 0;

    for (let y = 0; y < 10; y++) {

        for (let x = 0; x < 10; x++) {

            field.push(createEmptyCell(x, y, id, isShipVisible));
            id += 1;

        }

    }
    return field;
};

export const chooseVerticalOrientation = () => random(100) > 50 ? true : false;

export const chooseRandomCellId = () => random(100);

export const cloneField = (field) => field.map(cell => ({...cell})); // create deep copy of field

export const placeShip = (field, shipLength) => {
    const isVertical = chooseVerticalOrientation();
    let initId = chooseRandomCellId();
    let newField = cloneField(field);

    let length = shipLength;
    let canPlace = true;

    let initX = field[initId].x;
    let initY = field[initId].y;

    let startRangeX = initX - 1 < 0 ? 0 : initX - 1;
    let startRangeY = initY - 1 < 0 ? 0 : initY - 1;
    let finishRangeX , finishRangeY;
    
    if (isVertical) {

        if ( startRangeY + shipLength > 9 ) { // The ship does not fit vertically
            return placeShip(field, shipLength);
        }

        finishRangeX = initX + 1 > 9 ? 9 : initX + 1;
        finishRangeY = initY + shipLength > 9 ? 9 : initY + shipLength;
    } else {
        if ( startRangeX + shipLength > 9 ) { // The ship does not fit horizontally
            return placeShip(field, shipLength);
        }
        finishRangeX = initX + shipLength > 9 ? 9 : initX + shipLength;
        finishRangeY = initY + 1 > 9 ? 9 : initY + 1;
    }

    // Next, we check whether the ship will be in contact with other ships
    for (let y = startRangeY; y <= finishRangeY; y++ ) {

        for (let x = startRangeX; x <= finishRangeX; x++) {
            
            let id = y * 10 + x;

            if ( field[id].hasShip ) {
                canPlace = false;
            }
        }
    }

    if ( !canPlace ) {
        return placeShip(field, shipLength);
    }

    let placeId = initId;

    // place the ship further
    if ( isVertical ) {
        do {
            newField[placeId].hasShip = true;

            placeId += 10; // Vertically, the cell number must be increased by 10

            length -= 1;

        } while ( length > 0 )

    } else {
        do {          
            newField[placeId].hasShip = true;
    
            placeId += 1; // По горизонтали номер клетки нужно увеличивать на 1
    
            length -= 1;
    
        } while ( length > 0 )
    }
    
    return newField;
};

export const fillField = (field, ships) => {
  
    if (ships.length === 0) { // All ships are placed, return the completed field
        return field;
    }
    const shipLength = ships[0];
    
    // Place the ship
    const newField = placeShip(field, shipLength);

    const newShips = ships.slice(1); // Remove this ship from the array
    
    return fillField(newField, newShips);
};

// const countShips = (field) => field.filter(cell => cell.hasShip === true).length;

// const shipsCellsIds = field => JSON.stringify(field.filter(cell => cell.hasShip === true));