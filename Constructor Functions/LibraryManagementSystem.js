function Book(title,author){
    
    this.title = title,
    this.author = author,
    this.details = function(){
       return console.log(`Title:${this.title},Author:${this.author}`)
    }

    
}


function createLibrary(){
    let booklibrary = [];
    
    return{
       addBook(book){
    
        booklibrary.push(book);
       },
       removeBook(title){
       const index =  booklibrary.findIndex(book => book.title!== title);
       if(index !== -1){
        booklibrary.splice(index,1)
       }

       },
       listBooks(){
        booklibrary.forEach(booklibrary => booklibrary.details())
       }

    }


}

const library = createLibrary();

const book1 = new Book("To Kill a Mockingbird", "Harper Lee");
const book2 = new Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

