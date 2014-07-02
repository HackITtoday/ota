<?php
$email = "marcus@hhost.me"; 

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $output = shell_exec('cd lib;grep \',"email":"'. $email .'",\' .ht.booking');
  print $output;
  $user_data = explode( "\n" , $output );
  foreach ($user_data as $data) {
    $clients[] = json_decode($data,1);
  }
  foreach ($clients as $client) {
    if (isset ($client['from-client']))
      foreach ($client['from-client'] as $key => $value) {
        print '<input type="hidden" name="'.$key.'" value="'.$value.'">'."\n";
      }
  }
}
?>
