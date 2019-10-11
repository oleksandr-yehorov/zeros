module.exports = function zeros(expression) {
  // your solution
  var fact = expression.split('*'); // split expression by '*'
  console.log(fact);

  var factorial = [];
  for (var i=0; i<fact.length;i++) {
    factorial[i] = parseInt(fact[i], 10);
  }
  
  return zero;

}
