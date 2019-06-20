console.log('Utils.js is running');

const square = (x) => x * x;
const add = (a, b)=> a + b;
const substract = (a , b)=> a - b ;
// export default substract; // inline export default OR // export default (a , b)=> a - b ;
export {square, add, substract as default}; // or we do this individually :
// export const add = (a, b)=> a + b;  inline named export
/* Two types of import and export 
1. named - import and export
2. default export - can only export one 
*/


/**To Run From App.js*/

// import './utils'; // each files mantain local scope
// import substract, {square , add} from './utils' 
/* for defaults export it should be outside curly braces and name doesnt have to match with the export file name */
/**
import isSenior,{isAdult,canEat} from './person'
console.log("app.js running!");
console.log(square(5));
console.log(add(5 , 6 ));
console.log(substract(5 , 6 ));
console.log(`He is an adult:${isAdult(19)}`);
console.log(`He  can eat:${canEat(0)}`);
console.log(`He  is Senior:${isSenior(65)}`);
*/

