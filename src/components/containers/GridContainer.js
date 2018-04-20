import React, { Component } from 'react'
import Grid from '../views/Grid.js'

class GridContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    // componentDidMount() {
    //     this.fetchBooks(this.props.searchQuery)
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.searchQuery !== this.state.searchQuery) {
    //         this.fetchBooks(nextProps.searchQuery)
    //     }
    // }

    render() {
        return <Grid books={ this.props.books } />
    }

}

export default GridContainer;
