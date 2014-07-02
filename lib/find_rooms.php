<?php
// 
// Find Roooms
//
if (!isset($display_cont)) {$display_cont = 0; };

$title = "";
$site = 'essentialhotels.co.uk';

//connection, auth
include './auth.php';

//variables 
$dateFrom = date('Y-m-d', strtotime($_POST['date']));
$dateTo = date('Y-m-d', strtotime($dateFrom  . ' + ' . $_POST['nights'] .' days'));
$nights = $_POST['nights'];

// $dateTo = date('Y-m-d', strtotime($_POST['date-out']));
if (((int) $_POST['hdura']) < ((int) $_POST['hdurr']) ) $_POST['hdura'] = $_POST['hdurr'] ; // if big people < rooms then big people = rooms 

$hotelId = (int) $_GET['id'];
if ($hotelId == 0) {
  $hotel_name = $_GET['id'];
}
$people = ((int) $_POST['hdurc']) + ((int) $_POST['hdura']);

if ($people == 1) {
  $people_display =  $people . " guest";
} else {
  $people_display =  $people . " guests";
}

$rooms = ((int) $_POST['hdurr']);
//xml post structure
include './template.php';

$images = Array();
$images['Single'] = "/wp-content/uploads" . $_POST['images']['Single'] ;
$images['Double'] = "/wp-content/uploads" . $_POST['images']['Double'] ;
$images['Deluxe'] = "/wp-content/uploads" . $_POST['images']['Deluxe'] ;
$images['Family'] = "/wp-content/uploads" . $_POST['images']['Family'] ;
$images['Suite']  = "/wp-content/uploads" . $_POST['images']['Suite']  ;

$map = Array();
$map['Single'] = strtolower($_POST['map']['Single']) ;
$map['Double'] = strtolower($_POST['map']['Double']) ;
$map['Deluxe'] = strtolower($_POST['map']['Deluxe']) ;
$map['Family'] = strtolower($_POST['map']['Family']) ;
$map['Suite']  = strtolower($_POST['map']['Suite'] ) ;

$display_title = Array();
$display_title['Single'] = $_POST['display']['Single'] ;
$display_title['Double'] = $_POST['display']['Double'] ;
$display_title['Deluxe'] = $_POST['display']['Deluxe'] ;
$display_title['Family'] = $_POST['display']['Family'] ;
$display_title['Suite']  = $_POST['display']['Suite']  ;

$display = Array();
$display['Single'] = Array();	
$display['Double'] = Array();	
$display['Deluxe'] = Array();	
$display['Family'] = Array();	
$display['Suite']  = Array();	

$mapped = Array();
foreach ($map as $type => $mapping) {
  if (isset( $map[$type] ) &&  isset( $display_title[$type] ) && isset( $images[$type] ) ) {
    $mapped[ $map[$type] ]['images'] = $images[$type];
    $mapped[ $map[$type] ]['display_title'] = $display_title[$type];
  }
}

if (isset($_POST['ota'])) $ota = $_POST['ota'];
if (isset($_GET['ota'])) $ota = $_GET['ota'];

