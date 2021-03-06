7/22 

<1> 머신 러닝 기본기 (1) 머신 러닝이란?


1. 머신러닝이란?

머신러닝 프로그램은 프로그램을 수행할 수록 점점 더 잘하게 됨. 경험을 통해서 스스로 업무 
능력을 키움.

ex) 스팸 메일 분류 프로그램

작업 : 스팸 분류,

경험 : 새로운 이메일을 보고 분류

스팸 분류를 얼마나 잘하는지가 이 프로그램의 성능을 나타냄.

프로그램이 더 많은 이메일을 봐서 스팸을 알아보는 실력이 향상된다면 머신러닝 프로그램이라고 부를 수 있는 것.


머신러닝을 할 때는 컴퓨터가 규칙을 직접 찾아내도록 하게 할 수 있다. (데이터를 이용해서)

새로 주어진 데이터를 통해 정교한 데이터셋을 만들 수 있음



2. 머신러닝이 핫해진 이유?

(1) 세상에 사용가능한 데이터가 많아졌기 때문

개인 컴퓨터가 생기고 스마트폰 등이 보급되면서 데이터가 빠르게 쌓이기 시작.

데이터가 엄청나게 많이 쌓이면서 최근에 머신러닝을 사용할 수 있게 됨.

(2) 컴퓨터 성능이 좋아졌기 때문

컴퓨터가 안좋던 시절엔 프로그램 학습에 시간이 너무 오래 걸렸었다. 그래서 많은 머신러닝 
기법이 잠들어 있었음.

(3) 머신러닝의 활용성이 증명되었기 때문

ex) 유튜브. 시청 데이터가 많이 쌓이면서 이 데이터를 기반으로 머신 러닝을 함으로써 
좋아하는 컨텐츠를 추천해주고 맞춤 영상을 제공해 줌.

현재 머신러닝 전문가가 매우 부족한 상황..


3. 인공지능? 빅데이터? 머신러닝?

빅데이터

엄청나게 많은 양의 데이터를 다루는 분야

엄청 많은 양의 데이터의 효율적인 보관/처리법, 분석 방법 등

인공지능

컴퓨터 프로그램이 인간처럼 생각/행동하게 하는 학문

딥러닝

머신러닝 기법 중 하나.

층이 “깊어"진다 -> “딥"러닝

인공지능 > 머신러닝 > 딥러닝 (인공지능으로 갈수록 큰 분야)


4. 학습의 유형

1. 지도 학습 (supervised learning)

- "답이 있고 이 답을 맞추는 게 학습의 목적. 비지도 학습에는 답이 없음.

ex) 스팸 메일 분류 프로그램 -> 우리는 메일을 보고 스팸인지 아닌지를 맞추고 싶은 것이므로 답이 있는 문제를 해결하는 것이다. 즉 지도학습에 해당하는 것.

ex2) 아파트 데이터 -> 위치, 크기, 건설 연도, 교통 정보 등의 데이터를 통해 또 다른 아파트의 가격을 예측하고 싶어 하는 경우. "아파트의 가격"이 바로 답이므로 즉 이도 지도학습에 해당한다고 볼 수 있다.

지도 학습도 크게 두 개로 나뉜다.

1. 분류 (Classification)

- ex) 스팸인지 아닌지 두 옵션 중 하나를 고르는 것.

2. 회귀 (Regression)

- ex) 아파트 가격을 예측하는 것. 몇가지 옵션 중에 고르는 게 아니라 무수히 많고 연속적인 값들 중에 맞추는 것이므로 이것은 회귀 문제이다.


2. 비지도 학습 (Unsupervised learning)

- '답'이 없고 이 답을 맞추는 게 학습의 목적

- 프로그램이 알아서 학습하게 하는 것 .. (프로그램이 자기 나름의 기준을 세워서 그것에 맞게 분류하게끔 알아서 시키는 것)

지도 학습 : 우선 제작, 직관적, 더 많이 사용됨.

5. k-NN 알고리즘 (k-Nearest Neighbors Algorithm)

- 많은 경험 -> 성능 향상 -> 머신 러닝이라고 할 수 있음.

6. 머신 러닝의 수학

- 머신 러닝 -> 컴퓨터 과학 + 수학 (선형대수 ,미분, 통계, 확률)

