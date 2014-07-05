<?php
  print "<!-- template.php : nights " . print_r($nights,1) ." -->";
if (!isset($totalPrice)) {$totalPrice = 0; };
if (!isset($date)) {$date = 0; };
if (!isset($nights)) {$nights = 0; };
if (!isset($hdura)) {$hdura = 0; };
if (!isset($hdurr)) {$hdurr = 0; };
if (!isset($hdurc)) {$hdurc = 0; };
if (!isset($hdura)) {$hdura = 0; };
if (!isset($hdurr)) {$hdurr = 0; };
if (!isset($roomID)) {$roomID = 0; };
if (!isset($ratePlanID)) {$ratePlanID = 0; };
if (!isset($quantity)) {$quantity = 0; };
if (!isset($firstname)) {$firstname = 0; };
if (!isset($surname)) {$surname = 0; };
if (!isset($AvailBookingToken)) {$AvailBookingToken = 0; };
if (!isset($email)) {$email = 0; };
if (!isset($cityName)) {$cityName = 0; };
if (!isset($countryName)) {$countryName = 0; };
if (!isset($zipCode)) {$zipCode = 0; };
if (!isset($number)) {$number = 0; };
if (!isset($internationalPrefix)) {$internationalPrefix = 0; };
if (!isset($ccType)) {$ccType = 0; };
if (!isset($ccNumber)) {$ccNumber = 0; };
if (!isset($ccVerify)) {$ccVerify = 0; };
if (!isset($countryName)) {$countryName = 0; };
if (!isset($ccHolderFirstName)) {$ccHolderFirstName = 0; };
if (!isset($ccHolderLastName)) {$ccHolderLastName = 0; };
if (!isset($ccExpMonth)) {$ccExpMonth = 0; };
if (!isset($ccExpYear)) {$ccExpYear = 0; };
if (!isset($sellingMethod)) {$sellingMethod = 0; };
if (!isset($string)) {$string = 0; };

$template[] = '<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xhi="http://www.venere.com/XHI"
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> 
  <Header>
    <Authentication xmlns="http://www.venere.com/XHI"> 
      <UserOrgID>'. $UserOrgID .'</UserOrgID>  
      <UserID>'.$UserID .'</UserID> 
      <UserPSW>'. $UserPSW .'</UserPSW>
    </Authentication> 
  </Header>
  <Body>
    <xhi:XHI_HotelAvailRQ 
      msgVersion="1.00.004"
      guestCountryCode="GB"
      preferredPaymentCurrency="GBP"
      start="'. $dateFrom .'"
      end="'. $dateTo .'"
      msgEchoToken="test"
      numGuests="'. $people .'"
      numRooms="'. $rooms .'"
      avoidCache="false" >
    <xhi:AvailQueryByProperty bookingMethods="IB" propertyIDs="'. $hotelId .'"/>
    <xhi:AvailResultFormat showDailyRates="true" langID="en"
showPropertyDetails="true" showRoomCancellationPolicies="true"
orderBy="category"
orderDir="desc" conversionCurrencyCodes=" GBP EUR" />
    </xhi:XHI_HotelAvailRQ>
  </Body> 
</Envelope>';

