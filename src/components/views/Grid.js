import React from 'react'
import BookContainer from '../containers/BookContainer.js'
import '../../styles/Grid.css'

const Grid = ({books}) => (
    <ul className="Grid">
        { books.map((book, i) => 
            <BookContainer key={i} details={ book }/>)}
    </ul>
)

export default Grid;

