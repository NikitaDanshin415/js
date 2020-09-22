"use strict";
//ДЗ 5*: Посмотреть на класс Date и выводить новое время в консоль при наступлении новой секунды

//process.nextTick(printCurrentTime); setimmediate только в NodeJs

(function printCurrentTime(){
    let date = new Date();

    let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

    console.log(`${hours}:${minutes}:${seconds}`);
    setTimeout(printCurrentTime, 1000);
})();
