// ДЗ 3*: Попытаться по памяти воспроизвести кеш-функцию

"use strict";

const test = (a, b ) => {
    console.log(`sum (${a} + ${b})`);

    return a + b;
}

function cache(cb){

    let cached = {};

    return (...args) => {

        if ( cached[JSON.stringify(args)] ){
            return cached[JSON.stringify(args)];
        }

        cached[JSON.stringify(args)] = cb.apply(null, args);

        return cached[JSON.stringify(args)];
    }
}

const cached = cache(test);
console.log(cached(1,3))
console.log(cached(1,3))
console.log(cached(1,4))
console.log(cached(2,3))
console.log(cached(1,3))
