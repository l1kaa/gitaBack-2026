// -პრაქტიკა-

// 1) let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."

let fullName = "Lika Mamaladze"
let splittedArr = fullName.split(' ')
console.log(`${splittedArr[0][0]}.${splittedArr[1][0]} `)

// 2) let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში. გადაამოწმე, შეიცავს თუ არა "@"

let email = " EXAMPLE@MAIL.COM "
const updatedEmail = email.trim().toLowerCase()
console.log(updatedEmail.includes('@'))

// 3) let str = "luka" ამოიღეთ ბოლო ასო და გადააქციეთ upperCase-ად

let str = "luka"
const lastSymbol = str[str.length - 1].toUpperCase()
console.log(lastSymbol)

// 4)გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.
// თუ რიცხვი იყოფა 3-ზე დააბრუნე - "Foo"
// თუ იყოფა 5-ზე დააბრუნე - "Bar"
// თუ იყოფა ორივეზე დააბრუნე - "FooBar"
// თუ არა დააბრუნე - უბრალოდ რიცხვი

for(let num = 1; num < 100; num++){
    if(num % 3 === 0){
        console.log(`${num} - Foo`)
    }
    else if(num % 5 === 0){
        console.log(`${num} - Bar`)
    }
    else if(num % 3 === 0 && num % 5 === 0){
        console.log(`${num} - FooBar`)
    }
    else{
        console.log(num)
    }
}

// 5)let text = "JS is stupid but sometimes cool" - სიტყვა "stupid" შეცვალე "s****d"-ით.

let text = "JS is stupid but sometimes cool"
changedText = text.replace('tupi', '****')
console.log(changedText)

// -თეორია-
// 1)რამდენი ცვლადი გვაქვს ჯავასკრიპტში.(პასუხი თეორიულად გაეცი)

// გვაქვს სამი ცვლადი:
// let - მისი შეცვლა ნებისმიერ დროს შეგვიძლია.
// const - იგი არის კონსტანტა, შესაბამისად მნიშვნელობას ვერ გადავაწერთ. ცვლადის შეცვლის შემთხვევაში JS დაგვიერორებს.
// var - რომელიც აღარ გამოიყენება JS-ში, რადგან არის Global Scope ცვლადი, რაც გარკვეულ პრობლემებს იწვევს, ამიტომ არის მისი კოდში ჩართვა ცუდი პრაქტიკა.

// 2)რამდენიტიპი გვაქვს ჯავასკრიპტში.(ჩამოთვალე)(პასუხი თეორიულად გაეცი)

// JS-ში გვაქვს -> String, Number, Boolean, Arr, Obj, Undefined, Null,  Function, Symbol, Big Int

// 3) რომელი მეთოდი აქცევს სტრინგს მასივად.(პასუხი თეორიულად გაეცი)

// .split() მეთოდი. მაგ.

let sentence = 'My name is Lika'
const splittedSentence = sentence.split(' ') // გადავიყვანეთ str-დან arr ტიპში. წინადადება სფეისების მიხედვით დავსპლიტეთ

const [s1, s2, s3, s4] = splittedSentence // Destructuring/დესტრუქტურაცია
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)


// 4) სტრინგი პრიმიტიული ტიპია თუ არა ? .(პასუხი თეორიულად გაეცი)

// დიახ, String-ი პრიმიტიული ტიპია, რადგან მისი შეცვლა არ არის შესაძლებელი. ამის ყველაზე ნათელი მაგალითი:

let firstName = 'Lika'
firstName[0] = 'N'
console.log(firstName) // Output: 'Lika'

// 5)ჩამოთვალე რა მეთოდები ვისწავლეთ მაგ -> length(პასუხი თეორიულად გაეცი)

// .length -> ითვლის itrable ტიპის მონაცემში არსებული ელემენტების რაოდენობას (arr-ს შემთხვევაში ელემენტებს, string-ის შემთხვევაში character-ებს).
// .replace(searchValue, replaceValue) -> searchValue-ს ნაცვლად სტრინგში ჩანაცვლდება replaceValue.
// .split(splitter) -> სტრინგს დასპლიტავს splitter-ის მიხედვით. (str -> arr)
// .trim() -> String-ს გარედან (left/right) აშორებს space-ებს.
// .charAt(index) -> აბრუნებს სტრინგში index-ის ადგილას რომელი სიმბოლოა მოთავსებული.
// .includes(key) -> ამოწმებს შეიცავს თუ არა სტრინგი key-დ გადაცემულ სიმბოლოს/სიმბოლოებს. აბრუნებს true/false მნიშვნელობას.
// .toLowerCase() -> სტრინგი გადაჰყავს lowercase-ად.
// .toUpperCase() -> სტრინგი გადაჰყავს uppercase-ად.
// .concat() -> str1.concat(str2). აერთებს სტრინგებს/ახდენს კონკატინაციას (მათ შორის იქნება space-ი.)