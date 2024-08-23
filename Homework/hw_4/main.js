// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square (a,b){
    let s = a * b;
    return s;
}
let result = square(12,24);
console.log(result);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle (r){
    let c = Math.PI * r * r;
    return c;
}
let result2 =circle(12);
console.log(result2);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder (r, h){
    let cl = Math.PI * r * h;
    return cl;
}
let result3 = cylinder(30,45);
console.log(result3);


// - створити функцію яка приймає масив та виводить кожен його елемент

function printerArray (array){
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
let insects = [
    {
        name: "Ant",
        id: 1
    },
    {
        name: "Beetle",
        id: 2
    },
    {
        name: "Fly",
        id: 3
    },
    {
        name: "Butterfly",
        id: 4
    },
    {
        name: "Bee",
        id: 5
    },
    {
        name: "Bumble-bee",
        id: 6
    },
    {
        name: "Wasp",
        id: 7
    },
    {
        name: "Dragon-fly",
        id: 8
    },
    {
        name: "Lady-cow",
        id: 9
    },
    {
        name: "Snail",
        id: 10
    }
];

printerArray(users);
printerArray(insects);


// - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

function printerToText (msg){
    document.write(`<p>${msg}</p>`)
}
printerToText('Hello');
printerToText('school');
printerToText('OKTEN');


// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

function printerToList (msg){
    document.write(
        `<ul>
            <li>${msg}</li>
            <li>${msg}</li>
            <li>${msg}</li>
        </ul>`
    )
}
printerToList('smile');


// - створити функцію яка створює ul з  елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write

function printerToListEndCycle (msg, counter){
    document.write('<ul>');
    for (let i = 0; i < counter; i++){
        document.write(`<li>${msg}</li>`);
    }
    document.write('<ul>');
}

printerToListEndCycle('Have a nice day',3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

function foobar (arrayToObject) {
    document.write(`<ul>`);
    for (const item of arrayToObject) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`<ul>`);
}

foobar([23,'August', true]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

function foobar(arrayUsers) {
    for (const user of arrayUsers) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

foobar([
    {id: 1, name: 'cucumber', age: 10},
    {id: 2, name: 'tomato', age: 20},
    {id: 3, name: 'radish', age: 30},
    {id: 4, name: 'carrot', age: 40},
    {id: 5, name: 'potat', age: 50},
]);


// - створити функцію яка повертає найменьше число з масиву

function minNumber(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }

    return min;
}

console.log(minNumber([12,45,66,77,90,52]));
console.log(minNumber([0,36,63,21,-9,75,78]));
console.log(minNumber([1,2,3,4,5,6,7,8,9]));


// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr){
    let i = 0;
    for(const item of arr){
        i = i + item;
    }

    return i;
}
console.log(sum([1,2,10]));


// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    if (index1 < arr.length && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;

        return arr;
    }
    return -Infinity;
}
console.log(swap([11,22,33,44],0,1));
console.log(swap([11,22,33,44],1,3));
console.log(swap([11,22,33,44],2,3));

console.log(swap([11,22,33,44],2,5));



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange
// (10000,
// [{currency:'USD',value:25},{currency:'EUR',value:42}],
// 'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }

    }

    let result = sumUAH/chosenCurrency.value
    return result;
}

console.log(exchange(10000, [{currency:'USD',value:25},{currency:'EUR',value:42}],
    'USD'));

console.log(exchange(10000, [{currency:'USD',value:25},{currency:'EUR',value:42}],
    'EUR'));

