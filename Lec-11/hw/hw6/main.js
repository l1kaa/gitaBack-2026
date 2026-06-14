// 6)წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე

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
    },
    {
        name: 'Nini',
        age: 17,
        email: 'Nini104@gmail.com'
    },
]

const fs = require("fs/promises")
async function main() {
    await fs.writeFile('data.json', JSON.stringify(users))
    let readFile = await fs.readFile('data.json', 'utf-8')
    let parsedTxt = JSON.parse(readFile);
    let filtered = parsedTxt.filter(el => el.age > 18)
    await fs.writeFile('data.json', JSON.stringify(filtered))
    let readFile2 = await fs.readFile('data.json', 'utf-8')
    console.log(readFile2);
}

main()