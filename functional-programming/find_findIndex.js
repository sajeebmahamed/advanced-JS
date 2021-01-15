var arr = [ 1,2,3,4,5 ]

// var result = arr.find(function(value) {
//     return value === 3
// })

// var result2 = arr.findIndex(function(value) {
//     return value === 3
// })
// console.log(result2);

function find(arr, cb) {
    for(var i = 0; i<arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i] 
        }
    }
}

function findIndex(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i
        }
    }
}

var result = findIndex(arr, function(value) {
    return value === 4
})
console.log(result);