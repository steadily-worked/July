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