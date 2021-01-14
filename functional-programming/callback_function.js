function sample(a,b, cb) {
    var p = a + b 
    var q = a - b

    var result = cb(p, q)
    return result
}

var result = sample(6, 5, function(k, l) {
    return k - l
})
console.log(result)

var result2 = sample(4, 3, function (k, l) {
    return k * l
})
console.log(result2)

function sum(a,b) {
    return a+b
}
var result3 = sample(3,2, sum)
console.log(result3)