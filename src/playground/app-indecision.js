//Creating React Component Class

//Notes: for React Components we need uppercase letter to define class.
//React uses Uppercase letter to differentiate between html tags and reacts components
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
        return <div>Options component here</div>
    }
}
class addOption extends React.Component{
    render(){
        return <div>addOption component here</div>
    }
}
const jsx=(
    <div>
    <Header /> 
    <Action />
    <Options />
    <addOption />
    </div>);


ReactDOM.render(jsx,document.getElementById('app')) // Render React component we use this 