$template[] = '<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xhi="http://www.venere.com/XHI"
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <Header>
    <Authentication xmlns="http://www.venere.com/XHI">
      <UserOrgID>'. $UserOrgID .'</UserOrgID>  
      <UserID>'.$UserID .' </UserID> 
      <UserPSW>'. $UserPSW .'</UserPSW>
    </Authentication>
  </Header>
  <Body>
    <xhi:XHI_HotelResRQ langID="EN" msgVersion="1.00.003" >
      <xhi:BookingReservation propertyID="'. $hotelId .'" start="'. $dateFrom .'" end="'. $dateTo .'" totalPrice="'. $totalPrice .'" currencyCode="GBP">
        <xhi:BookingRooms>
          <xhi:BookingRoom roomID="'.$roomID.'" ratePlanID="'. $ratePlanID .'" quantity="'. $quantity .'" price="'. $totalPrice .'" >
            <xhi:RoomGuestName firstname="'. $firstname .'" surname="'. $surname .'" />
          </xhi:BookingRoom>
        </xhi:BookingRooms>
	<xhi:Notes>Regression</xhi:Notes>
        <xhi:Attributes> <xhi:Item ItemID="AvailBookingToken">'. $AvailBookingToken .'</xhi:Item> </xhi:Attributes>
      </xhi:BookingReservation>
      <xhi:BookingGuest firstname="'.$firstname.'" surname="'.$surname.'" email="'.$email.'" cityName="'.$cityName.'" countryCode="'.$countryName.'" 
guestIP="'.$_SERVER['REMOTE_ADDR'].'" zipCode="'. $zipCode .'" >
		<xhi:GuestPhoneDetails number="'.$number.'" internationalPrefix="'.$internationalPrefix.'" />
	</xhi:BookingGuest>
	
      <xhi:GuaranteeDetails
        ccType="'.$ccType.'"
        ccNumber="'.$ccNumber.'"
        ccVerify="'.$ccVerify.'"
	ccCountryCode="'.$countryName.'"
	ccHolderFirstName="'.$ccHolderFirstName.'" ccHolderLastName="'.$ccHolderLastName.'"
        ccExpMonth="'.$ccExpMonth.'"
        ccExpYear="'.$ccExpYear.'"
	sellingMethod="'. $sellingMethod .'"
      />
         

      <xhi:BookingResultFormat showReservationDetails="true" showGuestDetails="true" showPropertyDetails="true" />
    </xhi:XHI_HotelResRQ>
  </Body>
</Envelope>';
$template['ping'] = '<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> 
  <Header>
    <Authentication xmlns="http://www.venere.com/XHI">
      <UserOrgID>'. $UserOrgID .'</UserOrgID>  
      <UserID>'.$UserID .' </UserID> 
      <UserPSW>'. $UserPSW .'</UserPSW>
    </Authentication>
  </Header>
<Body>
<XHI_PingRQ xmlns="http://www.venere.com/XHI" msgEchoToken="REQ.A1454.2231" echoData="Hello, world!"/></Body></Envelope>';

$template['lateroom_url'] = $laterooms_feed_url . "?aid=".$laterooms_id."&rtype=3&lang=en&hids=". $hotelId . "&sdate=" . $dateFrom . "&nights=" . $nights ."&canxtxt=true";

