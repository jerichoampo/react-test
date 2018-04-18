import React from 'react'
import Book from './Book.js'


const Grid = ({books}) => (
    <ul>
        { books.map(book => <Book details={ book }/>)}
    </ul>
)

export default Grid;

