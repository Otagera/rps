import React from 'react';
import Button from '../../components/UI/Button/Button';

const mainGame = ( props )=>{
	return (
		<div className='MainGame'>
			{/* <div className='GameOption'><div className='Paper'></div></div> */}
			<Button classes={['GameOption']} white={true}>
				<div className='Paper'></div>
			</Button>
			<Button classes={['GameOption']} white={true}>
				<div className='Rock'></div>
			</Button>
			<Button classes={['GameOption']} white={true}>
				<div className='Scissors'></div>
			</Button>
		</div>
	);
}
export default mainGame;