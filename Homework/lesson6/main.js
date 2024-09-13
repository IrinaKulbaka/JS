let arr = [];
console.log(Array.isArray(arr));

// push
arr.push('asdasd1');
arr.push('asdasd2');
let number = arr.push('asdasd3');
arr.push('asdasd4');
arr.push('asdasd5');
console.log(arr);
console.log(number);

// pop
let pop = arr.pop();
console.log(arr);
console.log(pop);

// unshift
arr.unshift('qweqwe');
console.log(arr);

// shift
arr.shift();
console.log(arr);

// join
let s = arr.join();
console.log(s);

let str = arr.join('!');
console.log(str);

let string = arr.join('');
console.log(string);

let string1 = arr.join('(.)(.)');
console.log(string1);

let string2 = arr.join('- - -');
console.log(string2);

// concat


