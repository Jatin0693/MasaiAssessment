function createCar(make,model,year){
    let cardetails ={}
    cardetails.make = make;
    cardetails.model = model;
    cardetails.year = year;
    cardetails.describeCar = function(){
        console.log(`This car is a ${year} ${make} ${model}`)
    }
    return cardetails;

}

const car = createCar("Toyota", "Camry", 2022);
car.describeCar();
// Output: This car is a 2022 Toyota Camry.
