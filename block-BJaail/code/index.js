
class Book{
    consstructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;

    }
}

class UI{
    static displayBooks(){
        const StoredBooks = [
            {
                title: "Book One",
                author: 'John',
                isbn: '343434'
            },
            {
                title: "Book Two",
                author: 'John',
                isbn: '454545'
            },
        ];
        const books = StoredBooks;

        books.forEach((book)=>UI.addBookToList(book));
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row =document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);

    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    
    static showAlert(message,className){
        const div = document.createElement('div');
    }

    static clearFields(){
        document.querySelector('#title').value ='';
        document.querySelector('#author').value ='';
        document.querySelector('#isbn').value ='';
    }
}



document.addEventListener('DOMContentLoaded',UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit',(e)=> {

    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    if(title === ''|| author === ''|| isbn ===''){
        alert('please fill all fields');
    }
    else{
        const book = new Book(title,author,isbn);
    
        //add book
        UI.addBookToList(book);
    
        UI.clearFields();
    }

});

document.querySelector('#book-list').addEventListener('click',(e)=> {
    UI.deleteBook(e.target)
});