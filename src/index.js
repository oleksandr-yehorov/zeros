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



  return zeros;

}