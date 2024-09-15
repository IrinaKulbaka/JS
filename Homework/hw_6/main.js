// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let s1 = 'hello world';
console.log(s1);
console.log(s1.length);

let s2 = 'lorem ipsum';
console.log(s2);
console.log(s2.length);

let s3 = 'javascript is cool';
console.log(s3);
console.log(s3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.toUpperCase());

let str2 = 'lorem ipsum';
console.log(str2.toUpperCase());

let str3 = 'javascript is cool';
console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let string1 = 'HELLO WORLD';
console.log(string1);
console.log(string1.toLowerCase());

let string2 = 'LOREM IPSUM';
console.log(string2);
console.log(string2.toLowerCase());

let string3 = 'JAVASCRIPT IS COOL';
console.log(string3);
console.log(string3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let s = str.trim();
console.log(s);
console.log(str.length);
console.log(s.length);



// let str =  ' dirty string   ';
// console.log(str);
// console.log(str.indexOf('d'));
// console.log(str.indexOf('g'));
// console.log(str.substring(1,12));

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
    // let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str4 = 'Ревуть воли як ясла повні';
let stringToArray = str4.split(' ');
console.log(stringToArray);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
//     за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const strings = numbers.map(number => number + '');
console.log(strings);

// Це для закріплення, як варіант
const array = [1,2,3,4,-5,6,-7,8,9];
const newArr = array.map(number => number.toString());
console.log(newArr);



// let map = new Map ();
// console.log(map);
// map.set(10,'10');
// map.set(8,'8');
// map.set(-7,'-7');
// map.set(55,'55');
// map.set(987,'987');
// map.set(-1011,'-1011');
// map.set(0,'0');
// map.set(1050,'1050');
// map.set(0,'0');
// console.log(map);


// - створити функцію sortNums(array,direction), яка прймає масив чисел,
//     та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
nums.sort((num1,num2) =>{
    return num1 - num2;
});
console.log(nums);

nums.sort((num1,num2) =>{
    return num2 - num1;
});
console.log(nums);


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let m =  coursesAndDurationArray.sort((a,b) =>b.monthDuration -a.monthDuration)
console.log(m);

let m1 = coursesAndDurationArray.filter(value => value.monthDuration >5);
console.log(m1);

let m2 = coursesAndDurationArray.map((value, index) => ({...value, id: index + 1}));
console.log(m2);


// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

const suits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6','7','8','9','10','jack','queen','king','ace'];

const cards = [];
for(const suit of suits){
    for (const value of values){
        const card = {cardSuit:suit,value: value};
        if (suit === 'diamond' || suit === 'heart'){
            card.color = 'red';
        }else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

// - знайти піковий туз
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));

// - всі шістки
console.log(cards.filter(card => card.value === '6'));

// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));

// - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
// let club = cards;
// cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9'));
// document.write(club);

console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//      spades:[],
//      diamonds:[],
//      hearts:[],
//      clubs:[]
// }

let block = cards.reduce((accumulator, card) => {
    switch (card.cardSuit){
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }
    return accumulator;
},{
      spades:[],
      diamonds:[],
      hearts:[],
      clubs:[]
});

console.log(block);


// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react',
            'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(courses => {
    return courses.modules.includes('sass');
}));
console.log(coursesArray.filter(courses => {
    return courses.modules.includes('docker');
}));