// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
    var count = 0;
    var str = word.toUpperCase();
// "Hello World".indexOf("Hello") !== -1; 
  if (str.indexOf(ch) === -1) {
    count = 0;
  } else if (str.indexOf(ch) >= 0) {
    count = 1;
    count++;
  }
    return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
    var count = 0;
    var str = word.toUpperCase();
  for (var i=0; i<word.length; i++) {
    if (word[i] === 'A' || word[i] === 'a') {
      count++;
    }
  }
  return count;
}

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));

// countA 부분이 생각이 많이 필요했다. 이 문제 푸는 데 너무 오래걸렸음..