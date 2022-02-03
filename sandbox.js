//Tutorial #1 y #2

let age = 25;
let year = 1999;

console.log(age, year);

age = 30;
console.log(age);

const points = 100;
console.log(points)

var score = 75;
console.log(score);

console.log('hello,world');

let email = 'isa43461@gmail.com';
console.log(email);

let firstName = 'Isabela';
let secondName = 'Acevedo';

let fullName = firstName+' '+secondName;

console.log(fullName[0]);
console.log(fullName.length); 
console.log(fullName.toUpperCase()); //convierte en mayusculas}

let result = fullName.toLowerCase(); //minusculas
console.log(result);

let index = email.indexOf('@'); //posicion donde está (numero)
console.log(index);

let result2 = email.lastIndexOf('4'); //ultima posición del numero (index de la ultima repetición de ese numero)

let result3 = email.slice(0,10); //subcadena que selecciona de donde a donde quiere (indices) obtener el fragmento

let result4 = email.substr(4,10); //se empieza desde una posición y se cuenta la cantidad de caracteres que se quieren a partir de ahí) (posicion, numero de caracteres)

let result5 = email.replace('4','9'); //reemplaza la primera repetición que aparezca por el caracter que le pasen.


console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

let radius = 10;
const pi = 3.14;

console.log(radius,pi);

console.log(10/2);
let results = radius % 3;

console.log(results);

const tittle = 'best reads of 2019';
const author = 'Mario';
const likes = 30;

//template string way
let resultado = `The blog called ${tittle} by ${author} has ${likes} likes`
console.log(resultado);


let ninjas = ['shaun', 'ryu', 'chun-li'];

console.log(ninjas[1]);

let ans = ninjas.join(',');
console.log(ans);


let ans2 = ninjas.concat(['ken', 'krus']);
console.log(ans2);

let result6 = ninjas.push('hola');
console.log(ninjas);
console.log(result6);

let result7 = ninjas.pop();

console.log(result7);
console.log(ninjas);

console.log(email.includes('@'));

//tutorial 3


const names = ['pepe', 'pedro', 'luigi'];

for(let i = 0; i < names.length; i++){
    console.log('nombre: ', names[i]);
}

let i = 0;
let n = names.length;
while(i < n){
    console.log(names[i]);
    i++;
}

i = 0;
do{
    console.log(i);
    i++;
} while(i < 0);


const psw = 'pass';
if(psw.length < 4){
    console.log("sii");
}
else if(psw.length == 4){
    console.log("igual");
}
else{
    console.log("noo");
}

const scores = [50,10,20,30,40,60,6];

for(let i = 0; i < scores.length; i++){
    console.log("Your score :" , scores[i]);
    if(scores[i] == 60){
        console.log("Has acabado!");
        break;
    }

}


const grade = 'A';
switch(grade){
    case 'A':
        console.log("Tienes A");
        break;
    case 'B':
        console.log("Tienes B");
        break;
    case 'C':
        console.log("Tienes C");
        break;
    case 'D':
        console.log("Tienes D");
        break;
    default:
        console.log("No es valido");
}
















