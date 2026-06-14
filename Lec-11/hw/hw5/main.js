// 5)ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა

const fs = require("fs/promises")

async function main() {
    await fs.writeFile('file.txt', 'This is JS')
    let readFile = await fs.readFile('file.txt', 'utf-8')
    console.log(readFile.split(' ').length);
}

main()