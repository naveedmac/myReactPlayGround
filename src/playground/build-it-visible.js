class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle=this.handleToggle.bind(this);
        this.state={
            isVisible:false
        }
    }
    handleToggle(){
        this.setState((prevState)=>{
            return {
                isVisible: !prevState.isVisible
            }
        });
    }
    render(){
        return(<div>
        <h1> Visiblity Toggle </h1>
        <button onClick={this.handleToggle}>{this.state.isVisible? 'Hide Details' : 'Show details '}</button>
        {this.state.isVisible && <p><text>My String</text></p>}
        </div>)
    }
}
ReactDOM.render(<Visibility />,document.getElementById('app'))

// let isToggled = false;
// const toogleEvent = () => {
//     isToggled ? isToggled = false : isToggled = true;
//     targetApp();
// };

// const appRoot = document.getElementById('app');


// const targetApp = () => {


//         const templateOne = ( 
//             <div>
//             <h1 > Visiblity Toggle </h1> 
//             <button onClick = {toogleEvent} > {
//                 isToggled ? "Show Details" : "Hide Details"} </button> 
//                 {isToggled && <p> My String </p>} 
//                 </div>
//             ); 
//             ReactDOM.render(templateOne, appRoot);

//         };
//         targetApp();