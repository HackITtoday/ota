<?php
session_start();
$debug = "https://b2b-uat.venere.com/xhi-1.0";
$live = "https://api.venere.com/xhi-1.0";

$laterooms_booking_url = "https://xmlbooking.laterooms.com/XmlBooking.asmx";
$email_booking_to = "nick@essential-hotels.com";

if (( isset($_POST['debug']) && $_POST['debug'] == 1) || ( isset($_GET['debug']) && $_GET['debug'] == 1) || ( isset($_SESSION['debug']) && $_SESSION['debug'] == 1 )  ) { //|| (isset($_POST['ota']) && $_POST['ota'] == 3)
  $live = $debug;
  $_SESSION['debug'] = 1;
  $_POST['debug'] = 1;
  $_GET['debug'] = 1;
  $email_booking_to = "marcus7777@gmail.com";
  $title = 'debug mode ::';
<<<<<<< HEAD
  $laterooms_booking_url = "https://xmlbookingwrapperuat.laterooms.com/XmlBooking.asmx";

=======
  $laterooms_booking_url = "https://xmlbooking.laterooms.com/XmlBooking.asmx";
>>>>>>> 49c8a74df4ba08b13966780dd0768aed0d02e0e8
}
//Data, connection, auth
$title = '';
$soapUrl = $live."/services/XHI_HotelAvail.soap"; // asmx URL of WSDL
$soapUrlBooking = $live."/services/XHI_HotelRes.soap"; // asmx URL of WSDL
$soapUrlPing= $live."/services/XHI_Ping.soap"; // asmx URL of WSDL
$soapUser = "user_srv";  //  username
$soapPassword = "mawesmegan1964"; // password
$UserOrgID = "essentialhotels";  
$UserID = $soapUser;
$UserPSW = $soapPassword;

$laterooms_feed_url = "http://xmlfeed.laterooms.com/index.aspx";
$laterooms_feed_url = "http://xmlcache.uat.laterooms.com/index.aspx";
$laterooms_id = "3095";
$laterooms_Username = "nick@e-travelguide.info";
$laterooms_Password = "marjorie";
