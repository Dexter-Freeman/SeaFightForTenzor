import React from 'react';

export default function Cell(props) {
    const { x, y, hasShip, shooted, isShipVisible, shoot } = props;

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const letters = ['Р', 'Е', 'С', 'П', 'У', 'Б', 'Л', 'И', 'К', 'А'];

    const leftColumn = (x === 0) ? true : false;
    const topLine = (y === 0) ? true : false;

    let marker;


    if (hasShip) {
        if (shooted) {
            marker = 'X';
        } else {
            marker = '';
        }
    } else {
        if (shooted) {
            marker = '·';
        } else {
            marker = '';
        }
    }
    return (
        <div className={`cell ${hasShip && isShipVisible ? 'visibleShip' : ''}`} onClick={shoot} >
            <div className="marker">{marker}</div>
            {leftColumn ? <span className="leftColumn">{numbers[y]}</span> : ''}
            {topLine ? <span className="topLine">{letters[x]}</span> : ''}
        </div>
    )
};