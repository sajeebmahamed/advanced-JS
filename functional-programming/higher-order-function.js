// can pass function as an arguments
// can return function from another

function add(a,b) {
    return a+b
}

function manipulate(a,b,func) {
    var c = a + b
    var d = a - b

    // function multiply() {
    //     var m = func(a,b)
    //     return c * d * m
    // }
    // return multiply
    return function() {
        var m = func(a, b)
        return c * d * m
    }
}
const value = manipulate(3,5, add)
console.log(value());