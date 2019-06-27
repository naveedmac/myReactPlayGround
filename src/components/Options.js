import React from 'react';

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
export default Options;