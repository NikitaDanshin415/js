//ДЗ 3: Переписать задачку (решение) про хомяков с использованием конструкторов и прототипов

function Hamster(){
    this.stomach = [];
}

Hamster.prototype.eat = function(food){
    this.stomach.push(food)
};

const speedy = new Hamster();
const lazy = new Hamster();

speedy.eat('apple');
speedy.eat('orange');
console.log(speedy.stomach);

lazy.eat('banana');
console.log(lazy.stomach);
