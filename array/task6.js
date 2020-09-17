"use strict";
console.log('Задание №6---------------------------------------------');
/*
ДЗ 6*: Написать метод shuffle, который перемешивает массив
*/

function shuffle(arr) {
    let copyArr = arr.slice();

    return copyArr.sort(
        function(){ 
            return Math.random() - 0.5;
        }
    )
};


let a = [1,2,3,4,5,6,7,8,9];

console.log(shuffle(a));
console.log(shuffle(a));
console.log(shuffle(a));
console.log(shuffle(a));
console.log(shuffle(a));