7. 머신 러닝 공부법

(1) 영상을 잠깐 멈추거나 이해가 안 되는 부분들을 반복적으로 들으면서 생각해본다.

(2) 해당 영상에 대한 정리 노트가 있으면 읽으면서 생각해본다.

(3) 아무리 생각해도 이해가 안되는 부분이 있으면 질문을 남긴다.


<1> 머신 러닝 기본기 (2) 선형대수학 필요한 만큼만 배우기

1. 일차식과 일차 함수

- 선형 대수학 : 일차식이나 일차 함수를 공부하는 학문

2. 일차 함수 표기법

- f(x, y) = 3x+6y+4

- f(x0, x1, x2, ..., xn) = a0x0 + a1x1 + ... + anxn + b(상수항)

어려워 보일 수 있지만 일차식이랑 똑같은 것임.

3. 행렬과 벡터

- 행렬 : Matrix

A =

[1 1 0 2]

[2 1 4 1]

[0 3 2 1]

1, 2, 0 -> 행, 0, 3, 2, 1 -> 열 3 * 4 행렬!

벡터 : 행이나 열이 하나밖에 없는 행렬! 5*1 행렬 or 1*5 행렬.

- 보통 벡터는 열 벡터임. ( 5 * 1 류의 세로줄 행렬 ) -> 5차원 행렬이라고 부른다!



11. 요소별 곱하기

- A = 2 * 2 행렬 [1, 2, 3, 4], B = 2 * 2 행렬 [-1, 2, 3, 1] 일 때
A∘B -> 2 * 2 행렬 [-1, 4, 9, 4] 임.

13. numpy로 행렬 연산하기

- A @ B (= np.dot(A, B)) -> 내적곱, A * B -> 요소별 곱하기

15. 전치 행렬, 역행렬
1) 진치 행렬 A = 3 * 2 행렬 [3, 2, 2, 1, 3, 5] 일때 At = 3 * 2 행렬 [3, 2, 3, 2, 1, 5]

2) 역행렬 -> A-1은 .. 1/ad-bc[d -b -c a] 이다.

16. numpy에서 전치, 단위, 역행렬 사용하기

A_tranpose = A.T 하고 A_tranpose 하면 전치행렬화 됨.
I = np.identity(3) 하고 I 하면 3 * 3 단위행렬이 나옴.

역행렬 -> np.linalg.pinv(A)를 하면 됨. 역행렬이 없는 경우에는, 역행렬과 최대한 비슷한 효과를 주는 행렬을 적용함.

A_inverse = np.linalg.pinv(A) 하고 A_inverse 하면 역행렬화 됨.
A @ A_inverse 를 해줘서 단위행렬이 나오면 되는 것. 11, 22, 33부분은 0으로 나오고, 나머지 부분은 6.66133815e-16와 같이 0에 거의 가까운 소수형으로 나옴.. 


19. 선형대수학과 행렬 / 벡터

- 아무리 복잡한 선형 시스템도 행렬과 벡터로 쉽게 표현할 수 있음!!

[2 -4 1] [x0] = [3]<br>
[3 1 -6] [x1] = [10]<br>
[1 1 1 ] [x2] = [5]

를 한 번에 표현하면 ..

[2x0 - 4x1 + x2] = [3]<br>
[3x0 + x1 - 6x2] = [10]<br>
[x0 + x1 + x2] = [5] 이다!

20. 선형대수학이 머신 러닝에 필요한 이유

- 아파트 가격 예측 -> 집값은, 크기(a1), 지하철역 거리(a2), 층수(a3) 에 따라 정해진다고 하자.

- 첫번째 아파트 가격 : 110*a1 + 400*a2 + 20*a3 .... 이렇게 n개를 만들었다고 해 보자. 이 식들은 모두 일차식이다. 

X를 ..<br>
[110 400 20]<br>
[100 1000 5]<br>
[180 10 30]<br>
[50 300 5]<br>
[  ...  ] 이처럼 각 요소들의 가격이 주어져 있을 때

a = 3 * 1 행렬 [a1, a2, a3]이라고 했을 때

모든 집 값은 Xa로 나타낼 수 있다. 이렇게 깔끔하게 요약하여 나타낼 수 있다는 점에서 선형대수학이 필요한 것.