if ($ota == "1") { // verene

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

  // print "<!-- response " . print_r($response,1) ." -->";
  curl_close($ch);

  // converting
  $response1 = str_replace("<soap:Body>","",$response);
  $response2 = str_replace("</soap:Body>","",$response1);

  // converting to XMLsimplexml_load_string($response2);
  $xml = simplexml_load_string($response2);

  $array = json_decode(json_encode((array) $xml), 1);
  if ($_GET['price']==1) {
    if (isset($array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['PropertyDetails']['@attributes']['minCostOfStay'])) print $array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['PropertyDetails']['@attributes']['minCostOfStay'];
  } else {
    // 
    // print "<!-- array " . print_r($array,1) ." -->";
    //
    $title = "";
    if ($array['XHI_HotelAvailRS']['@attributes']['success'] == 'true' && isset($array['XHI_HotelAvailRS']) ) {
      if ( isset($array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['PropertyDetails']['@attributes']['name'])){
        if ($_POST['nights'] == "1") {
          $title .= "Booking at the ".$array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['PropertyDetails']['@attributes']['name']." staying ".$_POST['date-in']." for ".$_POST['nights'] . " Night";
        } else {
          $title .= "Booking at the ".$array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['PropertyDetails']['@attributes']['name']." staying ".$_POST['date-in']." for ".$_POST['nights'] . " Nights";
        }
      } else {
        if ($_POST['nights'] == "1") {
          $title .= "Booking for staying ".$_POST['date-in']." for ".$_POST['night'] . " Night for " .$people_display  ;
        } else {
          $title .= "Booking for staying ".$_POST['date-in']." for ".$_POST['nights'] . " Nights for " .$people_display  ;
        }
      }
    } elseif (isset($hotel_name) ){
      if ($_POST['nights'] == "1") {
        $title .= "Booking at the ". $hotel_name ." staying ".$_POST['date-in']." for ".$_POST['nights'] . " Night";
      } else {
        $title .= "Booking at the ". $hotel_name ." staying ".$_POST['date-in']." for ".$_POST['nights'] . " Nights";
      }
    } else {
      if ($_POST['nights'] == "1") {
        $title .= "Booking for staying ".$_POST['date-in']." for ".$_POST['nights'] . " Night for " .$people_display  ;
      } else {
        $title .= "Booking for staying ".$_POST['date-in']." for ".$_POST['nights'] . " Nights for " .$people_display  ;
      }
    }

    include('../inc/top.php');
    include('../inc/header.php');
    print "<div class='status-bar'><h3> " . $title . " </h3></div>";
?>
<div id="specialoff" style="text-align:center;">
        <img src="/wp-content/uploads/2014/03/Phone-Only-Bookings-on-Rooms-V4.png" alt="Phone Only Special Offer">
</div>
<center class="find-rooms">
<?php

    if ($array['XHI_HotelAvailRS']['@attributes']['success'] == 'true' ) {
      if (isset($array['XHI_HotelAvailRS']['AvailResults'])) 
        foreach ($array['XHI_HotelAvailRS']['AvailResults'] as $results ) {
          foreach ($results as $result ) {
            if (isset($result['AvailStay']))  
              foreach ($result['AvailStay'] as $rooms ) {
                if (isset($rooms['AvailRooms'])) {

                  if ($map['Single'] == strtolower(trim($rooms['AvailRooms']['AvailRoom']['@attributes']['roomName'])) ) {
                    $display['Single'][ $rooms['@attributes']['totalPrice'] ] = $rooms;	
                  } else if ($map['Double'] == strtolower(trim($rooms['AvailRooms']['AvailRoom']['@attributes']['roomName'])) ) {
                    $display['Double'][ $rooms['@attributes']['totalPrice'] ] = $rooms;	
                  } else if ($map['Deluxe'] == strtolower(trim($rooms['AvailRooms']['AvailRoom']['@attributes']['roomName'])) ) {
                    $display['Deluxe'][ $rooms['@attributes']['totalPrice'] ] = $rooms;	
                  } else if ($map['Family'] == strtolower(trim($rooms['AvailRooms']['AvailRoom']['@attributes']['roomName'])) ) {
                    $display['Family'][ $rooms['@attributes']['totalPrice'] ] = $rooms;	
                  } else if ($map['Suite'] == strtolower(trim($rooms['AvailRooms']['AvailRoom']['@attributes']['roomName'])) ) {
                    $display['Suite'][ $rooms['@attributes']['totalPrice'] ] = $rooms;
                  } 

                  //   print "<!-- more rooms " . print_r($rooms['AvailRooms']['AvailRoom']['@attributes']['totalPrice'],1) ." -->";
                } elseif( isset($rooms['AvailRoom']) ) {

                  if ($map['Single'] == strtolower(trim($rooms['AvailRoom']['@attributes']['roomName'])) ) {
                    $display['Single'][ $rooms['AvailRoom']['@attributes']['totalPrice'] ]= $rooms;	
                  } else if ($map['Double'] == strtolower(trim($rooms['AvailRoom']['@attributes']['roomName'])) ) {
                    $display['Double'][ $rooms['AvailRoom']['@attributes']['totalPrice'] ]= $rooms;	
                  } else if ($map['Deluxe'] == strtolower(trim($rooms['AvailRoom']['@attributes']['roomName'])) ) {
                    $display['Deluxe'][ $rooms['AvailRoom']['@attributes']['totalPrice'] ]= $rooms;	
                  } else if ($map['Family'] == strtolower(trim($rooms['AvailRoom']['@attributes']['roomName'])) ) {
                    $display['Family'][ $rooms['AvailRoom']['@attributes']['totalPrice'] ]= $rooms;	
                  } else if ($map['Suite'] == strtolower(trim($rooms['AvailRoom']['@attributes']['roomName'])) ) {
                    $display['Suite'][ $rooms['AvailRoom']['@attributes']['totalPrice'] ]= $rooms;
                  } 

                  //        print "<!-- 1 rooms ";
                  //       print_r($rooms['AvailRoom']['@attributes']['totalPrice'],1);
                  //      print " -->";

                }
              }
          }
        }

    }
    $display_cont == 0;

    print "<!-- display ". print_r($display ,1 ) ." -->";
    print "<!-- images ". print_r($images ,1 ) ." -->";
    foreach ($display as $type => $rooms ) {
      //    ksort( $rooms );
      if (isset($map[$type]) && isset($images[$type]) && $images[$type] != "/wp-content/uploads" ) {
        print "<!--debug rooms out ". print_r( $rooms, 1 )." -->";

        if (is_array($rooms) && ( count($rooms, COUNT_RECURSIVE) > 1) ) { // is from venere?
          print "<div class='topbox'>";
          print " <img class='room online' src=" . $images[$type] . " />";
          foreach ($rooms as $room) {
            $once = 0;

            // print "<!--debug room out ". print_r( $room, 1 )." -->";
            if ( isset ($room['AvailRooms'])) {
              $ValueAddDisplay = "";
              if (isset( $room['AvailRooms']['AvailRoom']['ValueAddList']['ValueAdd'] )) {
                foreach ( $room['AvailRooms']['AvailRoom']['ValueAddList']['ValueAdd']  as $ValueAdd ) {
                  $ValueAddDisplay .= "<div>" . $ValueAdd['@attributes']['label'] . "</div>"; 
                }
              } 
              if (isset( $room['AvailRooms']['AvailRoom']['ValueAddList'] ) ) {
                foreach ( $room['AvailRooms']['AvailRoom']['ValueAddList']  as $ValueAdd ) {
                  if (isset($ValueAdd['@attributes']['label'])) $ValueAddDisplay .= "<div>" . $ValueAdd['@attributes']['label'] . "</div>"; 
                }
              } 
              if ($once++ == 0) {	
                if ((int) $room['AvailRooms']['AvailRoom']['@attributes']['quantity'] > 1 ) {
                  $display_r = "<h3>" . $room['AvailRooms']['AvailRoom']['@attributes']['quantity'] . ' x ' . $display_title[ $type ] . "</h3>";
                  print $display_r;
                } else {
                  $display_r =  "<h3>" .$display_title[ $type ]. "</h3>";
                  print $display_r;
                }
              }

              if ($room['AvailRooms']['AvailRoom']['@attributes']['prepaid'] == "false") {
                $pay_at = "<span class='pay_at'>Pay at hotel</span>";
              } else {
                $pay_at = "<span class='pay_at'>Pay now</span>";
              }

              print '<form class="roomcards top" action="/venere/lib/booking.php" method="post" data-ajax="false">';	
              print '<div class="roomcards" id="roomcards">';
              print   '<span class="extra" style=" display: inline-block;" >';	
              print   '<h4>Includes</h4>';	
              print   str_ireplace(array("Included","Free"), "", $ValueAddDisplay);
              print   '</span>';	

              print   '<a href="#!" class="cancelpolicy" class="tip" title="'. $room['GlobalCancellationPolicy']['@attributes']['policyDescription'] .'" >' . $room['GlobalCancellationPolicy']['@attributes']['policyLabel'] .' ' . $pay_at . '<img src="/venere/inc/images/information.gif" height="10" width="10"  /> </a>' ;
              print   '<div id="totprice">';
              print    '<div id="smalltot">Total</div>';
              print   '<span>';			  
              print     '<button data-theme="f" title="'. $room['@attributes']['currencyCode'] . '" > £ '.number_format($room['@attributes']['totalPrice'], 2)  .' </button>';
              print   '</span>';	
              print '</div>';
              print '<input type="hidden" name="HotelID" value="'. $_GET['id'] .'" />';
              print '<input type="hidden" name="roomID" value="'.$room['AvailRooms']['AvailRoom']['@attributes']['roomID'].'" />';
              print '<input type="hidden" name="totalPrice" value="'.$room['@attributes']['totalPrice'].'" />';
              print '<input type="hidden" name="ratePlanID" value="'.$room['AvailRooms']['AvailRoom']['AvailRatePlan']['@attributes']['ratePlanID'].'" />';
              print '<input type="hidden" name="quantity" value="'.(int) $room['AvailRooms']['AvailRoom']['@attributes']['quantity'] .'" />';
              print '<input type="hidden" name="AvailBookingToken" value="'.$room['AvailBookingToken'] .'" />';
              print '<input type="hidden" name="date-in" value="'. $dateFrom .'" />';
              print '<input type="hidden" name="price" value="'. number_format($room['@attributes']['totalPrice'], 2) .'" />';
              print '<input type="hidden" name="date-out" value="'. $dateTo .'" />';
              print '<input type="hidden" name="status" value="'. $title .' in the '.  $display_r  .' for a Total Amount of £'. number_format($room['@attributes']['totalPrice'], 2) .' for '. strip_tags($people_display) .'" />';
              print '<input type="hidden" name="Clause" value="'. $room['GlobalCancellationPolicy']['Clause'] .'" />';
              print '<input type="hidden" name="sellingMethod" value="'. $room['@attributes']['sellingMethod'] .'" />';
              print '<input type="hidden" name="prepaid" value="'.$room['AvailRooms']['AvailRoom']['@attributes']['prepaid'].'" />';
              print '<input type="hidden" name="hotel" value="'.$array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['PropertyDetails']['@attributes']['name'].'" />';
              @print '<input type="hidden" name="ota" value="'. $_POST['ota'] .'" />';
              print '</form>';

            } else {

              // print "<!--debug room gsegtrwe in ". print_r( $room, 1 )." -->";

              $ValueAddDisplay = "";
              if (isset( $room['AvailRooms']['AvailRoom']['ValueAddList']['ValueAdd'] )) {
                foreach ( $room['AvailRooms']['AvailRoom']['ValueAddList']['ValueAdd']  as $ValueAdd ) {
                  $ValueAddDisplay .= "<div>" . $ValueAdd['@attributes']['label'] . "</div>"; 
                }
              } 
              if (isset( $room['AvailRooms']['AvailRoom']['ValueAddList'] )) {
                foreach ( $room['AvailRooms']['AvailRoom']['ValueAddList']  as $ValueAdd ) {
                  $ValueAddDisplay .= "<div>" . $ValueAdd['@attributes']['label'] . "</div>"; 
                }
              } 
              if (isset( $room['AvailRoom']['ValueAddList'] )) {
                foreach ( $room['AvailRoom']['ValueAddList']  as $ValueAdd ) {
                  $ValueAddDisplay .= "<div>" . $ValueAdd['@attributes']['label'] . "</div>"; 
                }
              } 
              if (isset($room['GlobalCancellationPolicy']['@attributes'])) {
                $policy['Description'] = $room['GlobalCancellationPolicy']['@attributes']['policyDescription'];
                $policy['Label'] = $room['GlobalCancellationPolicy']['@attributes']['policyLabel'];
              } elseif(isset($array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['AvailStays']['AvailStay']['GlobalCancellationPolicy'])){
                $policy['Description'] =  $array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['AvailStays']['AvailStay']['GlobalCancellationPolicy']['@attributes']['policyDescription'];
                $policy['Label'] =  $array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['AvailStays']['AvailStay']['GlobalCancellationPolicy']['@attributes']['policyLabel'];
              }
              if($once++ == 0) {	
                if ((int) $room['AvailRoom']['@attributes']['quantity'] > 1 ) {
                  print "<h3>" . $room['AvailRoom']['@attributes']['quantity'] . ' x ' . $display_title[ $type ] . "</h3>";
                } else {
                  print "<h3>" .$display_title[ $type ]. "</h3>";
                }
              }
          /*Secound Pay Now Field
          if ($room['AvailRoom']['@attributes']['prepaid'] == "false") {
            $pay_at = "<span class='pay_at'>Pay at hotel</span>";
          } else {
            $pay_at = "<span class='pay_at'>Pay now</span>";
          }
           */

              print '<form class="roomcards" action="/venere/lib/booking.php" method="post" data-ajax="false">';	
              print '<div class="roomcards" id="roomcards">';
              if (trim(strip_tags($ValueAddDisplay))) {
                print   '<span class="extra" style="display: inline-block;" >';	
                print   '<h4>Includes</h4>';	
                print   str_ireplace(array("Included","Free"), "", $ValueAddDisplay);
                print   '</span>';	
              }
              print   '<a href="#!" class="cancelpolicy ui-link" style="display:inline-block;" class="tip" title="'. $policy['Description'] .'" >' . $policy['Label'] .' ' . $pay_at . '</a>' ;
              print   '<span style=" text-align: right; display: inline-block;" >';	

              print   '</span>';	
              print   '<span style="text-align: right; display: inline-block;" >';			  
              print     '<button style="text-align: right;" data-theme="f" title="'. $room['AvailRoom']['@attributes']['currencyCode'] . '" > £ '.number_format($room['AvailRoom']['@attributes']['totalPrice'], 2)  .' </button>';
              print   '</span>';	
              print '</div>';
              print '<input type="hidden" name="HotelID" value="'. $_GET['id'] .'" />';
              print '<input type="hidden" name="roomID" value="'.$room['AvailRoom']['@attributes']['roomID'].'" />';
              print '<input type="hidden" name="totalPrice" value="'.$room['AvailRoom']['@attributes']['totalPrice'].'" />';
              print '<input type="hidden" name="ratePlanID" value="'.$room['AvailRoom']['AvailRatePlan']['@attributes']['ratePlanID'].'" />';
              print '<input type="hidden" name="price" value="'. number_format($room['AvailRoom']['@attributes']['totalPrice'], 2) .'" />';
              print '<input type="hidden" name="quantity" value="'.(int) $room['AvailRoom']['@attributes']['quantity'] .'" />';
              print '<input type="hidden" name="AvailBookingToken" value="'.$array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['AvailStays']['AvailStay']['AvailBookingToken'] .'" />';
              print '<input type="hidden" name="date-in" value="'. $dateFrom .'" />';
              print '<input type="hidden" name="status" value="'. $title .' in the '.  $display_r  .' for a Total Amount of £'. number_format($room['AvailRoom']['@attributes']['totalPrice'], 2) .' for '. strip_tags($people_display) .'" />';
              print '<input type="hidden" name="Clause" value="'. $room['GlobalCancellationPolicy']['Clause'] .'" />';
              print '<input type="hidden" name="date-out" value="'. $dateTo .'" />';
              print '<input type="hidden" name="sellingMethod" value="'. $array['AvailResults']['AvailResult']['AvailStays']['AvailStay']['@attributes']['sellingMethod'] .'" />';
              print '<input type="hidden" name="prepaid" value="'.$room['AvailRoom']['@attributes']['prepaid'].'" />';
              print '<input type="hidden" name="hotel" value="'.$array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['PropertyDetails']['@attributes']['name'].'" />';
              @print '<input type="hidden" name="ota" value="'. $_POST['ota'] .'" />';
              print '</form>';

            }       
          }
          print "</div></div>"; // topbox
        } else {
          print "<div class='topbox'>";
          print " <img class='room phone-only' src=" . $images[$type] . " />";
          if ((int) $rooms > 1 ) {
            print "<h3>" . $rooms . ' x ' . $display_title[ $type ] . "</h3>";
          } else {
            print "<h3>" .$display_title[ $type ]. "</h3>";
          }
          print '<a href="tel:01189714700"> Phone only for Availability/Price </a>'; 
          print "</div>";
        }       
        print "</div>";
      }
      $display_cont++;
    }
    if ($display_cont == 0) {
      print '<div id="norooms" style="font-family:Roboto, sans-serif; font-size:50px; color:#ff3300; font-weight:300;"> These rooms have not been advertised on-line you will need to phone us: <a href="tel:01189714700" >0118 971 4700</a>';
    }

    if ( isset($array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['PropertyDetails']['@attributes']['amenities'] )) {
      $amenities = $array['XHI_HotelAvailRS']['AvailResults']['AvailResult']['PropertyDetails']['@attributes']['amenities'];
      $facilities = explode(",", $amenities); 
    }
  }
} else {

  $xml = simplexml_load_string(file_get_contents($template['lateroom_url']));
  $array = json_decode(json_encode((array) $xml), 1);
  //print_r ($array);
  //print_r ($mapped);

  $title = "";
  if ($array['response']['@attributes']['status'] == '1' ) {
    if ( isset($array['hotel']['hotel_name']) ){
      if ($_POST['nights'] == "1") {
        $title .= "Booking at the " . $array['hotel']['hotel_name'] . " staying " . $_POST['date-in'] . " for one night";
      } else {
        $title .= "Booking at the ".$array['hotel']['hotel_name'] . " staying " . $_POST['date-in'] . " for " . $_POST['nights'] . " nights";
      }
    } else {
      if ($_POST['nights'] == "1") {
        $title .= "Booking for staying ".$_POST['date-in']." for ".$_POST['night'] . " night for " .$people_display  ;
      } else {
        $title .= "Booking for staying ".$_POST['date-in']." for ".$_POST['nights'] . " nights for " .$people_display  ;
      }
    }
  } elseif (isset($hotel_name) ){
    if ($_POST['nights'] == "1") {
      $title .= "Booking at the ". $hotel_name ." staying ".$_POST['date-in']." for ".$_POST['nights'] . " night";
    } else {
      $title .= "Booking at the ". $hotel_name ." staying ".$_POST['date-in']." for ".$_POST['nights'] . " nights";
    }
  } else {
    if ($_POST['nights'] == "1") {
      $title .= "Booking for staying ".$_POST['date-in']." for ".$_POST['nights'] . " night for " .$people_display  ;
    } else {
      $title .= "Booking for staying ".$_POST['date-in']." for ".$_POST['nights'] . " nights for " .$people_display  ;
    }
  }
  include('../inc/top.php');
  include('../inc/header.php');

  print "<div class='status-bar'><h3> " . $title . " </h3></div>";
?>
<div id="specialoff" style="text-align:center;">
        <img src="/wp-content/uploads/2014/03/Phone-Only-Bookings-on-Rooms-V4.png" alt="Phone Only Special Offer">
</div>
<center class="find-rooms">
<?php
  if (isset($array['hotel']['lr_rates']['hotel_rooms']['room'])) foreach ($array['hotel']['lr_rates']['hotel_rooms']['room'] as $room) {
    $Id = $room['ref']; 
    $Type = strtolower($room['typedescription']);
    $Price = $room['rate']['price'];
    $Cancellation_policy = $room['cancellation_policy'];
    $breakfast = $room['breakfast'];
    if ($room['breakfast'] == "true") {
      $ValueAddDisplay[] = 'Breakfast';
    }
    $dinner = $room['dinner'];
    if ($room['dinner'] == "true") {
      $ValueAddDisplay[] = 'Dinner';
    }

    if (isset($mapped[$Type])) {
      $rooms_array[$Type][] = Array("Id" => $Id,'Price' => $Price, 'Formatted_cancellation_policy' => rtrim($room['formatted_cancellation_policy'], ">"), 'Cancellation_policy'=> $Cancellation_policy,'ValueAddDisplay'=> $ValueAddDisplay);
    }

  }
  foreach ($mapped as $Type => $map ) {
    print_room_type($map, $Type, $rooms,$rooms_array[$Type], $title, $people_display);
  }
  $facilities = $array['hotel']['facilities']['facility'];

  print '<div id=facilities style="text-align: left; margin-left: 230px; font-family: Roboto, sans-serif; font-weight: 300;">
    <h3 style="
    font-family: Roboto, sans-serif;
  font-weight: 300;
  ">Facilities</h3> 
    <ul style="-webkit-columns:2; columns:2;"><li>'.implode("</li><li>", $facilities) . "</li></ul>"; 
  // print_r($array['hotel']);
}

