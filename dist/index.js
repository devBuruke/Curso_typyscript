"use strict";
//tipos básicos
let ida = 5;
const fname = 'Bruno';
const valid = true;
//tipo especial que não define seu tipo
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const list = [true, false, true];
const names = ['rodrigo', 'bruno', 'eu'];
//tupla *não é uma lista*
const person = [1, 'bruno'];
const people = [
    [1, 'bruno'],
    [4, 'jane']
];
//intersections
//quando eu quero que uma variável seja de um tipo OU de outro
const ProductID = "1";
//Enum
//quando eu tenho um valor que sempre vai ser atribuído a outro Valor
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
const direction = Direction.up;
console.log(direction);
