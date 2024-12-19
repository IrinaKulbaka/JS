// Масиви та об'єкти______________________________________________________________________________

// Task 1
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [12, true, 'Okten', 'ok', 33, 'Happy new year!', 2025, 'VICTORY!',true, 'happy life!'];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// TASK 2
// - Створити 3 об'єкти, які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1={
   title: 'textbook',
   pageCount: 123,
   genre: 'education'
};
console.log(book1);

let book2={
    title: 'Kobzar',
    pageCount: 576,
    genre: 'collection'
};
console.log(book2);

let book3 ={
    title: 'Head First. Програмування на JavaScript',
    pageCount: 672,
    genre: 'directory'
};
console.log(book3);

// Task 3
// - Створити 3 об'єкти, які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title:'Життя наше — це подорож',
    pageCount: 272,
    genre:'Українська класика',
    authors:[
        {name:'Сковорода Григорій'},
        {age: 72}
    ]
}
console.log(book4);

let book5 = {
    title: 'Собор',
    pageCount: 296,
    genre: 'роман',
    author:[
        {name: 'Гончар Олесь'},
        {age: 77}
    ]
}
console.log(book5);

let book6 = {
    title:'Пес Патрон. Маленька історія про велику мрію',
    pageCount: 64,
    genre: 'Молодша школа',
    author:[
        {name: 'Живка Зоряна'},
        {age: '-'}
    ]
}
console.log(book6);


// Task 4
// - Створити масив з 10 об'єктами, які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arrUsers =[
    {
        name:'Андрій',
        username: 'Любка',
        password: 123
    },
    {
        name: 'Гаська',
        username: 'Шиян',
        password: 234
    },
    {
        name: 'Таіс',
        username: 'Золотковська',
        password: 345
    },
    {
        name: 'Іван',
        username: 'Байдак',
        password: 456
    },
    {
        name: 'Любко',
        username: ' Дереш',
        password: 567
    },
    {
        name: 'Артем',
        username: 'Чех',
        password: 678
    },

    {
        name: 'Ірена',
        username: 'Карпа',
        password: 789
    },
    {
        name: 'Павло',
        username: 'Коробчук',
        password: 890
    },
    {
        name: 'Сергій',
        username: 'Мартинюк',
        password: 321
    },
    {
        name: 'Мирослав',
        username: 'Лаюк',
        password: 432
    }
]
console.log(arrUsers[0].password);
console.log(arrUsers[1]['password']);
console.log(arrUsers[2].password);
console.log(arrUsers[3]['password']);
console.log(arrUsers[4].password);
console.log(arrUsers[5]['password']);
console.log(arrUsers[6].password);
console.log(arrUsers[7]['password']);
console.log(arrUsers[8].password);
console.log(arrUsers[9]['password']);

// Task 5
// - описати масив,
// в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
let array1 = [
    {Monday: {morning: +3, day: +6, evening: 0},
    Tuesday: {morning: +2, day: +5, evening: -1},
    Wednesday: {morning: +1, day: +4, evening: -2},
    Thursday: {morning: 0, day: +2, evening: 0},
    Friday: {morning: -1, day: +1, evening: -1},
    Saturday: {morning: +1, day: +4, evening: -1},
    Sunday: {morning: +3, day: +8, evening: +3},}
]
console.log(array1);
console.log(array1[0].Monday.morning);
console.log(array1[0].Wednesday.day);
console.log(array1[0].Sunday.evening);


// Логічні розгалуження: _________________________________________________________________________

// Task 6
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
// let x = 0;
// let x = -1;
if (x !== 0) {
    console.log('Вірно');
}else{
    console.log('Невірно');
}

// Task 7
// - Дано змінну time, яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 49;
if(time >= 0 && time <= 14){
    console.log('1/1');
}else if( time >= 15 && time <=29){
    console.log('1/2');
}else if (time >= 30 && time <= 44) {
    console.log('1/3');
}else if (time >= 45 && time <= 59) {
    console.log('1/4')
}else{
    console.log('???')
}

// Task 8
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let date = +prompt('enter the number of the day of the month 203-209');
if(date >= 1 && date <= 10){
    console.log('1/1');
}else if(date >= 11 && date <= 20){
    console.log('1/2');
}else if(date >=21 && date <= 31){
    console.log('1/3');
}else{
    console.log('???');
}

// Task 9
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let week = +prompt('enter the number of the day of the week220-241')
switch(week){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('???');
}

// Task 10
//  - Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.
let number1 = 6;
let number2 = 9;
if (number1>=number2) {
    console.log(number1);
}else if (number1<= number2) {
    console.log(number2);
}else{
    console.log('???');
}

// Task 11
//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//  Напишіть код який, буде присвоювати змінній х значення "default"
//  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false,
//  а це 0 null undefined і тд).
let x2 = ' asd';
if (x2 !== 0 && x2 !== null && x2 !== false && x2 !== NaN && x2 !== undefined && x2 !== '') {
    console.log(x2);
} else {
    console.log('default');
}
// через конвертаційні операції
let x3 = 'asd';
// let x3 =123;
console.log(!!x3);

// через заперечення
let x4 = 'qwe';
if(!x4){
    console.log('IF');
}else{
    console.log('ELSE');
}

// через switch
let answer = +prompt('прийняти будь-яке значення 279-286')
    // console.log(answer);
    switch (answer) {
        case 0:
        case '':
            console.log('default');
            break;
        case null:
        case NaN:
        case undefined:
            console.log('default');
        default:
            console.log('true');
    }

// Task 12
//  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//  За допомоги іф перевірити кожен його елемент на тривалість навчання.
//  У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log('Супер');
}
    if (coursesAndDurationArray[1].monthDuration >= 5) {
        console.log('Супер');
    }
        if (coursesAndDurationArray[2].monthDuration >= 5) {
            console.log('Супер');
        }
            if (coursesAndDurationArray[3].monthDuration >= 5) {
                console.log('Супер');
            }
                if (coursesAndDurationArray[4].monthDuration >= 5) {
                    console.log('Супер');
                }
                    if (coursesAndDurationArray[5].monthDuration >= 5) {
                        console.log('Супер');
                    }

                    // } else if(coursesAndDurationArray[0].monthDuration < 5) {
                    //     console.log('No!');
                    // } else if (coursesAndDurationArray[1].monthDuration < 5) {
                    //     console.log('No!');
                    // } else if (coursesAndDurationArray[2].monthDuration < 5) {
                    //     console.log('No!');
                    // } else if (coursesAndDurationArray[3].monthDuration < 5) {
                    //     console.log('No!');
                    // } else if (coursesAndDurationArray[4].monthDuration < 5) {
                    //     console.log('No!');
                    // } else if (coursesAndDurationArray[5].monthDuration < 5) {
                    //     console.log('No!');
                    // }else{
                    //     console.log('???')
                    // }


