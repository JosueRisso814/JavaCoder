// function sacarPromedio () {

//     for(let i = 1; i < 4; i++) {

//     let nota1 = Number(prompt("alumno nro " + i + " ingrese su primer nota: "));
//     let nota2 = Number(prompt("alumno nro " + i + " ingrese su segunda nota: "));
//     let nota3 = Number(prompt("alumno nro " + i + " ingrese su tercer nota: "));

//     let suma = nota1 + nota2 + nota3;

//     let promedio = suma / 3;

//     alert("su promedio de notas es: " + promedio);

// if (promedio >= 6) {
//     alert("Usted esta aprobado. Felicidades! :)")
// } else {
//     alert("Usted esta desaprobado :(")

// } } }

// sacarPromedio();


// personas.splice(2,2, "maxi", "andre")

// let familia = personas.concat (["maxi", "andre", "pepino"]);

// console.log(familia);

// personas.indexOf ("elias");
// console.log(busqueda);

// let includePersonas = personas.includes ("risso");
// console.log(includePersonas);

// reverse => invierte el orden de los elemenos en un Array.

// let personas = ["josue", "daniel", "risso", "bernabe", "elias"]

// personas.reverse ();
// console.log(personas)

// const Familia = [
//     {nombre:"Josue", edad:22},
//     {nombre:"elias", edad:13},
//     {nombre:"berna", edad:14}
// ]
// console.log(Familia);

// Familia.push({nombre:"maria", edad:18})
// Familia.reverse();

// console.log(Familia);

// for (const integrantes of Familia) {
//     console.log(integrantes);
// }

// const personas = [
//     { nombre: "Juan", edad: 30 },
//     { nombre: "María", edad: 25 },
//     { nombre: "Luis", edad: 35 }
//   ];

// for (let i = 0; i < personas.length; i++) {
//   console.log(personas[i])
// }

function OperacionSumaResta (operacion){
  if (operacion === sumar) {
    return (a , b) => a - b
  } else if (operacion === restar);
} 

console.log(sumar(14, 2));