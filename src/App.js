import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      searchField: ''
    };

  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ books: users }));
}

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { books, searchField } = this.state;
    const filteredBooks = books.filter(book => 
      book.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1> Scripture Rolodex </h1>
        <SearchBox
          placeholder='search books'
          handleChange={ this.handleChange }
        />
       
        <CardList books={filteredBooks} />
        
      </div>
    );
  }
}


export default App;
