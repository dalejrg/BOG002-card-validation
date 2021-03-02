import validator from './validator.js';

//console.log(validator.isValid));

//Recibir numero
const valorTarjeta = document.getElementById("numeroTarjeta");
valorTarjeta.addEventListener('input', obtenerNumero);
function obtenerNumero(e) {
   const numero = e.target.value;
   if(numero.length === 16){
      validator.isValid(numero)
   } 
   console.log (numero) 
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

//Boton validar
//const interfazValidacion = document.getElementById('interfazValidacion');
//const interfaz2 = document.getElementById('interfaz2');

/*const btnValidar = document.getElementById('validar');
btnValidar.addEventListener('click', (numeroTarjeta) => {
let numeroTarjeta = document.getElementById("numeroTarjeta").value;
validator.isValid(numeroTarjeta);
}

/*let mensaje;
const btnValidar = document.getElementById('validar');
btnValidar.addEventListener('click', (validacion) => {
   

   let resultadoFinal = validator.isValid(validacionTarjeta);
   const alertNumero = document.getElementById('alertNumero');

   if (validacionTarjeta === ''){
      validacion.preventDefault();
      alertNumero.classList.remove('ocultar');
      alertNumero.innerHTML = 'Por favor llena este campo';
   }

   if (resultadoFinal===true){
      mensaje = 'FELICIDADES TU TARJETA ES VALIDA';

   }else{
      mensaje = 'LO SENTIMOS, TU TARJETA NO ES VALIDA';
      interfazValidacion.classList.add('mostrar');
      interfaz2.classList.remove('ocultar');
   }

   const mostMensaje = document.getElementById('mensaje');
   mostMensaje.innerHTML = `${mensaje}`*/





