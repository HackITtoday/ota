<?php
include "../../wp-load.php";
$email = "marcus@hhost.me";

function randomPassword() {
    $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    for ($i = 0; $i < 16; $i++) {
        $n = rand(0, count($alphabet)-1);
        $pass[$i] = $alphabet[$n];
    }
    return $pass;
}

$website = "http://essentialhotels.co.uk";
$userdata = array(
  'user_login'        => $email,
  'user_nicename'     => 'Marcus Hitchins',
  'user_email '       => $email,
  'user_url'          => $website,
  'user_pass'         => randomPassword(),
  'display_name'      => 'Marcus Hitchins',

);

$user_id = wp_insert_user( $userdata ) ;

//On success
if( !is_wp_error($user_id) ) {
 echo "User created : ". $user_id;
} 

