//tipos básicos

let ida: number = 5 ;
const fname:string='Bruno'
const valid:boolean=true
//tipo especial que não define seu tipo
let idk:any = 5
idk='12'
idk= true

const ids: number[]= [1,2,3,4,5]
const list: boolean[]=[true,false,true]
const names:string[]=['rodrigo','bruno','eu']

//tupla *não é uma lista*
const person: [number,string]= [1,'bruno']

const people: [number,string][]= [
    [1,'bruno'],
    [4,'jane']

];

//intersections
//quando eu quero que uma variável seja de um tipo OU de outro
const ProductID: string | number |boolean = "1";

//Enum
//quando eu tenho um valor que sempre vai ser atribuído a outro Valor
//sendo que enum's nao tem tipo determinado
enum Direction{
    up=1,
    down=2,
    left='nada demais'
};

const direction =Direction.up;

//Type Assetions 
//usado quando nós queremos mudar ou tratar uma variavel de um tipo para OUTRO tipo

console.log(direction);