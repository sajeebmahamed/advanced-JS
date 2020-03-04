const students = [
    {id : 21, name: "Sajeeb"},
    {id : 17, name: "Shakib"},
    {id : 22, name : "Mn"}
];
// const arr = [];
// for(let i = 0; i<students.length; i++){
//     const element = students[i];
//     arr.push(element);
// }
const names = students.map(x => x.name);
const ids = students.map(i => i.id);
const stdInfo = students.filter( s => s.id> 17);
const singleStdInfo = students.find( i => i.id > 17);
console.log(singleStdInfo);