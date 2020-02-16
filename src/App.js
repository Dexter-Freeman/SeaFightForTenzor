import React from 'react';
import './App.css';
import Fields from './Components/Fields.js';
import {
	ships, 
	// createEmptyCell, 
	// random, 
	createEmptyField, 
	// chooseVerticalOrientation, 
	chooseRandomCellId, 
	cloneField, 
	// placeShip, 
	comp,
	player,
	fillField } from './Game/game.js';


export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  playerName: '',
		  tempPlayerName: '',
		  playerScore: 0,
		  compScore: 0,
		  playerField: [],
		  compField: [],
		  gameOver: false,
		  message: 'Ты стреляешь'
		};
	};
	

	onNameInput(event) {
		this.setState({
			tempPlayerName: event.target.value
		})
	};

	onGameStart(event) {
		event.preventDefault();
		this.setState({
			playerName: this.state.tempPlayerName
		});
	};

	componentDidMount() {
		this.setState({
			compField: fillField(createEmptyField(comp), ships),
			playerField: fillField(createEmptyField(player), ships)
		});
	};

	// componentDidUpdate() {
	// 	console.log(`componentDidUpdate shoot end - ${this.state.playerScore}`);
	// }

	shoot(id) {

		let {playerScore, gameOver, compField, playerField, compScore, message} = {...this.state};
		// let gameOver = this.state.gameOver;

		if (gameOver || compField[id].shooted) {
			return false;
		}

		// if (compField[id].shooted) {
		// 	return false;
		// }
		
		let newCompField = cloneField(compField); // Создаем клон поля компьютера
		let newPlayerField = cloneField(playerField);
		newCompField[id].shooted = true; // Отмечаем, что по клетке стреляли
		
		if (newCompField[id].hasShip) {
			newCompField[id].isShipVisible = true; // Если в ячейке был корабль, то он становится видимым
			playerScore += 1; // Увеличиваем счет игрока
			
		}

		const compShoot = id => {
			if (playerField[id].shooted === true) {
				return compShoot(chooseRandomCellId());
			}
			this.setState({
				message: 'Стреляет компьютер'
			})
			newPlayerField[id].shooted = true;
			if (newPlayerField[id].hasShip) {
				compScore += 1;
			}
		};

		compShoot(chooseRandomCellId());

		message = 'Ты стреляешь';

		if (playerScore === 20 || compScore === 20) {
			gameOver = true;
			message = 'Игра окончена';
		}

		return this.setState({
			gameOver,
			playerScore,
			compScore,
			playerField: newPlayerField,
			compField: newCompField,
			message
		});
		
	};

	
	render() {

		if (!this.state.playerName) {
			return (
				<div className="app-wrapper" >
					<div className='centered' >
						Привет {this.state.tempPlayerName}!
					</div>
					<div className='centered' >
						Сыграем в морской бой?
					</div>
	
					<form onSubmit={this.onGameStart.bind(this)} className='centered' >

						<div>
							<label>
								Как тебя зовут?
								<input required type='text' onChange={this.onNameInput.bind(this)} value={this.state.tempPlayerName} />
							</label>
						</div>

						<div>
							<button type='submit' >Начать игру!</button>
						</div>

					</form>
				</div>
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
				<div className='message centered' >
					{this.state.message}
				</div>
			</div>
		)
		
	}
};


