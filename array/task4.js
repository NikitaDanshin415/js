"use strict";
console.log("Задание №4---------------------------------------------")
/*
ДЗ 4*: Реализовать reduce на классических циклах под капотом
*/

  
function myReduce(array, callback, isThis){

    if (typeof(callback) !== 'function'){
        return "error";
    }

    let t;

    if (isThis !== undefined){
        t = isThis;
    }

    let response = array[0];

    for (let i =1; i < array.length; i++){
        response = callback.call(t, response, array[i], i, array)
    }  

    return response;
}


let arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((sum, current) => sum + current, 0));
console.log( myReduce(arr, (sum, current) => sum + current) );



let test = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});

let test2 = myReduce([[0, 1], [2, 3], [4, 5]], function(a, b) {
    return a.concat(b);
});

console.log(test);
console.log(test2);