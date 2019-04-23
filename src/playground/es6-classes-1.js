class Person{
    constructor(name="anonymus", age=0){
        this.name=name;
        this.age=age;
        return `Hi. ${this.name}!`
    }
    getGreetings(){
        return `Hi ${this.name}, Welcome to my app!`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s).`
    }
    
}
class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major=major;
        // return `${name} , ${age}, ${location}, Testing Operator over loading`
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description=super.getDescription();
        if (this.hasMajor()){
         description +=  `Their major is ${this.major}`
        }
        return description
    }
}
class Traveler extends Person{
    constructor(name, age, location){
        super(name, age);
        this.location=location;
    }
    hasLocation(){
        return !!this.location //👈🏻 !(false) == true => !(true) == false . This technique is use to check the value in boolean form.
    }
    getGreetings(){
        let greetings= super.getGreetings();

        if (this.location){
            return greetings+= `I'm visiting from ${this.location}`
        }
        return greetings
    }

}
let me=new Person('Naveed Raza', 36);
// console.log(me.getGreetings());
// console.log(me.getDescription());

let anonymus=new Person();
// console.log(anonymus.getGreetings());
// console.log(anonymus.getDescription());

let stdStudentObject=new Student('Naveed As Student',35, 'Comupter Science');
console.log(stdStudentObject); 
console.log(stdStudentObject.getDescription());

let objTraveller=new Traveler("Naveed As Traveller", 36, "Karachi")
console.log(objTraveller.getGreetings());




