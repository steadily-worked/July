<!DOCTYPE html>
<html>
  <head>
    <title>Consulting Market</title>
    <meta charset="utf-8" />

    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet" />
  </head>

  <body>
    <div class="hero-header">
      <div class="navbar">
        <a href="#" id="logo">
          <img src="images/logo.png" width="230">
        </a>

        <ul class="menu menu-left">
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">BLOG</a></li>
        </ul>

        <ul class="menu menu-right">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">LOGIN</a></li>
        </ul>
      </div>

      <div class="container">
        <div class="left">
          <h2>더 많은 <b>정보와 이벤트</b> 등을<br> 받아보고 싶으면 <b>이메일을 입력해주세요!</b></h2>

          <input id="email-input" type="email" placeholder="이메일">
          <input id="submit-btn" type="submit" value="Send">
        </div>

        <img id="main-img" src="images/desk.png" width="400">
      </div>
    </div>

    <script
      src="https://code.jquery.com/jquery-3.2.1.min.js"
      integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
      crossorigin="anonymous"></script>
    <script>
      $('#email-input').on('input', submit);
      function submit() {
        var emailAdress = $('#email-input').val();
        var atSign = emailAdress.indexOf('@');
        var dot = emailAdress.substr(atSign).indexOf('.');
        if (atSign !== -1 && dot >= 0) {
          $('#submit-btn').css('background-color', '#4D79C2');
        }
        else {
          $('#submit-btn').css('background-color', '#9E9E9E');
        }
      }
    </script>
  </body>
</html>

이 문제에서는 atSign 자체를 안에 넣어서 @ 뒤에 . 이 들어오도록 하는 것을 전혀 생각하지 못했었다. 그걸 생각하고 나니 어렵지 않게 풀 수 있었다.