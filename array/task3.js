"use strict";
console.log('Задание №3---------------------------------------------');
/*
ДЗ 3: Написать метод unique, который будет возвращать массив уникальных значений
const strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '0_o'];
alert(unique(strings)) // кришна, харе, 0_o
*/

function unique(arr){
    const response = [];

    for (let i = 0; i < arr.length; i++){
        if (response.indexOf(arr[i]) === -1 ){
            response.push(arr[i]);
        }
    }
    
    return response;

    //Можно сделать через коллекцию уникальных значений set : return Array.from(Set(arr));
}

const strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '0_o'];
console.log(unique(strings)) 