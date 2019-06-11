'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* React Component State:
It requires following states:
1. Set default state objects in a component
2. Component render itself with default values(It is done automatically)
3. Change State values based on event.
4. Component re-render itself using new state values(It is done automatically)
5. Start again at 3.
*/

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = { // Step 1: Set default state objects in a component
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'handleAddOne',
        value: function handleAddOne() {
            /*Step 3: We don't manually change the state directly, by calling this.state.count + 1,
            instead we called small method on our component instance i.e. this.setState . 
            this.setState method allow us to manitpulate state of componenet by arrow function.
            It returns an object specifing various state new values that we have to change.
            It takes an argument returning previous values of State as follows 👇🏻.
            You donot provide all the values of state. Only provide the one that you want to change.
            This is just updating component value that has change, not entire object.
            Better way to use this.setState
            *******************************
            Our calls to this.setState is asynchronus. so it will not change value of state immediately. 
            Because behind the scene it does lot of other works. So it is updated lately. So its better to use prevState
            Step 4. Component re-render calls itself using new state values(It is done automatically)*/
            this.setState(function (prevState) {
                return { count: prevState.count + 1 };
            });
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                return { count: prevState.count - 1 };
            });
            // console.log('Minus One Clicked');
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return { count: 0 };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count:',
                    this.state.count
                ),
                ' ',
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
