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


7. value_counts()와 같은 기능을 하는 것 : df.groupby('column 1').column1.count()

여기서, 가장 그 값이 낮은 것을 뽑아내고자 한다면, df.groupby('column 1').price(임의로 설정한 변수).min() 하면

points

80      5.0

81      5.0

       ... 

99     44.0

100    80.0

Name: price, Length: 21, dtype: float64

처럼 나온다. Name에 임의로 설정한 변수가 붙게 되는 것이다.

8. 데이터셋 내의 각 winery의 첫 번째 와인의 이름(title)을 따오는 방법은?

- df.groupby('winery').apply(lambda df: df.title.iloc[0]) 하면

winery

1+1=3                          1+1=3 NV Rosé Sparkling (Cava)

10 Knots                 10 Knots 2010 Viognier (Paso Robles)

                                  ...                        

àMaurice    àMaurice 2013 Fred Estate Syrah (Walla Walla V...

Štoka                         Štoka 2009 Izbrani Teran (Kras)

Length: 16757, dtype: object

의 형태로 출력이 된다. 각 winery 및 그 winery 내의 첫 번째 와인의 이름(title)의 형식!

9. 한 가지 이상의 범주로도 grouping할 수 있다.

df.groupby(['column 1', 'column 2']).apply(lambda df: df.loc[df.points.idxmax()])

를 하게 되면, column 1과 column 2를 기준으로 grouping을 하고, 거기서 points가 높은 순서대로 정렬을 하게 되는 것이다.

10. agg()는 .. 데이터프레임에서 다양한 다른 함수들을 동시에 실행할 수 있게 해준다.

df.groupby(['country']).price.agg([len, min, max])를 하면..

             len     min     max

country

Argentina   3800.0   4.0     230.0

Armenia     2.0      14.0    15.0

...         ...      ...     ...

Ukraine     14.0     6.0     13.0

Uruguay     109.0    10.0    130.0

이런 형식으로, 각 나라에서의 '가격' 에 대해 1. 수, 2. 최솟값, 3. 최댓값 이 세가지 함수를 동시에 실행할 수 있는 것이다.


11. multi-index를 갖는 경우.

variable = df.groupby(['column 1', 'column 2']).description.agg([len])

variable 을 실행하면

                                len

country     province

Argentina   Mendoza Province    3264

            Other               536

...         ...                 ...

Uruguay     San Jose            3

            Uruguay             24

이런 식으로 나온다. 그러니까 .. 큰 범주 index와 그 내에 있는 작은 index들 각각의 len값을 나타내는 형식인듯! 기본적으로 큰 범주(country)의 알파벳 순으로 나열하는 듯.

mi = variable.index<br>type(mi)를 하면 ..

pandas.core.indexes.multi.MultiIndex 가 나온다.

이를 원래의 regular index로 바꾸고 싶을 땐 variable.reset_index()를 하면 된다.

12. sorting (sort_values)

위의 variable을 보면 len이 딱히 순서가 없이 뒤죽박죽 돼있는 것을 볼 수 있다.

이를 regular index로 바꾸고 난 후에 특정 column을 기준으로 높거나 낮은것부터 순서대로 배열할 수 있다.

variable = variable.reset_index()<br>variable.sort_values(by='len') 하면..

    country     province                len

179 Greece      Muscat of Kefallonian   1

192 Greece      Sterea Ellada           1

...

415 US          Washington              8639

392 US          California              36247

이렇게 len값의 순서대로 배열이 된 것을 확인할 수 있다.

높은 값부터 배열하고 싶다면, variable.sort_values(by='len', ascending=False)를 해주면 된다.

variable.sort_index()를 통해 index value(즉 country의 알파벳 순서)를 기준으로 배열할 수 있다.

13. variable.sort_values(by=['country', 'len'])을 하면 country의 알파벳 순서대로 나열하면서 동시에 len값이 낮은 순서대로 배열할 수 있다. 즉 두 개 이상의 column을 기준으로도 sorting할 수 있는 것이다.


14. data type(=Dtype) 구하기 .. df.price.dtype을 해보면 dtype('float64')가 나온다.

df 전체를 대상으로 dtypes를 해보면 .. df.dtypes

country        object

description    object

                ...  

variety        object

winery         object

Length: 13, dtype: object

이 나온다.

float64는 64비트의 floating point number를 사용한다는 것이다. int64는 비슷한 사이즈의 integer를 사용한다는 것이고..

string으로만 이루어져 있는 columns들은 그들 고유의 type을 갖고 있는 게 아니라, object라는 공통된 type을 갖고 있음을 유의해야 한다.

15. 데이터타입 바꾸기

df.points.astype('float64')를 실행하면 .. 기존에 int64로 되어있던 것의 데이터타입이 float64로 바뀌면서 뒤에 소수점이 생기게 된다.

데이터프레임이나 Series index 또한 그들 고유의 dtype을 갖고 있다.

df.index.dtype -> dtype('int64')


16. Missing data (NaN)

NaN(Not a Number)는, 항상 float64의 dtype을 갖고 있다. NaN값을 가진 것들만 선택하려면, df[pd.isnull(df.country)] 이런 식으로 하면 country column의 값이 NaN인 것들만 출력이 된다.

NaN의 값들을 바꿔주는 함수도 있다. df.region_2.fillna('Unknown')을 해주면

0         Unknown

1         Unknown


           ...   

129969    Unknown

129970    Unknown

Name: region_2, Length: 129971, dtype: object

로 NaN값을 가진 전체가 Unknown으로 바뀐 것을 확인할 수 있다.


단지 NaN만이 아니더라도, 기존에 이미 있는 값을 다른 값으로 대채하는 방법도 있다.

df.taster_twitter_handle.replace('@kerionakeefe', '@kerino')를 하면 ..

0            @kerino

1         @vossroger

             ...    

129969    @vossroger

129970    @vossroger

Name: taster_twitter_handle, Length: 129971, dtype: object

이렇게 출력이 되는데, 0에서 @kerino로 바뀐 것을 확인할 수 있다.


17. Renaming을 하려면 .. df.rename(columns={'원래 column이름' : '바꿀 column 이름'})을 하면 된다.

rename()은, index나 column의 키워드 파라미터를 특정함으로써 이름을 다시 짓게 하는 것이다. index의 이름을 바꿔줄 수도 있다.

df.rename(index={0: 'firstEntry', 1: 'secondEntry'})를 해주면,

기존에 index가 0 1 2 3 4 ..... 129969 129970 이런식으로 진행됐던게 firstEntry secondEntry 3 4 ..... 129969 129970 이렇게 바뀌게 된다.

이렇긴 하지만, index를 바꿔주는 일은 거의 없으므로. 보통은 set_index()를 사용한다.

df.rename_axis('wines', axis='rows').rename_axis('fields', axis='columns')를 하면 .. wines라는 이름을 가진 row가 생기고 fields라는 이름을 가진 column이 새로 생긴다.

18. concat() 함수는.. 요소의 리스트가 주어졌을 때 이를 잘게 부순다. 즉 하나하나로 나눈다고 생각하면 될듯.

19. join() 함수는.. 공통된 index를 갖고 있는 다른 DataFrame object들을 결합하는 역할을 한다.

left = canadian_youtube.set_index(['title', 'trending_date'])

right = british_youtube.set_index(['title', 'trending_date'])

left.join(right, Isuffix='_CAN', rsuffix='_UK') 를 하면 ..

특정 title과 trending_date에 대해 캐나다 파일의 성질과 영국 파일의 성질이 각각 표를 크게 두개로 나눴을 때 왼쪽과 오른쪽에 위치하게 된다. 이 때, 같은 column에 대해 _CAN과 _UK를 붙임으로써 두 나라를 구분했다.