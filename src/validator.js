const validator = {
  isValid: (validacionTarjeta) => {
      const tamaño = validacionTarjeta.length;
      const ultimaPosicion = tamaño -1;
      let numeroInvertido = '';
      for ( let i=ultimaPosicion; i>=0; i--) {
                numeroInvertido = numeroInvertido + validacionTarjeta[i];
      }
      const newArray = Array.from(numeroInvertido).map(Number);
      let listaImpares = [];

      for (let i=0; i<newArray.length; i++){
          if(i%2!==0){
              listaImpares.push(newArray[i]*2);
          }else {
              listaImpares.push(newArray[i]*1);
          }
      }
      let lista2 = [];
      
      for (let i=0; i<listaImpares.length; i++){
          if (listaImpares[i] >=10){
              lista2.push((listaImpares[i]-10)+1);
          }else {
              lista2.push(listaImpares[i]*1);
          }
      }
      const total = lista2.reduce((sum, current)=> sum + current, 0);

      let verificado = false;
      if (total%10===0){
          verificado = true
      }
      return verificado
  },
  
}

export default validator;

