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
        return <p>Options component here</p>
    }
}
class AddOption extends React.Component{
    render(){
        return <p>addOption component here</p>
    }
}
const jsx=(
    <div>
    <Header /> 
    <Action />
    <Options />
    <AddOption />
    </div>);


ReactDOM.render(jsx,document.getElementById('app')) // Render React component we use this 