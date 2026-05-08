// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე;
let arr = [];
for (let i = 5; i <= 15; i++) {
    arr.push(i);
}
console.log(arr);


// 2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]
let arr2 = [1,2,3,4,5];

for(let i = arr2.length - 1; i >= 0; i--) {
    console.log(arr2[i]);
}


// 3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]
let arr3 = [100,2,3,9]
console.log(Math.min(...arr3))


// 4) ამოიღე შუა 3 ელემენტი slice-ით.let arr = [1,2,3,4,5,6,7]
let arr4 = [1,2,3,4,5,6,7]
let slicedElems = arr4.slice(2,5)
console.log(slicedElems)


// 5) გააერთიანე ორი მასივი let arr1 = [1,2] let arr2=[3,4]
let array1 = [1,2] 
let array2 = [3,4]
let mixedArr = [...array1, ...array2]
console.log(mixedArr)

// მეორე გზა
let mixedArr2 = [array1, array2]
console.log(mixedArr)

// 6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]
let arr5 = [1,2,3,4,5,6,6,7,7]
let res = []
for(let i = 0; i < arr5.length; i++){
    !res.includes(arr5[i]) ? res.push(arr5[i]) : 'None'
}
console.log(res)


// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]
let arr6 = [1,2,3,4,5,6,7]
let even = []
let odd = []

for(let x = 0; x < arr6.length; x++){
    arr6[x] % 2 === 0 ? even.push(arr6[x]) : odd.push(arr6[x])
}

console.log(even)
console.log(odd)

// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
// let arr = [1,2,3,4,5,6,7,-1,-2,-3,-4]
let arr7 = [1,2,3,4,5,6,7,-1,-2,-3,-4]
let positive = 0
let negative = 0

for(let n = 0; n < arr7.length; n++){
    arr7[n] > 0 ? positive += 1 : negative += arr7[n]
}

console.log(positive)
console.log(negative)

// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])
let arr8 = [1, -2, 3, -4]
let res2 = []

for(let n = 0; n < arr8.length; n++){
    res2.push(-arr8[n])
}

console.log(res2)

// 10) let arr = [1,[2,[3]],[4] შენი მიზანია მიიღო [1,2,3,4]
let arr9 = [1,[2,[3]],[4]]
console.log(arr9.flat(Infinity))

// 11)let fruits = ["apple", "banana", "orange", "kiwi"] წაშალე "banana" მასივიდან splice()-ით
// "orange"-ის წინ დაამატე "mango"
// ბოლოს დაბეჭდე ახალი მასივი.

let fruits = ["apple", "banana", "orange", "kiwi"]
fruits.splice(1, 1, 'mango')
console.log(fruits)