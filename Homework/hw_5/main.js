// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (a,b) => console.log(a*b);
square(56,78);



// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = r => console.log(Math.PI * r * r);
circle(12);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (r,h) => console.log(Math.PI * r * h);
cylinder(5,12);



// - створити функцію яка приймає масив та виводить кожен його елемент
const printerArray = (array) =>
{
    for (const item of array){
        console.log(item);
    }
}

let users = [
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

printerArray(users);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
 const printToText = (msg) => {
    document.write(`<p>${msg}</p>`);
}
printToText(`lorem`);
console.log('lorem');


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
let printToList = (msg) => {
    document.write(`<ul><li>${msg}</li><li>${msg}</li><li>${msg}</li></ul>`)
}
printToList('Welcome Autumn');
console.log('Welcom Autumn');


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let printCycle = (msg,counter) => {
    document.write('<ul>');
    for (let counter = 0; counter<9; counter++){
        document.write(`<li>${msg}</li>`)
    }
}
printCycle('I study JS',  3);
console.log('I study JS');


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
let foobar = (obj) => {
    document.write(`<ul>`);
    for(const item of obj){
        document.write(`<li>${item}</li>`)
    }
    document.write(`<ul>`);
}
foobar([1, 'September',30]);
foobar([2,'October',31]);
foobar([3,'November',30]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
//  та виводить їх в документ. Для кожного об'єкту окремий блок.
const printToDocument = (arrayUsers) =>{
    for (const user of arrayUsers) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
printToDocument([
    {id:1, name:'Mother', age:25},
    {id:2, name:'Father', age:27},
    {id:3, name:'Sister', age:6},
    {id:4, name:'brother', age:3},
    {id:5, name:'Grandmother', age:50},
    {id:6, name:'Grandfather', age:55},
]);


// - створити функцію яка повертає найменьше число з масиву

let minNumber = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }
    return min;
}

console.log(minNumber([18,45,99,87,12,54,67]));
console.log(minNumber([5,3,4,8,7,1,0,2,6]));
console.log(minNumber([98,76,54,32,-3,0,34,24]));


// - створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let i = 0;
    for(const item of arr){
        i = i + item;
    }
    return i;
}

console.log(sum([1,2,10]));
document.write(sum([12,45,78]));


// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

console.log(swap([11,22,33,44],0,1));
// document.write(swap([11,22,33,44],1,2));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},
// {currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }

    let result = sumUAH/chosenCurrency.value
    return result;
}

console.log(exchange(10000, [{currency:'USD',value:40},{currency:'EUR',value:42}],
    'USD'));

console.log(exchange(10000, [{currency:'USD',value:40},{currency:'EUR',value:42}],
    'EUR'));

