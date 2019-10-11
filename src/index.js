module.exports = function zeros(expression) {
  // your solution
  
  // Split expression into array
  let arrayFactorial = expression.split('*'); // split expression by '*'
  
  // Init factorial arrays
  let factorialArray = [];
  let doubleFactorialArray = [];
  
  //Dividing arrays with factorials
  for (let i = 0; i < arrayFactorial.length; i++) {
    if (arrayFactorial[i].includes('!!')) {
      let double = parseFloat(MasWithFact[i]);
      doubleFactorialArray.push(double);
    } else {
      let single = parseFloat(MasWithFact[i]);
      factorialArray.push(single);
    }
  };
  
  return zeros;

}