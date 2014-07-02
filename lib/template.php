<?php
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

$template['lateroom_url'] = "http://xmlfeed.laterooms.com/index.aspx?aid=".$laterooms_id."&rtype=3&lang=en&hids=". $hotelId . "&sdate=" . $dateFrom . "&nights=" . $nights ."&canxtxt=true";

$template['lateroom_booking'] = '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <makeBooking xmlns="http://www.laterooms.com/services">
      <b>
        <Guest>
        <Title>' . $guest_title . '</Title>
        <Initials>' . $Initials . '</Initials>
          <Surname>' . $surname . '</Surname>
          <Email>' . $email . '</Email>
          <Postcode>' . $zipCode . '</Postcode>
          <Tel>' . $phone . '</Tel>
          <SendEmailConfirmation>false</SendEmailConfirmation>
          <Address1>' . $string . '</Address1>
          <Address2>' . $string . '</Address2>
          <Town>' . $cityName . '</Town>
        </Guest>
        <Booker>
          <Title>' . $guest_title . '</Title>
          <Initials>' . $Initials . '</Initials>
          <Surname>' . $surname . '</Surname>
          <Email>' . $email . '</Email>
          <Postcode>' . $zipCode . '</Postcode>
          <Tel>' . $phone . '</Tel>
          <SendEmailConfirmation>false</SendEmailConfirmation>
          <CountryOfResidence>'."1".'</CountryOfResidence>
          <Address1>' . $string . '</Address1>
          <Address2>' . $string . '</Address2>
          <Town>' . $cityName . '</Town>
        </Booker>
        <PaymentCard>
          <CardHolderName>' . $guest_title . " " . $Initials . " " . $surname . '</CardHolderName>
          <CardType>' . $ccType . '</CardType>
          <CardNumber>' . $ccNumber . '</CardNumber>
          <ExpiryDate>' . $ccExpMonth . $cc  . '</ExpiryDate>
          <IssueNumberOrStartDate>' . $string . '</IssueNumberOrStartDate>
          <SecurityCode>' . $string . '</SecurityCode>
        </PaymentCard>
        <ReservationType>' . $string . '</ReservationType>
        <FromHotel>' . $string . '</FromHotel>
        <Language>' . $string . '</Language>
        <EnquiryRef>' . $string . '</EnquiryRef>
        <Unbranded>TRUE</Unbranded>
        <SendHotelNotification>TRUE</SendHotelNotification>
        <AutoReferralBooking>boolean</AutoReferralBooking>
        <OptInPartner>' . $string . '</OptInPartner>
        <JobRefNo>' . $string . '</JobRefNo>
        <CostCentreNo>' . $string . '</CostCentreNo>
        <TravelReason>' . $string . '</TravelReason>
        <ArrivalTime>' . $string . '</ArrivalTime>
        <Rooms>
          <room>
          <Id>' . $roomID . '</Id>
            <GuestTitle>' . $guest_title . '</GuestTitle>
            <GuestInitials>' . $Initials . '</GuestInitials>
            <GuestSurname>' . $surname . '</GuestSurname>
            <Adults>' . $string . '</Adults>
            <Children>0</Children>
            <BedType>' . $string . '</BedType>
            <Cost>' . $string . '</Cost>
            <AddBreakfast>' . $string . '</AddBreakfast>
            <BreakfastId>' . $string . '</BreakfastId>
          </room>
        </Rooms>
        <Partner>
          <Id>' . $laterooms_id . '</Id>
          <Username>' . $laterooms_Username . '</Username>
          <Password>' . $laterooms_Password . '</Password>
        </Partner>
        <HotelId>' . $HotelID . '</HotelId>
        <ArrivalDate>' . $date_in . '</ArrivalDate>
        <Nights>' . $string . '</Nights>
        <Currency>GBP</Currency>
        <FromWhiteLabel>true</FromWhiteLabel>
      </b>
    </makeBooking>
  </soap:Body>
</soap:Envelope>';
