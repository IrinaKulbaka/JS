// - За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом всередині

let flowers = [
    {
        name: 'Rose'
    },
    {
        name: 'Tulip'
    },
    {
        name: 'Poppy'
    },
    {
        name: 'Violet'
    },
    {
        name: 'Daisy-wheel'
    },
    {
        name: 'Bluebell'
    },
    {
        name: 'Dandelion'
    },
    {
        name: 'Aster'
    },
    {
        name: 'Lilac'
    },
    {
        name: 'Snowdrop'
    }
];
for (const flower of flowers){
    document.write(`<div><h2>${flower.name}</h2></div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом
// і індексом всередині

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
for (const insect of insects){
    document.write(`<div> <h2>${insect.id} ${insect.name}</h2></div>`);
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let birds = [
//     {
//       name: 'Sparrow'
//     },
//     {
//         name: 'Swallow'
//     },
//     {
//         name: 'Lark'
//     },
//     {
//         name: 'Titmouse'
//     },
//     {
//         name: 'Pigeon'
//     },
//     {
//         name: 'Eagle'
//     },
//     {
//         name: 'Owl'
//     },
//     {
//         name: 'Crow'
//     },
//     {
//         name: 'Cuckoo'
//     },
//     {
//         name: 'Quail'
//     },
//     {
//         name: 'Swan'
//     },
//     {
//         name: 'Heron'
//     },
//     {
//         name: 'Duck'
//     },
//     {
//         name: 'Cock'
//     },
//     {
//         name: 'Stork'
//     },
//     {
//         name: 'Hummingbird'
//     },
//     {
//         name: 'Parrot'
//     },
//     {
//         name: 'Pheasant'
//     },
//     {
//         name: 'Turkey'
//     },
//     {
//         name: 'Peacock'
//     }
// ];
// let i = 0;
// while (i < birds.length){
//     document.write(`<div><h1>${birds[i].name}</h1></div>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом
// і індексом всередині.

// let birds = [
//     {
//         id: 1,
//         name: 'Sparrow'
//     },
//     {
//         id: 2,
//         name: 'Swallow'
//     },
//     {
//         id: 3,
//         name: 'Lark'
//     },
//     {
//         id: 4,
//         name: 'Titmouse'
//     },
//     {
//         id: 5,
//         name: 'Pigeon'
//     },
//     {
//         id: 6,
//         name: 'Eagle'
//     },
//     {
//         id: 7,
//         name: 'Owl'
//     },
//     {
//         id: 8,
//         name: 'Crow'
//     },
//     {
//         id: 9,
//         name: 'Cuckoo'
//     },
//     {
//         id: 10,
//         name: 'Quail'
//     },
//     {
//         id: 11,
//         name: 'Swan'
//     },
//     {
//         id: 12,
//         name: 'Heron'
//     },
//     {
//         id: 13,
//         name: 'Duck'
//     },
//     {
//         id: 14,
//         name: 'Cock'
//     },
//     {
//         id: 15,
//         name: 'Stork'
//     },
//     {
//         id: 16,
//         name: 'Hummingbird'
//     },
//     {
//         id: 17,
//         name: 'Parrot'
//     },
//     {
//         id: 18,
//         name: 'Pheasant'
//     },
//     {
//         id: 19,
//         name: 'Turkey'
//     },
//     {
//         id: 20,
//         name: 'Peacock'
//     }
// ];
// let i = 0;
// while (i < birds.length) {
//     document.write(`<div><h1>${birds[i].id} ${birds[i].name}</h1></div>`);
//     i++;
// }

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

//     let listOfItems = [{
//         name: 'html'
//         },
//         {
//          name: 'javascript'
//         },
//         {
//             name:  'mysql'
//         },
//         {
//             name: 'mongodb'
//         },
//         {
//             name: 'react'
//         },
//         {
//             name: 'angular'
//         },
//         {
//             name: 'node.js'
//         }
//     ];
// for ( const item of listOfItems){
//     document.write(`<ul><li>${item.name}</li></ul>`);
// }

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

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
    }
];
for (const product of products){
    document.write(
        `<div class = "product-card">
              <h3 class="product-title">${product.title} <br> Price - ${product.price}</h3>
              <img src="${product.image}" alt="${product.title}" class="product-image">
             </div>`);
}


// є масив

// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


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
let i = 0;
while (i < users.length){
    let user = users[i];
    if (user.status) {
        document.write(`<div><h3>${user.status} - ${user.name}</h3></div>`)
    }
        i++;
}

let l = 0;
while (l < users.length){
    let user = users[l];
    if (!user.status) {
        document.write(`<div><h3>${user.status} - ${user.name}</h3></div>`)
    }
    l++;
}

let num = 0;
while (num < users.length){
    let user = users[num];
    if (user.age > 30) {
        document.write(`<div><h3>${user.age} - ${user.name}</h3></div>`)
    }
    num++;
}

