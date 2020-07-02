%matplotlib inline
import pandas as pd

df = pd.read_csv('data/silicon_valley_summary.csv')
boolean1 = df['gender'] == 'Male'
boolean2 = df['job_category'] == 'Managers'
boolean3 = df['race_ethnicity'] != 'All'
df[boolean1 & boolean2 & boolean3].plot(kind='bar', x='race_ethnicity', y='count')

#실리콘 밸리에서 일하는 남자 관리자(Managers)에 대한 인종 분포를 막대 그래프로 그리는 코드.