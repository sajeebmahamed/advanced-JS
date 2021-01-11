let arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
const target = 11
function binarySearch() {
    let start = 0
    let end = arr.length - 1

    while(start <= end) {
        let midValue = Math.floor((start + end) / 2)
        if(arr[midValue] === target) {
            console.log(midValue);
            return midValue
        }
        if (arr[midValue] < target) {
            start = midValue + 1
        }
        if (arr[midValue] > target) {
            end = midValue - 1
        }
    }
    return -1
}
console.log(binarySearch(arr, target));