var arr = [1,2,3,4,5]
// var sum = 0
// arr.forEach(function(value, index, arr) {
//     sum += value
// })
// console.log(sum);

//callback behind the scene

function forEach(arr, cb) {
    for(var i = 0; i<arr.length; i++) {
        cb(arr[i], i, arr)
    }
}
var sum = 0
forEach(arr, function(value, index, array) {
    console.log(value, index, array);
    sum = sum + value
})
console.log(sum);


forEach(arr, function(value, index, arr) {
    arr[index] = value + 2
})
console.log(arr);