import React, { Component } from 'react'
import BookList from './BookList';

export default class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfHeading}</h2>
                <BookList books={this.props.books} updateBook={this.props.updateBook}/>
            </div>
        )
    }
}
