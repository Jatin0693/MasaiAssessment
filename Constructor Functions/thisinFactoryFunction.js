function createBook(title,author){
    let Book = {};
    Book.title = title,
    Book.author = author,
    Book.printInfo = function(){
        console.log("Book" + this.title + "," + "Author" + this.author)
    }
    return Book;

}

const book = createBook("1984", "George Orwell");
book.printInfo();
// Output: Book: 1984, Author: George Orwell
