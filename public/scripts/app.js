'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        _this.state = {
            options: ['Option One', 'Option Two', 'Option Three', 'Option Four', 'Option Five']
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return { options: [] };
            });
            // 👆🏻 Converted to Simplified Version
            // this.setState(()=>{
            //     return {
            //         options:[]
            //     };
            // });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.setState(function (prevState) {
                var randomNum = Math.floor(Math.random() * prevState.options.length);
                var option = prevState.options[randomNum];
                alert('You Should do: ' + option);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subTitle = '!!Put your life in hands of computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Actions, { hasOptions: this.state.options.length > 0, handleClick: this.handleClick }),
                React.createElement(Options, { handleRemoveAll: this.handleRemoveAll, options: this.state.options }),
                React.createElement(AddOption, { options: this.state.options })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            props.title
        ),
        React.createElement(
            'p',
            null,
            props.subTitle
        )
    );
};
// 👆🏻 Converted to Stateless Functional Components
// class Header extends React.Component{ //👈🏻 Important: Uppercase first later for React Class 
//     render(){
//         return (<div>
//             <p>{this.props.title}</p>
//             <p>{this.props.subTitle}</p>
//             </div>);
//     }

// }
var Actions = function Actions(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOptions, onClick: props.handleClick },
            'What Should I do?'
        )
    );
};
// 👆🏻 Converted to Stateless Functional Components
// class Actions extends React.Component{ //👈🏻 Important: Uppercase first later for React Class 

//     render(){
//         return (<div><button disabled={!this.props.hasOptions} onClick={this.props.handleClick}>What Should I do?</button></div>);
//     }
// }
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleRemoveAll },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        })
        //Important: 👆🏻 For rendering JSX you always need key. 
        // This is special reserved word used for rendering JSX

    );
};
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
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            props.optionText
        )
    );
};
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

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'addOption',
        //👈🏻 Important: Uppercase first later for React Class 
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            if (option) {
                alert('Option Typed is: ' + option);
                // this.props.options.push(option);
                // e.target.elements.option.value=''
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.addOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
