/* codigo para calcular promedio alumnos */
//Las notas seran las contenidas en el siguiente arreglo:
const arrayNotas = [6,8,9,2,5,10]
//el largo del arreglo:
  const leno = arrayNotas.length

//funcion calcular total:
function sumaNotas(array, len) {
  //variable a utilizar para promedio
  let total = 0;
  //Ciclo para sumar las notas:
  for (let i = 0; i < len; i++){
    total = total + array[i] 
  }
  return total
}

//funcion calcular Prom:
function promedioNotas(suma, len){
  //variable para guardar resultado:
  let resultado = suma / len
  return resultado
}

//operaciones con funcion
const suma = sumaNotas(arrayNotas, leno) 
const promedio = promedioNotas(suma, leno)

//resultado por consola:
console.log("el promedio obtenido es " + promedio)