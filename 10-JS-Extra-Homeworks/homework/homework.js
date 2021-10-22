// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    var array0 = [];
    var array1 = [];
  for (let clave in objeto) {

      array1.push(clave);
      array1.push(objeto[clave]);

      array0.push(array1);
      array1 = [];


  }

  return array0;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var str2 = string;
  
  var b=0;
  var n = 0;
  const resultado = {};
  for (let i=0; i < string.length; i++){
    b=0;
   for (let clave in resultado){
     if (string[i] === clave){
       b=1;
     }
   }
    if (b === 0) {
    for (let j=0; j < str2.length; j++){
     
        if (i !== j){
          if( string[i] === str2[j]){
            n = n +1;
          }
        }
      }
      
      resultado[string[i]]=n+1;
      n = 0;
      
    } 

  }

  return resultado;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  var str = s;
  var str2 = "";
  for (let i=0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      str2 = str2 + s[i];
      str=str.replace(s[i],"");
    }
  }
  
  

  return str2 + str;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var str2 = "";
  var array = [];
  var farseToarray = [];
  farseToarray = str.split(" ");

  for (let i = 0; i < farseToarray.length; i++){
    for ( let j = farseToarray[i].length-1; j >=0; j--){
        str2 = str2 + farseToarray[i][j];
    }
    farseToarray[i] = str2;
    str2=""; 
  }

  for (let i=0; i < farseToarray.length; i++){
    if ( i === (farseToarray.length-1)){
      str2 = str2 + farseToarray[i];
    }else {
      str2 = str2 + farseToarray[i] + " ";
    }

  }

  return str2;


} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  var s = numero.toString();
  var parImpar = (s.length)%2;
  var n = s.length-1;
  var b = 0;

  if ( parImpar === 0) {
    for ( let i = 0; i < (s.length/2); i++){
      
      if (s[i] === s[n]){
        b=b+1;
      }
      n=n-1;
    }
    if (b === (s.length/2)){
      return "Es capicua";
    }else {
      return "No es capicua";
    }

    
  }else {
    for ( let i = 0; i < Math.floor(s.length/2); i++) {
      if (s[i] === s[n]){
        b=b+1;
      }
      n=n-1;
    }
    if (b === Math.floor(s.length/2)){
      return "Es capicua";
    }else{
      return "No es capicua";
    }
  }


}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var s = cadena;
  var s2="";
  for ( let i = 0; i < cadena.length; i++){
      if ( cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c" ){
        s = s.replace(cadena[i],"");
      }
  }
  return s;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var s = arr;
  var n = [];
  var s1;


  for (let i = 0; i < arr.length; i ++){
    n[i]=arr[i].length;
  }

  for ( let i = 0; i < n.length; i++){
    for (let j = 0; j < n.length; j++){
      if ( n[i] > n[j] && i < j){
        b=n[i];
        n[i]=n[j];
        n[j]=b;
        s1 = arr[i];
        arr[i]=arr[j];
        arr[j]=s1;
      }
    }
  }

  return arr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var a = [];
  var n = 0;

  if (arreglo1.length >= arreglo2.length){
    for ( let i = 0; i < arreglo2.length; i++){
        for (let j = 0; j < arreglo1.length; j++){
          if( arreglo2[i] === arreglo1[j]){
            a[n] = arreglo2[i];
            n++;
          }
        }
    }
  }else{
    for ( let i = 0; i < arreglo1.length; i++){
      for (let j = 0; j < arreglo2.length; j++){
        if( arreglo1[i] === arreglo2[j]){
          a[n] = arreglo1[i];
          n++;
        }
      }
  }

  }

  return a;



}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

