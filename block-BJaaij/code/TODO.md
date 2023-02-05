## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.






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
    if (!this._lastBook) console.log("You haven't been reading much lately 
    you naughty geek!")
    else return console.log(`The last book you read was: 
    ${this._lastBook._title}. You finished it on 
     ${this._lastBook._endReadDate}`);
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