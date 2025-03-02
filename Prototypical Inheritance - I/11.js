function Product(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.getDetails = function(){
    return `${this.name} -Price:$${this.price},Quantity:${this.quantity}`;
};

function Electronics(name,price,quantity,brand,model){
    Product.call(this,name,price,quantity)
        this.brand = brand;
        this.model = model;
    
}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

Electronics.prototype.powerOn = function(){
    return `${this.name} by ${this.brand} is now ON.`
}

Electronics.prototype.powerOff = function(){
    return `${this.name} by ${this.brand} is now OFF.`
}


function Clothing(name,price,quantity,size,material){
    Product.call(this,name,price,quantity);
    this.size = size;
    this.material = material;
}

Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

Clothing.prototype.getXlothingInfo = function(){
    return `${this.name} -Size:${this.size},Material:${this.material}`;
};

function Book(name,price,quantity,author,genre){
    Product.call(this,name,price,quantity);
    this.author = author;
    this.genre = genre;
}

Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

Book.prototype.getBookInfo = function(){
    return `${this.name} by ${this.author},Genere:${this.genre}`;
}

const laptop = new Electronics("Laptop",1200,10,"Lenovo","LOQ");
console.log(laptop.getDetails());
console.log(laptop.powerOn());

const tshirt = new Clothing("T-shirt",25,50,"L","Cotton");
console.log(tshirt.getDetails());
console.log(tshirt.getXlothingInfo());

const novel = new Book("helen keller",15,30,"Hellen Keller","Biography");
console.log(novel.getDetails());
console.log(novel.getBookInfo());

