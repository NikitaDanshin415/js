//ДЗ 3: Переписать задачку (решение) про хомяков с использованием конструкторов и прототипов

const Animal = {
    eat : function(eat){
        this.stomach.push(eat)
    }
}

function Hamster(){
    this.stomach = [];
}

Hamster.prototype = Animal;

const speedy = new Hamster();
const lazy = new Hamster();

speedy.eat('apple');
speedy.eat('orange');
console.log(speedy.stomach);

lazy.eat('banana');
console.log(lazy.stomach);
