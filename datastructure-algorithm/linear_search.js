const number = [12, 45, 67, 89, 121, 345, 678, 932]

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if(element == 121) {
        console.log(i);
        return i
    }
}