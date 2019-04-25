class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            options:['Option One','Option Two','Option Three','Option Four','Option Five']
        }
    }
    handleRemoveAll(){
        this.setState(()=>({options:[]}));
        // 👆🏻 Converted to Simplified Version
        // this.setState(()=>{
        //     return {
        //         options:[]
        //     };
        // });
        
    }
    handleClick(){
        this.setState((prevState)=>{
            const randomNum = Math.floor(Math.random() * prevState.options.length);
            const option = prevState.options[randomNum];
            alert(`You Should do: ${option}`);
        });
    }
    render(){
        const title='Indecision'
        const subTitle='!!Put your life in hands of computer'
        
        return(
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Actions hasOptions={this.state.options.length > 0} handleClick={this.handleClick}/>
                <Options handleRemoveAll={this.handleRemoveAll} options={this.state.options} />
                <AddOption options={this.state.options}/>
                
            </div>
        )
    }
}
const Header =(props)=>{
    return (<div>
        <p>{props.title}</p>
        <p>{props.subTitle}</p>
        </div>);
}
// 👆🏻 Converted to Stateless Functional Components
// class Header extends React.Component{ //👈🏻 Important: Uppercase first later for React Class 
//     render(){
//         return (<div>
//             <p>{this.props.title}</p>
//             <p>{this.props.subTitle}</p>
//             </div>);
//     }

// }
const Actions=(props)=>{
    return (
        <div>
        <button disabled={!props.hasOptions} onClick={props.handleClick}>
        What Should I do?
        </button>
        </div>
        );
}
// 👆🏻 Converted to Stateless Functional Components
// class Actions extends React.Component{ //👈🏻 Important: Uppercase first later for React Class 
    
//     render(){
//         return (<div><button disabled={!this.props.hasOptions} onClick={this.props.handleClick}>What Should I do?</button></div>);
//     }
// }
const Options=(props)=>{
    return (
        <div > 
        <button onClick={props.handleRemoveAll}>Remove All</button>
        {
            props.options.map((option)=> <Option key={option} optionText={option} />)
            //Important: 👆🏻 For rendering JSX you always need key. 
            // This is special reserved word used for rendering JSX
        }
        </div>
        );
}
// 👆🏻 Converted to Stateless Functional Components
// class Options extends React.Component{ //👈🏻 Important: Uppercase first later for React Class 
    
//     render(){
        
//         return (
//         <div > 
//         <button onClick={this.props.handleRemoveAll}>Remove All</button>
//         {
//             this.props.options.map((option)=> <Option key={option} optionText={option} />)
//             //Important: 👆🏻 For rendering JSX you always need key. 
//             // This is special reserved word used for rendering JSX
//         }
//         </div>
//         );
//     }
// }
const Option=(props)=>{
    return (
        <div>
        
        <p>{props.optionText}
        </p>
        </div>
        );
}
// 👆🏻 Converted to Stateless Functional Components
// class Option extends React.Component{
   
//     render(){
        
//         return (
//             <div>
            
//             <p>{this.props.optionText}
//             </p>
//             </div>
//             );
//     }
// }
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