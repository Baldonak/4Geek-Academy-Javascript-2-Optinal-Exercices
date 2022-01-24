/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// * Exercices 1
//-------------------------------------------------------------------------------------------------

/*
// REGLAS
* Usar programacion funcional (no usar objetos)
* Aplicar currificacion
* Prohibido break en los bucleas
*/

//*1. Crear una funcion que limpie el array (elimine todo lo que no sean numeros)

const dataset1_1 = [
  1,
  1,
  10,
  34,
  21,
  10,
  38,
  1,
  10,
  21,
  null,
  undefined,
  function () { }
];

const IsTypeData = (data, type_data) => typeof data === type_data;
const filterArray = (arr, type_data) =>
  arr.filter(data => IsTypeData(data, type_data));

console.log(`
1.0. Crea una funcion que limpie el array (elimine todo lo que no sean numeros). 
Input: [1,1,10,34,21,10,38,1,10,21,null,undefined,function() {}]
Output: [${filterArray(dataset1_1, "number")}]`);

//2. Crear una funcion que devuelva el array sin repeticiones dataset1

const EliminateNullValuesArray = arr => arr.filter(el => el != null);
const uniqueArray = arr => EliminateNullValuesArray([...new Set(arr)]);

//NOTA: Los elementos nulos o vacíos son aquellos que corresponden con los siguientes valores: false, null, undefined, 0, NaN.

// var myArr = [ 'foo', 0, '', undefined, 'blue', null, 5, false, NaN];
// myArrClean = myArr.filter(Boolean); // [foo, blue, 5]

console.log(`
1.2. Crear una funcion que devuelva el array sin repeticiones dataset1 
Input: [1,1,10,34,21,10,38,1,10,21,null,undefined,function() {}]
Output: [${uniqueArray(dataset1_1)}]`);

//3. cuente las repeticiones de letras en el dataset2
console.log("1.3. cuente las repeticiones de letras en el dataset2");

const dataset1_2 = ["mama", "papa", "perro", "gato"];

//3.0- Preparación de los datos

const string_dataset = dataset1_2.join("");
console.log(string_dataset);

//3.0.1- Separar las letras del string y convertir en una matriz.

const StringToArray = txt => txt.split("");
const letters_dataset = StringToArray(string_dataset);
console.log(letters_dataset);

//3.1- Recorrer el string para identificar las diferentes letras que aparecen y meterlas en un array

const unique_letters_arr = uniqueArray(letters_dataset);
console.log(unique_letters_arr);

//3.2- Recorrer el array y contar cuantas veces esta cada letra

const CountLetter = (arr, letter) => {
  //3.2.1- Creamos un contador y lo inicializamos a cero
  let count = 0;

  //3.2.2- Recorremos el array y sumamos 1 al contados cuando haya una coincidencia con la letra
  //"letter"
  arr.forEach(x => (x === letter ? count++ : count));

  return count;
};

console.log(`Result :${CountLetter(letters_dataset, "a")}`);

//4. que me devuleva el array al reves

// Initial examples -------------------------------------------------------------------------------

// const reversed = array1.reverse();
// console.log("reversed:", reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

//-------------------------------------------------------------------------------------------------

const dataset1_4 = ["mama", "papa", "perro", "gato"];
const reverseArray = arr => arr.reverse();

console.log(`
1.4. que me devuleva el array al reves 
Input: ["mama", "papa", "perro", "gato"]
Output: [${reverseArray(dataset1_4)}]`);

/**5. que me devuelva el array al reves pero con las palabras al reves */

console.log(
  "1.5. que me devuelva el array al reves pero con las palabras al reves"
);

const dataset1_5 = ["mama", "papa", "perro", "gato"];

//5.1 Dar la vuelta a un string

const StringToLetttersArr = string => string.split("");
console.log(StringToLetttersArr("text"));

