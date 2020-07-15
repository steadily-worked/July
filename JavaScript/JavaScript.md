* 변수와 상수

우리가 value라는 이름에 1이라는 값을 넣는다고 가정해보자 .. 그러면

let value = 1; 이라고 하면 됨.

console.log를 통해 value값을 출력하도록 하려면 ! 

let value = 1;

console.log(value); 를 하면 된다.

특정 이름에 특정 값을 설정하는 것을 ‘선언’이라고 부른다. ‘즉 이제부터 value는 1이야'

라고 정해주는 것! 값 선언은 두가지 종류가 있다.

* 변수

바뀔 수 있는 값.

let value = 1;

console.log(value);

value = 2;

console.log(value);

를 하게 되면, 첫 값은 1, 두 번째 값은 2가 나온다.

let value = 1;

let value = 2; 라는 두 줄의 코드는 실행하면 오류가 발생한다.

* 상수

한 번 선언하고 나면 값이 바뀌지 않는 값이다. 즉 고정적인 값.

상수 선언 시에는 const a = 1; 을 해주면 된다. 상수를 선언하고 나면 값을 바꿀 수 없다.

const a = 1;

a = 2;

라는 코드를 실행하면 오류가 생긴다. “Error : “a” is read-only”.

상수를 선언할 때에도 마찬가지로 한 번 상수로 선언했으면 값을 바꿀 수 없다.

const a = 1;

const a = 2;

-> 오류!

* 상수 - 숫자

숫자는 그냥 바로 값을 대입하면 된다.

let value = 1;



* 상수 - 문자열(string)

텍스트 형태의 값은 작은 따옴표 혹은 큰 따옴표로 감싸서 선언한다.

let text = ‘hello’;

let name = ‘자바스크립트';


* 상수 - 참/거짓(Boolean)

boolean은, 참 혹은 거짓 두 가지 종류의 값만을 나타낼 수 있다.

let good = true;

let loading = false;


* null과 undefined

자바스크립트에서는 ‘없음'을 의미하는 데이터 타입이 두 종류가 있다.

하나는 null이고 하나는 undefined인데, 둘의 용도가 살짝 다르다.

null은 주로, ‘이 값이 없다!’를 선언할 때 사용한다.

const friend = null;


반면 undefined는, 아직 값이 설정되지 않은 것을 의미한다.

let criminal;

console.log(criminal);

criminal이라는 변수를 선언하긴 했지만, 값을 지정해주진 않았다. 이를 console.log를 통해 보여주도록 하면 undefined 라는 값이 나타나게 된다.

null과 undefined 둘 다 값이 없음을 의미하는 건 맞는데,

null은 우리가 없다고, 고의적으로 설정하는 값을 의미하고, 

undefined는 우리가 설정을 하지 않았기 때문에 없는 값을 의미한다.

* 연산자

연산자는, 프로그래밍 언어에서 특정 연산을 하도록 하는 문자이다.

let value = 1; //  변수 선언

value = 2; // 대입 연산자

여기서 두 번째 줄에서 사용된 = 문자가 바로 연산자이다. 연산자의 종류는 굉장히 많은데, 
그중에서 = 는, 대입 연산자에 해당한다. 첫번째 줄은 새로운 변수를 선언하는 것으로서, 대입 
연산자에 해당하지 않는다.

* 산술 연산자

사칙연산과 같은 작업을 하는 연산자를 의미한다.

let a = 1 + 2;

console.log(a);

위 코드는 a값을 선언할 때 1+2의 결과물을 담는다. 따라서 콘솔에는 3이라는 숫자가 출력.

let a = 1;

a++;

++a;

console.log(a);

위 코드를 실행하면, 결과는 3이 나타난다. ‘++’는 특정 변수에 1을 바로 더해 준다. 그런데, 
++가 변수 이름 앞에 오는 것과 뒤에 오는 것에 차이가 있다.

let a = 1;

console.log(a++); 를 할 때에는, 1을 더하기 직전 값을 보여주고

console.log(++a); 를 할 때에는, 1을 더한 다음의 값을 보여준다는 차이가 있다.

즉, 출력을 하면 각각 1, 3이 나타난다.



* 대입 연산자

특정 값에 연산을 한 값을 바로 설정할 때 사용할 수 있는 연산자이다. 

let a = 1; a = a + 3; 을 대입 연산자를 사용하면, let a = 1; a += 3;으로 바꿀 
수 있다.

a += 3; a -= 3; a *= 3; a /= 3; 이렇게 네 개를 사용할 수 있다.


* 논리 연산자

불린 타입(true or false)를 위한 연산자이다. 논리 연산자는 다음 장에서 if문을 배울 때 
매우 유용하다.

! : NOT

&& : AND

|| : OR

* NOT

NOT 연산자는, true는 false로, false는 true로 바꿔준다.

const a = !true;

console.log(a); 에서 a 값은 false이다.

* AND

AND 연산자는, 양쪽의 값이 둘 다 true 일때만 결과물이 true이다.

const a = true && true;

console.log(a); 일 때만 true.

let f = false && false;

f = false && true;

f = true && false;

세 개 다 false 출력!


* OR

OR 연산자는 양쪽의 값 중 하나라도 true면 결과물이 true이고, 두 값이 둘다 false일 때만 false이다.

* 연산 순서

사칙연산도 곱나눗셈이 먼저인 것처럼, 논리연산자에도 순서가 있다. 순서는 NOT -> AND -> OR이다.

const value = !((true && false) || (true & false) || !false)

