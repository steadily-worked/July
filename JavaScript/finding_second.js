function getSecondBiggestNumber(arr) {
    first = arr[0];
    second = arr[1];
    for (var i = 0; i < arr.length; i += 1) {
      if (arr[i] > first) {
        second = first;
        first = arr[i];
      }
      else if (arr[i] > second) {
        second = arr[i];
      }
    }
    return second;
  }
  
  // 테스트 코드
  console.log(getSecondBiggestNumber([4, 7, 2, 1, 9, 3, 6, 5]));
  console.log(getSecondBiggestNumber([80, 2, 44, 21, 92, 3, 51]));
  console.log(getSecondBiggestNumber([4, 7, 6, 5]));

  // 주어진 수들 중에서 두 번째로 높은 수를 찾는 문제이다. 처음엔 못풀었음..