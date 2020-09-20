// ДЗ 1: Повторить bind используя apply

"use strict";

const obj = {
    name: 'Nick',
    age: 23,
}
function fn (greeting) {
    console.log(greeting, this.name + ' ' + this.age)
}

function bind(cb, context, ...args) {
    return (...otherArgs) => {
        return cb.apply(context, [...args, ...otherArgs]);
    }
}

const bindedFn = bind(fn, obj, 'Hi!');

bindedFn('Hi!');
