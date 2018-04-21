import React, { Component } from 'react';
import Grid from './components/views/Grid.js'
import SearchContainer from './components/containers/SearchContainer.js'
import './App.css'

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

class App extends Component {
	constructor() {
		super();
	
		this.state = { 
			isFetching: false, 
			items: [] 
		};

		this.onInputComplete = this.onInputComplete.bind(this);

	}

	onInputComplete(query) {
		// the API does not take an empty string for the query, always check
        if (typeof query !== undefined && query !== "" && !this.state.isFetching ) {

			this.setState({ isFetching: true }) // show spinners if there is any
			fetch(API_URL + encodeURIComponent(query)) // fetch data
				.then(response => response.json())
				.then(data => { 
					this.setState({ 
						items: data.totalItems > 0 ? data.items : [], // check if there are any items
						isFetching: false // hide spinner if there is any
					})
				})
				.catch(err => {
					console.log(err)
					this.setState({ isFetching: false })
				});
        }
	}

	render() {
		return (
			<div className="App">
				<SearchContainer 
					onInputComplete={ this.onInputComplete } 
					isFetching={ this.state.isFetching } />
				<Grid books={ this.state.items } />
			</div>
		)
	}
}

export default App;
