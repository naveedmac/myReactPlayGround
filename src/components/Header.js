import  React from 'react';

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
export default Header;