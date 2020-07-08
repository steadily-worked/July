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