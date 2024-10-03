// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('block');
block.innerText = 'seasons' + ' ' + 'months of the year' + ' ';
block.classList.add('wrap');
block.classList.add('collapse', 'alpha', 'beta');
block.style.backgroundColor = 'yellow';
block.style.fontSize = '42px';
block.style.color = 'blue';

let cloneNode = block.cloneNode(true);
document.body.appendChild(block);
document.body.appendChild(cloneNode);

console.log(block);
console.log(cloneNode);



// - Є масив:
//['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let array = ['Main','Products','About us','Contacts'];
let menu = document.createElement('ul');
document.body.appendChild(menu);
menu.classList.add('menu');

for(const item of array){
    let li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}
console.log(menu);



// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for(const item of coursesAndDurationArray){
    let div = document.createElement('div');
    div.innerText = item.title + ' ' + item.monthDuration;
    document.body.appendChild(div);
}




// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for(const item of coursesAndDurationArray){
    let div = document.createElement('div');
    div.classList.add('item');

    let h1 = document.createElement('h2');
    h1.innerText = `${item.title}`;
    // div.appendChild(h1);

    let p = document.createElement('p');
    p.innerText = `${item.monthDuration}`;
    div.append(h1, p);

    document.body.appendChild(div);

}
