// // install -> import -> use
// import validator from 'validator'; // if we dont use dot for file path node.js will look for installed node_modules

// console.log(validator.isEmail('test@gmail.com'));
import React from 'react';
import ReactDOM from 'react-dom';

const template= React.createElement('p',{},'testing 123')
ReactDOM.render(template,document.getElementById('app'));