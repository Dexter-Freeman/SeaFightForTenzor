import React from 'react';
import Cell from './Cell.js';

export default function Field(props) {

    return (
        <div className='field' >

            <div>
            {
                props.field.map(cell => <Cell
                    x={cell.x}
                    y={cell.y}
                    id={cell.id}
                    key={cell.id}
                    hasShip={cell.hasShip}
                    shooted={cell.shooted}
                    isShipVisible={cell.isShipVisible}
                    shoot={props.shoot ? id => props.shoot(cell.id) : () => {}}
                />)
            }
            </div>

            <div className='field-name' >
                <span>{props.whose}</span>
            </div>
        </div>
    )
};