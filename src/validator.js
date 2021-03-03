const validator = {

  // Funcion invertir numero
  isValid : function isValid(numeroTarjeta){
    let numeroString = numeroTarjeta.toString()
    let tamañoNumero = numeroString.length
    let arrayNumero = []
    let suma = 0;
    
          for (let i = (tamañoNumero - 1); i >= 0; i--){ 
            arrayNumero.push(parseInt(numeroString[i]))
          }
        
          for (let i = 1; i < arrayNumero.length; i += 2) {
            arrayNumero[i] = arrayNumero[i] * 2;
          
            
            
            if (arrayNumero[i] > 9){
              arrayNumero[i] = 1 + (arrayNumero[i] % 10);
            }
          }  
            
            for (let i = 0; i<arrayNumero.length; i++){
              suma += arrayNumero[i];
            }
            

              
              console.log(arrayNumero);
          
              console.log(suma);
          if (suma % 10 === 0){
            
            return true;

          } else {

            return false;
          }

        },
        maskify: function (mascaraTarjeta) {
          const enmascarar = mascaraTarjeta.split('');
          for (let i = 0; i < enmascarar.length - 4; i++) {
              enmascarar[i] = '#';
          }
          return enmascarar.join('')
      }

        
      
}

export default validator;

