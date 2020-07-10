$('#home').on('click', clickHome);
$('#seoul').on('click', clickSeoul);
$('#tokyo').on('click', clickTokyo);
$('#paris').on('click', clickParis);

$('#photo').on('mouseenter', mouseEnterPhoto);
$('#photo').on('mouseleave', mouseLeavePhoto);

$(document).on('keydown', processKeyEvent);
// 사진을 바꿔주는 함수 (jQuery 이용)
function clickHome() {
  $('#photo').attr('src', 'images/home.png');
  $('#home').css('font-weight', 'bold');
  $('#seoul').css('font-weight', 'normal');
  $('#tokyo').css('font-weight', 'normal');
  $('#paris').css('font-weight', 'normal');
}
function clickSeoul() {
  $('#photo').attr('src', 'images/seoul.png');
  $('#home').css('font-weight', 'normal');
  $('#seoul').css('font-weight', 'bold');
  $('#tokyo').css('font-weight', 'normal');
  $('#paris').css('font-weight', 'normal');
}
function clickTokyo() {
  $('#photo').attr('src', 'images/tokyo.png');
  $('#home').css('font-weight', 'normal');
  $('#seoul').css('font-weight', 'normal');
  $('#tokyo').css('font-weight', 'bold');
  $('#paris').css('font-weight', 'normal');
}
function clickParis() {
  $('#photo').attr('src', 'images/paris.png')
  $('#home').css('font-weight', 'normal');
  $('#seoul').css('font-weight', 'normal');
  $('#tokyo').css('font-weight', 'normal');
  $('#paris').css('font-weight', 'bold');
}
// 사진에 마우스를 올리면 그림자를 넣어주는 함수
function mouseEnterPhoto() {
  $('#photo').css('box-shadow', '5px 10px');
}
// 마우스가 사진에서 벗어날 경우 그림자를 없애주는 함수
function mouseLeavePhoto() {
  $('#photo').css('box-shadow', 'none');
}

// 키를 눌렀을 때 페이지가 바뀌는 함수 (키보드 이벤트 핸들링)
function processKeyEvent(event) {
  if (event['key'] === '1') {
    clickHome();
  } else if (event['key'] === '2') {
    clickSeoul();
  } else if (event['key'] === '3') {
    clickTokyo();
  } else if (event['key'] === '4') {
    clickParis();
  }
}

    // 사진을 바꿔주는 함수 (함수 그대로 사용. jQuery 사용하기 이전에 썼던 코드들이므로 주석처리)
//    function clickHome() {
//      document.getElementById('photo').src = 'images/home.png';
//      document.getElementById('home').style.fontWeight = 'bold';
//      document.getElementById('seoul').style.fontWeight = 'normal';
//      document.getElementById('tokyo').style.fontWeight = 'normal';
//      document.getElementById('paris').style.fontWeight = 'normal';
      
//    }

//    function clickSeoul() {
//      document.getElementById('photo').src = 'images/seoul.png';
//      document.getElementById('home').style.fontWeight = 'normal';
//      document.getElementById('seoul').style.fontWeight = 'bold';
//      document.getElementById('tokyo').style.fontWeight = 'normal';
//      document.getElementById('paris').style.fontWeight = 'normal';
//    }

//    function clickTokyo() {
//      document.getElementById('photo').src = 'images/tokyo.png';
//      document.getElementById('home').style.fontWeight = 'normal';
//      document.getElementById('seoul').style.fontWeight = 'normal';
//      document.getElementById('tokyo').style.fontWeight = 'bold';
//      document.getElementById('paris').style.fontWeight = 'normal';
//    }
    
//    function clickParis() {
//      document.getElementById('photo').src = 'images/paris.png';
//      document.getElementById('home').style.fontWeight = 'normal';
//      document.getElementById('seoul').style.fontWeight = 'normal';
//      document.getElementById('tokyo').style.fontWeight = 'normal';
//      document.getElementById('paris').style.fontWeight = 'bold';
//    }