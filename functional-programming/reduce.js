var arr = [7,8,1,2,3,4,5]
// var sum = arr.reduce(function(prev, curr) {
//     return prev + curr
//     // return Math.max(prev, curr)
//     // return Math.min(prev, curr)
// }, 0)
// console.log(sum);

function reduce(arr, cb, acc) {
    for(var i = 0; i<arr.length; i ++) {
        acc = cb(acc, arr[i])
    }
    return acc
}
var sum = reduce(arr, function(prev, next) {
    return prev + next
}, arr[0])
console.log(sum);

var min = reduce(arr, function (prev, next) {
    return Math.min(prev, next)
}, arr[0])
console.log(min);

