import React, { Component } from 'react';
import Book from './Book';

export default class BookList extends Component {
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.length && this.props.books.map(book => (
                        <span key={book.id}>
                            <Book
                                book={book}
                                updateBook={newShelf => this.props.updateBook(book, newShelf)}/>
                        </span>
                    ))}
                </ol>
            </div>
        )
    }
}