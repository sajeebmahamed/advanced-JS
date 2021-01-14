// pure function 
// its returns always same value if then given arguments same
// its dosent have ovserable side effects

// pure function
var num = 10
function sqr(num) {
   return num * num
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));
console.log(num)

// not pure function because when chang() function is called, its change the varaible a 5 to 6
// so its have side effects
var a = 5
function change() {
    a = 6
    console.log(a);
}
change()
console.log(a)

// not pure function because when printObj() function is called, its change val object
// so its have side effects
var val = { a: 11, b: 12 }
function printObj(val) {
    val.a = 21
    val.b = 22
    console.log(val)
}
printObj(val)
console.log(val);