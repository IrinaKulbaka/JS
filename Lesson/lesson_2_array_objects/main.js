// Array__________________________________________________________
let array =[];
console.log(array);

// І спосіб наповнення масива/під час ініціалізації
array = [123, 'asd', true];
// console.log(array);
console.log(array.length);
// ---last index = array.length-1---------

// ІІ спосіб наповнення масива/перевизначення за індексом комірки
array[0] = 345;
console.log(array);

// ІІІ спосіб наповнення масива/додавання нової комірки
array[100] = 'OKTEN';
console.log(array);

console.log(array[1]);
console.log(array[2]);
console.log(array[100]);
console.log(array[33]);

// Масиви в середині з масивом_________________________________________
let names = ['Vasya', 'Petya', 'Inna', 'Olya','Tolya','Misha'];

let nameArray = ['Vasya', 'Petya', 'Olya',['Tom', 'Jerry', 'Spike']];
console.log(nameArray);
console.log(nameArray[3][1]);

let nameOfCharacters = nameArray[3];
console.log(nameOfCharacters);
console.log(nameOfCharacters[0]);

// Типи масивів______________________________________________________
console.log(typeof []);

let newVar = [];
console.log(Array.isArray(newVar));

// Об'єкт з масивом/масивами_________________
let dog = {
    name: 'Flufy',
    age: 3,
    status: true,
    commands:['sit', 'lay', 'bark', 'get over here']
}
console.log(dog);
console.log(dog.name);

// динамічний ключ/виведення конкретної характеристики(поля, філди, проперті,ключа, кій)***
console.log(dog['name']);
console.log(dog['status']);

console.log(dog.commands);
console.log(dog.commands[3]);

// додавання нової характеристики до об'єкта ***
dog.breed = 'spaniel';
console.log(dog);
dog['breed'] = 'pocker';
console.log(dog);

// видалення характеристики об'єкта ***
delete dog.age;
console.log(dog);

// Масив з об'єктоми_________________________

// let users2 = {username: 'abricos', surname: 'abricosov', age: 3};
// let users = [
//     {username: 'kokos', surname: 'kokosiv', age: 123},
//     users2,
//     {username: 'apple', surname: 'applesov', age: 12},
// ]

let users = [
    {username: 'kokos', surname: 'kokosiv', age: 123},
    {username: 'abricos', surname: 'abricosov', age: 3},
    {username: 'apple', surname: 'applesov', age: 12},
]
console.log(users);
console.log(users[0]);
console.log(users[1].age);
console.log(users[1]['age']);
console.log(users[2]['username']);

// дістати останній елемент з масиву
console.log(users[users.length-1].age);
// дістати передостанній елемент з масиву
console.log(users[users.length-2].age);

// Масив з об'єктоми, де є об'єкт з масивом________
let users1 = [
    {username: 'kokos', surname: 'kokosiv', age: 123, skills:['html/css', 'js', 'typeScript']},
    {username: 'abricos', surname: 'abricosov', age: 3},
    {username: 'apple', surname: 'applesov', age: 12},
]
console.log(users1);
console.log(users1[0].skills[1]);

// Об'єкт з об'єктами______________________________
let user = {
    id: 1,
    name: 'vasya',
    age: 31,
    wife: {
        id: 123,
        name: 'anna'
    }
};
console.log(user);
console.log(user.wife);
console.log(user.wife.id);
console.log(user.wife.name);
console.log(user.wife.age);
console.log(user.name);
console.log(user.wife.name);

// Примитивні та референціальні типи даних_________________________
let a = 0;
let b = a;
console.log(a, b);
let b1 = a + 1;
console.log(b1);

user1 = {id:1};
user2 = user1;
console.log(user1, user2);
user2.id = 2;
console.log(user2);
console.log(user1, '!!!');

const obj = {};
obj.id = 100500;
console.log(obj);

// Логічні розгалуження_____________________________________________
if(true){
    console.log('if(){} - найпростіша синтаксична конструкція');
}

if(false){
    console.log('if(){} - найпростіша синтаксична конструкція');
}

if(true){
    console.log('if(true){}');
}else {
    console.log('підблок, який спрацьовує при if (false)');
}

if(false){
    console.log('if(true){}');
}else {
    console.log('else {} - підблок, який спрацьовує при if (false)');
}

// маніпулятори confirm('')  prompt('')__________
let bool = confirm('asd')
if(bool){
    console.log('if: true - ok') ;
}else{
    console.log('else: false - скасувати');
}

let age = +prompt('Enter yuor age');
if(age > 18) {
    console.log('adult');
}else{
    console.log('cartoon');
}

// декілька варіантів вибору/множинні перевірки_____________________
let color = 'green';
 // > < >= <= == === != !==
if(color === 'green'){
    console.log('go!');
}else if (color === 'yellow'){
    console.log('wait!');
}else if (color === 'red'){
    console.log("stop!")
}else{
    console.log('???????????');
}

// ____________&& - end______________
let color2 = 'green';
let isRoadClear = true;
if(color2 === 'green'){
    if (isRoadClear){
    // if(isRoadClear === true){
        console.log('go!');
    }
}else if (color2 === 'yellow' && isRoadClear){
    console.log('wait!');
}else if (color2 === 'red'){
    console.log("stop!")
}else{
    console.log('???????????');
}

// ____________|| - or______________
let color3 = 'yellow';
let isRoadClear3 = false;
if(color3 === 'green'){
    if (isRoadClear3){
        // if(isRoadClear === true){
        console.log('go!');
    }
}else if (color3 === 'yellow' || isRoadClear3){
    console.log('wait!');
}else if (color3 === 'red'){
    console.log("stop!")
}else{
    console.log('???????????');
}
// ______________switch() - блок_____________
let color4 = 'red';
switch(color4){
    case 'green':
        console.log('GO!!!');
        break;
    case 'yellow':
        console.log('WAIT!!!');
        break;
    case 'red':
        console.log('STOP!!!');
        break;
    default:
        console.log('???');
}

// ____________тернарний оператор - скорчений запис______________
let a3;
if(confirm('???')){
    a3 = 100;
}else{
    a3 = 200;
}
console.log(a3);

let b3 = confirm('?!') ? 10 : 20;
console.log(b3);

// булевий вираз____________________
let b4 = 30 > 60 ? 1 : 0;
console.log(b4);

let b5 = 30 < 60 ? 1 : 0;
console.log(b5);

let b6 = 30 !== 60 ? 12 : 10;
console.log(b6);

// складні конструкції тернарного оператора___________
let b7 = 100 > 200 && 300 !== 400 ? 1 : 0;
// let b7 = true && false ? 1 : 0;
// let b7 = false ? 1 : 0;
console.log(b7);





