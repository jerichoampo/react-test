import React from 'react'

const BookImg = ({ imageSource, hasSample }) => (
    <div>
        <img src={ imageSource } width="150px" height="250px"/>
        { hasSample 
            ? <span>Sample</span>
            : null }
    </div>
)

const BookDesc = ({ title, saleInfo }) => (
    <div>
        <div>{ title }</div>
        <div>
            { saleInfo.saleability == "FOR_SALE" 
                    ? `${saleInfo.retailPrice.currencyCode} ${saleInfo.retailPrice.amount}`
                    : null }
        </div>
    </div>
)

const Book = ({ details }) => (
    <div>
        <BookImg
            imageSource={ details.volumeInfo.imageLinks.thumbnail }
            hasSample={ details.accessInfo.accessViewStatus == "SAMPLE" } />
        <BookDesc
            title={ details.volumeInfo.title }
            saleInfo={ details.saleInfo } />
    </div>
)

export default Book;