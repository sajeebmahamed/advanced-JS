const numbers = [23, 54, 12, 8, 45, 90, 2];

function bubbleSortAsc(array) {
    for (let i = 0; i <array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
}

function bubbleSortDesc(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
}
console.log(bubbleSortAsc(numbers))
console.log(bubbleSortDesc(numbers))