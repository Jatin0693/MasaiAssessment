class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    getDetails(){
        console.log(`Name: ${this.name},Email: ${this.email}`);
    }
}

class Student extends User{
    constructor(name,email,studentId){
        super(name,email);
        this.studentId =studentId;
    }

    enroll(){
        console.log(`Student ${this.name} enrolled`)
    }
}
class   Instructor extends User{
    constructor(name,email,instructorId){
        super(name,email);
        this.instructorId = instructorId;
    }

    enroll(){
        console.log(`Instructor ${this.name} assigned`)
    }
}

const student1 = new Student("alice","alice@gmail.com","s12")
const instructor1 = new Instructor("bob","bob@gmail.com","I12")

student1.getDetails();
student1.enroll();

instructor1.getDetails();
instructor1.enroll();