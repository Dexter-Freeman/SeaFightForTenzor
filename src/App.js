import React from 'react';
import './App.css';
import Fields from './Components/Fields.js';
import {
	ships, 
	// createEmptyCell, 
	// random, 
	createEmptyField, 
	// chooseVerticalOrientation, 
	// chooseRandomCellId, 
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
		  playerField: [],
		  playerScore: 0,
		  compField: [],
		  compScore: 0,
		  gameOver: false,
		  playerHits: 0,
		  compHits: 0
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

	componentDidUpdate() {
		console.log(`componentDidUpdate shoot end - ${this.state.playerScore}`);
	}

	shoot(id) {

		let playerScore = this.state.playerScore;
		let gameOver = this.state.gameOver;

		if (this.state.gameOver) {
			return;
		}

		if (this.state.compField[id].shooted) {
			return;
		}
		
		let newCompField = cloneField(this.state.compField); // Создаем клон поля компьютера
		newCompField[id].shooted = true; // Отмечаем, что по клетке стреляли
		
		if (newCompField[id].hasShip) {
			newCompField[id].isShipVisible = true; // Если в ячейке был корабль, то он становится видимым
			playerScore += 1; // Увеличиваем счет игрока
			if (playerScore === 20) {
				gameOver = true;
			}
		}
		return this.setState({
			gameOver,
			playerScore,
			compField: newCompField
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
	
					<form onSubmit={this.onGameStart.bind(this)} className='centered'>

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
			<div className='app-wrapper'>
				<div>
					Ну давай играть {this.state.playerName}
				</div>
				<Fields 
					playerField={this.state.playerField} 
					compField={this.state.compField} 
					shoot={this.shoot.bind(this) } 
					playerName={this.state.playerName}
				/>
			</div>
		)
		
	}
};


