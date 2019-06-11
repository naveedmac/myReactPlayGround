/* React Component State:
It requires following states:
1. Set default state objects in a component
2. Component render itself with default values(It is done automatically)
3. Change State values based on event.
4. Component re-render itself using new state values(It is done automatically)
5. Start again at 3.
*/

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={ // Step 1: Set default state objects in a component
            count: 0
        }
    }
    handleAddOne(){
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
        this.setState((prevState)=>{return {count: prevState.count+1}});
        
    }
    handleMinusOne(){
        this.setState((prevState)=>{return {count: prevState.count-1}});
        // console.log('Minus One Clicked');
        
    }
    handleReset(){
        this.setState(()=>{return {count: 0}});
        
    }
    render(){
        return (
        <div>
        <h1>Count:{this.state.count}</h1> {/* Step 2:Component render itself with default values(It is done automatically) */}
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
        </div>)
    }
}
ReactDOM.render(< Counter/>,document.getElementById('app'))