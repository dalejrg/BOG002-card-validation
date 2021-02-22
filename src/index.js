import validator from './validator.js';

console.log(validator);

//variables interfaz
var btnComprar= document.getElementById('comprar')
 btnComprar.addEventListener('click', myFunction);
function myFunction() {

    var mostInterfaz2 = document.getElementById("interfaz2");
    var ocultInterfaz1 = document.getElementById("interfaz1");



       if(mostInterfaz2.style.display == 'block'){
           mostInterfaz2.style.display = 'none';
           ocultInterfaz1.style.display = 'block';
       }else{
          mostInterfaz2.style.display = 'block';
          ocultInterfaz1.style.display = 'none';
         }
   }