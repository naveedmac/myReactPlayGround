// import './utils'; // each files mantain local scope
import substract, {square , add} from './utils' 
/* for defaults export it should be outside curly braces and name doesnt have to match with the export file name */
import isSenior,{isAdult,canEat} from './person'
console.log("app.js running!");
console.log(square(5));
console.log(add(5 , 6 ));
console.log(substract(5 , 6 ));
console.log(`He is an adult:${isAdult(19)}`);
console.log(`He  can eat:${canEat(0)}`);
console.log(`He  is Senior:${isSenior(65)}`);


