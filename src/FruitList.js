import React from 'react';

//not stateful compoenent, just a functional one
const FruitList = props => (
	<ul>
		{props.fruits.map(fruit => <li> {fruit} </li>)}
	</ul>
)

export default FruitList