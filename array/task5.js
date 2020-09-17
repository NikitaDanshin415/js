"use strict";
console.log("Задание №5---------------------------------------------")
/*
ДЗ 5*: Реализовать filter на классических циклах под капотом (почитать про полный список аргументов. Можно почитать про call/apply)
*/

  
function myFilter(array, callback, isThis){

    if (typeof(callback) !== 'function'){
        return "error";
    }

    let t;

    if (isThis !== undefined){
        t = isThis;
    }

    let response = [];

    for (let i = 0; i < array.length; i++){
        console.log(array[i]);

        if (callback.call(t, array[i])){
            response.push(array[i]);
        }
        
    }  

    return response;
}

const cities = [
    {name: 'Moscow', population: 12506468},
    {name: 'Saint Petersburg', population: 5351935},
    {name: 'Novosibirsk', population: 1612833},
    {name: 'Kaliningrad', population: 482443},
    {name: 'Kaluga', population: 336726}
];

const millionPlusCities = cities.filter(function (e) {
    return e.population > 1000000;
  });

const millionPlusCities2 = myFilter(cities, function (e) {
    return e.population > 1000000;
  })



console.log(millionPlusCities);
console.log(millionPlusCities2);