function subject(sub) {
    function body(msg) {
        return sub + ' ' + msg
    }
    return body
}

var res = subject('Mail From Google')
var bdy = res(' Heelo Mr. How are you ')
// console.log(bdy);

function base(b) {
    return function(n) {
        var result = 1
        for (let i = 0; i < b; i++) {
            result *= n
        }
        return result
    }
}
var base10 = base(10)
var result = base10(2)
console.log(result);