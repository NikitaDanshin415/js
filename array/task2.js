"use strict";
console.log("Задание №2---------------------------------------------")
/*
ДЗ 2: Реализовать map на классических циклах под капотом
*/

  
function myMap(array, callback, isThis){

    if (typeof(callback) !== 'function'){
        return "error";
    }

    let t;

    if (isThis !== undefined){
        t = isThis;
    }

    let response = [];

    for (let i = 0; i < array.length; i++){
        response.push(callback.call(t, array[i], i, array));
    }  

    return response;
}



//Проверил с обычным массивом
let lengths = ["Bilbo", "Gandalf", "Nazgul"];

console.log(lengths.map(item => item.length)); 
console.log(myMap(lengths, item => item.length)); 



//Проверил с передачей контекста
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  
let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];
  
console.log(users.map(army.canJoin, army));
console.log(myMap(users, army.canJoin, army));