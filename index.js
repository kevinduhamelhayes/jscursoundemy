console.log('Hello World');
//tipos de datos
//string
//number
//boolean
//null
//undefined
//symbol
//object
//array
//function
let miVariable = 'Hola Mundo';
console.log(miVariable);

//mutabilidad
miVariable = 10;
console.log(miVariable);

let miboolean = true;
let miotrosboolean = false;
console.log(miboolean);
console.log(miotrosboolean);

let minumero = 11;
let minumero2 = 12;
let minumero3 = 13;
console.log(minumero, minumero2, minumero3);

let undefined
console.log(undefined);

let nulli= null
console.log(nulli);

//objeto vacio
const miObjeto = {}
console.log(miObjeto);

//objeto con propiedades
const miObjeto2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}
console.log(miObjeto2.nombre);

//array
const miArray = [1,2,3,4,5,6,7,8,9,10]
console.log(miArray[0]);

miArray.push(11) //agrega un elemento al final del array push es como append
console.log(miArray);


//funciones declarativas parecidas a las de python class
function miFuncion(){
    console.log('Hola Mundo');
}
miFuncion();

//funciones expresivas
const miFuncion2 = function(){
    console.log('Hola Mundo');
}
miFuncion2();

//operadores
//aritmeticos
//+ - * / % **
const suma = 1 + 2; //suma
const resta = 1 - 2; //resta
const multiplicacion = 1 * 2; //multiplicacion
const division = 1 / 2; //division
const modulo = 1 % 2; //modulo
const potencia = 1 ** 2; //potencia
//relacionales 
//< > <= >= == === != !==
const menor = 1 < 2; //compara el valor y el tipo de dato
const mayor = 1 > 2; //compara el valor y el tipo de dato
const menorIgual = 1 <= 2;  //compara el valor y el tipo de dato
const mayorIgual = 1 >= 2; //compara el valor y el tipo de dato
const igual = 1 == 2; //compara el valor y el tipo de dato
const igualEstricto = 1 === 2; //compara el valor y el tipo de dato
const diferente = 1 != 2; //compara el valor y el tipo de dato
const diferenteEstricto = 1 !== 2; //compara el valor y el tipo de dato
//logicos
//&& || !
const and = true && false;
const or = true || false;
const not = !true;
//unarios
//++ --
const incremento = 1;
incremento++; //incremento = incremento + 1
const decremento = 1;
decremento--; //decremento = decremento - 1
//asignacion
//= += -= *= /= %= **=
const asignacion = 1;
asignacion += 1; //asignacion = asignacion + 1
const asignacion2 = 1;
asignacion2 -= 1; //asignacion2 = asignacion2 - 1
const asignacion3 = 1;
asignacion3 *= 1; //asignacion3 = asignacion3 * 1
const asignacion4 = 1;
asignacion4 /= 1; //asignacion4 = asignacion4 / 1
const asignacion5 = 1;
asignacion5 %= 1; //asignacion5 = asignacion5 % 1
const asignacion6 = 1;
asignacion6 **= 1; //asignacion6 = asignacion6 ** 1
//ternarios
//condicion ? true : false
const ternario = 1 > 2 ? 'es mayor' : 'es menor';


//control de flujo
//if
if(1 > 2){
    console.log('es mayor');
}else{
    console.log('es menor');
}
//switch
const miVariable = 1;
switch(miVariable){ //se puede usar con strings tambien
    case 1: //si miVariable es igual a 1
        console.log('es 1');
        break;
    case 2: //si miVariable es igual a 2
        console.log('es 2');
        break;
    default: //si no es ninguna de las anteriores
        console.log('no es 1 ni 2');
        break;
}
//for
for(let i = 0; i < 10; i++){
    console.log(i);
}
//while
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
//do while
let i = 0;
do{
    console.log(i);
    i++;
}
while(i < 10);
//for in    //itera sobre los indices de un array
const miArray = [1,2,3,4,5,6,7,8,9,10];
for(let i in miArray){
    console.log(i);
}
//for of    //itera sobre los valores de un array
const miArray = [1,2,3,4,5,6,7,8,9,10];
for(let i of miArray){
    console.log(i);
}      
//break
for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
//continue
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}
//try catch
try{
    console.log('hola mundo');
    throw 'error';
    console.log('hola mundo2');
}
catch(error){
    console.log(error);
}
finally{
    console.log('hola mundo3');
}
//funciones
function suma(a, b){
    return a + b;
    console.log('hola mundo');
}
suma(1, 2);
// callbacks
function suma(a, b, callback){
    return callback(a + b);
}
suma(1, 2, function(resultado)){
    console.log(resultado);
}
//fat arrow functions
const mifatarrowfuntion = (a, b) => a + b; //si solo tiene una linea de codigo se puede omitir las llaves y el return (return implicito)
//devuelve la suma(1, 2);

const mifatarrowfuntion2 = (a, b) => {
    return a + b;
}
//devuelve la suma(1, 2) si tiene mas de una linea de codigo se debe usar las llaves y el return (return explicito);

//el dom





