const validator = {

  isValid : function isValid(numeroTarjeta){
    let numeroString = numeroTarjeta.toString()
    let tamañoNumero = numeroString.length
    let arrayNumero = []
        for (let i = (tamañoNumero - 1); i >= 0; i--)
          { arrayNumero.push(parseInt(numeroString[i]))}
    
  console.log(arrayNumero);
  }
  
  /*isValid: (numeroTarjeta) => {
      let numeroString = numeroTarjeta.toString()
      let tamañoNumero = numeroString.length
      let arrayNumero = []
    
        for (let i = (tamañoNumero - 1); i >= 0; i--)
            { arrayNumero.push(parseInt(numeroString[i]))}
      
    console.log(numeroTarjeta);
  }*/
    
    
    
    
    
    
  
}

export default validator;

