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
