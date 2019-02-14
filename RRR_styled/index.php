<?php
    session_start();
?>

<?php
require './css/site.20190202201917.php';
require './css/site.20190202202006.php';

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Riding Retro Radio</title>
  <meta name="referrer" content="same-origin">
  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
  <style>.anim{visibility:hidden}</style>
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
  <meta name="msapplication-TileImage" content="mstile-144x144.png">
  <link rel="manifest" href="site.webmanifest">
  <link rel="stylesheet" href="css/site.20190202202006.css" type="text/css">
  <!--[if lte IE 7]>
<link rel="stylesheet" href="css/site.20190202202006-lteIE7.css" type="text/css">
<![endif]-->
  <!--[if lte IE 8]>
<link rel="stylesheet" href="css/site.20190202202006-lteIE8.css" type="text/css">
<![endif]-->
  <!--[if gte IE 9]>
<link rel="stylesheet" href="css/site.20190202202006-gteIE9.css" type="text/css">
<![endif]-->
</head>

 <!-- <?php
//     require "header.php";
//     ?>
//
//
//     <main>
//     <?php
//     if (isset($_SESSION['userId'])) {
//         echo '<p>You are logged in!</p>';
//     }
//     else {
//         echo '<p>You are logged out!</p>';
//     }
//     ?>
//
//     </main>
//
//
// <?php
//     require "footer.php";
//     ?> -->


<body id="b">
  <div class="fbk v ps s c fx" data-fbk="fx">
    <div class="ps2 v2 s2">
      <div class="v ps3 s3 c2">
        <div class="v ps4 s3 w">
          <div class="v ps4 s4 c3">
            <picture class="i2">
              <source srcset="images/trans_window_wide-240.png 1x, images/trans_window_wide-480.png 2x" media="(max-width:767px)">
              <source srcset="images/trans_window_wide-474.png 1x" media="(max-width:959px)">
              <source srcset="images/trans_window_wide-594.png 1x" media="(min-width:960px)">
              <img src="images/trans_window_wide-240.png" alt="" class="js i">
            </picture>
          </div>
          <div class="v ps5 s5 c2">
            <div class="v ps4 s5 w">
              <div class="v ps6 s6 c4">
                <img src="images/rrrvector.svg" alt="" class="anim fadeIn js2 i3">
              </div>
              <div class="v ps7 s7 c2">
                <div class="v ps4 s7 w">
                  <div class="v ps8 s8 c5">
                    <picture class="i5 js13">
                      <source media="(max-width:767px)" data-srcset="images/playbutton-84.png 1x, images/playbutton-168.png 2x">
                      <source media="(max-width:959px)" data-srcset="images/playbutton-142.png 1x, images/playbutton-284.png 2x">
                      <source media="(min-width:960px)" data-srcset="images/playbutton-177.png 1x">
                      <img data-src="images/playbutton-84.png" alt="" class="js3 anim rotateIn i4">
                    </picture>
                  </div>
                  <div class="v ps9 s9 c6">
                    <div class="v3 ps10 s10 c7">
                      <p class="p f">Username</p>
                    </div>

                    <div class="v ps11 s11 c8">
                      //USERNAME FIELD
                      <?php
                      if (isset($_SESSION['userId'])) {
                        echo '<form action="includes/logout.inc.php" method="post">
                        <button type="submit" name="logout-submit">Logout</button>
                        </form>';
                    }
                    else {
                          echo ' <form action="includes/login.inc.php" method="post">
                      <input type="text" name="mailuid" class="input">

                    </div>
                    <div class="v3 ps12 s12 c9">
                    <p class="p f2">Password</p>
                    </div>
                    <div class="v ps13 s13 c10">
                      //PASSWORD FIELD
                      <input type="password" name="pwd" class="input2">
                    </div>
                    <div class="v4 ps14 s14 c11">
                      <button type="submit" class="s15 f3" name="login-submit">Login</button>

                    </div>

                    </form>';}?>
                    <div class="v4 ps15 s16 c12">
                      <p class="s17 f4">
                        Sign Up
                      </p> ;
                    </div> }
                    ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="v ps16 s18 c13">
        <picture class="i7">
          <source srcset="images/tbt-hours-banner-317.jpg 1x, images/tbt-hours-banner-634.jpg 2x" media="(max-width:767px)">
          <source srcset="images/tbt-hours-banner-464.jpg 1x, images/tbt-hours-banner-928.jpg 2x" media="(max-width:959px)">
          <source srcset="images/tbt-hours-banner-580.jpg 1x, images/tbt-hours-banner-1160.jpg 2x" media="(min-width:960px)">
          <img src="images/tbt-hours-banner-317.jpg" alt="" class="js4 anim fadeIn i6">
        </picture>
      </div>
    </div>
  </div>
  <div id="consentBanner" class="v5 ps17 s19 c14">
    <div class="ps18 v2 s2">
      <div class="v3 ps19 s20 c15">
        <p class="p2 f5">This website makes use of cookies. Please see our<span class="f5"> privacy policy below</span> for details.</p>
      </div>
      <div class="v ps20 s21 c15">
        <a class="allowConsent f6 button v6 s22" href="#">OK</a>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="js/fixed.min.js"></script>
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/woolite.js"></script>
  <script type="text/javascript" src="js/unveil.js"></script>
  <script type="text/javascript" src="js/consent.js"></script>
  <script type="text/javascript" src="js/index.20190202202006.js"></script>
  <script type="text/javascript">
    var ver = RegExp(/Mozilla\/5\.0 \(Linux; .; Android ([\d.]+)/).exec(navigator.userAgent);
    if (ver && parseFloat(ver[1]) < 5) {
      document.getElementsByTagName('body')[0].className += ' whitespacefix';
    }
  </script>
</body>

</html>
