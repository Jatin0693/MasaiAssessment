function createInventoryItem(name,category,price){
    let Inventorydetails = {};
    Inventorydetails.name = name;
Inventorydetails.category = category;
Inventorydetails.price = price;

Inventorydetails.describeItem = function(){
    console.log(`Item: ${name}, Category: ${category}, Price: ${price}`)
}
    return Inventorydetails;

}

function addItemDiscount(item,discount){
    return{
        ...item,
        discountPercent: discount,
        discountPercent: item.price - (item.price*discount)/100,
        applyDiscount: function(){
            console.log(`Discounted Price for ${this.name}: ${this.discountPercent}`)
        }

    }
}

const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// Output: Discounted Price for Laptop: 1350



