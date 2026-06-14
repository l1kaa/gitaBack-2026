// 8)წაიკითხე "users.json", და ყველას, ვისაც არ აქვს "@" ელფოსტაში, წაშალე\

let users = [
    { "name": "Gio", "email": "gio@gmail.com" },
    { "name": "Nika", "email": "nikaexample.com" },
    { "name": "Mariam", "email": "mariam@reeducate.ge" },
    { "name": "Lasha", "email": "lashareeducate.ge" },
    { "name": "Ana", "email": "ana@mail.com" }
]

const fs = require("fs/promises")

async function main(){
    await fs.writeFile('users.json', JSON.stringify(users))
    let readFile = await fs.readFile('users.json', 'utf-8')
    let parsedTxt = JSON.parse(readFile);
    let filtered = parsedTxt.filter(el => el.email.includes('@'))
    await fs.writeFile('users.json', JSON.stringify(filtered))
    let readFile2 = await fs.readFile('users.json', 'utf-8')
    let parsedTxt2 = JSON.parse(readFile2);

    console.log(parsedTxt2);
    
}

main()
