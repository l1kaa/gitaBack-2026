// ArrayTasks

// 1)დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop

let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] 
let newArr = arr.flat(Infinity).sort((a, b) => a - b)
let uniques = []
for(let i = 0; i < newArr.length; i++){
    !uniques.includes(newArr[i]) ? uniques.push(newArr[i]) : 0
}

console.log(newArr);
console.log(uniques);


// 2) იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.

let products = [
    { name:"Phone", price:1200, rating:4.5 },
    { name:"Laptop", price:2500, rating:4.8 },
    { name:"Book", price:30, rating:4.9 },
    { name:"TV", price:800, rating:4.0 }
]

let sortedProds = products.sort((a, b) => a.price - b.price)
sortedProds.filter(el => el > 1000)

// 3) რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული

let sentence = "dog cat dog bird cat dog fish bird"
let splitSentence = sentence.split(' ')

let wordCounts = splitSentence.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});

console.log(wordCounts);

let mostFrequentWord = ''
let maxCount = 0

for (let word in wordCounts) {
    if (wordCounts[word] > maxCount) {
        maxCount = wordCounts[word];
        mostFrequentWord = word;
    }
}

console.log(mostFrequentWord, maxCount);

// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში. 


function charCount(str){
    let str2 = str.split('')

    let countChar = str2.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    return countChar

}
let str = 'bumblebee'
console.log(charCount(str));

// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig) 

function palindrome(str){ 
    return str.split() === str.split().reverse()
}

console.log(palindrome('ana'));

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.


function mergeUniqueSum(arr1, arr2) {
    let uniqueArr = [...new Set([...arr1, ...arr2])];
    let sum = uniqueArr.reduce((acc, cur) => acc + cur, 0);
    return sum
}

let numsArr1 = [1, 2, 3, 4, 5, 6, 7, 8]
let numsArr2 = [2, 4, 6, 8]
console.log(mergeUniqueSum(numsArr1, numsArr2));

//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად. 

function factorial(num){
    let fact = 1
    for(let i = 1; i <= num; i++){
        fact *= i
    }
    return fact
}

console.log(factorial(3));

// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]


function twoSum(arr, targetSum) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] + arr[x] === targetSum) {
                result.push([arr[i], arr[x]]);
            }
        }
    }
    
    return result.flat(Infinity);
}

let nums = [1, 2, 3, 4, 5, 6, -7, -8]
let target = -15

console.log(twoSum(nums, target));