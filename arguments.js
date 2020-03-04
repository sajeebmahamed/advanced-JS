function add(a,b){
    console.log([...arguments]);
    return [...arguments].reduce((a,b) => a + b, 0);
}
const result = add(1,2,3,4);
console.log(result);