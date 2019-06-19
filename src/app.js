/* Props  : Passing value to the components
We pass props by setting key value pair as we do with html, like id, class,etc.
Key can be any thing we like, title= "Indecision App"
we can access these props(key values) as we do for normal classes by using "this." + "props" i.e. this.props.key

*/ 
//Creating React Component Class

//Notes: for React Components we need uppercase letter to define class.
//React uses Uppercase letter to differentiate between html tags and reacts components
/** Local Storage
 * it's "key" "value" store
 * to store "value", we do need key.
 * It only returns String data
 * to fetch the value we just need key e.g.
 * Saving Values
 * ****************
 * >localStorage.setItem('name','Naveed')
 * Retreiving Values
 * *****************
 * >localStorage.getItem('name')
 * retruns> "Naveed"
 * after Refresh
 * this will return value even after pageload / refresh
 * >localStorage.getItem('name')
 * retruns> "Naveed"
 * REmove Items from local storage:
 * *******************************
 * >localStorage.removeItem('name')
 * >localStorage.getItem('name')
 * retruns> null
 * It Only Return String Items e.g.:
 * >localStorage.setItem('age',26)
 * >localStorage.getItem('age')
 * "26"
 * 
*/
/*
JSON DATA
***********
String representation of JavaScript Object Notation
****************************************************
it saves object in string foramt, like this:

JSON.stringify // this will retrun JSObject in string format like this:
JSON.stringify({age:26});
returns>"{"age":26}"
const json=JSON.stringify({age:26});
>json
>"{"age":26}"
////// Notes: JSON.parse // this will return true JS object
>JSON.parse(json)
returns>Object {age:26}
>JSON.parse(json).age
>26
*/

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
const Header=(props)=>{ /* if we want to convert React Class into React Stateless component, 
                        we pass props as arguments, we dont use "this" for props is React Stateless component  */
    return <div>{/** 👈🏻 Return is important part of React Stateless component*/}
        <h1>{props.title}</h1> 
        { props.subtitle && <h2>{props.subtitle}</h2>}
        
        </div> // render returns JSX,this is compulsory part of React Component.
}
// Setting defult value of props, incase props is not passed.
Header.defaultProps = {
    title: "Indecision App"
}
const Action=(props)=>{
    
        return <button 
        onClick={props.handlePick} 
        disabled={!props.hasOptions}>
        What Should I do?
        </button>
    
}
// class Action extends React.Component{
    
//     render(){
//         return <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What Should I do?</button>
//     }
// }
const Options=(props)=>{
    return <div>
        {/*this.props.options.length*/} {/*If we are creating an array of JSX as below for option component we need key props e.g.👇🏻, but key isn't going to be available in component, it is a special reserve word  */} 
        <button 
        onClick={props.handleDeleteAll}>Delete All
        </button>{/** Child cannot change its props but it can trigger the function which will change values of props and forces it parent component to Re-render like here 👈🏻 */}
        {props.options.length ===0 && <p>Add some option to get started</p>}
        {props.options.map((option)=> 
            <Option 
            key={option} 
            optionText={option}
            handleRemove={props.handleRemove} 
            />)}{/* We dont use curly braces, otherwise it wouldnt work*/}

        
        
        </div>
}
// class Options extends React.Component{
//     render(){
//         return <div>
//         {/*this.props.options.length*/} {/*If we are creating an array of JSX as below for option component we need key props e.g.👇🏻, but key isn't going to be available in component, it is a special reserve word  */} 
//         <button onClick={this.props.handleDeleteAll}>Delete All</button>{/** Child cannot change its props but it can trigger the function which will change values of props and forces it parent component to Re-render like here 👈🏻 */}
//         {this.props.options.map((option)=> <Option key={option} optionText={option}/>)}{/* We dont use curly braces, otherwise it wouldnt work*/}

        
//         <Option />
//         </div>
//     }
// }
const Option =(props)=>{
    return <div>
    {props.optionText}
    <button onClick={(e)=>{props.handleRemove(props.optionText)}}>remove</button>
    </div>
}
// class Option extends React.Component{
//     render(){
//         return <div>{this.props.optionText}</div>
//     }
// }
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();// trim removes the extra spaces from front and end of string
        const error=this.props.handleAddOption(option);
        // this.setState(()=>{return {error}});{/** 👈🏻 Shorthand syntax of: error:error */}
        this.setState(()=>({error}));{/** 👈🏻 Shorthand syntax of: error:error */}
        //Every component can have their own state AND Constructor as above.
        // if we want to access any function passed to the class as props we use: this.props.etc e.g.:
        // const error=this.props.handleAddOption(option);
        if(!error){
            e.target.elements.option.value = ''
        }
       
    }
    // handleAddOption(){ }

    render(){
        return <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button >Add Option</button>
        </form>
        </div>
    }
}

/*const jsx=(
    <div>
    <Header /> 
    <Action />
    <Options />
    <AddOption />
    </div>);

*/
// ReactDOM.render(jsx,document.getElementById('app')) // Render React component we use this 
// 👆🏻 Instead of JSX we can provide direct react component like this 👇🏻
ReactDOM.render(<IndecisionApp options={['option one', 'option two']} />,document.getElementById('app')) // Render React component we use this 
/* Step 3: Now if you pass the props in Class tag, then this value will not used else, if no props passed this will be used as shown above */