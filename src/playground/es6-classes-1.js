/*
Defining Classes

class ClassName{  //starts with key word "class" 
                    and followed by ClassName 
                    and then Curly braces "{}"

    constructor(argument1 = 1,argument2='ABC'){ // you can set default values like this if no values is passed otherwise it will show "undefined"
        you need to define constructor with keyword constructor as above
        this.argument1=argument1 // you can access object variables(properties)
        this.argument2=argument2 // Setter - here we are assigning values to object variable passed through constructor

    }

    methodA(argument3){ // passing arguments to class variables
        you can not use arrow functions while defining class methods
        return this.argutment1 + argument3 // retruning values from methods
    }

}
Creating object of class 
const objName= new ClassName(arg1,arg2); // new key word is required to create object of class

STRING INTERPOLATION:
Template String:
let name = 'John'
let string = 'Hi, My name is ${name}'

Common Technique:
****************
(to be used in browser console)
>!'' // '' , undefined : is a falsy value, by using ! we convert it truthy value
true
>!!''  // to check get value type we use this technique
false 

INHERITANCE 
***********

class NameOfChildClass extends NameOfParentClass{ // extends is used for inheriting from parent class 
    constructor(argument1 = 1,argument2='ABC',argument4,argument5){
        super(argument1, argument2); // this calls constructor function of parent class, we have to pass its arguments from child class.
        this.argument4=argument4;
        this.argument5=argument5;
        return `Argument1: ${argument1}, Argument2: ${argument2}, Argument4: ${argument4} Argument5: ${argument5}` 

    }
    methodB(argument6,argument7){ // passing arguments to class variables
        let greetings= super.methodA(); // Accessing methods from Parent class with 'super' word
        return greetings + argument6 + argument7
        
    }
}
const objOfChildClass= new NameOfChildClass(arg1,arg2,arg4,arg5); // returns Argument1: arg1, Argument2: arg2, Argument4: arg4 Argument5: arg5
objOfChildClass.methodB(arg3,arg6,arg7) // returns arg1+arg3+arg6+arg7
SEE BELOW FOR EXAMPLES
*/ 

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
        let greetings= super.getGreetings(); // if we want to get access to parent functions, we use super.

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




