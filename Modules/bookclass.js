class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  storeBook(book) {
    // add a book to local storage
    localStorage.setItem('books', JSON.stringify(book));
    location.reload();
  }

  removeBook(bookTitle) {
    const oldBookList = JSON.parse(localStorage.getItem('books'));
    const newBookList = [];

    oldBookList.filter((item) => {
      if (item.title !== bookTitle) {
        newBookList.push(item);
      }
      return item;
    });
    localStorage.setItem('books', JSON.stringify(newBookList));

    location.reload();
  }
}

export default { Book };