import React from 'react';
import Field from './Field.js';
import { comp } from '../Game/game.js';

export default function Fields(props) {
   
    return (
        <div className='fields' >
            <Field whose={props.playerName} field={props.playerField} />
            <Field whose={comp} field={props.compField} shoot={id => props.shoot(id)} />
        </div>
    )
};