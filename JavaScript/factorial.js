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


function factorial(num) {
  var result = 0;
  var factorialValue = 1;
for (var i=0; i < num; i++) {
  result = result + 1;
  factorialValue = factorialValue * result;
}
  return factorialValue;
}

console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));

// 7/17에 내가 다시 풀어서 맞은 방식. 아무 생각 없이 코드 몇줄 적고 실행해봤는데 돼서 신기했다.
// 변수를 두개를 지정했다는 점에서 확실히 좋은 풀이는 아니다.
// 다시 생각해보니 .. 여기서 result 관련 부분을 다 지우고, i로 바꿔줘도 되지 않았을까?
// 물론 i가 0부터 시작하면 안될 것이고, i가 num과 같아지는 범위까지로 다시 설정해줘야 됐을 것이다.
