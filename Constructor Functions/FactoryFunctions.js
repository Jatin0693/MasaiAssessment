function createEmployee(name,role,salary){
    let employedeatils = {}
    employedeatils.name= name;
    employedeatils.role = role;
    employedeatils.salary = salary;

    employedeatils.introduce = function(){
        console.log(`Hello, I am ${name}, working as a ${salary}`);
    }
    return employedeatils;

}

const employee1 = createEmployee("Alice", "Developer", 60000);
employee1.introduce();
// Output: Hello, I am Alice, working as a Developer.
