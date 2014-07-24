<?php
session_start();
$debug = "https://b2b-uat.venere.com/xhi-1.0";
$live = "https://api.venere.com/xhi-1.0";

$laterooms_booking_url = "https://xmlbooking.laterooms.com/XmlBooking.asmx";
$email_booking_to = "nick@essential-hotels.com";
if ($_GET['debug'] == 0) {
  $_SESSION['debug'] = 0;
  $_POST['debug'] = 0;
}
if (( isset($_POST['debug']) && $_POST['debug'] != 0) || ( isset($_GET['debug']) && $_GET['debug'] != 0) || ( isset($_SESSION['debug']) && $_SESSION['debug'] != 0 )  ) { //|| (isset($_POST['ota']) && $_POST['ota'] == 3)
  $live = $debug;
  $_SESSION['debug'] = (int) $_GET['debug'];
  $_POST['debug']    = (int) $_GET['debug'];
  $email_booking_to = "marcus7777@gmail.com";
  $title = 'debug mode ::';
  $laterooms_booking_url = "https://xmlbookingwrapperuat.laterooms.com/XmlBooking.asmx";
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
