// 1st function er input akare 2nd function er output jodi dete pare sheta composition function

function showResult(input) {
    console.log(input);
}

function mul(n) {
    return n * 5
}

function add(a,b) {
    return a + b
}

showResult(mul(add(3,4)))