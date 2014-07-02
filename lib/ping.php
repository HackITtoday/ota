<?php
// 
// Find server 
//

//connection, auth
include './auth.php';
include './template.php';

$xml_post_string = $template['ping'];

$headers = array(
  "Content-type: text/xml;charset=\"utf-8\"",
  "Accept: text/xml",
  "Cache-Control: no-cache",
  "Pragma: no-cache",
  "SOAPAction: ". $soapUrl, 
  "Content-length: ".strlen($xml_post_string),
); 

$url = $soapUrlPing;

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

//print_r($response);
curl_close($ch);

// converting
$response1 = str_replace("<soap:Body>","",$response);
$response2 = str_replace("</soap:Body>","",$response1);

// converting to XML
$xml = simplexml_load_string($response2);
$array = json_decode(json_encode((array) $xml), 1);
$ping = 0;
if ($array['XHI_PingRS']['@attributes']['success']) == "true") {
  $ping = 1;
}
print $ping;
