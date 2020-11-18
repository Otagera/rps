import React from 'react';
import Button from '../../components/UI/Button/Button';
import Aux from '../../hoc/Auxillary/Auxillary';

const mainGame = ( props )=>{
	let toUpperCaseAt = function(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	let display = null;
	if(!props.gameType){
		display = (
					<div className='MainGame-Start'>
						<Button title='Classic' classes={['']} white={true} clicked={()=>{props.typeClicked('classic')}}>
							<div className='Paper'></div>
						</Button>
						<Button title='Bonus' classes={['']} white={true} clicked={()=>{props.typeClicked('bonus')}}>
							<div className='Rock'></div>
						</Button>
					</div>
				);
	}else if(props.gameType === 'classic'){
		display = (
					<div className='MainGame-Start-Classic'>
				       	<div className='Triangle'></div>
						<Button classes={['GameOption', 'GameOption-Paper']} white={true} clicked={()=>{props.optionClicked('paper')}}>
							<div className='Paper'></div>
						</Button>
						<Button classes={['GameOption', 'GameOption-Rock']} white={true} clicked={()=>{props.optionClicked('rock')}}>
							<div className='Rock'></div>
						</Button>
						<Button classes={['GameOption', 'GameOption-Scissors']} white={true} clicked={()=>{props.optionClicked('scissors')}}>
							<div className='Scissors'></div>
						</Button>
					</div>
				);
	}else if(props.gameType === 'bonus'){
		display = (
					<div className='MainGame-Start-Bonus'>
				       	<div className='Pentagon'></div>
						<Button classes={['GameOption', 'GameOption-Spock']} white={true} clicked={()=>{props.optionClicked('spock')}}>
							<div className='Spock'></div>
						</Button>
						<Button classes={['GameOption', 'GameOption-Lizard']} white={true} clicked={()=>{props.optionClicked('lizard')}}>
							<div className='Lizard'></div>
						</Button>
						<Button classes={['GameOption', 'GameOption-Scissors']} white={true} clicked={()=>{props.optionClicked('scissors')}}>
							<div className='Scissors'></div>
						</Button>
						<Button classes={['GameOption', 'GameOption-Rock']} white={true} clicked={()=>{props.optionClicked('rock')}}>
							<div className='Rock'></div>
						</Button>
						<Button classes={['GameOption', 'GameOption-Paper']} white={true} clicked={()=>{props.optionClicked('paper')}}>
							<div className='Paper'></div>
						</Button>
					</div>
				);
	}
	if(props.playerChoice){
		display = (
					<div className='MainGame-Select'>
						<p>YOU PICKED</p>
						<p>THE HOUSE PICKED</p>
						<Button classes={['GameOption', `GameOption-${toUpperCaseAt(props.playerChoice)}`]} white={true}>
							<div className={toUpperCaseAt(props.playerChoice)}></div>
						</Button>
						<div className='Loader'></div>
						<Button classes={['GameOption', 'GameOption-None']} white={true}>
							<div className=''></div>
						</Button>
					</div>
				);
	}
	if(props.houseChoice){
		display = (
					<div className='MainGame-Select'>
						<p>YOU PICKED</p>
						<p>THE HOUSE PICKED</p>
						<Button classes={['GameOption', `GameOption-${toUpperCaseAt(props.playerChoice)}`]} white={true}>
							<div className={toUpperCaseAt(props.playerChoice)}></div>
						</Button>
						<Button classes={['GameOption', `GameOption-${toUpperCaseAt(props.houseChoice)}`]} white={true}>
							<div className={toUpperCaseAt(props.houseChoice)}></div>
						</Button>
					</div>
				);
	}
	if(props.winner){
		display = (
					<div className='MainGame-Winner'>
						<p>YOU PICKED</p>
						<p>THE HOUSE PICKED</p>
						<Button classes={['GameOption', `GameOption-${toUpperCaseAt(props.playerChoice)}`]} white={true}>
							<div className={toUpperCaseAt(props.playerChoice)}></div>
						</Button>
						<div className='PlayAgain'>
							<p>YOU {(props.winner === 'house')? 'LOSE': (props.winner === 'player')? 'WIN': 'TIE'}</p>
		          			<Button title='Play Again' white={true} clicked={props.playAgainClicked}/>
						</div>
						<Button classes={['GameOption', `GameOption-${toUpperCaseAt(props.houseChoice)}`]} white={true}>
							<div className={toUpperCaseAt(props.houseChoice)}></div>
						</Button>
					</div>
				);
	}	
	return (
		<Aux>		
			{display}
		</Aux>
	);
}
export default mainGame;