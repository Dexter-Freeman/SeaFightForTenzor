import React from 'react';
import Field from './Field.js';

export default function Fields(props) {
   
    return (
        <div className='fields' >
            <Field whose={props.playerName} field={props.playerField} />
            <Field whose='Comp' field={props.compField} />
        </div>
    )
};