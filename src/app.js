// // install -> import -> use
// import validator from 'validator'; // if we dont use dot for file path node.js will look for installed node_modules

// console.log(validator.isEmail('test@gmail.com'));
import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption'

import Options from './components/Options'
import Action from './components/Action'
import Header from './components/Header'


class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        /* USING DEFAULT PROPS: 
        Step 2: Access the value passed in class state like props.option as shown above in constructor*/
        this.state={
            options: props.options
        }
        this.handleDeleteAll=this.handleDeleteAll.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleRemove=this.handleRemove.bind(this);

    }
    handleAddOption(option){
        if (!option){
            return "Please enter valid value to add item"
        }else if (this.state.options.includes(option)){
            console.log(option);
            
            return "Option already exsist in array"
        }   
        // this.setState((prevState)=>{ 
        //     return{ options:prevState.options.concat(option) }})
        // Shorthand syntax of this retruning object is this :
        this.setState((prevState)=>({options:prevState.options.concat(option)}));
    }
    handleDeleteAll(){
        
        this.setState(()=>({ options:[] }));
    }
    handleRemove(optionToRemove){
        // We will use this funciton to pass through 2 layers of components i.e. Options and through "Options" to "Option"
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionToRemove !== option)})) 
            // filter removes the option passed to arrow function via filter 
            // if false is retruned incase of true it will keep the item.
        
    }
    handlePick(){
        let randomValue=Math.floor(Math.random()*this.state.options.length)
        alert(this.state.options[randomValue])
    }
    // LIFE CYCLE METHODS
    /** REACT CLASS provide different lifecycle method which are trigered when particular event is trigered some of them are as follows:
     * componenetDidMount(){
     * console.log('fetching Data') // canbe used to retrive data from DB / localStorage
     * }
     * componenetDidUpdate(){ // canbe used to save data to DB / localStorage
     * }
     * componenetWillUnmount(){  // Seldom used to when component is removed from screen
     * }
    */
   componentDidMount(){
       try{
           const json= localStorage.getItem('options')
       const options=JSON.parse(json)
       if(options){
        this.setState(()=>({options}));
        }
    }
    catch(e){
        //do nothing
    }
   }
   componentDidUpdate(prevProps,prevState){
       if (prevState.options.length !== this.state.options.length ){
        
        const json= JSON.stringify(this.state.options);
        localStorage.setItem("options",json);
        
       }

   }
    render(){
        
        const subtitle= "Put your life in hands of computer"
        
        // title={title} we passing javascript expression : string to make it mor flexible.
        // No commas "," when we are passing two or more props e.g. <Header title={title} subtitle={subtitle}  /> 
        return <div>
                <Header  subtitle={subtitle}  /> 
                <Action handlePick={this.handlePick} hasOptions={this.state.options.length>0 }/>
                <Options handleDeleteAll={this.handleDeleteAll} handleRemove={this.handleRemove} options={this.state.options}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
    }
}
// USING DEFAULT PROPS:
/** 
 * Step 1: Pass the default value like this to className.defaultProps
 * Step 2: Access the value passed in class state like props.option as shown above in constructor
 * Step 3: Now if you pass the props in Class tag, then this value will not used else, if no props passed this will be used as shown below */
IndecisionApp.defaultProps={
    options:[]
}

// class Header extends React.Component{  // we extend React.Component class to create REACT COMPONENT
//     render(){ // REACT COMPONENT needs render function 
//         // console.log(this.props); // this is how we dump object values on screen
//         // Writing screen string in jsx we use parenthisis as we did for title 👇🏻
//         return <div>
//         <h1>{this.props.title}</h1> 
//         <h2>{this.props.subtitle}</h2>
        
//         </div> // render returns JSX,this is compulsory part of React Component.


//     }
// } 

ReactDOM.render(<IndecisionApp options={['option one', 'option two']} />,document.getElementById('app')) // Render React component we use this 
