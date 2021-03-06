class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            count: 0
        }
    }
    handleAddOne(){
    // console.log('handleAddOne');
    this.setState((prevState)=>{
        return{
            count: prevState.count+1
        }
    })

    }
    handleMinusOne(){
    // console.log('handleMinusOne')
    this.setState((prevState)=>{
        return {
            count: prevState.count-1
        }
    })
    }
    handleReset(){
    // console.log('handleReset');
    this.setState(()=>{
        return {
            count:0
        }
    })
    
    }
    componentDidMount(){
       const count=parseInt(localStorage.getItem('count'),10);
       if (!isNaN(count)){
        this.setState(()=>({count}));
       }

    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.count !== this.state.count){
            
            localStorage.setItem('count',this.state.count)
        }

    }
    render(){
       return ( 
        <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>Add One</button>
        <button onClick={this.handleMinusOne}>Minus One</button>
        <button onClick={this.handleReset}>Reset</button>
        </div>
        );
    }

}

ReactDOM.render(<Counter />,document.getElementById('app'))

// const addOne=()=> {count++; renderCounterApp()};
// const minusOne=()=> {count==0?count=0:count--;renderCounterApp()};
// const reset=()=> {count=0;renderCounterApp()};
// let count=0;


// const appRoot=document.getElementById('app')

// const renderCounterApp=()=>{
//     const templateThree=(
//         <div>
//         <h1>Count:{count} </h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//         </div>
//         );
//     ReactDOM.render(templateThree,appRoot)
// };
// renderCounterApp();