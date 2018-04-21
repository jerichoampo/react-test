import React, { Component } from 'react'
import SearchBar from '../views/SearchBar.js'

const WAIT_TIME = 1000; // time before firing fetch event

class SearchContainer extends Component {
	constructor(props) {
		super(props);

		this.state = { value: "" }

		this.typingTimeout = null;
		this.onChange = this.onChange.bind(this);
		this.onEnter = this.onEnter.bind(this);
		this.triggerChange = this.triggerChange.bind(this);
	}

	/**
	* Will fetch data after 
	* waiting for a second after typing 
	*/
	onChange(e) {
		clearTimeout(this.typingTimeout);

		this.setState({ value: e.target.value });

		this.typingTimeout = setTimeout(this.triggerChange, WAIT_TIME);
	}

	/**
	* Will fetch data when  
	* enter button is pressed, 
	* works on "most" browsers.
	*/
	onEnter(e) {
		console.log(e.keyCode);
		if (e.keyCode === 13) {
			this.triggerChange();
		}
	}

	triggerChange() {
		this.props.onInputComplete(this.state.value);
	}

	render() {
		return (
			<SearchBar 
				onChange={ this.onChange } 
				onKeyPress={ this.onEnter }
				value={ this.state.value }
				isFetching={ this.props.isFetching } /> 
			)
	}
}

export default SearchContainer;