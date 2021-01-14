// a function will be firstclass class function when, a function can be 
// 1. stored in a variable
// 2. stored in a array
// 3. stored in a object
// 4. we can create a function as wee need
// 5. we can pass function as an arguments
// 6. we can return function from another function

function sum(a, b) {
    return a + b
}

var add = sum
// console.log(add(5,6));

var arr = []
arr.push(sum)
// console.log(arr[0](5,6));

var obj = {
    myObj : sum
}
// console.log(obj.myObj(5,6));

setTimeout(function() {
    console.log('created')
}, 1000)