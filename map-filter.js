const num = [3,4,5,6,7];

// const square = element => element*element;
// const square = x => x * x;

const output = num.map(x => x * x );
const square = num.map(element => element * element);
const filter = num.filter(x => x > 5);
const find = num.find(x => x > 5);
const result = num.map(function(element){
    return element*element;
})
console.log(find);

// const output = [];

// for(let i = 0; i<num.length; i++){
//     const element = num[i];
//     const result = element*element;
//     output.push(result);
// }
// console.log(output);
