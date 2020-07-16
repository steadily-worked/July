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

- 함수는, 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능이다.

1. 자바스크립트 내장 함수

- String() : 숫자를 문자열로 변환해주는 함수

- Number() : 문자열을 숫자로 변환해주는 함수

- parseInt() : 문자열 안에서 정수를 뽑아주는 함수

- parseFloat() : 문자열 안에서 숫자(소수 포함)를 뽑아주는 함수

- alert() : 사용자에게 메시지를 띄워주는 함수

- prompt() : 사용자에게 메시지를 띄우고, 문자열을 입력받는 함수

- confirm() : 사용자에게 메시지를 띄우고, 확인과 취소중 하나를 누르게 하는 함수

......

함수를 만들 때는 function 키워드를 사용하며, 함수에서 어떤 값을 받아올 지를 정해주는데 이를 파라미터(매개변수)라고 부른다.

함수 내부에서 return 키워드를 사용하여 함수의 결과물을 지정할 수 있다.

추가적으로, return을 하게 되면 함수가 끝난다. 만약 다음과 같이 코드가 작성된다면 return 아래의 코드는 호출이 안된다.

function add(a, b) {

    return a + b;
    
    console.log('호출이 되지 않는 코드');

}

const sum = add(1, 2);

console.log(sum); 하면 3 출력.


function hello(name) {
    console.log('Hello, ' + name + '!');
}
hello('velopert');
를 실행하면, "Hello, velopert!" 출력

저렇게 하는 것보다, ES6의 템플릿 리터럴을 사용하면 더 편하게 조합 가능.

function hello(name) {

    console.log(`Hello, ${name}!`);

}

hello('velopert'); 하면 해결된다.

2. 점수를 성적등급으로 변환하기

function grade(score) {

    if (score === 100) {
    
        return 'A+';
    
    } else if (score >= 90) {
    
    return 'A';

  } else if (score === 89) {

    return 'B+';

  } else if (score >= 80) {

    return 'B';

  } else if (score === 79) {

    return 'C+';

  } else if (score >= 70) {

    return 'C';

  } else if (score === 69) {

    return 'D+';

  } else if (score >= 60) {

    return 'D';

  } else {

    return 'F';

  }

}

const grade = getGrade(90);

console.log(grade);

}

grade 가 90이라면 결과가 A가 된다.

3. 화살표 함수

함수를 선언하는 방식 중 또 다른 방법은 화살표 함수 문법을 사용하는 것이다.

const add = (a, b) => {
    return a + b;
};

console.log(add(1, 2));

function 키워드 대신에 => 문자를 사용해서 함수를 구현했다. 화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록이 들어온다.

그런데, 만약에 위와 같이 <b>코드 블록 내부에서 바로 return을 하는 경우</b>는 다음과 같이 줄여서 쓸 수도 있다.

const add = (a, b) => a + b;
console.log(add(1, 2));

화살표 함수와 일반 function으로 만든 함수와의 주요 차이점은 화살표 함수에서 가리키는 this와 function에서 가리키는 this가 서로 다르다는 것이다. 이에 대해선 뒤에서 자세히 알아볼 것.

* 객체

- 객체는 우리가 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해준다.

const dog = {
    name = '멍멍이',
    age = 2
};

console.log(don.name);
console.log(dog.age);

결과물은
 멍멍이
 2
이렇게 나온다.

객체를 선언할 때에는 이렇게 {} 문자 안에 원하는 값들을 넣어주면 된다. 값을 집어 넣을 때에는

'''키(key): 원하는 값'''

형태로 넣으며, 키에 해당하는 부분은 공백이 없어야 한다. 만약에 공백이 있어야 하는 상황이라면 이를 따옴표로 감사서 문자열로 넣어주면 된다.

const sample = { 

    'key with space' : true

};

1. 함수에서 객체를 파라미터로 받기
- 함수를 새로 만들어서 객체를 파라미터로 받아와서 사용해보자. 

