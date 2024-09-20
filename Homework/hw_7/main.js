// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1,'anastasija','kulbaka','anastion@gmail.com','0664851696'),
    new User(2,"julia",'kulbaka','uliajtion@gmail.com','0664852696'),
    new User(3,"maxim",'kulbaka','maxsimation@gmail.com','0664853696'),
    new User(4,"iryna",'kulbaka','iration@gmail.com','0664854696'),
    new User(5,"pavel",'kulbaka','pavletion@gmail.com','0664855696'),
    new User(6,"kostja",'averkin','konstion@gmail.com','0664856696'),
    new User(7,"iryna",'averkina','irynation@gmail.com','0664857696'),
    new User(8,"ludmila",'averkina','ludmilation@gmail.com','0664858696'),
    new User(9,"sergij",'fedko','sergejtion@gmail.com','0664859696'),
    new User(10,"olena",'fedko','olenation@gmail.com','0664850696'),
];
console.log(users);


// - Взяти масив з  User[] з попереднього завдання,
//     та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let users1 = [
    new User(1,'anastasija','kulbaka','anastion@gmail.com','0664851696'),
    new User(2,"julia",'kulbaka','uliajtion@gmail.com','0664852696'),
    new User(3,"maxim",'kulbaka','maxsimation@gmail.com','0664853696'),
    new User(4,"iryna",'kulbaka','iration@gmail.com','0664854696'),
    new User(5,"pavel",'kulbaka','pavletion@gmail.com','0664855696'),
    new User(6,"kostja",'averkin','konstion@gmail.com','0664856696'),
    new User(7,"iryna",'averkina','irynation@gmail.com','0664857696'),
    new User(8,"ludmila",'averkina','ludmilation@gmail.com','0664858696'),
    new User(9,"sergij",'fedko','sergejtion@gmail.com','0664859696'),
    new User(10,"olena",'fedko','olenation@gmail.com','0664850696'),
];
// console.log(users1);
let resultFilterArray = users1.filter((user) => user.id % 2 === 0);
console.log(resultFilterArray);

// для себе зробила порівняння/ навпаки:
// залишивши тільки об'єкти з непарними id (filter)
// let resultFilterArray1 = users1.filter((user) => user.id % 2 !== 0);
// console.log(resultFilterArray1);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let users2 = [
    new User(12,'anastasija','kulbaka','anastion@gmail.com','0664851696'),
    new User(27,"julia",'kulbaka','uliajtion@gmail.com','0664852696'),
    new User(3,"maxim",'kulbaka','maxsimation@gmail.com','0664853696'),
    new User(40,"iryna",'kulbaka','iration@gmail.com','0664854696'),
    new User(5,"pavel",'kulbaka','pavletion@gmail.com','0664855696'),
    new User(16,"kostja",'averkin','konstion@gmail.com','0664856696'),
    new User(72,"iryna",'averkina','irynation@gmail.com','0664857696'),
    new User(18,"ludmila",'averkina','ludmilation@gmail.com','0664858696'),
    new User(9,"sergij",'fedko','sergejtion@gmail.com','0664859696'),
    new User(6,"olena",'fedko','olenation@gmail.com','0664850696'),
];
// console.log(users2);
let toSorted = users2.toSorted((user1, user2) => {
    return user1.id - user2.id;
});
console.log(toSorted);



