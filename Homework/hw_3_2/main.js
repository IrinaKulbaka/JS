// TASK 1___________________________________________________
// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    document.write(`<div>
                      <h3>${user.name} - вік${user.age}</h3>
                    </div>`)
}

// TASK 2___________________________________________________
// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом
// і індексом всередині
for (let i = 0; i < users.length; i++ ) {
    document.write(`<div>
                         <p>${i}</p>
                         <h3>OKTEN</h3>       
                  </div>`)
}

// TASK 3___________________________________________________
// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


let greeting = 0;
while(greeting < 20){
    document.write(`<div>
                         <h1>Merry Christmas</h1>
                    </div>`
    )
    greeting++;
    }

// TASK 4______________________________________________________
//  #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let greeting2 = 0;
while(greeting2 < 20){
    document.write(`<div>
                         <h1>Happy new year! ${greeting2}</h1>
                   </div>`)
    greeting2++;
}

// TASK 5_________________________________________________
//   #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву, щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const item of listOfItems) {
    document.write(`<ul>
                        <li>${item}</li>
                    </ul>`)
}

// TASK 6_______________________________________________
// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту, які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
   document.write(`<div class = "product-card">
                       <h3 class = "product-title">${product.title} Price - ${product.price}</h3>
                       <img src="${product.image}" alt="${product.title}" class ="product-image">
                       
                  </div>`)
}
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
//     <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


// TASK 7________________________________________________
// #4WrHwFTEop0
// є масив
let users2 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів, які старші за 30 років

let arrTrue =[];
let arrFalse = [];
// let arrAge = [];

let i = 0;
while(i < users2.length){
    let user = users2[i];
    if(user.status){
        arrTrue[arrTrue.length] = user
    }else if(user.status === false){
        arrFalse[arrFalse.length] = user
    }
    i++;
}
console.log(arrTrue);
console.log(arrFalse);

for (const user of users2) {
    if (user.age > 30) {
        console.log(user);
    }
}

