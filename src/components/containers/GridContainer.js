import React, { Component } from 'react'
import Grid from '../views/Grid.js'

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

class GridContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { books: [], isFetching: false }

    }

    componentDidMount() {
        this.fetchBooks(this.props.searchQuery)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchQuery !== this.state.searchQuery) {
            this.fetchBooks(nextProps.searchQuery)
        }
    }

    fetchBooks(query) {
        if (typeof query !== undefined && query !== "" && !this.state.isFetching ) {
            this.setState({ isFetching: true })
            fetch(API_URL + encodeURIComponent(query))
                .then(response => response.json())
                .then(data => {
                        if (data.totalItems > 0) {
                            this.setState({ books: data.items })
                        }

                        this.setState({ isFetching: false })
                    }
                );
        }
    }


    render() {
        return <Grid books={ this.state.books } />
    }

}

export default GridContainer;
