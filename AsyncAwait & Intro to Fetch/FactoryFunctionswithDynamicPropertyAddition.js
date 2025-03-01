// Define createInventoryItem to take name, category, and price.
// Add a method describeItem() to createInventoryItem to print the item's details.
// Define addItemDiscount, which accepts an inventoryItem object and discountPercent.
// Calculate discountedPrice based on the original price and discountPercent.
// // Add a method applyDiscount() to addItemDiscount that logs the discountedPrice for the item.





function createInventoryItem(name,category,price){
return{
    name,category,price,
    describeItem(){
        return `Item${this.name},Category:${this.category} Price:${this.price}`
    },
    
}
}

function addItemDiscount(item,discount){
    let discountedPrice = item.price - (item.price*discount)/100;
    
    
    return {
        ...item,
        discount,
        discountedPrice,
     applyDiscount(){
        return `Discounted Price for ${this.name}: ${this.discountedPrice}`
    },
};
    
}

const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
console.log(item.describeItem())
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);

console.log(discountedItem.applyDiscount())
// Output: Discounted Price for Laptop: 1350
