// 1) წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში.

const fs = require("fs/promises")

async function main() {
    let numsArr = [1, 2, 3]
    await fs.writeFile('data.json', JSON.stringify(numsArr))
    let readFile = await fs.readFile('data.json', 'utf-8')
    let numstoArr = JSON.parse(readFile)
    console.log(numstoArr);
    let sum = numstoArr.reduce((acc, cur) => acc + cur, 0)
    console.log(sum);
}

main()