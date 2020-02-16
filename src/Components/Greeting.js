import React from 'react';

export default function Greeting(props) {

    return (
        <div className="app-wrapper" >
            <div className='greeting centered' >
                <span>Привет <strong>{props.playerName}</strong>!</span>
			</div>
            <div className='propose centered' >
                <span>Сыграем в морской бой?</span>
			</div>

            <form onSubmit={props.onGameStart} className='centered' >

                <div>
                    <label>
                        <span>Как тебя зовут?</span>
								<input required type='text' onChange={props.onNameInput} value={props.playerName} />
                    </label>
                </div>

                <div>
                    <button type='submit' className='button button-start' >Начать игру!</button>
                </div>

            </form>
        </div>

    )

};