const ironMan = {

  name: '토니 스타크',

  actor: '로버트 다우니 주니어',

  alias: '아이언맨'

};

const captainAmerica = {

  name: '스티븐 로저스',

  actor: '크리스 에반스',

  alias: '캡틴 아메리카'

};

function print(hero) {

  const text = `${hero.alias}(${hero.name}) 역할을 맡은 
  배우는 ${hero.actor} 입니다.`;
  
  console.log(text);

}


print(ironMan);

print(captainAmerica);

을 하면,

아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.

캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다.

로 출력이 된다.

2. 객체 비구조화 할당

- print 함수를 보면, 파라미터로 받아온 hero 내부의 값을 조회 할 
때마다 hero. 를 입력하고 있는데, 객체 비구조화 할당이라는 문법을 
사용하면 코드를 더욱 짧고 보기 좋게 작성할 수 있다.

function print(hero) {

  const { alias, name, actor } = hero;

  const text = `${alias}(${name}) 역할을 맡은 배우는 $
  {actor} 입니다.`;
  
  console.log(text);

}

const { alias,  name, actor } = hero;

이 코드가, <b>객체에서 값들을 추출해서 새로운 상수로 선언</b>해 주는 
것이다. 여기서 더 나아가면, 파라미터 단계에서 객체 비구조화 할당을 할 
수도 있다.

function print({ alias, name, actor }) {

    const text = `${alias}(${name}) 역할을 맡은 배우는 $
    {actor} 입니다.`
    
    console.log(text);

}

print(ironMan); 으로 해도 위에서와 같은 결과가 나온다.

3. 객체 안에 함수 넣기

- 객체 안에 함수를 넣을 수도 있다.

const dog = {

    name: '멍멍이',

    sound: '멍멍!',

    say: function say() {

        console.log(this.sound);

    }

};

dog.say(); 시 결과는 .. 멍멍!

함수가 객체 안에 들어가게 되면, this는 자신이 속해 있는 객체를 가리키게 된다.

함수를 선언할 때에는 이름이 없어도 된다. 즉 위에서 say() 가 없어도 된다는 뜻.

4. Getter 함수와 Setter 함수

객체를 만들고 나면, 다음과 같이 객체 안의 값을 수정할 수도 있다.

const numbers = {
    a: 1,
    b: 2
};

numbers.a = 5;

console.log(numbers); 하면, a=5, b=2가 출력될 것이다.

Getter 함수와 Setter 함수를 사용하게 되면 특정 값을 바꾸려고 하거나 
특정 값을 조회하려고 할 때 우리가 원하는 코드를 실행시킬 수 있다.

const numbers = {

  a: 1,

  b: 2,

  get sum() {

    console.log('sum 함수가 실행됩니다!');

    return this.a + this.b;

  }

};

console.log(numbers.sum);

numbers.b = 5;

console.log(numbers.sum);

이 상황에서, 우리는 numbers.sum()을 한 것이 아니라, number.sum 
을 조회했을 뿐인데 함수가 실행되고 그 결괏값이 출력되었다. 

이런 식으로 Getter 함수는 특정 값을 조회할 때 우리가 설정한 함수로 연산된 값을 반환한다.

다음은 set 함수이다.

const numbers = {

  _a: 1,

  _b: 2,

  sum: 3,

  calculate() {

    console.log('calculate');

    this.sum = this._a + this._b;

  },

  get a() {

    return this._a;

  },

  get b() {

    return this._b;

  },

  set a(value) {

    console.log('a가 바뀝니다.');

    this._a = value;

    this.calculate();

  },

  set b(value) {

    console.log('b가 바뀝니다.');

    this._b = value;

    this.calculate();

  }

};

console.log(numbers.sum);

numbers.a = 5;

numbers.b = 7;

numbers.a = 9;

console.log(numbers.sum);

console.log(numbers.sum);

