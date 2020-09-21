"use strict";
//ДЗ 4: Написать таймер, которые будут выводить часы, минуты и секунды,
//где за каждый тип (час, мин, сек) будет отвечать свой таймер. Вывод в консоль

let sec = 0;
let minute = 0;
let hour = 0;

function getCurrentNum(num){
    if (num > 9){
        return num;
    }
    return "0"+num;
}

function checkSec(){
    console.log(`${hour}:${getCurrentNum(minute)}:${getCurrentNum(++sec)}`)
}

function checkMinute(){
    sec = -1;
    minute++;
}

function checkHour(){
    minute = -1;
    hour++;
}

const timerSec = setInterval(checkSec, 1000);
const timerMinute = setInterval(checkMinute, 60 * 1000);
const timerHour = setInterval(checkHour, 60 * 60 * 1000);
