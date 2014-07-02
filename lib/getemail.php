<?php

require_once "persona.php";

// 
// print '<!-- ' . print_r($_POST ,1) . ' -->';
//

$body = $email = NULL;
if (isset($_POST['assertion'])) {
    $persona = new Persona();
    $result = $persona->verifyAssertion($_POST['assertion']);

    if ($result->status === 'okay') {
        $body = "<p>Validate as: " . $result->email . "</p>";
        $email = $result->email;
    } else {
        $body = "<p>Error: " . $result->reason . "</p>";
    }
} else {
    $body = "<p><a class=\"persona-button\" href=\"javascript:navigator.id.request()\"><span>Sign in</span></a></p>";
}
$_GET['id'] = 1;
$_GET['no_js'] = 1;
include('../inc/top.php');
include('../inc/header.php');
?>
  <center>
<?php if ($email == NULL) { ?>

    <form id="login-form" method="POST" action="getemail.php">
<?php } else { ?>
    <script>
           setTimeout('document.getElementById("login-form").submit();', 100)
    </script>
    <form id="login-form" method="POST" action="booking.php" target="_parent" >

<?php   print '<input type="hidden" name="email" value="'.$email.'">'."\n";

        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $output = shell_exec('grep \',"email":"'. $email .'",\' .ht.booking');
          $user_data = explode( "\n" , $output );
          foreach ($user_data as $data) {
            $clients[] = json_decode($data,1);
          }
          foreach ($clients as $client) {
            if (isset ($client['from-client']))
              foreach ($client['from-client'] as $key2 => $value2) {
                if (!($key2 == 'submit'))
                  if (!isset($_POST[$key])) print '<input type="hidden" name="'.$key2.'" value="'.$value2.'">'."\n";
              }
          }
        }
        print '<input type="hidden" name="'.$key.'" value="'.$value.'">'."\n";
      } ?>
      <input id="assertion-field" type="hidden" name="assertion" value="">
      <?php 
        foreach ($_POST as $key => $value) {
          print '<input type="hidden" name="'.$key.'" value="'.$value.'">'."\n";
        }
      ?>
    </form>
    <?php echo $body ?>
    <script src="https://login.persona.org/include.js"></script>
    <script>
    navigator.id.watch({
        loggedInUser: <?php echo $email ? "'$email'" : 'null' ?>,
        onlogin: function (assertion) {
            var assertion_field = document.getElementById("assertion-field");
            assertion_field.value = assertion;
            var login_form = document.getElementById("login-form");
            login_form.submit();
        },
        onlogout: function () {
            window.location = '?logout=1';
        }
    });
    </script>
    </center>
  </body>
</html>
