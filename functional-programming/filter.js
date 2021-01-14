var arr = [1,2,3,4,5]

// var filterArr = arr.filter(function(value) {
//     if(value % 2 === 1 ) {
//         console.log(value);
//     }
// })
// console.log(arr);

function filter(arr, cb) {
    var newArr = []
    for(var i = 0; i<arr.length; i++) {
        if(cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
}
filter(arr, function(value) {
    if(value % 2 === 1) {
        console.log(value);
    }
})