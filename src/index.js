module.exports = function zeros(expression) {
  // your solution
  var fact = expression.split('*'); // split expression by '*'
  console.log(fact);

  var factorial = [];
  for (var i=0; i<fact.length;i++) {
    factorial[i] = parseInt(fact[i], 10);
  }

  console.log(factorial);
  var zero = 0;

  for (var i=0; i<factorial.length; i++) {

    if (/!!/.test(fact[i]) === true) {
      console.log('!');
      console.log(fact[i]);
      zero=zero + Math.ceil(factorial[i]/10);

    } else if (/!!/.test(fact[i]) === true) {
      console.log('!!');
      console.log(factorial[i]);
      zero=zero + Math.ceil(factorial[i]/5);
    }

  };
  console.log(zero);

  return zero;

}
