import React, { Component } from 'react';
import Grid from './components/views/Grid.js'
import GridContainer from './components/containers/GridContainer.js'
import SearchContainer from './components/containers/SearchContainer.js'

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const DEFAULT_QUERY = "Harry Potter";
// const DEFAULT_QUERY = "nil";

class App extends Component {
	constructor() {
		super();
	
		this.state = { 
			isFetching: false,
			items: []
		};

	}

	fetchBooks(query) {
        this.setState({ isFetching: true })
        fetch(API_URL + encodeURIComponent(query))
            .then(response => response.json())
            .then(data => {
            	console.log(data)
                // if (data.totalItems > 0) {
                //     this.setState({ items: data.items })
                // }

                this.setState({ isFetching: false })
            })
            .catch(err => {
            	console.log(err)
            	this.setState({ isFetching: false })
            });
    }

	onInputComplete(value) {
        if (typeof value !== undefined && value !== "" && !this.state.isFetching ) {
			this.fetchBooks(value);
        }
	}

	componentDidMount() {
		this.fetchBooks(DEFAULT_QUERY);
	}

	render() {

		return (
			<div>
				<SearchContainer 
					onInputComplete={ this.onInputComplete.bind(this) } 
					defaultQuery={ DEFAULT_QUERY }/>
				<Grid books={ this.state.items } />
			</div>
		)
	}
}

export default App;
