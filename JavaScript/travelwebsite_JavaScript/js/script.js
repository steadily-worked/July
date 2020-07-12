$('#menu a').on('click', selectMenu);
// menu 속 a태그에 4가지가 전부 묶여있으므로 각 도시 id를 설정해줬던 것을 한줄로 요약

$('#photo').on('mouseenter', mouseEnterPhoto);
$('#photo').on('mouseleave', mouseLeavePhoto);

$(document).on('keydown', selectMenu);

function selectMenu(event) {
  // console.log(event.currentTarget.id); // 눌렀을 때 현재 target 된 id가 무엇인지 알려줌. home을 누르면 console에 home이 출력
  // var targetId = event.currentTarget.id;
  var targetId = '';
  if (event.type === 'click') { // 이벤트가 click 이벤트라면
    targetId = event.currentTarget.id; // click 된 링크의 id를 받아와서 targetId로 설정하고
  } else if (event.type === 'keydown') { // 이벤트가 keyboard 이벤트라면
    if (event.key === '1') { // 1~4가 눌리면 home~paris로 설정해준다.
      targetId = 'home';
    } else if (event.key === '2') {
      targetId = 'seoul';
    } else if (event.key === '3') {
      targetId = 'tokyo';
    } else if (event.key === '4') {
      targetId = 'paris';
    }
  }

  $('#photo').attr('src', 'images/' + targetId + '.png');
  //이렇게 하면, home 링크를 클릭하면 targetId가 문자열 home이니까, 'images/home.png'가 되고, 나머지도 마찬가지.
  $('#menu a').css('font-weight', 'normal');
  $('#' + targetId).css('font-weight', 'bold');
  // 이렇게 하면 targetId의 문자열의 font-weight만 굵어짐.


}

// 사진을 바꿔주는 함수 (jQuery 이용)
// function clickHome() {
//   $('#photo').attr('src', 'images/home.png');
//   $('#home').css('font-weight', 'bold');
//   $('#seoul').css('font-weight', 'normal');
//   $('#tokyo').css('font-weight', 'normal');
//   $('#paris').css('font-weight', 'normal');
// }
// function clickSeoul() {
//   $('#photo').attr('src', 'images/seoul.png');
//   $('#home').css('font-weight', 'normal');
//   $('#seoul').css('font-weight', 'bold');
//   $('#tokyo').css('font-weight', 'normal');
//   $('#paris').css('font-weight', 'normal');
// }
// function clickTokyo() {
//   $('#photo').attr('src', 'images/tokyo.png');
//   $('#home').css('font-weight', 'normal');
//   $('#seoul').css('font-weight', 'normal');
//   $('#tokyo').css('font-weight', 'bold');
//   $('#paris').css('font-weight', 'normal');
// }
// function clickParis() {
//   $('#photo').attr('src', 'images/paris.png')
//   $('#home').css('font-weight', 'normal');
//   $('#seoul').css('font-weight', 'normal');
//   $('#tokyo').css('font-weight', 'normal');
//   $('#paris').css('font-weight', 'bold');
// }
// 사진에 마우스를 올리면 그림자를 넣어주는 함수
function mouseEnterPhoto() {
  $('#photo').css('box-shadow', '5px 10px');
}
// 마우스가 사진에서 벗어날 경우 그림자를 없애주는 함수
function mouseLeavePhoto() {
  $('#photo').css('box-shadow', 'none');
}

// 키를 눌렀을 때 페이지가 바뀌는 함수 (키보드 이벤트 핸들링)
// function processKeyEvent(event) {
//   if (event['key'] === '1') {
//     clickHome();
//   } else if (event['key'] === '2') {
//     clickSeoul();
//   } else if (event['key'] === '3') {
//     clickTokyo();
//   } else if (event['key'] === '4') {
//     clickParis();
//   }
// }

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