import React, { Component } from 'react'
import Grid from '../views/Grid.js'

class GridContainer extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=harry%20potter')
            .then(response => response.json())
            .then(data => this.setState({ books: data.items }));
    }

    render() {
        return <Grid books={ this.state.books } />
    }

}

export default GridContainer;
