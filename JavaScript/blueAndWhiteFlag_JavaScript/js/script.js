$('#btn1').on('click', blueFlagDown);
$('#btn2').on('click', whiteFlagDown);
$('#btn3').on('click', dotBlueFlagDown);

function blueFlagDown() {
    $('.blue').addClass('down');
    setTimeout(flagUp, 1000);
}

function whiteFlagDown() {
    $('.white').addClass('down');
    setTimeout(flagUp, 1000);
}

function dotBlueFlagDown() {
    $('.blue.dot').addClass('down');
    setTimeout(flagUp, 1000);
}

function flagUp() {
    $('.blue').removeClass('down');
}



// $('.blue') 이 부분이 이해가 안갔었다. 왜냐면 보통 클래스를 CSS에서 쓸 때는 .flags > .flag 이런 식으로 쓰기 때문에 ..
// <img class="flag blue dot" srcf="images/blue_dot.png" width="100"> 이 부분만 보면 $('.flag blue dot')이라고 써야 되는 줄 알았다.
// 근데 .flag & .blue & .dot 으로 구분이 되어 있는 것이더라 .. 몰랐다. 그래서
// 6번째 줄에 $('.blue').addClass('down');을 알고 나서 다시 보니, 클래스 이름 중에 blue가 들어가 있는 것들만 골라내는 방식이었던 것이다.
// 14번째에는 blue이면서 dot이라는 조건까지 충족해야 하므로 .blue.dot 이었던 것.. 
// 배우지 않아서 몰랐는데, 문제를 풀면서 새로운 사실을 알게 되었다.

// 1초 뒤에 내려갔던 깃발이 다시 올라오게 하는 함수를 추가했다. down 클래스를 추가해줬던 걸 없애면 그냥 되는 것