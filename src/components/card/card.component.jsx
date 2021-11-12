import React from 'react';
import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img    
            alt='book'
            src={`books.img/${props.book.id}.png?size=120x120`} 
            />
        <h2> {props.book.name} </h2>
        <p> {props.book.email} </p>
    </div>
);