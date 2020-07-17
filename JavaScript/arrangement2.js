var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    var returnArr = [];
    for(const x of arr){
      for(var i = x.length - 1; i > -1; i--){
        returnArr.push(x[i]);
      }
    }
    // 코드를 작성해주세요.
    return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));

// 이건 풀다가 못풀어서 답지 봄.. const부분도 잘 이해가 안가고 어렵다.

var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    var returnArr = [];
    for (var i=0; i<arr.length; i++) {
      var value = arr[i].reverse();
      for (var j=0; j<arr[i].length; j++) {
        returnArr.push(value[j]);
      }
    }

  
    return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));

// 다른 풀이 .. 이건 충분히 생각 해낼 수 있었을 문제였다고 생각한다. 
// 우선 i에 대한 for문을 통해, arr[i]의 값들을 전부 reverse해주고, 그것들을 value처리를 한다.
// 그 이후에 j에 대한 for문을 통해, 그 value의 원소들인 value[j]의 값들을 returnArr에 push해주는
// 방식인것.. for문을 두 번 써야된다는 생각을 못했던 게 원인이라고 생각한다 ㅜ
// 몇주 뒤에 다시 풀어보면 풀 수 있을 것 같다!