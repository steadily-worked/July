7/23

Python 메소드 중 몰랐던 것들 + 아예 새로 배우는 개념들을 정리하는 곳!

1. list method

list.pop은, 리스트의 마지막 값을 추출하고 리스트에서 없앤다.

ex) planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'],

planets.pop()을 하면 .. 'Pluto'가 나옴. 그리고 다시  planets를 하면 Pluto가 사라진 Neptune까지의 리스트로 반환.

#Is Earth a planet?

"Earth" in planets -> True.

"Calbefraques" in planets -> False.

2. Tuple

리스트와 거의 비슷하지만, []을 쓰는 리스트와 달라 튜플은 ()을 사용함. ex) t = (1, 2, 3). t = 1, 2, 3으로 하고 t를 출력해도 (1, 2, 3)으로 출력됨.

튜플은, immutable해서(불변의 성질을 갖고 있어서) t[0] = 100 이런식으로 임의로 값 변경을 해도 적용되지 않는다.

x = 0.125를 하고 x.as_integer_ratio()를 하면, (1, 8) 이런 식으로 (분모, 분자) 순으로 반환 해준다.

numerator, denominator = x.as_integer_ratio()를 하고<br>print(numerator / denominator) 를 하면, 위에서 쓴 1, 8에 따라 0.125가 출력된다.

