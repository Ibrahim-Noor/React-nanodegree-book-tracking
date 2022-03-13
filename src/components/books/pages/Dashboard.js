import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import { divideBooksByShelf } from '../utils';

export default class BookDashboard extends React.Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    };

    componentDidMount() {
        const dividedBooks = divideBooksByShelf(this.props.allBooks)
        this.setState({ ...dividedBooks });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allBooks !== this.props.allBooks) {
            const dividedBooks = divideBooksByShelf(this.props.allBooks)
            this.setState({ ...dividedBooks });
        }
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            shelfHeading={'Currently Reading'}
                            books={this.state.currentlyReading}
                            updateBook={this.props.updateBook}/>
                        <BookShelf
                            shelfHeading={'Want To Read'}
                            books={this.state.wantToRead}
                            updateBook={this.props.updateBook}/>
                        <BookShelf
                            shelfHeading={'Read'}
                            books={this.state.read}
                            updateBook={this.props.updateBook}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}