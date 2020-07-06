function whatShouldICallYou(myAge, myGender, yourAge, yourGender) {
    if (myAge === yourAge) {
      return "친구"
    }
    else if (myAge > yourAge) {
        if (yourGender === 'male') {
          return "남동생"
        }
        else {
          return "여동생"
        }
      }
    else if (myAge < yourAge) {
      if (myGender === 'male') {
        if (yourGender === 'male') {
          return "형"
        }
        else {
          return "누나"
        }
      }
      else { 
        if (yourGender === 'male') {
          return "오빠"
        }
        else {
          return "언니"
        }
      }
    }
  }
  
  // 테스트 코드
  var result1 = whatShouldICallYou(23, 'male', 25, 'female');
  var result2 = whatShouldICallYou(21, 'female', 21, 'female');
  var result3 = whatShouldICallYou(25, 'female', 22, 'male');
  
  console.log(result1);
  console.log(result2);
  console.log(result3);