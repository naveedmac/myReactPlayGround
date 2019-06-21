// name of file is not important
import React from 'react'
export default class AddOption extends React.Component{
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
