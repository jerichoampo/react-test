import React, { Component } from 'react'
import SearchView from '../views/SearchView.js'

const WAIT_TIME = 1000;

class SearchContainer extends Component {
	constructor(props) {
		super(props);

		this.state = { value: this.props.defaultQuery }

		this.typingTimeout = null;
	}

	onChange(e) {
		clearTimeout(this.typingTimeout);

		this.setState({ value: e.target.value });

		this.typingTimeout = setTimeout(this.triggerChange.bind(this), WAIT_TIME);
	}

	triggerChange() {
		this.props.onInputComplete(this.state.value);
	}

	render() {
		return <SearchView onChange={ this.onChange.bind(this) } value={ this.state.value }/> 
	}
}

export default SearchContainer;