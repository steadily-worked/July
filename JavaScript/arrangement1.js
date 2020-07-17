// 이 문제는, 범위의 시작지점(start), 끝지점(end), 증가폭(step)을 파라미터로 받고, 그에 해당하는
// 배열을 리턴해주는 함수 range를 작성하는 문제이다.


function range(start, end, step) {
    var arr = [];
if (start < end) {
  for(var i=start; start<end; start=start+step){
    arr.push(i);
    i = i + step;
  }  
}
else if (start > end) {
  for (var i=start; start>end; start=start+step) {
    arr.push(i);
    i = i + step;
  }
}
    return arr;
}

// 테스트 코드
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));

// 시간이 너무 오래걸렸음.. 생각하기가 어려웠다.

// 아래는 7/17에 해당 문제를 다시 풀었을 때 내가 작성한 코드이다.


function range(start, end, step) {
  var arr = [];
if (start < end) {
  for (var i=0; start < end; i++) {
    arr.push(start);
    start = start + step;
  }
} else if (start > end) {
  for (var i=0; start > end; i++) {
    arr.push(start);
    start = start + step;
  }
}
// for (var i=0; start < end; i++) {
//   if (start < end) {
//     arr.push(start);
//     start = start + step;
//   }
// }

  return arr;
}

// 테스트 코드
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));


// 여기서, 우선 주석처리돼있는 코드까진 스스로 생각해서 작성했다. 그에 따라 테스트 코드 중 2개는 풀렸다.
// 하지만 세번째는 실행이 될 수가 없었던게, for문에서 이미 start < end를 가정하고 있었지만 세번째는
// start보다 end가 더 작은 상황이었기 때문이다. 그래서 고민을 계속 하다가 .. for문이 주가 되면 안된다는 결론에 이르렀고
// 그에 따라 start < end, start > end 라는 두 가지 상황을 if로 두고 그에 따라 for문을 작성해보기로 했다.
// 결과적으로 매우 잘 돌아가서 문제를 풀었다. 힌트 같은 걸 보지 않고 온전히 내 힘으로 풀었다는 점이 고무적이었다.