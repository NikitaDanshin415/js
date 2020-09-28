//ДЗ 1: Что выведется?

"use strict"

const animal = {
    jumps: null,
}
const rabbit = {
    __proto__: animal,
    jumps: true,
}

console.log(rabbit.jumps) // true - Так как у объекта rabbit переопределено поле jumps (1)
delete rabbit.jumps

console.log(rabbit.jumps) // null - После удаления поля jumps из объекта rabbit, при таком вызове будет выводиться унаследованное от animal значение (2)
delete animal.jumps

console.log(rabbit.jumps) // undefined - Поле удалено из базового класса animal и из дочернего класса rabbit, при вызове несуществующего поля, вернет Undefined(3)



