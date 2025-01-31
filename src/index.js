module.exports = function zeros(expression) {
  
  // Split expression into array
  let arrayFactorial = expression.split('*'); // split expression by '*'
  
  // Init factorial arrays
  let singleFactorialArray = [];
  let doubleFactorialArray = [];
  
  // Dividing arrays with factorials
  for (let i = 0; i < arrayFactorial.length; i++) {
    if (arrayFactorial[i].includes('!!')) {
      let double = parseFloat(arrayFactorial[i]);
      doubleFactorialArray.push(double);
    } else {
      let single = parseFloat(arrayFactorial[i]);
      singleFactorialArray.push(single);
    };
  };
  
  // Init array for factorial numbers
  let arr = [];

  // Formating an array with a single factorial
  for(let i = 0; i<singleFactorialArray.length; i++) {          
    let x = singleFactorialArray[i];
    while (x > 1){
      arr.push(x);
      x--;  // 5! = 5*4*3*2*1
    };
  };
  
  // Formating an array with a double factorial
  for(let j = 0; j<doubleFactorialArray.length; j++){          
    let y = doubleFactorialArray[j];
    while (y >= 2){
      arr.push(y); 
      y -=2;  // 10!! = 10*8*6*4*2
    };                    
  };
  
  // Init result variable
  let zeros = 0;

  // Counting zeros
  arr.map( num => {    
    if(num % 5 === 0 ){
      x = num;
      while(x % 5 === 0){ 
        x=x/5 ;                 
        zeros++;
      }
    } 
    if(arr.includes(2) === false) {
      zeros = 0;
    }
  });   

  return zeros;
}