console.log(numbers.sum);


-> 3, 'a가 바뀝니다.', 'calculate', 'b가 바뀝니다.', 'calculate', 'a가 바뀝니다.', 'calculate', 16, 16 ,16

이 순서대로 출력된다.

setter 함수를 설정할 때에는 함수의 앞부분에 set 키워드를 붙인다.

setter 함수를 설정하고 나면, {'numbers.a = 5'} 이렇게 값을 설정했을 때 5를 함수의 파라미터로 받아오게 된다. 위 코드에서는 객체 안에 _a, _b라는 숫자를 선언해주고, 이 값들을 위한 Getter 함수와 Setter 함수를 설정해줬다.

이전의 객체에서는 nubmers.sum이 조회될 때마다 덧셈이 이루어 졌었지만, 이제는 <b>a 혹은 b의 값이 바뀔 때마다 sum 값을 연산</b>한다.


<b> * #배열 </b>

이전에 배운 객체는, 한 변수 혹은 상수(ex. a나 b 등)에 여러가지 정보를 담기 위함이었다면, <b>배열은 여러 개의 항목들이 들어있는 리스트</b>와 같다.

<b> 1. 배열의 기본 </b>

예를 들어) 숫자 배열을 선언해보자.

const array = [1, 2, 3, 4, 5];

배열을 선언 할 때에는 이렇게 [] 안에 감싸주면 된다.

배열 안에는 어떤 값이든 넣을 수 있다.

예를 들어) 객체 배열을 만들어보자.

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

배열을 선언하고 나서, n번째 항목을 조회하고 싶을 땐 다음과 같이 할 수 있다.

objects[n]; 여기서도 0부터 시작된다는 점을 잊지 말자.

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];


console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

을 하게 되면, { name: '멍멍이' }, { name: '야옹이' } 순으로 나온다.


<b> 2. 배열에서 새 항목 추가하기 </b>

배열에 새로운 항목을 추가할 때에는 배열이 지니고 있는 내장함수인 <b>push</b> 함수를 사용한다.

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

objects.push({
  name: '멍뭉이'
});

console.log(objects);

를 실행하면, 멍멍이 야옹이 멍뭉이 순서대로 출력된다.

<b> 3. 배열의 크기 알아내기 </b>

배열의 크기를 알아낼 때에는 배열의 <b>length</b> 값을 확인한다.

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

console.log(objects.length);

objects.push({
  name: '멍뭉이'
});

console.log(objects.length);

를 실행해보면, 2와 3이 출력될 것이다. push가 되면 length 값이 커진다.

<b> * #반복문 </b>

반복문은 특정 작업을 반복적으로 할 때 사용할 수 있는 구문이다.

<b>1. for</b>

for 반복문은 가장 기본적인 반복문이다. 특정 값에 변화를 줘가면서 우리가 정한 조건이 만족된다면 계속 반복한다.

for (let i=0; i < 10; i++) {

  console.log(i);

}

를 실행하면, 0부터 9까지 10줄에 걸쳐 출력된다.

for문은 다음과 같이 사용한다.


for (초기 구문; 조건 구문; 변화 구문;) {

  코드

}

for문을 사용할 때 보통 i++ 를 해서 1씩 증감하는 형태로 사용한다. 물론 1씩 빼는 형태도 가능하다. i--를 하면 됨. 이때는

for (let i = 10; i > 0; i--) 가 돼야겠지?

for문은 이렇게 숫자에 변화를 줘가면서 반복적으로 작업을 실행한다.


<b>2. 배열과 for</b>

우리가 이전에 배운 배열과 for문을 함께 활용해보자. 

const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i=0; i < names.length; i++) {

  console.log(names[i]);

}

이렇게 하면, names 배열 안에 있는 원소들을 하나하나 나열할 수 있다.

<b>3. while</b>

while문은 특정 조건이 참이라면 계속해서 반복하는 반복문이다.

