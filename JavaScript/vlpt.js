



// 10보다 큰 수의 갯수를 출력하는 함수 1

function countBiggerThanTen(numbers) {
    let count = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > 10) {
        count = count + 1;
      }
    }
    return count;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  // 10보다 큰 수의 갯수를 출력하는 함수 2

  function countBiggerThanTen(numbers) {
    let count = 0;
    numbers.forEach(n => {
      if (n > 10) {
        count++;
      }
    });
    return count;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  // 10보다 큰 수의 갯수를 출력하는 함수 3

  function countBiggerThanTen(numbers) {
    return numbers.filter(n => n > 10).length;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5

  // 10보다 큰 수의 갯수를 출력하는 함수 4
  
  function countBiggerThanTen(numbers) {
    return numbers.reduce((acc, current) => {
      if (current > 10) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;
  