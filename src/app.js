class IndecisionApp extends React.Component{
    render(){
        const title='Indecision'
        const subTitle='!!Put your life in hands of computer'
        const options=['Option One','Option Two','Option Three']
        return(
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Options options={options} />
                <AddOption options={options}/>
                <Actions />
            </div>
        )
    }
}
class Header extends React.Component{ //👈🏻 Important: Uppercase first later for React Class 
    render(){
        return (<div>
            <p>{this.props.title}</p>
            <p>{this.props.subTitle}</p>
            </div>);
    }

}
class Actions extends React.Component{ //👈🏻 Important: Uppercase first later for React Class 
    handleClick(){
        alert('From: What Should I do')
    }
    render(){
        return (<div><button onClick={this.handleClick}>What Should I do?</button></div>);
    }
}
class Options extends React.Component{ //👈🏻 Important: Uppercase first later for React Class 
    handleRemoveAll(){
        alert('From: Remove All')
    }
    render(){
        
        return (
        <div > 
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
            this.props.options.map((option)=> <Option key={option} optionText={option} />)
            //Important: 👆🏻 For rendering JSX you always need key. 
            // This is special reserved word used for rendering JSX
        }
        </div>
        );
    }
}
class Option extends React.Component{
   
    render(){
        
        return (
            <div>
            
            <p>{this.props.optionText}
            </p>
            </div>
            );
    }
}
class AddOption extends React.Component{ //👈🏻 Important: Uppercase first later for React Class 
     addOption(e){
        e.preventDefault();
        let option=e.target.elements.option.value.trim();
        if (option){
            alert(`Option Typed is: ${option}`)
            // this.props.options.push(option);
            // e.target.elements.option.value=''
        }

    }
    render(){
        return (<div>
            <form onSubmit={this.addOption}>
            <input type='text' name='option' />
            
            <button >Add Option</button>
            </form>
            
            </div>);
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));