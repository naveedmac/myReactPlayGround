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
