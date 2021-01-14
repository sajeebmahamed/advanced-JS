// map orginal array k modify kore na
// orinal array k traverse koe new array return kore
var arr = [1,2,3,4,5]
// arr.map(function(value) {
//     console.log(value * value);
// })
// console.log(arr);

function map(arr, cb) {
    var newArr = []
    for(var i = 0; i<arr.length; i++) {
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}
var sqr = map(arr, function(value) {
    return value * value
})
console.log(sqr);
console.log(arr);