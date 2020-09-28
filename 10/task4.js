"use strict";

/*
function showSumm(a, b) {
  alert( a + b );
}
showSumm.callDefer(1000, 1, 2) // через секунду вызвать с аргументами 1 и 2
*/

Function.prototype.callDefer = function(delay, ...args){
    return setTimeout(() => this.apply(null, args), delay)
}

function showSumm(a, b) {
    console.log(a + b);
}

showSumm.callDefer(1000, 1, 2)
