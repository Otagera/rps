import React from 'react';

const Button = ( props )=>{
	let classes = ['Button'];
	if(props.classes){ classes = classes.concat(props.classes); }
	if(props.transparent){ classes.push('Transparent')}
		if(props.white){ classes.push('White')}
	return (
		<button
			onClick={props.clicked}
			className={classes.join(' ')}>
			{props.title}
			{props.children}
		</button>
	);
}
export default Button;