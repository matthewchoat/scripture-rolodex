import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css'


export const CardList = (props) => (
    <div className='card-list'>
        {props.books.map(book => (
            <Card key={book.id} book={book} />
    ))}
  </div>
);