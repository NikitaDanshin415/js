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

function getSec(){
    sec++;
}

function getMinute(){
    sec = -1;
    minute++;
}

function getHour(){
    minute = -1;
    hour++;
}

function printTime(){
    console.log(`${hour}:${getCurrentNum(minute)}:${getCurrentNum(sec)}`)
}

setInterval(getSec, 1000);
setInterval(getMinute, 60 * 1000);
setInterval(getHour, 60 * 60 * 1000);

setInterval(printTime,1000);
