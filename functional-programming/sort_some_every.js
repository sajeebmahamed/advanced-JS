var person = [
    {
        name: 'a', age: 28,
    },
    {
        name: 'b', age: 18,
    },
    {
        name: 'c', age: 21,
    }
]
var arr = [ -4, -1, -7, 1,2,3,4,5 ]

var res = arr.sort(function(a,b) {
    if(a>b) {
        return 1
    } else if(a<b) {
        return -1
    }else {
        return 0 
    }
})

var res2 = arr.sort(function (a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})

var obj = person.sort(function(a,b) {
    if(a.age > b.age) {
        return 1
    } else if(a.age < b.age) {
        return -1
    } else {
        return 0
    }
})
// console.log(obj);
var arr2 = [-1,1,2,3,4,5,6]
var check = arr2.every(function(value) {
    return value >= 0
})
var check2 = arr2.some(function(value) {
    return value < 0
})

console.log(check2);