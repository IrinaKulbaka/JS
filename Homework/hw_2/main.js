//  Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент
//  в консоль
let fruits = ['apple', 'pear', 'apricot', 'cherry', 'plum', 'lemon', 'melon', 'peach', 'banana', 'orange'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[5]);
console.log(fruits[6]);
console.log(fruits[7]);
console.log(fruits[8]);
console.log(fruits[9]);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'Easy English', pageCount: 90, genre: 'starter book'};
console.log(book1);
let book2 = {
    title: 'The stories about Sherlock Holmes', pageCount: 189,
    genre: 'detective'
};
console.log(book2);
let book3 = {title: 'Is it alive?', pageCount: 63, genre: 'tales'};
console.log(book3);

// Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.
let nameList = {
    title: 'Кобзар',
    pageCount: 551,
    genre: 'poems',
    author: [
        {
            name: 'T. G. Shevchenko',
            age: 47
        }
    ]
}
console.log(nameList);
console.log(nameList.author);

let nameList2 = {
    title: 'An old fairy tale',
    pageCount: 2,
    genre: 'poem',
    author: [
        {
            name: 'Lesya Ukrainka',
            age: 42
        }
    ]
}
console.log(nameList2);
console.log(nameList2.author);

let nameList3 = {
    title: 'Zahar Berkut',
    pageCount: 224,
    genre: 'historical novel',
    author: [
        {
            name: 'Ivan Franko',
            age: 59
        }
    ]
}
console.log(nameList3);
console.log(nameList3.author);

// Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'a', username: 'aaa', password: 123},
    {name: 'b', username: 'bbb', password: 234},
    {name: 'c', username: 'ccc', password: 345},
    {name: 'd', username: 'ddd', password: 456},
    {name: 'e', username: 'eee', password: 567},
    {name: 'f', username: 'fff', password: 678},
    {name: 'g', username: 'ggg', password: 789},
    {name: 'h', username: 'hhh', password: 890},
    {name: 'i', username: 'iii', password: 901},
    {name: 'j', username: 'jjj', password: 321},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері
// за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temperature = [
    {morning: 24, afternoon: 33, evening: 27},
    {morning: 22, afternoon: 32, evening: 26},
    {morning: 21, afternoon: 35, evening: 28},
    {morning: 23, afternoon: 36, evening: 30},
    {morning: 23, afternoon: 33, evening: 27},
    {morning: 24, afternoon: 31, evening: 28},
    {morning: 21, afternoon: 30, evening: 27},
];
console.log(temperature);
console.log(temperature[0].morning);
console.log(temperature[3].afternoon);
console.log(temperature[temperature.length - 1].evening);


// Логічні розгалуження

// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt('Enter your number')
// if (x > 0){
//     console.log('Вірно');
// } else if (x < 0){
//     console.log('Вірно');
// } else if (x === 0){
//     console.log('Невірно');
// } else {
//     console.log('???');
// }

// Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt('Enter your number from 0 to 59')
// if (time >= 0 && time <= 15){
//     console.log('1/4');
// } else if ( time >= 16 && time <= 30){
//     console.log('2/4');
// } else if ( time >= 31 && time <=45){
//     console.log('3/4');
// } else {
//     console.log('4/4');
// }


// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 12
// if ( day >=1 && day <= 10){
//     console.log('1/3');
// } else if ( day >= 11 && day <=20){
//     console.log('2/3');
// } else {
//     console.log('3/3');
// }

// Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day = prompt('Enter the serial number the day of the week');
switch (day) {
    case'1':
        console.log('Monday');
        break;
    case'2':
        console.log('Tuesday');
        break;
    case'3':
        console.log('Wednesday');
        break;
    case'4':
        console.log('Thursday');
        break;
    case'5':
        console.log('Friday');
        break;
    case'6':
        console.log('Saturday');
        break;
    case'7':
        console.log('Sunday');
        break;

    default:
        console.log('???');
}

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let number1 = 3;
let number2 = 6;
if (number1 > number2){
    console.log(number1);
} else if(number1 === number2){
    console.log(number2);
} else if(number2 > number1){
    console.log(number2);
} else {
    console.log('???')
}

//  є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"
// якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x = 0;
if (x === false || x === 0 || x === undefined || x === null || x === '') {
    x = 'default';
}
console.log(x);


// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер!')
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер!')
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер!')
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер!')
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер!')
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер!')
}