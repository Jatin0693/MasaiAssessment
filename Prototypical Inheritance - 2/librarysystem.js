function Book(title,author,isAvailable = true){
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
}

function Member(name){
    this.name = name;
    this.borrowedBooks = [];
}

Member.prototype.borrowedBooks = function(book){
    if(this.borrowedBooks >= 3){
        console.log(`${this.name} cannot borrow more than 3 books`);
        return;
    }
    if(book.isAvailable){
        book.isAvailable = false;
        this.borrowedBooks.push(book.title);
        console.log(`${this.name} borrowed ${this.title}`);
    }
    else{
        console.log(`${book.title} is already borowed`)
    }
}

function PremiumMember(name){
    Member.call(this,name);
    this.acess = true;

}
PremiumMember.prototype = Object(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

PremiumMember.prototype.borrowBook = function(book){
    if(this.borrowedBooks.length >= 5){
        console.log(`${this.name} cannot borrow more than 3 books`);
        return;
    }
    Member.prototype.borrowBook.call(this,book);
}




const book1 = new Book("hello1","hello1")
const book2 = new Book("hello2","hello2")
const book3 = new Book("hello3","hello3")
const book4 = new Book("hello4","hello4")
const book5 = new Book("hello5","hello5")
const book6 = new Book("hello6","hello6")
const book7 = new Book("hello7","hello7")

const regular = new Member("alice");
const prem = new PremiumMember("Bob");

regular.borrowBook(book1)
regular.borrowBook(book2)
regular.borrowBook(book3)
regular.borrowBook(book4)

prem.borrowBook(book4);
prem.borrowBook(book5);
prem.borrowBook(book6);
prem.borrowBook(book1);

const borowalice = regular.borrowBook.bind(regular,book6);
borowalice();