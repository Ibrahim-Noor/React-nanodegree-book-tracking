import React, { Component } from 'react';
import BookList from './BookList';
import { Link } from 'react-router-dom';

export class SearchPage extends Component {
    state = {
        searchedBooks: []
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allBooks !== this.props.allBooks || prevProps.searchedBooks !== this.props.searchedBooks){
            const searchedBooks = this.props.searchedBooks.map(book => {
                const availableBook = this.props.allBooks.find(currentBook => currentBook.id === book.id);
                if (availableBook) {
                    return availableBook;
                }
                return { ...book, shelf: 'none' };
            })
            this.setState({ searchedBooks })
        }
    }

    render() {
        return (<div className="search-books">
        <div className="search-books-bar">
            <Link to='/'>
                <button className="close-search">Close</button>
            </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={event => this.props.searchBook(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              <BookList
                  books={this.state.searchedBooks}
                  updateBook={this.props.updateBook}
              />
          </ol>
        </div>
      </div>);
    }
}