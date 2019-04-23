const multiplier = {
numberArray: [2,6,8],
multiplyBy: 2,
multiply(){
    return this.numberArray.map((numberFromArray)=> this.multiplyBy * numberFromArray )}
};
console.log(multiplier.multiply());
