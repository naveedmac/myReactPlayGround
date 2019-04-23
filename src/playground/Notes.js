//Don't Run This File. These are just notes for quick reference

// Important Commands to Run in Terminal

// 1. $>live-server public 
// This command should be in root directory and will host public folder on Changes 

// 2. $>babel path/src_file_needs_to_be_compiled.js --out-file=path/file_name_of_compiled_file.js --presets=env,react --watch
//e.g.$>babel src/playground/ex-counter.js --out-file=public/scripts/app.js --presets=env,react --watch
// This command is used for compilation

// Important Functions to Remember for Writing Code in React 

ReactDOM.render(<Counter />,document.getElementById('app'))
// ReactDOM.render(What,Where)
/*
What: Class of Component , JSX 
Where: ID in Html page, here html page is Index.html and 'app' is ID in that page of <div id='app'></div> 
Above Function is used to render React DOM component 
 */

// Syntax for writing Class in Javascript
/*
class NameOfParentClass{
    constructor(argument1 = 1,argument2='ABC'){ // you can set default values like this if no values is passed
        you can define constructor with keyword constructor as above
        this.argument1=argument1 // accessing class variables(properties)
        this.argument2=argument2 // accessing class variables(properties)

    }
    methodA(argument3){ // passing arguments to class variables
        you can not use arrow functions while defining class methods
        return this.argutment1 + argument3 // retruning values from methods
    }
}
// Inheriting class from another class
class NameOfChildClass extends NameOfParentClass{
    constructor(argument4,argument5){
        super(argument1, argument2);
        this.argument4=argument4;
        this.argument5=argument5;
        return `Argument1: ${argument1}, Argument2: ${argument2}, Argument4: ${argument4} Argument5: ${argument5}` 

    }
    methodB(argument6,argument6){ // passing arguments to class variables
        let greetings= super.methodA(); // Accessing methods from Parent class with 'super' word
        
    }
}

*/
// REACT DOM Classes and Structures


class Counter extends React.Component{  // This is how you extend React.Component
    constructor(props){ // This is how you create constructor to Bind methods of classes with this
        super(props); //so you can access props in methods
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
    }
    handleAddOne(){
    console.log('handleAddOne');
    //Once methods are bind in Constructor you can access props in the methods else you cannot
    //like e.g. this.props.variableDeclared

    }
    handleMinusOne(){
    console.log('handleMinusOne')
    }
    handleReset(){
    console.log('handleReset');
    
    }
    render(){
       return ( 
        <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>Add One</button>
        <button onClick={this.handleMinusOne}>Minus One</button>
        <button onClick={this.handleReset}>Reset</button>
        </div>
        );
    }

}
ReactDOM.render(<Counter />,document.getElementById('app'))

// Passing props to sub Components
class IndecisionApp extends React.Component{
    render(){
        const title='Indecision' // Declaring Variables
        const subTitle='!!Put your life in hands of computer' // Declaring Variables
        const options=['Option One','Option Two','Option Three'] // Declaring Arrays
        return(
            <div>
                <Header title={title} subTitle={subTitle}/> 
                <Options options={options} />
                <AddOption options={options}/>
                <Actions />
            </div>
        )//Above we are passing props to sub components 
    }
}
class Header extends React.Component{ //👈🏻 Important: Uppercase first later for React Class 
    render(){
        return (<div>
            <p>{this.props.title}</p>
            <p>{this.props.subTitle}</p>
            </div>);
    }//Receiving Props in Sub Components and Displaying on Screen

}