for문은, <b>특정 숫자를 갖고 숫자의 값을 비교하고 증감해주면서 반복을 하는 방식</b>이라면, while문은 <b>조건을 확인만 하면서 반복을 한다.</b> 때문에, 조건문 내부에서 변화를 직접 주어야 한다.

0~9를 출력하는 while 반복문을 작성해보자.

let i=0;

while (i < 10) {

  console.log(i);

  i++;

}

while문을 사용할 때에는 조건문이 언젠가 false가 되도록 신경써야 한다. 만약에 언젠가 false로 전환되는 방식이 아니라면 반복문이 끝나지 않고 영원히 반복되는 무한루프가 될 것이다.


<b>4. for...of</b>

for...of 문은 배열에 관한 반복문을 돌리기 위해서 만들어진 반복문이다.

let numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {

  console.log(number);

}

하면 배열의 첫 번째 값부터 순서대로 출력된다.


<b>5. 객체를 위한 반복문 for...in</b>

객체를 위한 반복문을 알아보기 전에, 객체의 정보를 배열 형태로 받아올 수 있는 함수 몇가지를 알아보자.

const doggy = {

  name: '멍멍이',

  sound: '멍멍',

  age: 2

};

console.log(Object.entries(doggy));

console.log(Object.keys(doggy));

console.log(Object.values(doggy));

를 하면... 

0 : Array[2]

  0 : "name"

  1 : "멍멍이"

1 : Array[2]

  0 : "sound"

  1 : "멍멍"

2 : Array[2]

  0 : "age"

  1 : 2

["name", "sound", "age"]

["멍멍이", "멍멍", 2]

순으로 출력이 된다.. 즉,

Object.entries -> [[키, 값], [키, 값]] 형태의 배열로 변환

Object.keys : [키, 키, 키] 형태의 배열로 변환

Object.values : [값, 값, 값] 형태의 배열로 변환

객체가 지니고 있는 값에 대해 반복을 하고 싶다면 위 함수들을 사용해도 되고, for...in 구문을 사용해도 된다.

const doggy = {

  name: '멍멍이',

  sound: '멍멍',

  age: 2

};

for (let key in doggy) {

  console.log(`${key}: ${doggy[key]}`);

}


<b>6. break와 continue</b>

반복문 안에서는 break와 continue를 통하여 반복문에서 벗어나거나, 그 다음 루프를 돌게끔 할 수 있다.

for (let i=0; i < 10; i++) {

  if (i === 2) continue; // 다음 루프를 실행

  console.log(i);

  if (i === 5) break; // 반복문 끝내기

}

i가 2 일때는 continue를 하여 원래 console.log를 해야 하지만 그 코드를 수행하지 않고 바로 3으로 넘어간다.

i가 5일 땐 break 를 하여 반복문을 종료시킨다.

<b>7. 연습</b>

numbers라는 배열을 파라미터로 받아서 총합을 구하는 함수를 만들어보자.

function sumOf(numbers) {

  let sum = 0;

  for (let i=0; i < numbers.length; i++) {

    sum = sum + numbers[i];

  }

  return sum

}

const result = sumOf([1, 2, 3, 4, 5]);

console.log(result);

결과는 15이다.

* 숫자로 이루어진 배열이 주어졌을 때 해당 숫자 배열 안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 만들어서 반환해보자.

function biggerThanThree(numbers) {

  let array = []

  for (let i=0; i<numbers.length; i++) {
 
    if (numbers[i] > 3) {
 
      array.push(numbers[i])
 
    }
 
  }
 
  return array;

}

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]



<b> * #배열 내장함수 </b>

이번에는 배열을 다룰 때 알고 있으면 너무나 유용한 내장 함수들에 대해 알아볼 것.

<b>1. forEach</b>

forEach 는 가장 쉬운 배열 내장함수이다. 기존에 배웠던 for문을 대체할 수 있다. 예를 들어 다음과 같은 텍스트 배열이 있다고 가정해 보자.

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

