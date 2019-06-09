/* Props  : Passing value to the components
We pass props by setting key value pair as we do with html, like id, class,etc.
Key can be any thing we like, title= "Indecision App"
we can access these props(key values) as we do for normal classes by using "this." + "props" i.e. this.props.key

*/ 
//Creating React Component Class

//Notes: for React Components we need uppercase letter to define class.
//React uses Uppercase letter to differentiate between html tags and reacts components
const obj={
    name: "Naveed",
    getName(){
        return this.name;
    }
}
console.log(obj.name);

class IndecisionApp extends React.Component{
    
    render(){
        const title= "Indecision App"
        const subtitle= "Put your life in hands of computer"
        const options=["Thing One","Thing Two","Thing Four"]
        // title={title} we are passing javascript expression : string to make it more flexible.
        // No commas "," when we are passing two or more props e.g. <Header title={title} subtitle={subtitle}  /> 
        return <div>
                <Header title={title} subtitle={subtitle}  /> 
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
    }
}

class Header extends React.Component{  // we extend React.Component class to create REACT COMPONENT
    render(){ // REACT COMPONENT needs render function 
        // console.log(this.props); // this is how we dump object values on screen
        // Writing screen string in jsx we use parenthisis as we did for title 👇🏻
        return <div>
        <h1>{this.props.title}</h1> 
        <h2>{this.props.subtitle}</h2>
        
        </div> // render returns JSX,this is compulsory part of React Component.


    }
}
class Action extends React.Component{
    // create an event we will create class method as below 👇🏻
    handlePick(){
        alert('Action Button Clicked')
    }
    render(){
        {/* We dont want to class function, we want to just reference it as below, so no round brackets '()'*/}
        return <button onClick={this.handlePick}>What Should I do?</button>
    }
}
class Options extends React.Component{
    handleRemoveAll(){
        alert('Remove all clicked')
    }
    render(){
        return <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {/*this.props.options.length*/} {/*If we are creating an array of JSX as below for option component we need key props e.g.👇🏻, but key isn't going to be available in component, it is a special reserve word  */} 
        {this.props.options.map((option)=> <Option key={option} optionText={option}/>)} {/* We dont use curly braces, otherwise it wouldnt work*/}

        
        
        </div>
    }
}
class Option extends React.Component{
    render(){
        return <div>{this.props.optionText}</div>
    }
}
class AddOption extends React.Component{
    handleForm(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();// trim removes the extra spaces from front and end of string
        if (option){
            alert(`Form Submitted. Value in Option : ${option}`)

        }
    }
    // handleAddOption(){ }

    render(){
        return <div>
        <form onSubmit={this.handleForm}>
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
ReactDOM.render(<IndecisionApp />,document.getElementById('app')) // Render React component we use this 