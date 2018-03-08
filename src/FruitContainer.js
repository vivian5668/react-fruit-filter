import React, {Component} from 'react';
import FruitFilter from './FruitFilter';
import FruitList from './FruitList';



class FruitContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filterValue: '',
			fruitsToDisplay: props.fruits
		}
		this.handleFilterChange = this.handleFilterChange.bind(this);
	}

//this is the function that we pass down for the child to call
	handleFilterChange(event) {
		event.preventDefault()
		const filterValue = event.target.value
		this.setState( (prevState, props) => {
			//remove fruit that don't contain filer value
			const filteredFruitList = props.fruits.filter(fruit => 
			    fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
			//return the filtered list, we will use the returned value as the new state
			return {
				fruitsToDisplay: filteredFruitList,
				filterValue
			}
		} )//end setState
	}//end handleFilterChange
	render() {
		return(
			<div>
				<FruitFilter value={this.state.filterValue} onChange={this.handleFilterChange} />
				<FruitList fruits={this.state.fruitsToDisplay} />
			</div>
		)
	}
} 

export default FruitContainer




