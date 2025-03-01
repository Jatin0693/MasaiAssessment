function createBook(title,author){
    return{
        title,
        author,
        details(){
            console.log(`Title :${this.title}, Author: ${this}`)
        }
    };
}

function createLibrary(){
    const books =[];

    return{
        addBook(book){
            books.push(book)
            console.log(`Book added :${book.title} by ${book.author}`)
        },
        removeBook(title){
    const index = books.findIndex(book => book.title === title);
    if(index !== -1){
        const removedBook = books.splice(index,1);
        console.log(`Book removed :${removedBook[0].title}`);
    }
    else{
        console.log(`Book not found: ${title}`)
    }
        },
    listBooks(){
        if(books.length == 0){
            console.lof("No books in the library")
        }
        else{
            console.log("Libraray Collection");
            books.forEach(book => book.details());
        }
    }
    }
}

const library = createLibrary();

const book1 = createBook("To Kill a Mockingbird", "Harper Lee");
const book2 = createBook("1984", "George Orwell");

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