만약 배열 안에 있는 모든 원소들을 모두 출력해야 한다면 for문을 사용해서 다음과 같이 구현할 수 있다.

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (let i=0; i < superheroes.length; i++) {

  console.log(superheroes[i]);

}

배열의 forEach 함수를 사용하면 다음과 같이 구현할 수 있다.

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero => {
  console.log(hero);
});

forEach 함수의 파라미터로는, 각 원소에 대해 처리하고 싶은 코드를 함수로 넣어준다. 이 함수의 파라미터 hero는 각 원소를 가리키게 된다.

이렇게 함수 형태의 파라미터를 전달하는 것을 콜백함수 라고 한다. 함수를 등록해주면, forEach가 실행을 해주는 것!

<b>2. map</b>

map은 배열 안의 각 원소를 변환할 때 사용되며, 이 과정에서 새로운 배열이 만들어진다.

예를 들어서 다음과 같은 배열이 있다고 가정해 보자.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

만약에 배열 안의 모든 숫자를 제곱해서 새로운 배열을 만들고 싶다면, 어떻게 해야될까? map 함수를 사용하지 않고 지금까지 배운 것을 활용하면, 다음과 같이 구현할 수 있다.


const array = [1, 2, 3, 4, 5, 6 ,7 ,8];

const squared = [];

for (let i=0; i < array.length; i++) {

  squared.push(array[i] * array[i]);

}

console.log(squared);

forEach를 구현해서도 만들 수 있다.

const array = [1, 2, 3, 4, 5, 6 ,7 ,8];

const squared = [];

array.forEach(n => {

  squared.push(n * n);

});

console.log(squared);

결과는 [1, 4, 9, 16, 25, 36, 49, 64]이다.


만약 map을 사용하면, 이를 더 짧은 코드를 사용하여 구현할 수 있다.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;

const squared = array.map(square);

console.log(squared);

map 함수의 파라미터로는 변화를 주는 함수를 전달해 준다. 이를 변화함수라고 부른다.

현재 우리의 변화함수 square는 파라미터 n을 받아와서 이를 제곱해 준다.

array.map 함수를 사용할 때 square를 변화함수로 사용함으로써 내부의 모든 값에 대해 제곱을 해서 새로운 배열을 생성했다.

변화함수를 꼭 이름을 붙여서 선언할 필요는 없다.

const squared = array.map(n => n * n);
console.log(sqaured);

<b>3. indexOf</b>

indexOf는, 원하는 항목이 몇 번째 원소인지 찾아주는 함수이다.

예를 들어서 다음과 같은 배열이 있을 때,

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

토르가 몇 번째 항목인지 알고싶다고 가정하자. 그렇다면,

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

const index = superheroes.indexOf('토르');

console.log(index);

와 같이 입력할 수 있다. 결과는 2가 나온다.

<b>4. findIndex</b>

만약에 배열 안에 있는 값이 <b>숫자, 문자열, 또는 불리언</b>이라면, 찾고자 하는 항목이 몇 번째 원소인지 알아내려면 indexOf를 사용하면 된다. 하지만, 배열 안에 있는 값이 객체이거나, 배열이라면 indexOf로 찾을 수 없다.

다음과 같은 배열이 있다고 가정해 보자.

const todos = [

  {

    id: 1,

    text: '자바스크립트 입문',

    done: true

  },

  {

    id: 2,

    text: '함수 배우기',

    done: true

  },

  {

    id: 3,

    text: '객체와 배열 배우기',

    done: true

  },

  {

    id: 4,

    text: '배열 내장함수 배우기',

    done: false

  }

];


여기서 만약 id가 3인 객체가 몇번째인지 찾으려면, findIndex 함수에 검사하고자 하는 조건을 반환하는 함수를 넣어서 찾을 수 있다.

const index = todos.findIndex(todo => todo.id === 3);
console.log(index); 하면

