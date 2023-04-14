const array=[1,2,3,4,10,25,12];

 /*
const Callback1 = (num,index) => { 
        console.log (index)
        return num>4&& index>3
 }; 

  */
 const encontrarNum = array.find((num, index)=> num>4 && index>5);
 console.log ("El numero es", encontrarNum);
