import React from 'react';

export default function Message(props) {

	return (
		<div className='message centered' >
			<div className='message-text'>
				{props.message}
				</div>
			<div className='score' >
				<span>Ты попал: <strong>{props.playerScore}</strong> раз.</span>
				<span>Компьютер попал: <strong>{props.compScore}</strong> раз.</span>
			</div>
		</div>
	)

};