결과는 2가 나타난다.

<b>5. find</b>

find 함수는, findIndex 랑 비슷한데, 찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환한다.

위 함수에서 ..

const todo = todos.find(todo => todo.id === 3);

console.log(todo);

하면 .. 결과는

{id : 3, text : "객체와 배열 배우기", done: true}

<b>6. filter</b>

filter 함수는 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만든다. 예를 들어서, 우리가 방금 만들었던 todos 배열에서 done의 값이 false인 항목들만 따로 추출해서 새로운 배열을 만들어 보자.

위 함수에서 ..

const tasksNotDone = todos.filter(todo => todo.done === false);

console.log(taskNotDone);

결과는 ..

[


  {

    id: 4,

    text: "배열 내장 함수 배우기",

    done: false

  }

];

가 된다.

filter 함수에 넣는 파라미터는 조건을 검사하는 함수를 넣어주며, 이 함수의 파라미터로 각 원소의 값을 받아오게 된다.

const tasksNotDone = todos.filter(todo => todo.done === false); 를

const tasksNotDone = todos.filter(todo => !todo.done); 으로 바꿀 수도 있다.

<b>7. splice</b>

splice는 배열에서 특정 항목을 제거할 때 사용한다.

const numbers = [10, 20, 30, 40];

위 배열에서 30을 지운다고 가정해 보자. 그러면, 30이 몇 번째 index인지 알아낸 이후 이를 splice를 통해 지울 수 있다.

const numbers = [10, 20, 30, 40];

const index = numbers.indexOf(30);

numbers.splice(index, 1);

console.log(numbers);

결과는 [10, 20, 40] 이 나온다.

<b>numbers.splice(index, 1)</b> 에서 .. 

splice를 사용할 때 첫 번째 파라미터 (위에선 index)는 어떤 인덱스를 지울지를 의미하고(즉 numbers.indexOf(30)을 지운다는 것) 두번째 파라미터는 그 인덱스부터 몇개를 지울지를 의미한다(즉 30부터 1개를 지운다는 것).

<b>8. slice</b>

slice는 splice랑 조금 비슷하다. 배열을 잘라낼 때 사용하는데, 중요한 점은 기존의 배열을 건드리지 않는다는 점이다.

const numbers = [10, 20, 30, 40];

const sliced = numbers.slice(0, 2); // 0부터 시작해서 2 전까지


console.log(sliced); // 10, 20

console.log(numbers); // 10, 20, 30, 40


const sliced = numbers.slice(0, 2); 에서 slice에는 두 개의 파라미터를 넣게 되는데, 첫 번째 파라미터는 어디서부터 자를지(즉 여기선 0번째 인덱스부터 자른다는 것), 그리고 두번째 파라미터는 어디까지 자를지를 의미한다.(즉 여기선 2-1번째 인덱스까지 자른다는 것)

<b>9. shift와 pop</b>

shift와 pop은, 비슷하지만 조금 다르다.

shift는, 첫 번째 원소를 배열에서 추출해 준다.(추출하는 과정에서 배열에서 해당 원소는 사라짐!!)

const numbers = [10, 20, 30, 40];

const value = numbers.shift();

console.log(value);

console.log(numbers);

를 하면, 

10

[20, 30, 40] 이 출력된다. 즉 기존 배열에서 shift로 빼낸 원소는 없어지는 것이다.

pop은 다 똑같은데, 첫 번쨰 원소를 추출하는 shift와 달리 pop은 맨 마지막 항목을 추출한다. (물론 기존 배열에서 pop으로 빼낸 원소는 사라진다.)

즉 결과는

40

[10, 20, 30] 이 되는 것.


<b>10. unshift</b>

unshift는 shift의 반대이다. <b>배열의 맨 앞에 새로운 원소를 추가한다.</b>

const numbers = [10, 20, 30, 40];

numbers.unshift(5);
console.log(numbers); 하면

