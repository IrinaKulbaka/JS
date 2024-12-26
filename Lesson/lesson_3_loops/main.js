// Операція інкрементація та декрементація________________________________
// Інкрементація_____________________________
let a = 0;
// збільшення на 1:
// __________postfix:
a++;

// аналог запису:
a = a + 1;

// збільшенння на любе число:
// a = a + 123;
// a = a + 500;
a += 1;
a += 2;
a += 100500;

// __________prefix:
++a;
console.log(a);

let b = a++;
console.log(a);
console.log(b);

let b1 = ++a;
console.log(a);
console.log(b1);

// Декрементація_____________________________
// __________postfix:
a--;

a = a - 1;
a = a - 2;
a -= 1;
a -= 690;
a = a - 100500;
a = a / 2;
a = a * 3;

// __________prefix:
--a;
console.log(a);
let c = a;
console.log(c);

// Цикли______________________________________
// ____________________for_______________________
console.log('_______________for_________________');
for (let counter = 0; counter < 5; counter++) {
    console.log('.');
    console.log(counter);
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
    {title: 'Frontend', monthDuration: 4},
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    console.log(coursesAndDurationArray[i]);
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log('super!');
    }
}

// itar_____________________________
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const element = coursesAndDurationArray[i];
    console.log(element, '***');
    element.title = "hello";
    console.log(element);
}

console.log('*********************');
// ritar_____________________________
for (let i = coursesAndDurationArray.length - 1; i >= 0; i--) {
    const element = coursesAndDurationArray[i];
    console.log(element);
    if (element.monthDuration <= 5) {
        console.log('no!')
    } else if (element.monthDuration > 5) {
        console.log('Super!');
    }
}

// вибіркове виведення/цикл з діапозонним обмеженням_________
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const element = coursesAndDurationArray[i];
    if ((i > 1 && i < 5 || i > 8 && i < 10)) {
        console.log(element);
    }
}

// ____________________for of____________________
console.log('_________________for of____________________');
for (const item of coursesAndDurationArray) {
    console.log(item);
}

// iter
for (const course of coursesAndDurationArray) {
    if (course.monthDuration > 3) {
        console.log('ok');
    }
}

// ітерування об'єктів {}________________________________
console.log('________________for in______________');
// itin
let user = {
    id: 1,
    name: 'Kokos',
    age: 123,
};
for (const userKey in user) {
    console.log(userKey);
    console.log(user [userKey]);
    console.log(userKey, user[userKey]);
}

let user2 = {
    id: 2,
    name: 'Kokos2',
    age: 12,
    surname: 'Shevchenco',
    skills: ['html', 'js', 'java'],
};
for (const user2Key in user2) {
    console.log(user2Key, user2[user2Key]);
    if (Array.isArray(user2[user2Key])) {
        for (const user2KeyElement of user2[user2Key]) {
            console.log(user2KeyElement);
        }
    }
}

// _____________________while_____________________
console.log('__________________while___________________');
let i = 0;
while (i < 10) {
    console.log('while');
    i++;
}

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

let ind = 0;
while (ind < users.length) {
    console.log(users[ind]);
    ind++;
}
console.log('_______________________');
let ind2 = 2;
while (ind2 < users.length - 2) {
    console.log(users[ind2]);
    ind2++;
}
console.log('sdfg \n vhbjnm');

// додавання нового елемента в масив в процесі ітерації___________
let arrTrue = [];
let arrFalse = [];

let ind3 = 0;
while (ind3 < users.length) {
    let user = users[ind3];
    if (user.status) {
        // arrTrue[arrTrue.length] = user;
        arrTrue.push(user);
    } else {
        arrFalse[arrFalse.length] = user;
        // arrFalse.push(user);
    }
    ind3++;
}
console.log(arrTrue);
console.log(arrFalse);

// ____________________do while______________________
console.log('_________________do while__________________');
do {
    console.log('спочатку виконає те, щонаписано в тілі do')
} while (false)
{
    console.log('це цикл з предвиконанням, можливою предперевіркою');
}


// Приклад___document.write('')_____________________
console.log('______________document.write______________');

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
document.write('produkts');
document.write({});
document.write(`<h2>HELLO!</h2>`);

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const simpson of simpsons) {
    document.write(
        `<div class = "box">
              <h2>${simpson.name} ${simpson.surname}, вік - ${simpson.age}</h2>
              <img src="${simpson.photo}" alt="${simpson.name} ${simpson.surname}">
              <p>${simpson.info}</p>

        </div>`);
}
document.write('<div>');
// ______________
document.write('</div>');
