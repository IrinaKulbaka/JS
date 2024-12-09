// alert("hello");
console.log('консоль --- це функція');

    // Процес декларації змінної:
// let glass;

    // Процес ініціалізації змінної:
let glass = 100500;

    // Процес реініціалізації змінної:
glass =200600;
console.log(glass);

// Блок ініціалізації
//                       {
//
//                       }

// {
//     let a = 100;
//     var b = 200;
// }
// // console.log(a);
// console.log(b);

const PI = 3.14;
// PI = 333;   !!!
console.log(PI);

// Типи змінних_____________________________________________________
// number
let num1 = 123;

// string
let word = 'JS';
word = "TipeScript, php,java";
// word = `hello`;  темплейт стрінга

// boolean
let bool = true;
bool = false;

// строгий режим
'use strict'
asd = 123;
console.log(asd);

// Операції з числами

let x = 10;
let y = 20;
let result1 = x + y;
console.log(result1);
let result2 = x - y;
console.log(result2);
let result3 = x * y;
console.log(result3);
let result4 = x / y;
console.log(result4);

let result = x + y +123;
console.log(result);

// ділення по модулю / вичавлення остачі (%)
console.log(10%3);
console.log(10%2);
console.log(10%5);

// Операції зі strings
let word1 = 'Hello';
let word2 = 'Okten';
let word3 = '!!!'
let spase = ' ';
// __________конкатенація________________
// let result5 = word1 + spase + word2;
let result5 = word1 + ' ' + word2;
console.log(result5);

let result6 = word1 + spase + word2 + spase + word3;
console.log(result6);
// інтерполяція ---  ${}
let result7 = `${word1} ${word2} ${word3}`;
console.log(result7);

// __________оператор typeof_____________
console.log(typeof word1);
console.log(typeof x);
console.log(typeof bool);
let xx = undefined;
console.log(undefined);
let xxx = null;
console.log(null);

// Операції з булевими значеннями
let bool1 = true;
let bool2 = false;
let result8 = bool1 + bool2;
console.log(result8);
console.log(bool1 + bool1);
console.log(100 + true);
console.log(100 - false);
console.log(100 - true);
console.log(100/false);

// Конвертаційні операції_____________________________________
   // convertation number

// string => number*************
let str1 = '100';
console.log(+str1);
console.log(typeof +str1);
// number => string*************
let num = 300;
console.log(num);
console.log(300 + '');
console.log(typeof (300 + ''));

   // convertation boolean

// number => boolean
console.log(typeof !!100);
// string => boolean
console.log(typeof  !!'');

// true**************************
console.log(!!100);
console.log(!!' ');
// false*************************
// 1
console.log(!!0);
// 2
console.log(!!'');
// 3
console.log(!!undefined);
// 4
console.log(!!null);
// 5
console.log(!!100/' ');
console.log(!!(''/[]));
console.log(!!NaN);
// 6 / ?
console.log(!!false);

// true
console.log(!!'0');
// false
console.log(!!+'0');
console.log(!!(+'0'));
// true
console.log(!![]);

   // convertation string
// 300
console.log(100 + 200 + '');
// 100200
console.log('' + 100 + 200);

// ________prompt() /отримання данних(іртерактив)___________________
// функція, яка формує модальне вікно
// prompt();
let answer = prompt();
console.log(answer);
// string
// console.log(typeof answer);
// number
// console.log(typeof +answer);
// boolean
console.log(typeof !!answer);


