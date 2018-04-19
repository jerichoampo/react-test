import React, { Component } from 'react';
import GridContainer from './components/containers/GridContainer.js'
import SearchContainer from './components/containers/SearchContainer.js'

class App extends Component {
	constructor() {
		super();
	
		this.state = { 
			searchQuery: "Harry Potter"
		};

		this.setQuery = this.setQuery.bind(this);
	}

	setQuery(query) {
		this.setState({ searchQuery: query });
	}

	render() {
		return (
			<div>
				<SearchContainer onInput={ this.setQuery } defaultQuery={ this.state.searchQuery }/>
				<GridContainer searchQuery={ this.state.searchQuery } />
			</div>
		)
	}
}

export default App;