[5, 10, 20, 30, 40]이 된다.

<b>11. concat</b>

concat은, 여러개의 배열을 하나의 배열로 합쳐준다.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);

하게 되면 결과는 [1, 2, 3, 4, 5, 6]; 이 된다.

<b>concat 함수는 arr1과 arr2에 변화를 주지 않는다.</b>


<b>12. join</b>

join은 배열 안의 값들을 문자열 형태로 합쳐준다.

const array = [1, 2, 3, 4, 5];

console.log(array.join()); // 1,2,3,4,5

console.log(array.join(' ')); // 1 2 3 4 5

console.log(array.join(', )); // 1, 2, 3, 4, 5


<b>13. reduce</b>

reduce 함수는 잘 사용할 줄 알면 정말 유용한 내장 함수이다. 만약 주어진 배열에 대해 총합을 구해야 하는 상황이 왔다고 가정해 보자.

const numbers = [1, 2, 3, 4, 5];

let sum = 0;

numbers.forEach(n => {

  sum = sum + n;

});

con sole.log(sum);


을 하면 결과는 15가 된다.

여기서 sum을 계산하기 위해 사전에 sum을 선언하고,forEach를 통해 계속 덧셈을 해줬는데,

reduce라는 함수를 사용하면 다음과 같이 구현할 수 있다.

const numbers= [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);

numbers.reduce((accumulator, current) => accumulator + current, 0); 에서 reduce 함수는 2개의 파라미터를 전달한다.

첫번째 파라미터((accumulator, current) => accumulator + current)는 accumulator와 current를 파라미터로 가져와서 결과를 반환하는 콜백 함수이다. 

두 번째 파라미터는 reduce 함수에서 사용할 초깃값이다.

방금 작성한 함수는,

const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);

이 코드의 실행 결과는 ..

Object {accumulator : 0, current : 1}

Object {accumulator : 1, current : 2}

Object {accumulator : 3, current : 3}

Object {accumulator : 6, current : 4}

Object {accumulator : 10, current : 5}

15

가 나온다.

배열을 처음부터 끝까지 반복하면서 우리가 전달한 콜백 함수가 호출이 되는데, 가장 처음엔 accumulator 값이 0이다. 이 값이 0인 이유는 우리가 두 번째 파라미터인 초깃값으로 0을 설정했기 때문.

처음 콜백 함수가 호출되면, 0 + 1을 해서 1이 반환된다. 이렇게 1이 반환되면 그 다음 번에 콜백함수가 호출될 때 accumulator 값으로 사용된다.

콜백함수가 두번째로 호출될 땐 1+2를 해서 3이 되고, 이 값이 세 번째로 호출될 때의 accumulator가 된다.

그래서 쭉 누적돼서 최종 결과물 15가 나타나는 것.


* reduce 를 사용해서 평균도 계산할 수 있다. 평균을 계산하려면 가장 마지막 숫자를 더하고 나서 배열의 length로 나눠줘야 한다.

const numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, current, index, 
array) => {

  if (index === array.length - 1) {

    return (accumulator + current) / array.length;

  }

  return accumulator + current;

}, 0);

console.log(sum);

을 하면, 결과는 3이 된다.

위 코드의 reduce에서 사용한 콜백함수에서는 추가 파라미터로 index와 array를 받아왔다. index는 현재 처리하고 있는 항목이 몇번째인지 가리키고, array는 현재 처리하고 있는 배열 자신을 의미한다.


function countBiggerThanTen(numbers) {
  let count = 0;
  numbers.forEach(n => {
    if (n > 10) {
      count = count + 1;
    }
  });
  return count;
}

const count = countBiggerThanTen([1, 2, 3, 5 ,10, 20, 30, 40, 50, 60);
console.log(count); // 5

function countBiggerThanTen(numbers) {
  let count = [];
  if (numbers[i] > 10) {
    count.push(numbers[i]);
  }
  return count;
}