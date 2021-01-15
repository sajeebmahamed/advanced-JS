// concept like that ekta function e function e multple arguments thakle venge ekta ekta kore pass krbo

function add(a,b,c) {
    return a + b + c
}

function currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

var res = currying(1)(2)(3)
console.log(res);