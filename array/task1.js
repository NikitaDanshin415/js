"use strict";
console.log('Задание №1---------------------------------------------');
/*
ДЗ 1: Написать функцию getInitials(fio)
'Леонтьев Сергей Дмитриевич' => 'ЛСД'
*/

function getInitials(fio){
    let arr = fio.split(' ');

    return arr[0][0] + arr[1][0] + arr[2][0];
}


console.log(getInitials('Леонтьев Сергей Дмитриевич'));