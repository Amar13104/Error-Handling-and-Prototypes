function numberChecker(numbers) {
    return function(num){
        return numbers.includes(num)
    }
}

const arr = [1,2,3,4,5]
const checknum = numberChecker(arr)

console.log(checknum(3));
console.log(checknum(10));