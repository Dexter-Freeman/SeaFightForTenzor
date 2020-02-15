import React from 'react';
import './App.css';
import Fields from './Components/Fields.js';
import {
	ships, 
	createEmptyCell, 
	random, 
	createEmptyField, 
	chooseVerticalOrientation, 
	chooseRandomCellId, 
	cloneField, 
	placeShip, 
	fillField } from './Game/game.js';


export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  playerName: '',
		  tempPlayerName: '',
		  playerField: [],
		  compField: [],
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
			compField: fillField(createEmptyField(), ships),
			playerField: fillField(createEmptyField(), ships)
		});
	};

	shoot(x, y) {

	}

	
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
					onClick={this.shoot.bind(this) } 
					playerName={this.state.playerName}
				/>
			</div>
		)
		
	}
};


