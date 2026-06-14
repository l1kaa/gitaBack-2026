// 3)შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში


const users = [
    {
        name: 'Sali',
        age: 21,
        email: 'Sali123@gmail.com',
    },
    {
        name: 'Andria',
        age: 20,
        email: 'Andria@gmail.com'
    }
]

const fs = require("fs/promises")
async function main() {
    await fs.writeFile('data.json', JSON.stringify(users))
    let readFile = await fs.readFile('data.json', 'utf-8')
    let parsedTxt = JSON.parse(readFile);
    console.log(readFile);
}

main()
