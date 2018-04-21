import React from 'react'
import '../../styles/Book.css'

const BookCover = ({ image, alt, hasSample }) => (
    <div className="Book__cover">
        <img className="Book__image" src={ image } alt={alt}/>
        { hasSample 
            ? <span className="Book__sample-text">Sample</span>
            : null }
    </div>
)

const BookInfo = ({ title, author, price }) => (
    <div className="Book__info">
        <div className="Book__title">{ title }</div>
        <div className="Book__author">{ author }</div>
        <div className="Book__price">{ price }</div>
    </div>
)

const Book = ({ title, author, price, image, hasSample }) => (
    <li className="Book">
        <BookCover image={ image } hasSample={ hasSample } alt={ title } />
        <BookInfo title={ title } author={ author } price={ price }  />
    </li>
)

export default Book;