import React, { Component } from 'react'
import SearchView from '../views/SearchView.js'

class SearchContainer extends Component {
	constructor(props) {
	  super(props);

	  this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.onInput(e.target.value);
	}

	render() {
		return <SearchView onChange={ this.onChange } defaultQuery={ this.props.defaultQuery } />
	}
}

export default SearchContainer;