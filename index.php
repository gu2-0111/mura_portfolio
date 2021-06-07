<html>
<head>
  <meta charset="utf-8" />
</head>
<body>
<?php
  mb_language("Japanese");
  mb_internal_encoding("UTF-8");

  $to = "krzn432@gmail.com";
  $title = $_POST['sender'] + "様よりご依頼";
  $message = $_POST['message'];
  $headers = "From: " + $_POST['senderEmail'];

  if(mb_send_mail($to, $title, $message, $headers)) {
    echo "メール送信成功です";
  } else {
    echo "メール送信失敗です";
  }
?>
</body>
</html>