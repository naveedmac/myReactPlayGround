let isToggled = false;
const toogleEvent = () => {
    isToggled ? isToggled = false : isToggled = true;
    targetApp();
};

const appRoot = document.getElementById('app');


const targetApp = () => {


        const templateOne = ( 
            <div>
            <h1 > Visiblity Toggle </h1> 
            <button onClick = {toogleEvent} > {
                isToggled ? "Show Details" : "Hide Details"} </button> 
                {isToggled && <p> My String </p>} 
                </div>
            ); 
            ReactDOM.render(templateOne, appRoot);

        };
        targetApp();