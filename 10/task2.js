//ДЗ 2: Есть два хомяка. Ест один - наедаются оба. Почему? Исправить
"use strict";

const hamster = {
    stomach: [],
    eat(food) {
        if(this.stomach.length === 0){
            this.stomach = [food];
        }else{
            this.stomach.push(food);
        }
    },
}

const speedy = {
    __proto__: hamster,
}

const lazy = {
    __proto__: hamster,
}


//При вызове this.stomach.push(food) js пытается найти свойство stomach в текущем объекте, но так как его там нет,
//он идет вверх к родительскому элементу и использует его.
//При вызове this.stomach = [food] js создает новое свойство stomach в текущем объекте, если его там нет, и кладет значение в него.

speedy.eat('apple')
speedy.eat('orange')

lazy.eat('banana')

//speedy.eat(lazy)

console.log(speedy);
console.log(lazy);