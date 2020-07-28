# 캐글 데이터사이언스 필기

## Pandas

1.  index label이 1, 2, 3, 5, 8, 10인 것들의 기록을 출력하고 싶다면 ..

print = df.loc[[1, 2, 3, 5, 8, 10], :]<br> print 하면 된다.


2. 특정 데이터 파일(df)의 특정 column(ex. column1)의 특정 value만을 뽑아내어 변수로 설정하고 싶다면? (여기선 맨앞의 10개라고 해보자)

value = df.column1.iloc[:10]<br> value = df.loc[:9, 'description']<br> value = desc.head(10) 이 세 가지 중 하나를 하면 된다. 파이썬에서처럼 뒤의 숫자 -1의 index까지 들어간다.


3. 특정 데이터 파일(df)의 첫 번째 row를 뽑아내어 변수로 설정하고 싶다면?

first_row = df.iloc[0, :]을 하면 된다. , :이 빠진 [0]만으로도 가능하다. :은 '전체'라는 뜻이 있기 때문에, 따로 설정해주지 않더라도 default값이 전체이다.


4. column이 특정한 값을 갖는 것들만을 추출하고 싶을 때? (1개) (ex. 나라)

variable = df[df.country == 'country 1']


5. column이 특정한 값을 갖는 것들만을 추출하고 싶을 때? (2개 이상) (ex. 나라와 가격)

variable = df[(df.country.isin(['country 1', 'country 2'])) & (df.price >= 100)] 을 하면 된다.<br>여기서 isin은, 앞의 country중에 포함시키고 싶은 것을 걸러내는 과정이라고 생각하면 편하다.

6. 특정 column들끼리 사칙연산한 결과의 최댓값(최솟값)을 구하고 싶다면??

max = (df.columns1 / df.columns2).idxmax()(idxmin()은 최솟값)

