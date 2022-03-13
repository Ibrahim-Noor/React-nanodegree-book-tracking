import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import BookDashboard from './components/books/pages/Dashboard';
import { SearchPage } from './components/books/pages/SearchPage';
import { updateBookShelf } from './components/books/utils';

class BooksApp extends React.Component {
    state = {
        allBooks: [],
        searchedBooks: [],
    }

    getAllBooks = () => {
        BooksAPI.getAll().then(response => {
            this.setState({ allBooks: response })
        })
    }

    updateBook = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(response => {
            const updatedAllBooks = updateBookShelf(book, this.state.allBooks, newShelf, response);
            this.setState({ allBooks: updatedAllBooks })
        })
    }

    searchBook = searchTerm => {
        BooksAPI.search(searchTerm).then(response => {
            if (Array.isArray(response) && response.length) {
                this.setState({ searchedBooks: response })
            } else {
                this.setState({ searchedBooks: [] })
            }
        })
    }

    componentDidMount() {
        this.getAllBooks()
    }

    render() {
    return (
        <div className="app">
            <Route exact path='/' render={() => <BookDashboard
                allBooks={this.state.allBooks}
                updateBook={this.updateBook}
            />} />
            <Route exact path='/search' render={() => <SearchPage
                searchedBooks={this.state.searchedBooks}
                searchBook={this.searchBook}
                allBooks={this.state.allBooks}
                updateBook={this.updateBook}
            />} />
        </div>
    )
  }
}

export default BooksApp
