<?php
// 
// Find Rooms
//
$site = 'essentialhotels.co.uk';
$display = Array();
//connection, auth
include './auth.php';
if ((int) $_GET[ 'price' ] == 0) {
  $_GET[ 'price' ] = 20 ;
}


if ($_GET['id']) {
  for ($i = 1; $i <= (int) $_GET[ 'price' ]; $i++) {
    $n = 0;  
    //variables 
    $dateFrom = date('Y-m-d', strtotime("+" . $i*8 . " days"));
 //     print $dateFrom . ' in '; 
    $dateTo = date('Y-m-d', strtotime($dateFrom  . ' + 1 days'));
 //     print $dateTo. ' out '; 
    $hotelId = (int) $_GET['id'];

    $people = rand(1, 3);
 //     print $people. ' people '; 
    $rooms = 1;
    //xml post structure
    include './template.php';

    $xml_post_string = $template[0];

    // print "<!-- sending " . print_r($xml_post_string,1) ." -->";
    $headers = array(
      "Content-type: text/xml;charset=\"utf-8\"",
      "Accept: text/xml",
      "Cache-Control: no-cache",
      "Pragma: no-cache",
      "SOAPAction: ". $soapUrl , 
      "Content-length: ".strlen($xml_post_string),
    ); 

    $url = $soapUrl;

    // PHP cURL  for https connection with auth
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_USERPWD, $soapUser.":".$soapPassword); // username and password - declared at the top of the doc
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $xml_post_string); // the SOAP request
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    // converting
    $response = curl_exec($ch); 

    if ($_GET['debug']) print "<!-- response " . print_r($response,1) ." -->";
    curl_close($ch);

    // converting
    $response1 = str_replace("<soap:Body>","",$response);
    $response2 = str_replace("</soap:Body>","",$response1);

    // converting to XML
    $xml = simplexml_load_string($response2);

    $array = json_decode(json_encode((array) $xml), 1);
    if ($_GET['price']==1) {
      if (isset($array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['PropertyDetails']['@attributes']['minCostOfStay'])) print $array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['PropertyDetails']['@attributes']['minCostOfStay'];
    } else {
      if ($array['XHI_HotelAvailRS']['@attributes']['success'] == 'true' ) {
        if (isset($array['XHI_HotelAvailRS']['AvailResults'])) 
          foreach ($array['XHI_HotelAvailRS']['AvailResults'] as $results ) {
            foreach ($results as $result ) {
              if (isset($result['AvailStay']))  
                foreach ($result['AvailStay'] as $rooms ) {
                  $n++; 
                  if (isset($rooms['AvailRooms'])) {
                    $display[trim($rooms['AvailRooms']['AvailRoom']['@attributes']['roomName']) ]= trim($rooms['AvailRooms']['AvailRoom']['@attributes']['roomName']); 
                  } elseif( isset($rooms['AvailRoom']) ) {
                    $display[trim($rooms['AvailRoom']['@attributes']['roomName'])]= trim($rooms['AvailRoom']['@attributes']['roomName']) ; 
                  }
                }
            }
          }
      }//    print " rooms ". (int) $n . "<br />";
    }
  }
  foreach ($display as $out) {

    print $out . "<br />";

  }
}
if ($_GET['price']!=1) {
?>
<form action="/venere/lib/find_room_names.php" method="get" data-ajax="false"> 
 id:<input name=id > <input type='submit'>
</form>
<?php }
