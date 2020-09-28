//ДЗ 2: Есть два хомяка. Ест один - наедаются оба. Почему? Исправить
"use strict";

const hamster = {
    stomach: ["test1"],
    eat(food) {
        this.stomach.push(food);
    },
}

const speedy = {
    __proto__: hamster,
    stomach: ["test2"],
}

const lazy = {
    __proto__: hamster,
    stomach: [],
}



speedy.eat('apple')
speedy.eat('orange')

lazy.eat('banana')

//speedy.eat(lazy)

console.log(speedy);
console.log(lazy);

