module.exports = function zeros(expression) {
  // your solution
  
  // Split expression into array
  let arrayFactorial = expression.split('*'); // split expression by '*'
  
  // Init factorial arrays
  let singleFactorialArray = [];
  let doubleFactorialArray = [];

  for (let i = 0; i < arrayFactorial.length; i++) {
    if (arrayFactorial[i].includes('!!')) {
      let double = parseFloat(arrayFactorial[i]);
      doubleFactorialArray.push(double);
    } else {
      let single = parseFloat(arrayFactorial[i]);
      singleFactorialArray.push(single);
    };
  };
  
  let arr = [];


  for(let i = 0; i<singleFactorialArray.length; i++) {          
    let x = singleFactorialArray[i];
    while (x > 1){
      arr.push(x);
      x--;  // 5! = 5*4*3*2*1
    };
  };

  for(let j = 0; j<doubleFactorialArray.length; j++){          
    let y = doubleFactorialArray[j];
    while (y >= 2){
      arr.push(y); 
      y -=2;  // 10!! = 10*8*6*4*2
    };                    
  };


  let zeros = 0;


  return zeros;

}