// 1. let str = “javascript” შენი მიზანია ამოიღო ბოლო ასო

let str = 'javascript'
console.log(str[str.length - 1]);

// 2. let text = "Hello world" ამოჭერი მხოლოდ world
let text = "Hello world" 
console.log(text.slice(6,11))

// 3. let name = "gio”  გადაიყვანე დიდ ასოებში 

let name = 'gio'
console.log(name.toUpperCase());

// 4. let first = "Hello" let second = "World” გააერთიანე ეს ორი სტრინგი
let first = "Hello" 
let second = "World"
console.log(first.concat(second));
console.log(`${first} ${second}`);

// 5. let str  = "   I love js js js   " შენი მიზანია წაშალო თავში და ბოლოში სფეისები da js ჩაანაცვლო javascript-ით

let str2  = "   I love js js js   "
console.log(str2.trim().replace('js', 'javascript'));


// 1. let nums = [1, 2, 3, 4, 5] იპოვე ჯამი 
let nums = [1, 2, 3, 4, 5] 
let sum = nums.reduce((acc, cur) => acc + cur, 0)
console.log(sum);

// 2. let arr = [1,2,2,3,4,4,5] დააბრუნე მხოლოდ უნიკლალურები Set ის დახმარებით


let arr = [1,2,2,3,4,4,5]
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

// 3 let students = [
//   {name: "Giorgi", age: 20},
//   {name: "Nika", age: 22},
//   {name: "Ana", age: 19}
// ]

// იპოვე სტუდენტი სახელად ნიკა

let students = [
    {name: "Giorgi", age: 20},
    {name: "Nika", age: 22},
    {name: "Ana", age: 19}
]

for(let i = 0; i < students.length; i++){
    if(students[i].name === 'Nika'){
        console.log(students[i]);
    }
}

// 4. let people = [
//   {name: "Gio", age: 30},
//   {name: "Luka", age: 25},
//   {name: "Ana", age: 28}
// ]

// დაალაგე სტუდენტები ასაკის მიხედვით

let people = [
    {name: "Gio", age: 30},
    {name: "Luka", age: 25},
    {name: "Ana", age: 28}
]

let sortedPpl = people.sort((a, b) => a.age - b.age)
console.log(sortedPpl);

// 5.  let sentence = "apple orange apple banana apple orange kiwi" შენი მიზანია ეს სტრინგი გადააქციო მასივად და რედიუსის დახმარებით  დათავლო თითოეული ხილი რამდენჯერ მეორდება

let sentence = "apple orange apple banana apple orange kiwi"
let newArr = sentence.split(' ')
let fruitCount = newArr.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitCount);

// 6. let arr = [[1,[12,46],4,5,6,7]] დაალაგე ზრდის მიხედვით და დათვალე ჯამი

let arr2 = [[1,[12,46],4,5,6,7]]
let newArr2 = arr2.flat(Infinity).sort((a, b) => a - b)
let sumNewArr = newArr2.reduce((acc, cur) => acc + cur, 0)
console.log(sumNewArr);

// 1.let person = {name: "Giorgi", age: 25, city: "Tbilisi"}
// დააკონსოლე ცალკე key-ს  ცალკე value-ს

let person = {name: "Giorgi", age: 25, city: "Tbilisi"}
console.log(person);

Object.keys(person).forEach(key => {
    console.log(key);
});

Object.values(person).forEach(val => {
    console.log(val);
});

// მეორე გზა
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


// 2 let car = {brand: "BMW", model: "X5"} დაამატე year

let car = {brand: "BMW", model: "X5"}
car.year = 2015
console.log(car);

// 3 let products = [
//   {name:"Phone", price: 1200},
//   {name:"Book", price: 40},
//   {name:"Pen", price: 5}
// ];

// იპოვე ისეთი ობიექტი რომლის ფასიც 40-ია

let products = [
    {name:"Phone", price: 1200},
    {name:"Book", price: 40},
    {name:"Pen", price: 5}
];

let price = products.find(el => el.price === 40)
console.log(price);

// 4 შექმენი კალკულატორის ობიექტი სადაც გექნება დამატება წაშლა გაყოფა და გამრავლება