// - створити класс для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client (id, name, surname, email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'aly', 'asd', 'qwe@123', '+123456789', [{title:'tv', price:1234}, {title:'phone', price:234},{title:'clothing', price:567}]),
    new Client(2, 'alla', 'asdqwe', 'qwe@123', '+123456788', [{title:'tv', price:1234},{title:'phone', price:234},{title:"toys", price:789},{title:'clothing', price:567}]),
    new Client(3, 'sasha', 'njajna', 'qwe@123', '+123456787', [{title:'phone', price:234}]),
    new Client(4, 'masha', 'tkgknb', 'qwe@123', '+123456786', [{title:'tv', price:1234},{title:'phone', price:234}]),
    new Client(5, 'nikol', 'pkljnkef', 'qwe@123', '+123456785', [{title:'tv', price:1234},{title:'phone', price:234},{title:'tv', price:1234},{title:'phone', price:234},{title:'clothing', price:567}]),
    new Client(6, 'petr', 'pqlslkd', 'qwe@123', '+123456784', [{title:'tv', price:1234},{title:'phone', price:234}]),
    new Client(7, 'pavel', 'jfbsa', 'qwe@123', '+123456783', [{title:'tv', price:1234},{title:'phone', price:234}]),
    new Client(8, 'ola', 'asdasd', 'qwe@123', '+123456782', [{title:'tv', price:1234},{title:'phone', price:234},{title:'phone', price:234},{title:"toys", price:789}]),
    new Client(9, 'iryna', 'asddsa', 'qwe@123', '+123456781', [{title:'tv', price:1234},{title:'phone', price:234}]),
    new Client(10, 'maxim', 'asdhello', 'qwe@123', '+123456780', [{title:'tv', price:1234},{title:'phone', price:234},{title:'clothing', price:567}]),

];
console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clients1 = [
    new Client(1, 'aly', 'asd', 'qwe@123', '+123456789', [{title:'tv', price:1234}, {title:'phone', price:234},{title:'clothing', price:567}]),
    new Client(2, 'alla', 'asdqwe', 'qwe@123', '+123456788', [{title:'tv', price:1234},{title:'phone', price:234},{title:"toys", price:789},{title:'clothing', price:567}]),
    new Client(3, 'sasha', 'njajna', 'qwe@123', '+123456787', [{title:'phone', price:234}]),
    new Client(4, 'masha', 'tkgknb', 'qwe@123', '+123456786', [{title:'tv', price:1234},{title:'phone', price:234}]),
    new Client(5, 'nikol', 'pkljnkef', 'qwe@123', '+123456785', [{title:'tv', price:1234},{title:'phone', price:234},{title:'tv', price:1234},{title:'phone', price:234},{title:'clothing', price:567}]),
    new Client(6, 'petr', 'pqlslkd', 'qwe@123', '+123456784', [{title:'tv', price:1234},{title:'phone', price:234}]),
    new Client(7, 'pavel', 'jfbsa', 'qwe@123', '+123456783', [{title:'tv', price:1234},{title:'phone', price:234}]),
    new Client(8, 'ola', 'asdasd', 'qwe@123', '+123456782', [{title:'tv', price:1234},{title:'phone', price:234},{title:'phone', price:234},{title:"toys", price:789}]),
    new Client(9, 'iryna', 'asddsa', 'qwe@123', '+123456781', [{title:'tv', price:1234},{title:'phone', price:234}]),
    new Client(10, 'maxim', 'asdhello', 'qwe@123', '+123456780', [{title:'tv', price:1234},{title:'phone', price:234},{title:'clothing', price:567}]),

];

let toSorted2 = clients1.toSorted((client1, client2) => {
    return client1.order.length - client2.order.length;
});
console.log(toSorted2);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості
// на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engineVolume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function (){
        for (const key in this)
            console.log(key, this[key]);
    }
    this.increaseMaxSpeed = function (speedToAdd){
        if (speedToAdd > 0) this.maxSpeed = maxSpeed + speedToAdd;
    }
    this.changeYear = function (year){
        if (year > 1815) this.year = year;
    }
    this.addDriver = function (driver){
        if (driver) this.drive = driver;
    };
}
 const car = new Car("BMW","Germany", '2018','250','333')
console.log(car);

car.drive(120);
car.info();
car.increaseMaxSpeed(60);
car.changeYear (2024);
car.addDriver({});

console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car

class Car3{
    constructor( model, producer, year, maxSpeed, engineVolume) {
       this.model = model;
       this.producer = producer;
       this.year = year;
       this.maxSpeed = maxSpeed;
       this.engineVolume = engineVolume;

    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info (){
        for (const key in this)
            console.log(key, this[key]);
    }
    increaseMaxSpeed (speedToAdd){
        if (speedToAdd > 0) this.maxSpeed = maxSpeed + speedToAdd;
    }
    changeYear (year){
        if (year > 1815) this.year = year;
    }
    addDriver(driver){
        if (driver) this.drive = driver;
    };
}

const car3 = new Car3("BMW","Germany", '2018','250','333')
console.log(car3);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name,age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince{
    constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
}
const cinderellas = [
    new Cinderella('gala', 18, 35),
    new Cinderella('julia', 19, 36),
    new Cinderella('vlada', 20, 37),
    new Cinderella('sasha', 21, 38),
    new Cinderella('masha', 22, 39),
    new Cinderella('nikol', 23, 40),
    new Cinderella('tana', 24, 41),
    new Cinderella('olena', 25, 42),
    new Cinderella('iryna', 26, 34),
    new Cinderella('oksana', 27, 33),

];

const prince = new Prince ('julia', 19, 36);

for (const cindfrella of cinderellas){
    if (cinderellas.footSize === prince.shoes){
        prince.wife = cindfrella;
    }
}

console.log(prince);

// find()________________________

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.shoes);
prince.wife = cinderellaMain;

console.log(cinderellaMain);


// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback){
    const yourArray = this;
    for (const item of yourArray ){
        callback(item);

    }

};

[111,222,333].myForEach((x) =>console.log(x));


Array.prototype.myFilter = function (predicate){
    const arr = [];
    for(const item of this){
        if (predicate(item)) {
           arr.push(item);
        }
    }
    return arr;
};

let users3 = [
    {name: 'vasa', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'ola', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'ola', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const result = users3.myFilter((user) => user.status);
console.log(result);