const ReverseString = string => {
  let letters_arr = StringToLetttersArr(string);
  let reversed_letters_array = letters_arr.reverse();

  return reversed_letters_array.join("");
};

console.log(ReverseString("banana")); //correct: ananab
console.log(typeof ReverseString("banana")); //correct: string

//5.2 Función final

// var output_dataset_5 = [];
const reverseReverseArray = arr => {
  //Método 1:
  // for (let element of arr) {
  //   output_dataset_5.push(ReverseString(element));
  // }
  //Método 2:
  var output_dataset = arr.map(x => {
    return ReverseString(x);
  });
  return output_dataset;
};

console.log(`1.5. que me devuelva el array al reves pero con las palabras al reves
Input: ["mama", "papa", "perro", "gato"]);
Output: ${reverseReverseArray(dataset1_5)}`);

//-------------------------------------------------------------------------------------------------

// * Exercices 2
// 2.1 Crea una funcion que ordene de > o < el dataset 1.

const dataset1 = [1, 10, 20, 14, 1450, 10, 24, 12, 11, 9];

const CompareFuntionAscending = (a, b) => a - b;
const CompareFuntionDescending = (a, b) => b - a;
const sortDatasetAscending = dataset => dataset.sort(CompareFuntionAscending);
const sortDatasetDescending = dataset => dataset.sort(CompareFuntionDescending);

console.log(`
2.1. Crea una funcion que ordene de > o < el dataset 1.
Input: [1, 10, 20, 14, 1450, 10, 24, 12, 11, 9]
Output sort dataset ascending: [${sortDatasetAscending(dataset1)}]
Output sort dataset descending: [${sortDatasetDescending(dataset1)}]`);

//2.2 Crea una funcion que cuente las letras en el dataset 2 (Debes usar un objeto).

const dataset2 = [
  ["papa", "mama", "perro"],
  [[["gato"]], "social"],
  ["envidia"],
  [[[[["gato"]]]]]
];

const FlatArr = arr => arr.flat(Infinity);
console.log(`Test FlatArr`);
const JoinElementsArr = arr => arr.join("");
const StringIntoArrSubstrings = (i_string, delimiter) =>
  text.split(i_string, delimiter);
const FilterElementsArrAccdngToCondition = (arr, condition) =>
  arr.filter(condition);
const AccountantElementsArr = arr => arr.length;
const ConstructObject;
const AddNewElementToObject;
const accountTypeLettersInArrOfArr;

console.log(`
2.2 Crea una funcion que cuente las letras en el dataset 2 (Debes usar un objeto).
Input: const dataset2 = [
  ["papa", "mama", "perro"],
  [[["gato"]], "social"],
  ["envidia"],
  [[[[["gato"]]]]]
];
Output: [${FlatArr}]`);

// 2.3 Crea una funcion que calcule la suma de todos los elementos del dataset1.
const dataset1_3 = [1, 10, 20, 14, 1450, 10, 24, 12, 11, 9];

// 2.4 Crea una funcion que compruebe si una matriz es cuadrada (m*n) siendo m = n (Usa matrix 1 y 2
//  para testear).
const matrix2 = [
  [1, 20, 11],
  [9, 8, 7],
  [1, 1, 1, 3, 4]
];
// 2.5 Crea una funcion que calcule la distancia entre dos puntos definidos por Point2.

function Point(x, y) {
  this.x = x;
  this.y = y;
}

const examplePoint1 = new Point(1, 2);
const examplePoint2 = new Point(9, 7);

// Example ----------------------------------------------------------------------------------------

// 2.1 Convertir el dataset en un string

// const numbers = ["aa", ["bfg"], ["gfddf", ["hola", "hhh"]]];
// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total + num;
// }

//Result: aabfggfddf,hola,hhh

//2.2 Eliminar comas

var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(5));
// [1, 2, 3, 4, 5, 6]

var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());
// [1, 2, 3, 4, 5, 6]
