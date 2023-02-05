


class BookList {
 
  constructor() {
    this.allBooks = [];
    this.nextBook = null;
    this.currentBook = null;
    this.lastBook = null;
  }

  add(book) {
    this._allBooks.push(book);
  }

  setCurrent(book) {
    if (this._currentBook === book)
      console.log(
        `You are already reading ${book.title} since ${book.startReadDate}`
      );
    else if (this._currentBook)
      console.log(
        `You can't add this book as the current book before finishing 
         ${this._currentBook._title}`
      );
    else {
      book._startReadDate = new Date(Date.now());
      this._currentBook = book;
      console.log(`Yay! You just started reading ${book.title}`);
    }
  }

  get currentBook() {
    return this._currentBook
      ? console.log(`You are currently reading: ${this.currentBook.title}`)
      : console.log("You're not reading any book at the moment");
  }

  get lastBook() {
    if (!this._lastBook) 
    console.log("You havent been reading much latel  you naughty geek");
    else 
    return console.log(`The last book you read was: 
    ${this._lastBook._title}. You finished it on 
     ${this._lastBook._endReadDate}`);
  }
}

  class Book extends BookList{
    constructor(title,genre,author){
        super();
         this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = false;
    this.startReadDate = null;
    this.endReadDate = null;
    }
  }

  const myLibrary = new BookList();

 const foundation = new Book("Foundation", "Science-fiction", "Isaac Asimov");
  const sapiens = new Book(
  "Sapiens: A Brief History of Humankind",
  "Non-fiction",
  "Yuval Noah Harari"
 );
 const autumn = new Book(
  "The Autumn of the Patriarch",
  "Magical realism",
  "Gabriel García Márquez"
 );
 const endgame = new Book("Endgame", "Play", "Samuel Beckett");
 const road = new Book("On the Road", "Novel", "Jack Kerouac");
 const sisyphus = new Book("The Myth of Sisyphus", "Essay", "Albert Camus");

 const booksHeld = [foundation, sapiens, autumn, endgame, road, sisyphus];
 booksHeld.map((b) => myLibrary.add(b));
