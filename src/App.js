import React from 'react';
import './App.css';
import Fields from './Components/Fields.js';
import Message from './Components/Message.js';
import Again from './Components/Again.js';
import Greeting from './Components/Greeting.js';
import {ships, 
		createEmptyField, 
		chooseRandomCellId, 
		cloneField, 
		comp,
		player,
		fillField } from './Game/game.js';
	

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  playerName: '',
		  gameStart: false,
		  playerScore: 19,
		  compScore: 0,
		  playerField: [],
		  compField: [],
		  gameOver: false,
		  message: 'Ты стреляешь'
		};
	};
	
	onNameInput(event) {
		this.setState({
			playerName: event.target.value
		})
	};

	onGameStart(event) {
		event.preventDefault();
		this.setState({
			gameStart: true
		});
	};

	componentDidMount() {  // At the beginning of the game we arrange the ships
		this.setState({
			compField: fillField(createEmptyField(comp), ships),
			playerField: fillField(createEmptyField(player), ships)
		});
	};

	playerShoot(cellId) {
		let {playerScore, gameOver, compField, message} = {...this.state};

		if ( gameOver || compField[cellId].shooted ) {
			return false;
		}
		
		let newCompField = cloneField(compField); // Create a computer field clone
		
		newCompField[cellId].shooted = true; // Note that the cell was shot
		
		if ( newCompField[cellId].hasShip ) {

			newCompField[cellId].isShipVisible = true; 
			// If there was a ship in the cell, then it becomes visible
			playerScore += 1; // Increase player score
			
		}

		message = 'Стреляет компьтер';

		if  ( playerScore === 20 ) {

			gameOver = true;
			message = 'Игра окончена. Ты победил! Поздравляю!';

		}

		return this.setState({
			gameOver,
			playerScore,
			compField: newCompField,
			message
		});
	};

	compShoot() {
		let {gameOver, playerField, compScore, message} = {...this.state};
		const cellId = chooseRandomCellId();		

		if ( gameOver ) {
			return false;
		}

		if ( playerField[cellId].shooted === true ) {
			return this.compShoot();
		}

		let newPlayerField = cloneField(playerField);
		newPlayerField[cellId].shooted = true;

		if ( newPlayerField[cellId].hasShip ) {
			compScore += 1;
		}

		message = 'Ты стреляешь';

		if ( compScore === 20 ) {
			gameOver = true;
			message = 'Игра окончена. Победил компьютер. Не расстраивайся, в следующий раз повезет!';
		}

		return this.setState({
			gameOver,
			compScore,
			playerField: newPlayerField,
			message
		});
	};

	shoot(id) {

		this.playerShoot(id);

		setTimeout(this.compShoot.bind(this), 1000); 
		// Delay so that the computer does not respond immediately

	};

	again() {

		return this.setState({
			playerName: this.state.playerName,
			playerScore: 19,
			compScore: 0,
			compField: fillField(createEmptyField(comp), ships),
			playerField: fillField(createEmptyField(player), ships),
			gameOver: false,
			message: 'Ты стреляешь'
		})
	};

	render() {

		if ( !this.state.gameStart ) {
			return (
				<Greeting 
					playerName={this.state.playerName} 
					onGameStart={this.onGameStart.bind(this)} 
					onNameInput={this.onNameInput.bind(this)} 
					/>
			);
		}
		return (
			<div className='app-wrapper' >

				<div className='centered' >
					Ну давай играть {this.state.playerName}
				</div>

				<Fields 
					playerField={this.state.playerField} 
					compField={this.state.compField} 
					shoot={this.shoot.bind(this) } 
					playerName={this.state.playerName}
				/>

				<Message 
					message={this.state.message} 
					playerScore={this.state.playerScore} 
					compScore={this.state.compScore} 
					/>

				{ this.state.gameOver ? <Again again={this.again.bind(this)} /> : '' }

			</div>
		)
	}
};