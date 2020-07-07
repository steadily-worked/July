function factorial(num) {
    var factorialValue = 1;
  for (var i=1; i<=num; i++) {
    factorialValue = factorialValue * i
  }
    return factorialValue;
}

console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));

// 10!, 5!, 3!, 0!을 구하는 문제