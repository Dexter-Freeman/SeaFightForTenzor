import React from 'react';

export default function Again(props) {

    return (
        <div className='again centered' >
				<button onClick={props.again} className='button button-again' >Играть еще!</button>
		</div>
    )
    
};