$template['lateroom_booking'] = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ser="http://www.laterooms.com/services">
   <soap:Header/>
   <soap:Body>
      <ser:makeBooking>
      <ser:b>
        <ser:Partner>
          <ser:Id>' . $laterooms_id . '</ser:Id>
          <ser:Username>' . $laterooms_Username . '</ser:Username>
          <ser:Password>' . $laterooms_Password . '</ser:Password>
          <ser:Value/>
        </ser:Partner>
        <ser:Rooms>
          <ser:room>
            <ser:Id>' . $roomID . '</ser:Id>
            <ser:GuestTitle>' . $guest_title . '</ser:GuestTitle>
            <ser:GuestInitials>' . $Initials . '</ser:GuestInitials>
            <ser:GuestSurname>' . $surname . '</ser:GuestSurname>
            <ser:Adults>'// . $total_people 
            . "1" . '</ser:Adults>
            <ser:Children>0</ser:Children>
            <ser:BedType>' . $BedType . '</ser:BedType>
            <ser:FromWhiteLabel>true</ser:FromWhiteLabel>
            <ser:Cost>' .preg_replace("/[^0-9.]/", "", $totalPrice) . '</ser:Cost>
          </ser:room>
        </ser:Rooms>
        <ser:HotelId>' . $HotelID . '</ser:HotelId>
        <ser:ArrivalDate>' . date('d/m/Y',strtotime($date_in)) . '</ser:ArrivalDate>
        <ser:Nights>' . // $nights 
        "1" . '</ser:Nights>
        <ser:Currency>GBP</ser:Currency>
        <ser:Guest>
          <ser:Title>' . $guest_title . '</ser:Title>
          <ser:Initials>' . $Initials . '</ser:Initials>
          <ser:Surname>' . $surname . '</ser:Surname>
          <ser:Email>' . $email . '</ser:Email>
          <ser:Postcode>' . $zipCode . '</ser:Postcode>
          <ser:Tel>' . $phone . '</ser:Tel>
          <ser:SendEmailConfirmation>false</ser:SendEmailConfirmation>
          <ser:Address1>' . $Address1 . '</ser:Address1>
          <ser:Town>' . $cityName . '</ser:Town>
        </ser:Guest>
        <ser:Booker>
          <ser:Title>' . $guest_title . '</ser:Title>
          <ser:Initials>' . $Initials . '</ser:Initials>
          <ser:Surname>' . $surname . '</ser:Surname>
          <ser:Email>' . $email . '</ser:Email>
          <ser:Postcode>' . $zipCode . '</ser:Postcode>
          <ser:Tel>' . $phone . '</ser:Tel>
          <ser:CountryOfResidence>'.$countryName.'</ser:CountryOfResidence>
          <ser:SendEmailConfirmation>false</ser:SendEmailConfirmation>
          <ser:Address1>' . $Address1 . '</ser:Address1>
          <ser:Town>' . $cityName . '</ser:Town>
        </ser:Booker>
        <ser:PaymentCard>
          <ser:CardHolderName>' . $guest_title . " " . $Initials . " " . $surname . '</ser:CardHolderName>
          <ser:CardType>' .preg_replace("/[^0-9]/", "", $ccType) . '</ser:CardType>
          <ser:CardNumber>' .preg_replace("/[^0-9]/", "", $ccNumber) . '</ser:CardNumber>
          <ser:ExpiryDate>' . preg_replace("/[^0-9]/", "",$ccExp_month) . "/" . preg_replace("/[^0-9]/", "",$ccExp_year)  . '</ser:ExpiryDate>
          <ser:IssueNumberOrStartDate>' . '</ser:IssueNumberOrStartDate>
          <ser:SecurityCode>' . preg_replace("/[^0-9,.]/", "",$cvc) . '</ser:SecurityCode>
        </ser:PaymentCard>
        <ser:ReservationType></ser:ReservationType>
        <ser:FromHotel>false</ser:FromHotel>
        <ser:Language></ser:Language>
        <ser:Unbranded>true</ser:Unbranded>
        <ser:SendHotelNotification>true</ser:SendHotelNotification>
        <ser:DoNotBook>false</ser:DoNotBook>
        <ser:AutoReferralBooking>false</ser:AutoReferralBooking>
        <ser:ArrivalTime></ser:ArrivalTime>
        <ser:SpecialRequests></ser:SpecialRequests>
      </ser:b>
    </ser:makeBooking>
  </soap:Body>
</soap:Envelope>';

