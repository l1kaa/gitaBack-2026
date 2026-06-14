// 2)ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში

const fs = require("fs/promises")

async function main() {
    await fs.writeFile('data.json', JSON.stringify('text'))
    let readFile1 = await fs.readFile('data.json', 'utf-8')
    let parsedTxt = JSON.parse(readFile1)
    let reversed = parsedTxt.split("").reverse().join("");
    await fs.writeFile('data2.json', JSON.stringify(reversed))
    let readFile2 = await fs.readFile('data.json', 'utf-8')
    console.log(readFile2);
}

main()