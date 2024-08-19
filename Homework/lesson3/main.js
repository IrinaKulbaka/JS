// -------------------ЦИКЛИ------------------

// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if(coursesAndDurationArray[0].monthDuration > 5){
//     console.log('Супер!')
// }
// if(coursesAndDurationArray[1].monthDuration > 5){
//     console.log('Супер!')
// }
// if(coursesAndDurationArray[2].monthDuration > 5){
//     console.log('Супер!')
// }
// if(coursesAndDurationArray[3].monthDuration > 5){
//     console.log('Супер!')
// }
// if(coursesAndDurationArray[4].monthDuration > 5){
//     console.log('Супер!')
// }
// if(coursesAndDurationArray[5].monthDuration > 5){
//     console.log('Супер!')
// }



// for (let i = 0; i < 6; i++)
// if(coursesAndDurationArray[i].monthDuration > 5){
//     console.log('Супер!')
// }

// або можна if не прописувати:
//     for (let i = 0; i < coursesAndDurationArray.length; i++){
//             console.log(coursesAndDurationArray[i]);
//         }

// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     const coursesAndDurationArrayElement = coursesAndDurationArray[i];
//
// }


// пояснення про цикл

// for==========
// for (let counter = 0; counter < 5; counter++ ){
//     console.log('.')
// }
//
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     const element = coursesAndDurationArray[i];
//     console.log(element);
// }
// console.log('********************')
// for (let i = coursesAndDurationArray.length - 1; i >= 0; i--) {
//     const element = coursesAndDurationArray[i];
//     console.log(element);
// }



// for of ==============

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4},
//     {title: 'JavaScript Complex', monthDuration: 425},
//     {title: 'Java Complex', monthDuration: 678},
//     {title: 'Python Complex', monthDuration: 326},
//     {title: 'QA Complex', monthDuration: 445},
//     {title: 'FullStack', monthDuration: 768},
//     {title: 'Frontend', monthDuration: 407},
// ];
//
// for (const courses of coursesAndDurationArray){
//     console.log(courses);
// }


// for in ==========================

let user = {
    id: 1,
    name: 'kokos',
    age: 123,
}
for (const userKey in user) {
    // console.log(userKey);
    // console.log(user[userKey]);
    console.log(userKey, user[userKey]);
}