$template['lateroom_booking_testing'] = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ser="http://www.laterooms.com/services">
   <soap:Header/>
   <soap:Body>
      <ser:makeBooking>
      <ser:b>
          <ser:Partner>
            <ser:Id>' . $laterooms_id . '</ser:Id>
            <ser:Username>' . $laterooms_Username . '</ser:Username>
            <ser:Password>' . $laterooms_Password . '</ser:Password>
            <ser:Value/>
          </ser:Partner>
      <ser:Rooms>
        <ser:room>
          <ser:Id>' . $roomID . '</ser:Id>
          <ser:GuestTitle>' . $guest_title . '</ser:GuestTitle>
          <ser:GuestInitials>' . $Initials . '</ser:GuestInitials>
          <ser:GuestSurname>' . $surname . '</ser:GuestSurname>
          <ser:Adults>'// . $total_people 
          . "1" . '</ser:Adults>
          <ser:Children>0</ser:Children>
          <ser:BedType>' . $BedType . '</ser:BedType>
          <ser:FromWhiteLabel>true</ser:FromWhiteLabel>
          <ser:Cost>' .preg_replace("/[^0-9.]/", "", $totalPrice) . '</ser:Cost>
        </ser:room>
       </ser:Rooms>
       <ser:HotelId>' . $HotelID . '</ser:HotelId>
       <ser:ArrivalDate>' . date('d/m/Y',strtotime($date_in)) . '</ser:ArrivalDate>
      <ser:Nights>' . $nights . '</ser:Nights>
      <ser:Currency>GBP</ser:Currency>
      <ser:Guest>
        <ser:Title>' . $guest_title . '</ser:Title>
        <ser:Initials>' . $Initials . '</ser:Initials>
        <ser:Surname>' . $surname . '</ser:Surname>
        <ser:Email>' . $email . '</ser:Email>
        <ser:Postcode>' . $zipCode . '</ser:Postcode>
        <ser:Tel>' . $phone . '</ser:Tel>
        <ser:SendEmailConfirmation>false</ser:SendEmailConfirmation>
        <ser:Address1>' . $address1 . '</ser:Address1>
        <ser:Town>' . $cityName . '</ser:Town>
      </ser:Guest>
  './/    <ser:Booker>
  //      <ser:Title>' . $guest_title . '</ser:Title>
  //      <ser:Initials>' . $Initials . '</ser:Initials>
  //      <ser:Surname>' . $surname . '</ser:Surname>
  //      <ser:Email>' . $email . '</ser:Email>
  //      <ser:Postcode>' . $zipCode . '</ser:Postcode>
  //      <ser:Tel>' . $phone . '</ser:Tel>
  //      <ser:CountryOfResidence>'.$CountryOfResidence.'</ser:CountryOfResidence>
  //      <ser:SendEmailConfirmation>false</ser:SendEmailConfirmation>
  //      <ser:Address1>' . $Address1 . '</ser:Address1>
  //      <ser:Town>' . $cityName . '</ser:Town>
  //    </ser:Booker>
  //    <ser:PaymentCard>
  //      <ser:CardHolderName>' . $guest_title . " " . $Initials . " " . $surname . '</ser:CardHolderName>
  //      <ser:CardType>' .preg_replace("/[^0-9,.]/", "", $ccType) . '</ser:CardType>
  //      <ser:CardNumber>' .preg_replace("/[^0-9,.]/", "", $ccNumber) . '</ser:CardNumber>
  //      <ser:ExpiryDate>' . preg_replace("/[^0-9,.]/", "",$ccExpmonth . $ccexp_year)  . '</ser:ExpiryDate>
  //      <ser:IssueNumberOrStartDate>' . '</ser:IssueNumberOrStartDate>
  //      <ser:SecurityCode>' . preg_replace("/[^0-9,.]/", "",$cvc) . '</ser:SecurityCode>
  //    </ser:PaymentCard>
  //    <ser:ReservationType></ser:ReservationType>
  //    <ser:FromHotel>false</ser:FromHotel>
  //    <ser:Language></ser:Language>
  //    <ser:Unbranded>true</ser:Unbranded>
  //    <ser:SendHotelNotification>true</ser:SendHotelNotification>
  //    <ser:DoNotBook>false</ser:DoNotBook>
  //    <ser:AutoReferralBooking>false</ser:AutoReferralBooking>
  //    <ser:ArrivalTime></ser:ArrivalTime>
  //    <ser:SpecialRequests></ser:SpecialRequests>
    '</ser:b>
  </ser:makeBooking>
  </soap:Body>
</soap:Envelope>';
