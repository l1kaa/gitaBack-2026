// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]

let arr1 = [1, 2, 3]
let tripleArr = arr1.map((n) => n * 3)
console.log(tripleArr) // Output: [3,6,9]

// 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე

filteredArr1 = arr1.filter((n) => n % 3 === 0)
console.log(filteredArr1) // Output: 3

// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი

let mixedArr = [1, -2, 3, -4, 5, 6, -7, 8, -9]
// I გზა:
let sumOfNums = mixedArr.reduce((acc, curVal) => {
    return curVal > 0 ? acc + curVal : acc;
}, 0);
console.log(sumOfNums)

// II გზა:
let sum = 0
mixedArr.map((n) => {
    n > 0 ? sum+=n : 0
})

console.log(sum)

// 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
// let namesArr = ["giorgi","nika","mariami"]

let namesArr = ["giorgi","nika","mariami"]
let updatedNames = namesArr.map((name) => name.slice(0, -1));
console.log(updatedNames);

// 5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე

let doubleArr = mixedArr.map((n) => n * 2).filter((n) => n % 3 === 0)
console.log(doubleArr)

// 6) დაალაგე რიცხვები ზრდადობით let numsArr = [1,-1,-2,-10,111,3,2,5]

let numsArr = [1,-1,-2,-10,111,3,2,5]
let sortedArr = numsArr.sort((a,b) => a - b)
console.log(sortedArr)

// 7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.

let newMixedArr = mixedArr.map((n) => n * 2).filter((n) => n > 5)
console.log(newMixedArr) // Output: [ 6, 10, 12, 16 ]

// 8)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]

let arr = [1,1,1,1,2,2,3,3,3]
let unique = []
arr.map((n) => !unique.includes(n) ? unique.push(n) : 0)
console.log(unique) // Output: [1,2,3]

// 9), დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს let arr = [-1,20,90,4,5,111]

let arr2 = [-1,20,90,4,5,111]
function sumOfMins(array){
    let sorted = array.sort((a, b) => a - b)
    console.log(sorted)
    return sorted[0] + sorted[1]
}

console.log(sumOfMins(arr2)) // Output: 3 