export const divideBooksByShelf = bookList => {
    if (bookList && bookList.length) {
        const currentlyReading = [];
        const wantToRead = [];
        const read = [];
        if (bookList.length) {
            bookList.forEach(book => {
                if (book.shelf === 'currentlyReading') {
                    currentlyReading.push(book);
                }
                if (book.shelf === 'wantToRead') {
                    wantToRead.push(book);
                }
                if (book.shelf === 'read') {
                    read.push(book);
                }
            })
        }
        return {
            currentlyReading,
            wantToRead,
            read
        };
    }
}

export const updateBookShelf = (book, allBooks, newShelf, shelfDividedBooks) => {
    const updatedAllBooks = [...allBooks];
    const updatedBookIndex = updatedAllBooks.findIndex(currentBook => currentBook.id === book.id);
    if (newShelf === 'none') {
        if (updatedBookIndex >= 0) {
            updatedAllBooks.splice(updatedBookIndex, 1);
        }
    } else if (shelfDividedBooks[newShelf].includes(book.id)) {
        if (updatedBookIndex >= 0) {
            updatedAllBooks[updatedBookIndex] = { ...book, shelf: newShelf };
        } else {
            updatedAllBooks.push({ ...book, shelf: newShelf });
        }
    }
    return updatedAllBooks;
}