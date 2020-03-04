function stpWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const watch = stpWatch();
const watch2 = stpWatch();
console.log(watch());
console.log(watch());
console.log(watch());
console.log(watch());

console.log(watch2());
console.log(watch2());
console.log(watch());
console.log(watch2());

// kono ekta function theke jodi arekta function call kori or return kori,thle se ekta closed
// enverionment create kore.