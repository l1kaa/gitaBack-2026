// 7)შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
// შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ "passed.json" - ში


const students = [
    {
        name: 'Lika',
        score: 100,
        passed: true
    },
    {
        name: 'Ani',
        score: 94,
        passed: true
    },
    {
        name: 'Nika',
        score: 49,
        passed: false
    },
]

const fs = require("fs/promises")

async function main(){
    await fs.writeFile('students.json', JSON.stringify(students))
    let readFile = await fs.readFile('students.json', 'utf-8')
    let parsedTxt = JSON.parse(readFile);
    let filtered = parsedTxt.filter(el => el.score > 50)
    await fs.writeFile('passed.json', JSON.stringify(filtered))
    let readFile2 = await fs.readFile('passed.json', 'utf-8')
    let parsedTxt2 = JSON.parse(readFile2);

    console.log(parsedTxt2);
    
}

main()