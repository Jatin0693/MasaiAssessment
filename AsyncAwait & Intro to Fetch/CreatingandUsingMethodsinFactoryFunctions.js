function createCar(make,year,model){
     return {
        make,year,model,
        describeCar(){
            return `This car is a ${year} ${make} ${model}`;
        }
     }
}

const car = createCar("Toyota", "Camry", 2022);

console.log(car.describeCar());