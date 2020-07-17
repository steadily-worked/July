<!DOCTYPE html>
<html>
<head>
  <title>로그인</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" rel="stylesheet">
</head>
<body>
  <div class="login-form">
    <form>
      <input type="text" name="email" id="email-input" class="text-field" placeholder="아이디"><br>
      <input type="password" name="password" id="password-input" class="text-field" placeholder="비밀번호"><br>
      <input type="submit" value="로그인" id="submit-btn">
    </form>

    <div class="links">
      <a href="#">비밀번호를 잊어버리셨나요?</a>
    </div>
  </div>

  <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
  <script>
    $('#email-input').on('input', inputFunction);
    $('#password-input').on('input', inputFunction);

    function inputFunction() {
      var email = $('#email-input').val();
      var password = $('#password-input').val();
      
      if (email === '' || password === '') {
        $('#submit-btn').css('background-color', '#9b9b9b');
      } else {
        $('#submit-btn').css('background-color', '#1bbc9b');
      }
    }
    
  </script>
</body>
</html>

아이디와 패스워드 중 하나라도 비어있을 때는 회색이었다가 둘다 차있는 경우에는 초록색으로 바뀌도록 설정하는 문제!(jQuery 사용)