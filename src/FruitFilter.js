import React from 'react';

//not stateful compoenent, just a functional one
const FruitFilter = (props) => (
	<div>
		<label htmlFor="fruit-filter"> Filter these Fruits: </label>
		<input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
	</div>
)

export default FruitFilter