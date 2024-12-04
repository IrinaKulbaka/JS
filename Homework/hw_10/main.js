// TASK 1
// Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// console.log(document.getElementById('btn'));
const buttons = document.getElementsByTagName('button');
const button = buttons[0];

button.onclick = function () {
    // document.getElementById('text').remove();
    document.getElementById('text').style.display = 'none';
    document.getElementById('text').style.height = 0;
    document.getElementById('text').style.fontSize = 0;

};


// TASK 2
// - створити інпут, який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

console.log(document.getElementsByTagName('input'));

let form1 = document.forms.form1;
let result = document.getElementById('result');
form1.addEventListener('submit', function (eventObject) {
    eventObject.preventDefault();
    let value = form1.age.value;
    if (value > 18) {
        result.innerText = 'adult';
    } else {
        result.innerText = 'child';
    }

});


// TASK 3
// Стоврити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const someForm = document.forms.someForm;

const target = document.getElementById('target');

someForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = +someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    console.log(obj);
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
});


// TASK 4
// є сторінка, на якій є блок, в  якому знаходиьтся цифра.
// Написати код, який при кожному перезавантаженні сторінки буде додавати до неї +1

let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);

document.getElementById('block').innerText = currentNumber;

// TASK 5
// Є сторінка index.html (назва довільна),
// при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація
// про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM

// let sessionsList = JSON.parse(localStorage.setItem('sessionsList'));

// 1 спосіб
// let sessionsList;
// if(localStorage.getItem('sessionsList')){
//     sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
// }else{
//     sessionsList = [];
// }
// sessionsList.push(new Date());
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

// 2 спосіб/скоротили

// let sessionsList = [];
// if(localStorage.getItem('sessionsList')){
//     sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
// }
// sessionsList.push(new Date());
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

// 3 спосіб/скорочений запис

let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

// TASK 6
// створити конвертор ваги з кг в фунти.
// данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

// const input = document.getElementById('xxx');
// let resultDiv = document.getElementById("resultPounds");

// input.oninput = function (){
//     // *2.2
//     const kilos = +this.value;
//     let result = kilos * 2.2;
//     resultDiv.innerText = result;
// };

// скорочуємо:
// const input = document.getElementById('xxx');
// let resultDiv = document.getElementById("resultPounds");
//
// input.oninput = function (){
//     // *2.2
//     const kilos = +this.value;
//     resultDiv.innerText = kilos * 2.2;
// };

// і скорочуємо далі:
const input = document.getElementById('xxx');
let resultDiv = document.getElementById("resultPounds");

// *2.2
input.oninput = function () {
    resultDiv.innerText = +this.value * 2.2;
};

// TASK 7
// В localStorage зберігаються масиви.
// Вам потрібно зробити функцію, якa дістає потрібний вам масив з localStorage
// та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName, objToAdd) {
//     const lsItem = localStorage.getItem(arrayName);
//     if (!lsItem) {
//         throw new Error('there is no such array');
//         //видавати нову помилку: "такого масиву не має"
//     }
//     const array = JSON.parse(lsItem);
//     if (typeof objToAdd === 'object') {
//         array.push(objToAdd);
//     }
//     const jsonArray = JSON.stringify(array);
//     localStorage.setItem('arrayName', jsonArray);
// }
//
// addToLocalStorage('sessionsList', {});



function addToLocalStorage(arrayName,objToAdd){
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('there is no such array');
        //видавати нову помилку: "такого масиву не має"

    }
    const array = JSON.parse(lsItem);
    if(typeof objToAdd === 'object'){
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionsList',{});



//     function addToLocalStorage(arrayName, objToAdd) {
//     const lsItem = localStorage.getItem(arrayName);
//     if (!lsItem) {
//     throw new Error('there is no such array');
// }
//
//     const array = JSON.parse(lsItem);
//     if (typeof objToAdd === 'object') {
//     array.push(objToAdd);
// }
//     localStorage.setItem(arrayName, JSON.stringify(array));
//
// }
//
//     // localStorage.setItem('sessionsList', JSON.stringify([]));
//     addToLocalStorage('sessionsList', {});

// TASK 8
// Створити 3 інпута та кнопку.
// Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const table = document.getElementById('table');

const tableGeneratorForm = document.forms['tableGeneratorForm'];


tableGeneratorForm.onsubmit = function (e){
    table.innerText = '';
    e.preventDefault();
    const linesValue = +tableGeneratorForm.lines.value;
    const cellsValue = +tableGeneratorForm.cells.value;
    const dataValue = tableGeneratorForm.data.value;
    console.log(linesValue, cellsValue, dataValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }
    }
};

// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження,
// які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів














