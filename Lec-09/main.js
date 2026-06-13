// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]

function evenSum(arr){
    let even = arr.filter(num => num % 2 === 0)
    return even.reduce((acc, cur) => acc + cur, 0) / even.length;
}

let arr = [1,2,3,4,5,6]
console.log(evenSum(arr));


// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
function wordCount(word){
    return word.split(' ').length
}
let str = "I love JavaScript"
console.log(wordCount(str));

// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.
function checkNum(num){
    let res = 0;
    for(let i = 1; i <= num; i++){
        num % i === 0 ? res++ : 0
    }
    return res <= 2
}

console.log(checkNum(1));

// 4) იპოვე ყველაზე გრძელი ისტყვა
let words = ["dog", "elephant", "cat", "hippopotamus"]
let longest = words[0].length
let longestWord = words[0]
for(let i = 0; i < words.length; i++){
    if(words[i].length >= longest)
    longest = words[i].length 
    longestWord = words[i]
}

console.log(longestWord, longest);

// 5)let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ

function findMostFrequent(array) {
    let counts = {};
    let maxCount = 0;
    let winner;
    
    for (let num of array) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            winner = num;
        }
    }
    return winner;
}

let arr = [3, 5, 3, 2, 5, 5, 3, 5];
console.log(findMostFrequent(arr));


// 6)let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია

let nums6 = [1, 2, 3, 4, 5, 6, 7, 8];

function countEvenOdd(array) {
    let even = 0;
    let odd = 0;
    for (let num of array) {
        if (num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    return {even, odd};
}
console.log(countEvenOdd(nums6));

// 7)let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
let nums7 = [10, 2, 33, 5, 7];

function findMin(array) {
    return Math.min(...array);
}

console.log(findMin(nums7)); 