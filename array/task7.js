/*
ДЗ 7: Написать функцию возвращающую сумму числовых полей
const fields = {
    name: {
        type: 'string',
        value: 'Вася',
    },
    age: {
        type: 'number',
        value: 20,
    },
    bdate: {
        type: 'string',
        value: '11.09.2010',
    },
    math: {
        type: 'number',
        value: 5,
    },
    rusLang: {
        type: 'number',
        value: 4,
    },
    geometry: {
        type: 'number',
        value: 5,
    },
}
console.log(getNumbersSumm(fields))
*/
"use strict";
console.log('Задание №7---------------------------------------------');

const fields = {
    name: {
        type: 'string',
        value: 'Вася',
    },
    age: {
        type: 'number',
        value: 20,
    },
    bdate: {
        type: 'string',
        value: '11.09.2010',
    },
    math: {
        type: 'number',
        value: 5,
    },
    rusLang: {
        type: 'number',
        value: 4,
    },
    geometry: {
        type: 'number',
        value: 5,
    },
}

function getNumbersSumm(obj){
    let result = 0;

    for (let key of Object.values(obj)) {

        if (key.type === 'number'){
            result += key.value;
        }
    }

    return result; 
}

console.log(getNumbersSumm(fields));
