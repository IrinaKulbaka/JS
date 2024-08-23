// function square (a,b){
//     let s = a * b;
//     return s;
// }
// let result = square(10,30);
// console.log(result);
//
// let res2 = square(4,87);
// console.log(res2);

// function square (a, b){
//     let s = a * b;
//     return s;
// }
// let result = square(60,30);
// console.log(result);
//
// let res2 = square(9,12);
// console.log(res2);

// function square (a,b){
//     let s = a * b;
//     return s;
// }
// let result1 = square(12, 23);
// console.log(result1);
//
// let result2 = square(45,24);
// console.log(result2);

// function square (a, b){
//     let s = a * b;
//     return s;
// }
// let result4 = square(3,4);
// console.log(result4);
//
// let res5 =square(5,6);
// console.log(res5);
//
// function square (a, b){
//     let s = a * b;
//     return s;
// }
// let result6 = square(6, 7);
// console.log(result6);
//
// let res7 =square(7,8);
// console.log(res7);
//
// function square (a,b){
//     let s = a * b;
//     return s;
// }
// let res8 = square(8,9);
// console.log(res8);
//
// let res9 = square(3,9);
// console.log(res9);
//
// function square (a, b){
//     let s = a * b;
//     return s;
// }
// let result10 = square(22,33);
// console.log(result10);

function square (sideA, sideB){
    // let square = sideA * sideB;
    return square = sideA * sideB;
}
let res11 = square(11,22);
console.log(res11);

function square (sideA, sideB){
    if (sideA > 0 && sideB > 0){
        return sideA * sideB;
    }
   return 0;
}
let result12 = square(-3, 30);
console.log(result12);

let result13 = square (23,34);
console.log(result13);




// виклик масивів однією функцією

let arrA = [1,2,3];
let arrB = [11,22,33];
let arrC = [111,222,333];

function arrayPrinter (arr){
    for (const arrElememt of arr){
        console.log(arrElememt);
    }
}
arrayPrinter(arrA);
arrayPrinter(arrB);
arrayPrinter(arrC);
