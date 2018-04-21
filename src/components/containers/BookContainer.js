import React, { Component } from 'react'
import Book from '../views/Book.js'

export default class BookContainer extends Component {
    render() {
        let {  
            volumeInfo, // you can get title here
            accessInfo, // you can check if it has a Sample
            saleInfo // you can get retailPrice and check if it is for sale
        } = this.props.details;

        // Some properties are optional
        let author = volumeInfo.hasOwnProperty("authors") 
                        ? volumeInfo.authors.join(', ') 
                        : null;
        let image = volumeInfo.hasOwnProperty("imageLinks")
                                ? volumeInfo.imageLinks.thumbnail
                                : null;

        // Display retail price only when saleability is FOR_SALE
        let price = (saleInfo.saleability === "FOR_SALE") 
                        ? `${saleInfo.retailPrice.currencyCode} ${saleInfo.retailPrice.amount}`
                        : null;

        let hasSample = accessInfo.accessViewStatus === "SAMPLE";

        return (
            <Book 
                title={ volumeInfo.title }
                author={ author }
                image={ image }
                price={ price }
                hasSample={ hasSample } />
        )
    }
}

