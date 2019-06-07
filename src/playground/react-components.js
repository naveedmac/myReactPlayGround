//Creating React Component Class

//Notes: for React Components we need uppercase letter to define class.
//React uses Uppercase letter to differentiate between html tags and reacts components
class IndecisionApp extends React.Component{
    render(){
        return <div>
                <Header /> 
                <Action />
                <Options />
                <AddOption />
            </div>
    }
}

class Header extends React.Component{  // we extend React.Component class to create REACT COMPONENT
    render(){ // REACT COMPONENT needs render function 
        return <div>
        <h1>Indecision App</h1>
        <h2>Put your life in hands of computer</h2>
        
        </div> // render returns JSX,this is compulsory part of React Component.


    }
}
class Action extends React.Component{
    render(){
        return <button>What Should I do?</button>
    }
}
class Options extends React.Component{
    render(){
        return <div>
        <Option /> 
        <Option />
        </div>
    }
}
class Option extends React.Component{
    render(){
        return <div>Option component here</div>
    }
}
class AddOption extends React.Component{
    render(){
        return <div>AddOption component here</div>
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