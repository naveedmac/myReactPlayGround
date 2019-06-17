"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Props  : Passing value to the components
We pass props by setting key value pair as we do with html, like id, class,etc.
Key can be any thing we like, title= "Indecision App"
we can access these props(key values) as we do for normal classes by using "this." + "props" i.e. this.props.key

*/
//Creating React Component Class

//Notes: for React Components we need uppercase letter to define class.
//React uses Uppercase letter to differentiate between html tags and reacts components
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        /* USING DEFAULT PROPS: 
        Step 2: Access the value passed in class state like props.option as shown above in constructor*/
        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return "Please enter valid value to add item";
            } else if (this.state.options.includes(option)) {
                console.log(option);

                return "Option already exsist in array";
            }
            this.setState(function (preState) {
                return { options: preState.options.concat(option) };
            });
        }
    }, {
        key: "handleDeleteAll",
        value: function handleDeleteAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {

            var randomValue = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomValue]);
        }
    }, {
        key: "render",
        value: function render() {

            var subtitle = "Put your life in hands of computer";

            // title={title} we passing javascript expression : string to make it mor flexible.
            // No commas "," when we are passing two or more props e.g. <Header title={title} subtitle={subtitle}  /> 
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { handlePick: this.handlePick, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, { handleDeleteAll: this.handleDeleteAll, options: this.state.options }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);
// USING DEFAULT PROPS:
/** 
 * Step 1: Pass the default value like this to className.defaultProps
 * Step 2: Access the value passed in class state like props.option as shown above in constructor
 * Step 3: Now if you pass the props in Class tag, then this value will not used else, if no props passed this will be used as shown below */


IndecisionApp.defaultProps = {
    options: []

    // class Header extends React.Component{  // we extend React.Component class to create REACT COMPONENT
    //     render(){ // REACT COMPONENT needs render function 
    //         // console.log(this.props); // this is how we dump object values on screen
    //         // Writing screen string in jsx we use parenthisis as we did for title 👇🏻
    //         return <div>
    //         <h1>{this.props.title}</h1> 
    //         <h2>{this.props.subtitle}</h2>

    //         </div> // render returns JSX,this is compulsory part of React Component.


    //     }
    // } 
};var Header = function Header(props) {
    /* if we want to convert React Class into React Stateless component, 
    we pass props as arguments, we dont use "this" for props is React Stateless component  */
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h2",
            null,
            props.subtitle
        )
    ); // render returns JSX,this is compulsory part of React Component.
};
// Setting defult value of props, incase props is not passed.
Header.defaultProps = {
    title: "Indecision App"
};
var Action = function Action(props) {

    return React.createElement(
        "button",
        {
            onClick: props.handlePick,
            disabled: !props.hasOptions },
        "What Should I do?"
    );
};
// class Action extends React.Component{

//     render(){
//         return <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What Should I do?</button>
//     }
// }
var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        " ",
        React.createElement(
            "button",
            {
                onClick: props.handleDeleteAll },
            "Delete All"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        }),
        React.createElement(Option, null)
    );
};
// class Options extends React.Component{
//     render(){
//         return <div>
//         {/*this.props.options.length*/} {/*If we are creating an array of JSX as below for option component we need key props e.g.👇🏻, but key isn't going to be available in component, it is a special reserve word  */} 
//         <button onClick={this.props.handleDeleteAll}>Delete All</button>{/** Child cannot change its props but it can trigger the function which will change values of props and forces it parent component to Re-render like here 👈🏻 */}
//         {this.props.options.map((option)=> <Option key={option} optionText={option}/>)}{/* We dont use curly braces, otherwise it wouldnt work*/}


//         <Option />
//         </div>
//     }
// }
var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionText
    );
};
// class Option extends React.Component{
//     render(){
//         return <div>{this.props.optionText}</div>
//     }
// }

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim(); // trim removes the extra spaces from front and end of string
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });{} /** 👈🏻 Shorthand syntax of: error:error */
            //Every component can have their own state AND Constructor as above.
            // if we want to access any function passed to the class as props we use: this.props.etc e.g.:
            // const error=this.props.handleAddOption(option);
        }
        // handleAddOption(){ }

    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

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


ReactDOM.render(React.createElement(IndecisionApp, { options: ['option one', 'option two'] }), document.getElementById('app')); // Render React component we use this 
/* Step 3: Now if you pass the props in Class tag, then this value will not used else, if no props passed this will be used as shown above */
