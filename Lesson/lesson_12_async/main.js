// Синхронні та асинхронні операції______________________________
setTimeout(()=> {
    console.log('timeout');
}, 90);

console.log('start');
console.log('end');

let intervalId = setInterval(()=> {
    console.log('interval');
}, 1000);
clearInterval(intervalId);   // на кнопку це потрібно ставити

fetch ('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(value => {
console.log('users');
});

// Callback Hell  або пекло зворотнього виклику__________________
setTimeout(() => {
    console.log('operation 1');

    setTimeout(() =>{
        console.log('operation 2');

        setTimeout(() => {
            console.log('operation 3');

            setTimeout(() => {
                console.log('operation 1');

                setTimeout(() =>{
                    console.log('operation 2');

                    setTimeout(() => {
                        console.log('operation 3');
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}, 100);

// Promise_______________________________________________________
// let promise = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('hello 1');
//         resolve();
//     },900);
// });
// let promise2 = promise.then(() => {
//     return new Promise((resolve) =>{
//     setTimeout(() => {
//         console.log('hello 2');
//         resolve();
//     }, 900);
//     });
// });
// promise2.then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('hello 3');
//             resolve();
//         }, 900);
//     });
// });

 new Promise((resolve) => {
    setTimeout(() => {
        console.log('hello 1');
        resolve();
    },900);
})
     .then(() => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log('hello 2');
            resolve();
        }, 900);
    });
})
     .then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('hello 3');
            resolve();
        }, 800);
    });
});

 // Приклад зі змінною____________________________________________
new Promise((resolve) => {
    let x = 0;
    setTimeout(() => {
        ++x;
        console.log('operation 1', x);
        resolve(x);
    }, 2700);
}).then((xx) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        ++xx;
        console.log('operation 2', xx);
        resolve(xx);
    }, 2700);
    });
}).then((xxx) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            ++xxx;
            console.log('operation 3', xxx);
            resolve(xxx);
        }, 2700);
    });
});

fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then (objects => {

    });

// let a = 0;
// fetch("http://jsonplaceholder.typicode.com/products")
//     .then(value => value.json())
//     .then (value => {
//         ++a;
//         console.log(a);
//
//     }).then(value => {
//         ++a;
//     console.log(a);
//     }).then(value => {
//         ++a;
//     console.log(a);
// })
// console.log(a);


// Залежні операції (асинхронні)__________________________________

// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(value => value.json())
//     .then(user => {
//             return new Promise((resolve) => {
//             fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
//                 .then(value => {
//                     resolve(value);
//                 })
//
//             })
//     })
//     .then(response => response.json())
//     .then(value => console.log(value));

//
// ___________________Контрольна робота________________________________

// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(value => value.json())
//     .then(user => {
//             return new Promise((resolve) => {
//             fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
//                 .then(value => {
//                     resolve(value);
//                 })
//
//             })
//     })
//     .then(response => response.json())
//     .then(posts =>{
//         for (const post of posts) {
//             fetch('https://jsonplaceholder.typicode.com/comments?postId='+ post.id)
//                 .then(value => value.json())
//                 .then(value => {
//                     console.log(value);
//                 })
//
//         }
//     });


// Залежні операції (асинхронні)__________________________________
// Робимо код вишуканішим (якщо це - інлайнова дія)_______________

// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(value => value.json())
//     .then(user => fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id))
//     .then(response => response.json())
//     .then(value => console.log(value));

// ___________async___await__________________________________________
function fetchPostsOfUser1(userId){
    fetch('https://jsonplaceholder.typicode.com/users/'+userId)
        .then(value => value.json())
        .then(user => fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id))
        .then(response => response.json())
        .then(value => console.log(value));
}
fetchPostsOfUser1(1);
fetchPostsOfUser1(2);
fetchPostsOfUser1(3);


// async function fetchPostsOfUser(userId){
//     // await fetch('https://jsonplaceholder.typicode.com/users/'+userId).then(value => value.json());
//     let response = await fetch('https://jsonplaceholder.typicode.com/users/'+userId);
//     let user = await response.json();
//     let response2 = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+user.id);
//     let posts = await response2.json();
//     console.log(posts);
//
// }
// fetchPostsOfUser(4);
// fetchPostsOfUser(5);
// fetchPostsOfUser(6);

// Скорочений варіант____________________________________________
async function fetchPostsOfUser(userId){
    // await fetch('https://jsonplaceholder.typicode.com/users/'+userId).then(value => value.json());
    let user = await fetch('https://jsonplaceholder.typicode.com/users/'+userId).then(value => value.json());
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+user.id).then(value => value.json());
    console.log(posts);
    // return new Promise((resolve) =>{
    //     resolve(true);
    // });
    return true;
}
fetchPostsOfUser(4);
fetchPostsOfUser(5);
fetchPostsOfUser(6);

// Статуси промісів_____________________________________________
console.log(fetch('https://jsonplaceholder.typicode.com'));
new Promise((resolve) => {
    let x = 0;
    setTimeout(() => {
        ++x;
        console.log('operation 1', x);
        resolve(x);
    }, 2700);
}).then((xx) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            ++xx;
            console.log('operation 2', xx);
            resolve(xx);
        }, 2700);
    });
}).then((xxx) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ++xxx;
            console.log('operation 3', xxx);
            if(xxx = 3){
                // throw new Error('aaaaaaaaaaa');
                reject('aaaaaaaaaaaaaaaa')

            }
            resolve(xxx);
        }, 2700);
    })
        .then(value => value)
        .catch(reason => console.log(reason));
});


// Статичні методи_______________________________________________
Promise.race([fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()),
                     fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json())
])
    .then(value => console.log(value));

Promise.all([fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()),
                    fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json())
])
    .then(value => console.log(value));
