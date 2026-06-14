const fs = require("fs/promises")

async function main(){
    await fs.writeFile("first.txt","ika")
    await fs.writeFile("second.txt","nika")
    let readText = await fs.readFile("first.txt","utf-8")
    let readSecondText = await fs.readFile("second.txt","utf-8")
    console.log(readText)
    console.log(readSecondText)

    let combined = readText.concat(readSecondText)
    console.log(combined);
    await fs.writeFile('third.txt', combined)
}

main()