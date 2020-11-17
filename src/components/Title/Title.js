import React from 'react';

const title = ( props )=>{
	return (
		<div className='Title'>
			<div className='Stack'>
				<p>ROCK</p>
				<p>PAPER</p>
				<p>SCISSORS</p>
			</div>
			<div className='Score'>
				<p>SCORE</p>
				<p>12</p>
			</div>
		</div>
	);
}
export default title;