function print_room_type($map, $Type, $num_rooms, $rooms_array, $title, $people_display) {
  if ($Type) {
    print "<div class='topbox'>";
    print   "<img class='room phone-only' src=" . $map['images'] . " />";
    if ((int) $rooms > 1 ) {
      print   "<h3>" . $num_rooms . ' x ' . $map['display_title'] . "</h3>";
    } else {
      print   "<h3>" . $map['display_title'] . "</h3>";
    }
    foreach ($rooms_array as $room) {
      print_room($mapped, $room['Id'], $Type, $num_rooms, $room, $title, $people_display); 
    }
    if ( count($rooms_array) == 0 ) {
      print '<div id="norooms" style="font-family:Roboto, sans-serif; font-size:20px; color:#ff3300; font-weight:300;"> This room have not been advertised on-line you will need to phone us: <a href="tel:01189714700" >0118 971 4700</a></div>';
    }
    print "</div><div style='clear:both' ></div>"; 
  }
}
function print_room($mapped, $Id, $Type, $num_rooms, $room, $title, $people_display) {
  $Price = $room['Price'];
  $Cancellation_policy = $room['Cancellation_policy'] ;
  $ValueAddDisplay = $room['ValueAddDisplay'];

  if ( $Price ) { 
    print '<form data-ajax="false" method="post" action="/venere/lib/booking.php" class="roomcards top"><div id="roomcards" class="roomcards">';
    if (count($ValueAddDisplay)) { 
      print '<span style=" display: inline-block;" class="extra">';
        print '<h4>Includes</h4>';
        foreach ($ValueAddDisplay as $ValueAdd) {
          print '<div>'. $ValueAdd .'</div>';
        } 
      print '</span>';
    } 
    print '<a title="' . $room['Formatted_cancellation_policy'] . '" class="cancelpolicy ui-link" href="#!">' . $Cancellation_policy ;
    print '<span class="pay_at"></span>';
    print '<img width="10" height="10" src="/venere/inc/images/information.gif"> </a>';
    print '<div id="totprice">';
    print   '<div id="smalltot">Total</div>';
    print   '<span>';			  
    print     '<button data-theme="f" title="GBP" > '.$Price.' </button>';
    print   '</span>';	
    print '</div>';
    print '<input type="hidden" name="HotelID" value="'. $_GET['id'] .'" />'; 
    print '<input type="hidden" value="' . $Id . '" name="roomID">';
    print '<input type="hidden" name="totalPrice" value="' . $Price . '" />';
    print '<input type="hidden" name="ratePlanID" value="'.'" />';
    print '<input type="hidden" name="price" value="'. $Price .'" />';
    print '<input type="hidden" name="quantity" value="'. $num_rooms .'" />';
    print '<input type="hidden" name="AvailBookingToken" value="laterooms" />';
    print '<input type="hidden" name="date-in" value="'. $dateFrom .'" />';
    print '<input type="hidden" name="status" value="'. $title .' in the '.  $display_r  .' for a Total Amount of '. $Price .' for '. strip_tags($people_display) .'" />';
    print '<input type="hidden" name="Clause" value="'. $room['Formatted_cancellation_policy'] . '" />';
    print '<input type="hidden" name="date-out" value="'.'" />';
    print '<input type="hidden" name="sellingMethod" value="'.'" />';
    print '<input type="hidden" name="prepaid" value="'.'" />';
    print '<input type="hidden" name="hotel" value="'.'" />';
   @print '<input type="hidden" name="ota" value="'. $_POST['ota'] .'" />';
   if (isset( $_POST['debug'] )) { print '<input type="hidden" name="debug" value="'. $_POST['debug'] .'" />'; }
    if (isset( $_GET['debug'] )) { print '<input type="hidden" name="debug" value="'. $_GET['debug'] .'" />'; }
    print '</div></form><div style="clear:both" > </div>';

  }
}
  // debug https://essentialhotels.co.uk/venere/out.php?doubleroom=&deluxeroom=&familyroom=&suiteroom=/2012/02/Mercure-Shakespeare-Hotel-Stratford-Junior-Suite.jpg&singleroom=/2012/02/Mercure-Shakespeare-Hotel-Stratford-Classic-Room.jpg&doublemap=&deluxemap=&familymap=&suitemap=Junior%20Suite,%201%20King%20Bed&singlemap=Classic&id=575&doubledisplay=Classic%20Twin%20Room&deluxedisplay=Executive%20Double%20Room&familydisplay=Executive%20Twin%20Room&ota=3&suitAedisplay=Junior%20Suite,%201%20King%20Bed&singledisplay=Classic%20Double%20or%20Twin%20Room,%201%20Double%20Bed

  //  print_r( $_POST ); 
  //  print_r( $_GET ); 
  // print_r($array['XHI_HotelAvailRS']);

?></center> 
</body>
</html>
