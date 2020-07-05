function printTriangle(height) {
    for (var i=0; i<height; i++) {
      switch(i){
        case(0):
          console.log('*')
          break;
        case(1):
          console.log('**')
          break;
        case(2):
          console.log('***')
          break;
        case(3):
          console.log('****')
          break;
        case(4):
          console.log('*****')
          break;
      }
    } 
  }
  
  // 테스트 코드
  console.log('높이: 5');
  printTriangle(5);
  
  console.log('높이: 3');
  printTriangle(3);
  
  console.log('높이: 1');
  printTriangle(1);