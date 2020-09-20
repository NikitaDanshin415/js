// ДЗ 2*: Написать call (можно без доп. параметров. Только функция и контекст) без использования bind/call/apply

"use strict";

function myCall(context, cb, ...args){
    let contextClone = {...context};
    contextClone.foo = cb;

    return contextClone.foo(...args)
}

function showFullName() {
    console.log( this.firstName + " " + this.lastName);
}

let user = {
    firstName: "Василий",
    lastName: "Петров"
};



// функция вызовется с this=user
showFullName.call(user) // "Василий Петров"

myCall(user, showFullName);
console.log(user)