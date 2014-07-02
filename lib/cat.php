<?php
// $email = "marcus7777@gmail.com"; 

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $output = shell_exec('cd lib;grep \',"email":"'. $email .'",\' .ht.booking');
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
?><html><head><meta charset="UTF-8"></head><body><center><h3>I am pleased to confirm your reservation<br /></h3></center><center><h3>debug mode ::Booking at the 41 staying Tomorrow for 1 Night in the Executive Double Room at £371.00 for 1 guest<br /></h3></center><center><h3>Please Check the details below and let us know if anything is incorrect<br /></h3></center><table rules="all" style="border-color: #666;" cellpadding="10"><tr><td><strong>Name of Hotel</strong> </td><td>41</td></tr><tr><td><strong>Booking made under the Name</strong> </td><td>debug Hitchins</td></tr><tr><td><strong>Staying</strong> </td><td>2014-03-13 to the 2014-03-14</td></tr><tr><td><strong>Name of Hotel</strong> </td><td>41</td></tr><tr><td><strong>Booking ID</strong> </td><td>19990982</td></tr><tr><td><strong>Cost</strong> </td><td> £ 371.00</td></tr><tr><td><strong>Essential Rewards</strong></td><td>As a Rewards member there’s still time to be rewarded for your upcoming stay. 
    Please reply to this email with your membership details. If you’re not already a Member, enrol today to begin earning High Street shopping vouchers.</td></tr><tr><td><strong>Payment Method</strong></td><td>Upon departure. The credit/debit card details that you have supplied have guaranteed your reservation; no payment has been deducted from this card.</td></tr><tr><td><strong>Cancellation Policy</strong></td><td>In order to provide our customers with very competitive rates, Venere may offer some room types whose payment cannot be refunded. The room you have booked is not refundable, this means that in case of cancellations or no-shows you will be charged the total amount of the reservation.</td></tr></table><center><h3>Thank you for booking with essentialhotels; we hope you have an enjoyable stay and would be delighted to <br />
    assist with any future bookings (UK or worldwide).  <br />
    Kind regards <br />
    Marjorie Burrington | Director of Operations<br />
    Essential Hotels<br />
    Willowmead House, Mill Lane, Padworth RG7 4JX<br /></h3></center></body></html>