라면 .. 우선 NOT을 처리하여 -> !((true & false) || (true & false) || true )

그 이후에 AND를 처리 -> !(false || false || true;)

OR 연산자를 좌측에서 우측방향으로 처리를 하게 되면서 .. !true;로 처리가 된다. 결국 결괏값은 false가 된다.


* 비교 연산자

비교 연산자는 두 값을 비교할 때 사용할 수 있다.

1. 두 값이 일치하는지 확인

- const a = 1;


- const b = 1;

- const equals = a === b;

console.log(equals);


=== 는 두 값이 일치하는지 확인해준다. 일치한다면 true, 일치하지 않는다면 false가 나타난다. 위 코드의 경우는 true.

두 값이 일치하는지 확인할 때 = 문자를 3번 사용하는데, 2개로도 비교를 할 수는 있다.

예를 들어, == 를 사용하면 숫자 1과 문자 '1'이 동일한 값으로 간주된다.

- const a = 1;

- const b = 1;

- const equals = a == b;

console.log(equals);

결과 : true. 그리고, 0과 false도 같은 값으로 간주된다.

- const a = 0;

- const b = false;

- const equals = a == b;

console.log(equals);


결과 : true. 그리고 undefined와 null도 같은 값으로 간주된다.

- const a = null;

- const b = undefined;

- const equals = a == b;

console.log(equals);

결과 : true.

앞으로 쓸 때는 === 를 사용하는 것을 권장함. == 를 사용하다보면 실수할 확률이 높아진다.

2. 두 값이 일치하지 않는지 확인

- 두 값이 일치하지 않는지 확인하는 때에는 !== 를 사용하면 된다.

const value = 'a' !== 'b';

결과물은 true가 된다. != 를 사용하게 되면 타입 검사를 하지 않는다.

console.log(1 != '1');
console.log(1 !== '1');

처음엔 false, 두번째에선 true가 된다. 두 값이 일치하지 않는지 확인할 때에도 !== 사용을 권장함!

3. 크고 작음

- 두 값 중에서 무엇이 더 크고 작은지 비교하기 위해서는 다음 연산자를 사용할 수 있다.

const a = 10;

const b = 15;

const c = 15;



console.log(a < b); -> true

console.log(b > a); -> false

console.log(b >= c); -> true

console.log(a <= c); -> true

console.log(b < c); -> false


주석은 한 줄의 경우 // , 여러 줄의 경우 /* */ 을 활용하자.

4. 문자열 붙이기

- 두 문자열을 붙일 땐 +로 할 수 있다.

const a = '안녕';

const b = '하세요';

console.log(a + b);

* 조건문

조건문을 사용하면 특정 조건이 만족됐을 때 특정 코드를 실행할 수 있다.

1. if문

가장 기본적인 조건문은 if문이다.

if문은, "~~하다면 ~~를 해라"를 의미한다.

const a = 1;

if ( a + 1 === 2) {

    console.log('a + 1이 2입니다.');

}

의 경우, 결과는 "a + 1이 2입니다." 이 출력된다.

만약 여기서 a를 0으로 바꾼다면? 아무것도 출력되지 않는다.

if문을 사용하면, 이렇게 특정 조건이 만족됐을 때에만 특정 코드를 실행시킬 수 있다.

if (조건) {

    코드;

}

조건이 만족됐을 때 실행시킬 코드가 {} 로 감싸져 있는데, 이를 코드 블록이라고 한다.

만약에 조건이 true가 된다면 우리는 지정한 코드가 실행되는 것이고, false가 된다면 코드가 실행되지 않는다.

전에 let 과 const 를 배울 때, 다른 블록 범위에서는 똑같은 이름으로 선언할 수도 있다고 배웠다.

const a = 1;

if (true) {
    
    const a = 2;
    
    console.log('if문 안의 a 값은 ' + a);
}

console.log('if문 밖의 a 값은 ' + a);

위 코드에서는 if문에 조건을 true로 설정했기 때문에, 코드 블록 내부의 코드가 무조건 실행이 된다.

결과는 .. 

"if문 안의 a 값은 2"

"if문 밖의 a 값은 1"

2. if - else문

if-else문은 "~~하다면 ~~하고, 그렇지 않다면 ~~해라"를 의미한다.

const a = 10;

if (a > 15) {

    console.log('a가 15보다 크다.');

} else {

    console.log('a가 15보다 크지 않다.');

}

위 코드의 결과는, 후자가 나온다.



3. switch / case 문

switch / case문은 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용한다.

const device = 'iphone';

switch (device) {

  case 'iphone':

    console.log('아이폰!');

    break;

  case 'ipad':

    console.log('아이패드!');

    break;

  case 'galaxy note':

    console.log('갤럭시 노트!');

    break;


  default:

    console.log('모르겠네요..');
}

device 값을 'iphone', 'ipad', 'galaxy note', 'macbook'으로 순서대로 바꿔가면서 코드를 실행해보자.

device 값에 따라서 다른 결과가 출력된다.

switch / case 문은 이와 같이 특정 값이 무엇이냐에 따라 다른 작업을 수행할 수 있게 해준다.

switch / case 문에서는 각 case에서 실행할 코드를 작성하고 맨 마지막에 break; 를 해줘야 한다. break; 를 하지 않으면 그 다음 case의 코드까지 실행해버린다.

그리고, 맨 아래 default: 는, device 값이 우리가 case로 준비하지 않은 값일 경우를 의미한다.

* 함수

