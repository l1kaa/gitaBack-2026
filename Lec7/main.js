// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return `Perimeter: ${this.a + this.b + this.c}`
    }

    getArea() {
        const s = (this.a + this.b + this.c) / 2;
        const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) // ჰერონის ფორმულა
        return `Area: ${area}`;
    }

    isRightTriangle() {
        if (!(this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a)) {
            return false;
        }
        const a2 = this.a * this.a
        const b2 = this.b * this.b
        const c2 = this.c * this.c
        
        return (a2 + b2 === c2) || (a2 + c2 === b2) || (b2 + c2 === a2) // პითაგორა
    }
}

const myTriangle = new Triangle(10, 11, 12)
console.log(myTriangle.getArea());
console.log(myTriangle.getPerimeter());
console.log(myTriangle.isRightTriangle());


// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear. გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().

class Smartphone{
    constructor(brand, model, releaseYear){
        this.brand = brand;
        this.model = model;
        this.releaseYear = releaseYear;
    }
}

class GamingPhone extends Smartphone{
    constructor(brand, model, releaseYear, gpuScore, batteryCapacity){
        super(brand, model, releaseYear)
        this.gpuScore = gpuScore;
        this.batteryCapacity = batteryCapacity;
    }

    performanceIndex(){
        const pIndex = (this.gpuScore / this.batteryCapacity) * 100;
        return `${this.model}'s Performance Index is: ${pIndex.toFixed(1)}`;
    }
}


const myGamingPhone = new GamingPhone("ASUS", "ROG Phone 8", 2024, 4500, 5500)
console.log(myGamingPhone.performanceIndex());



// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),

class CryptoWallet {
    constructor(starterAmount) {
        this.balance = starterAmount;
        this.history = [];
    }

    deposit(amount) {
        this.balance += amount;
        this.history.push(`Deposited: ${amount}`)
        return `Balance: ${this.balance}`;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient funds";
        }
        this.balance -= amount;
        this.history.push(`Withdrew: ${amount}`)
        return `Balance: ${this.balance}`
    }

    transfer(targetWallet, amount) {
        if (amount > this.balance) {
            return "Insufficient funds";
        }
        this.balance -= amount
        targetWallet.balance += amount
        
        this.history.push(`Transferred ${amount} to another wallet`)
        targetWallet.history.push(`Received ${amount} from another wallet`)
        
        return `Balance: ${this.balance}`;
    }

    getHistory() {
        return this.history;
    }
    }

const myWallet = new CryptoWallet(100)
const wallet2 = new CryptoWallet(50)

console.log(myWallet.deposit(50));      
console.log(myWallet.withdraw(30));     
console.log(myWallet.transfer(wallet2, 40)); 

console.log(wallet2.balance); 

console.log(myWallet.getHistory());
console.log(wallet2.getHistory());

// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()

class Wishlist {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item)
        return this.items;
    }

    deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id)
        return this.items;
    }

    updateItem(id, newName) {
        const item = this.items.find(item => item.id === id)
        if (item) item.name = newName
        return this.items;
    }
}

const wishlist = new Wishlist();
console.log(wishlist.addItem({ id: 1, name: "Iphone" }));
console.log(wishlist.addItem({ id: 2, name: "Gibson SG" }));
console.log(wishlist.updateItem(1, "Macbook"));
console.log(wishlist.deleteItem(2));


// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).

class Freelancer {
    constructor(rate) {
        this.rate = rate;
    }

    calculateEarnings(hours, bonusPerOvertime = 0) {
        if (hours > 160) {
            const regularEarnings = 160 * this.rate
            const overtimeHours = hours - 160
            const overtimeEarnings = overtimeHours * (this.rate + bonusPerOvertime)
            return regularEarnings + overtimeEarnings
        }
        return hours * this.rate;
    }
}

const freelancer1 = new Freelancer(20);
console.log(freelancer1.calculateEarnings(150));
console.log(freelancer1.calculateEarnings(170, 10));