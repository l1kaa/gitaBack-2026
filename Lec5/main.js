// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

function countdown(sec){
    const timer = setInterval(() => {
        console.log(sec);
        sec--

        if(sec < 0){
            console.log('Timer stopped');
            clearInterval(timer)
        }
    }, 100)
}

countdown(10)

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

function guessMyNumber(targetNumber) {
    let randomNumber;
    const maxRange = targetNumber + 5; // maxRange დავამატე, რათა ნებისმიერ რიცხვზე იმუშაოს 
    while (randomNumber !== targetNumber) {
        randomNumber = Math.floor(Math.random() * (maxRange + 1));
        console.log(randomNumber);
    }

    console.log(randomNumber === targetNumber, randomNumber);
}

// guessMyNumber(1005);


// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

function rndm(n, callback){
    n > 27 ? callback() : console.log('n არის 27-ზე ნაკლები');
}

function callbackRndm(){
    console.log('n არის 27-ზე მეტი');
}

rndm(Math.random * 100, callbackRndm)


// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

async function fetchAPI(API){
    let res = await fetch(API)
    let data = await res.json()
    let slicedArr = data.slice(0, -4)
    console.log(slicedArr);
}

fetchAPI('https://jsonplaceholder.typicode.com/users')


function fetchThen(API) {
    return fetch(API)
        .then(res => {
            if (!res.ok) throw new Error("Unable to get data");
            return res.json(); 
        })
        .then(data => {
            return data.slice(0, -4);
        })
        .catch(error => {
            console.error("Error:", error.message);
        });
}


fetchThen('https://jsonplaceholder.typicode.com/users').then(users => console.log(users));

// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20

let people = [
    { name: "Giorgi", age: 25 },
    { name: "Nika", age: 15 },
    { name: "Mariam", age: 30 },
    { name: "Luka", age: 18 }
];

let grouped = people.reduce((acc, person) => {
    if (person.age > 10) {
        acc.greaterThan10.push(person);
    }
    if (person.age < 20) {
        acc.lessThan20.push(person);
    }
    return acc;
}, { greaterThan10: [], lessThan20: [] });

// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".

function checkNums(num1, num2, callback) {
    if (num1 > num2) {
        callback("მეტია");
    } else {
        callback("ნაკლები ან ტოლია");
    }
}

checkNums(10, 20, (result) => console.log(result));

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და 
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები


let products = [
    { name: "Mouse", price: 15 },
    { name: "Keyboard", price: 45 },
    { name: "USB Cable", price: 7 },
    { name: "Headphones", price: 29.9 },
    { name: "Webcam", price: 52 }
];


let groupedProducts = products.reduce((acc, product) => {
    if (product.price > 20) {
        acc.expensive.push(product);
    } else {
        acc.cheap.push(product);
    }
    return acc;
}, { expensive: [], cheap: [] });