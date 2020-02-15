import React from 'react';

export default function Cell(props) {
    const { x, y, hasShip, shooted, isShipVisible } = props;

    debugger

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const letters = ['Р', 'Е', 'С', 'П', 'У', 'Б', 'Л', 'И', 'К', 'А'];

    const leftLine = (x === 0) ? true : false;
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
        <div className={`cell ${hasShip && isShipVisible ? 'visibleShip' : ''}`} onClick={props.onClick}>
            <div className="marker">{marker}</div>
            {leftLine ? <span className="leftLine">{numbers[y]}</span> : ''}
            {topLine ? <span className="topLine">{letters[x]}</span> : ''}
        </div>
    )
};