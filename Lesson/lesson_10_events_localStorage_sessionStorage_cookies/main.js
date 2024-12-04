let target1 = document.getElementsByClassName('target-1')[0];
console.log(target1);

target1.onclick = function (){
    console.log('.');
}

target1.onmouseover = function (){
    console.log('over');
}

target1.onmouseleave = function (){
    console.log('leave');
}

target1.onclick = function (){
    console.log('click');
    this.style.height='600px';
}

// міняє колір innerText
target1.onclick = function (){
    console.log('click');
    this.style.height = '400px';
    this.style.color = '#fff';
};
target1.onmouseover = function (){
    this.innerText = 'mouse over';
};
target1.onmouseleave = function (){
    this.innerText = 'mouse leave';
};
// target1.onmouseleave = function (){
//     this.innerText = 'mouse';
// };

// додавання подій / дінамічний варіант
target1.addEventListener('mouseleave', function (){
    console.log('asdqwe');
})

// подвійний клік
let target2 = document.getElementsByClassName('target-2')[0];
    console.log(target2);

target2.ondblclick = function (){
    console.log(';');
}
target2.onclick = function (){
    console.log(';');
}

// --------------form----------------

let form1 = document.forms.form1;
console.log(form1);

// form1.addEventListener('submit', function (eventObject){
//     eventObject.preventDefault();
//     console.log('submit');
//     console.log('eventObject');
// });

// модальне вікно

// let button = form1[2];
// console.log(button);
//
// button.onclick = function (){
//     document.getElementsByClassName('popup')[0].classList.toggle('show');
// };


// збирання інформації, що приходить
form1.addEventListener('submit', function (eventObject){
    eventObject.preventDefault();
    let username = this.username.value;
    let password = this.password.value;
    // console.log({username, password});
    let user = {username, password};
    console.log(user);

    // let json = JSON.stringify(user);


    // localStorage.setItem('user', JSON.stringify(user));
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));


    // localStorage.setItem('user', json);
    // console.log(json);
    // let parse = JSON.parse(json);
    // console.log(parse);
});

// localStorage______________________

// console.log(localStorage);
// localStorage.setItem('asd', 'qwe');
// localStorage.setItem('asd', 'dfg');
// localStorage.setItem('asd', 'rtyui');
// localStorage.setItem('asd', 'zxcvvb');

// console.log(localStorage.getItem('asd'));
// console.log(localStorage.getItem('wer'));



// додаткова інформація___________________
// form1.username.onclick = function (){
//     console.log(this.value);
// }

// form1.username.onclick = function (e){
//     console.log(e);
// }

// document.onmousemove = function (e){
//     console.log(e.clientX, e.clientY);
// }

document.onkeydown = function (e){
    console.log(e);
}


