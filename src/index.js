import validator from './validator.js';

//console.log(validator.isValid));

//Funcion recibir numero
const valorTarjeta = document.getElementById("numeroTarjeta");
valorTarjeta.addEventListener('input', obtenerNumero);

function obtenerNumero(e) {
   const numero = e.target.value;
   if(numero.length === 16){
      validator.isValid(numero)
   }

//Funcion Enmascarar   
   console.log (validator.isValid(numero)) 
   const tarjetaEnmascarar = validator.maskify(numero);
   console.log(tarjetaEnmascarar);

//Funcion boton Validar
   const btnValidar = document.getElementById('validar');
   btnValidar.addEventListener('click', validando);
   function validando(){
      let intValida = document.getElementById('interfazValida');
      let intInvalida = document.getElementById('interfazInvalida');
      let ocultInterfaz2 = document.getElementById('interfaz2');

      if (validator.isValid(numero) === true){
         intValida.style.display ='none';
         intValida.style.display ='block';
         ocultInterfaz2.style.display ='none';
         intInvalida.style.display = 'none';
                           
      }else{
         intInvalida.style.display =='none';
         intInvalida.style.display='block';
         ocultInterfaz2.style.display='none';
         intValida.style.display = 'none';
      }
   
//Funcion boton Otra Compra      
   const btnOtraCompra = document.getElementById('otraCompra');
   btnOtraCompra.addEventListener('click', volverInicio);
   function volverInicio(){
      let mostrarInterfaz1 = document.getElementById('interfaz1');
      let interfValida = document.getElementById('interfazValida');
      mostrarInterfaz1.style.display='block';
      interfValida.style.display='none';
   } 
   
//Funcion boton Volver a Intentarlo   
   const btnVolveraIntentarlo = document.getElementById('intentaNuevamente');
   btnVolveraIntentarlo.addEventListener('click', volverInterfaz2);
   function volverInterfaz2(){
         let mostrarInterfaz2 = document.getElementById('interfaz2');
         let interfInvalida = document.getElementById('interfazInvalida');
         mostrarInterfaz2.style.display='block';
         interfInvalida.style.display='none';
   }   
   }

mostrarMaskify.innerHTML = validator.maskify(numero);
}

//Boton adquirir entrada
let btnAdquirir= document.getElementById('adquirir')
    btnAdquirir.addEventListener('click', botonAdquirir);

function botonAdquirir() 
{
   let mostInterfaz2 = document.getElementById("interfaz2");
   let ocultInterfaz1 = document.getElementById("interfaz1");

      if(mostInterfaz2.style.display == 'block'){
         mostInterfaz2.style.display = 'none';
         ocultInterfaz1.style.display = 'block';
        }
      else{
         mostInterfaz2.style.display = 'block';
         ocultInterfaz1.style.display = 'none';
        }    
}




