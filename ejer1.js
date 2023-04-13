let lowerLimitEven = 4;
let upperrLimitEven = 12;
let lowerLimitOdd = 3;
let upperLimitOdd = 11;



const numerosIntermedios = (numeromenorpar,numeromayorpar,numeromenorimpar,numeromayorimpar) =>{
    numeromenorpar=numeromenorpar+1;
    numeromenorimpar=numeromenorimpar+1;
    for (x = numeromenorpar; x < numeromayorpar ; x++) {
         if (x%2==0) {
            console.log("El numero: ", x, " es par"); 
         }
    }

    for (x = numeromenorimpar; x < numeromayorimpar ; x++) {
        if (x%2!=0) {
            console.log("El numero: ", x, " es impar"); 
        }
   }                    
 }

 console.log(numerosIntermedios(lowerLimitEven,upperrLimitEven,lowerLimitOdd,upperLimitOdd));

