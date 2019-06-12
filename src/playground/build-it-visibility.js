const appRoot=document.getElementById('app');

let isToggled=false;
const toggleString=()=>{
    isToggled ? isToggled=false : isToggled= true;
    visibilityApp();
}


const visibilityApp=()=>{

const templateOne=(
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggleString}>{ isToggled ? "Hide Details" : "Show Details"}</button>
    {isToggled && <p><text>My String </text></p>}
    </div>
 );
ReactDOM.render(templateOne,appRoot)
};

visibilityApp();

// class VisibilityToggle extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
//         this.state={
//             visibility: true
//         }
//     }
//     handleToggleVisibility(){
// this.setState((prevState)=>{return {visibility: !prevState.visibility}} )
//     }
//     render(){
//         return <div>
//         <h1>Visibility Toggle</h1>
//             <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details' }</button>
//             {this.state.visibility && (<div><p>Hey! these are some details</p></div>)}
//             </div>
//     }
// }
// ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));

