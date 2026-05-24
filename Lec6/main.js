// 1) 
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

function block(){
    return new Promise((resolve) => {
        setTimeout(() => {
            for(let i = 1 ;i <10000000000;i++){}
            resolve()
        }, 0) // მიუხედავად იმისა რომ 0ms გადავეცი, ეს task-ი მაინც Macro task queue-ში გადავა, რაც 'two'-ს გაუშვებს for loop-ამდე.

    })
}

console.log("one")
block()
console.log("two")


// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.

let myPromise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('promise1 resolved');
    }, 2000)
})

let myPromise2 = new Promise((res, rej) => {
    setTimeout(() => {
        rej('promise2 rejected.')
    }, 1000)
})

myPromise1
    .then((res) =>{
        console.log(res);
    })
    .catch((rej) => {
        console.log( rej);
    })


myPromise2
    .then((res) =>{
        console.log(res);
    })
    .catch((rej) => {
        console.log(rej);
    })


//  ჯგუფურად

Promise.allSettled([myPromise1, myPromise2]).then((results) => {console.log(results)});


// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

myPromise1 = new Promise((res, rej) => {
    setTimeout(() => {
        rej('promise1 rejected');
    }, 1000)
})

myPromise2 = new Promise((res, rej) => {
    setTimeout(() => {
        rej('promise2 rejected.')
    }, 2000)
})

let myPromise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('promise3 resolved');
    }, 3000)
})

let myPromise4 = new Promise((res, rej) => {
    setTimeout(() => {
        rej('promise4 rejected.')
    }, 1500)
})

Promise.any([myPromise1, myPromise2, myPromise3, myPromise4]).then((result) => console.log(result))

// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი

Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4])
    .then((results) => {
        const stats = results.reduce((acc, current) => {
            current.status === 'fulfilled' ? acc.fulfilled += 1 : acc.rejected += 1
            return acc;
        }, { fulfilled: 0, rejected: 0 })

        console.log(stats)  // Output: { fulfilled: 1, rejected: 3 }
    });


// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები


const pr1 = Promise.resolve("Ok 1");
const pr2 = Promise.reject("Error 1");
const pr3 = Promise.resolve("Ok 2");
const pr4 = Promise.reject("Error 2");
const pr5 = Promise.reject("Error 3");

Promise.allSettled([pr1, pr2, pr3, pr4, pr5])
    .then((results) => {const failedPromises = results.filter(n => n.status === 'rejected')
    console.log(failedPromises)
    });


// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად


const api1 = "https://jsonplaceholder.typicode.com/users";
const api2 = "https://jsonplaceholder.typicode.com/posts";

async function fetchData() {
    try {
        const [usersResponse, postsResponse] = await Promise.all([fetch(api1),fetch(api2)]);

        const [users, posts] = await Promise.all([usersResponse.json(),postsResponse.json()]);

        console.log(users)
        console.log(posts)

    } catch (error) {
        console.error(error)
    }
}

fetchData()