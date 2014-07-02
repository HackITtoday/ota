<?php
//
// The booking form
//

//connection, auth
include './auth.php';
 // @print '<!-- ' . @print_r($_POST ,1) . ' -->'; 
@$title = $_POST['status'];

include('../inc/top.php');
include('../inc/header.php');

if (isset($_POST['quantity']) &&  isset($_POST['HotelID']) && isset($_POST['AvailBookingToken']) ) {
  print "<div class='status-bar' ><h3> " .strip_tags ( $title ) . "</h3></div>";
  if (!isset($_POST["email"])) {
?>
    <form action="getemail.php" data-ajax="false" id="get-email" method="post">

<?php 
    foreach ($_POST as $key => $value) {
      print '<input type="hidden" name="'.$key.'" value="'.$value.'">'."\n";
    }
?>
        <div id="login" style="display:none;">
  <input type="submit" name="signin" value="login" />
  </div>
  </form>
  <div id="security">
        <img src="/wp-content/uploads/2014/03/lock.jpg" alt="SSL Lock">

  </div>


<?php
  }
?>
<center class="booking">
<form method="post" data-ajax="false" action="done.php"  parsley-validate >
<table>
<?php

  @print '<input type="hidden" name="HotelID" value="'. $_POST['HotelID'] .'" />';
  @print '<input type="hidden" name="roomID" value="'. $_POST['roomID'] .'" />';
  @print '<input type="hidden" name="totalPrice" value="'. $_POST['totalPrice'] .'" />';
  @print '<input type="hidden" name="Clause" value="'. $_POST['Clause'] .'" />';
  @print '<input type="hidden" name="ratePlanID" value="'. $_POST['ratePlanID'] .'" />';
  @print '<input type="hidden" name="quantity" value="'. $_POST['quantity'] .'" />';
  @print '<input type="hidden" name="date-in" value="'. $_POST['date-in'] .'" />';
  @print '<input type="hidden" name="date-out" value="'. $_POST['date-out'] .'" />';
  @print '<input type="hidden" name="ota" value="'. $_POST['ota'] .'" />';
  @print '<input type="hidden" name="pay_at" value="'. $_POST['athotel'] . $_POST['paynow']  .'" />';
  @print '<input type="hidden" name="AvailBookingToken" value="'. $_POST['AvailBookingToken'] .'" />';
  @print '<input type="hidden" name="sellingMethod" value="'. $_POST['sellingMethod'] .'" />';
  @print '<input type="hidden" name="hotel" value="'. $_POST['hotel'] .'" />';
  @print '<input type="hidden" name="status" value="'. $_POST['status'] .'" />';
  if (isset( $_POST['debug'] )) { print '<input type="hidden" name="debug" value="'. $_POST['debug'] .'" />'; }
  
?>

<input type="hidden" name="booking_key" value="<?php @print $booking_key; ?>" />
<input type="hidden" name="total_people" value="<?php @print $total_people; ?>" />
<input type="hidden" name="tour" value="<?php @print $tour; ?>" />
<input type="hidden" name="channel" value="<?php @print $channel; ?>" />
<?php if ($_POST['ota'] == 1) { ?>
<tr ><td > 
  <label for="firstname" >First Name</label>
  </td ><td >
 <input data-theme="f"  id="firstname" type="text" name="firstname" value="<?php @print $_POST['firstname']; ?>" placeholder="John" required />
</td ></tr >
<?php } else { ?>
<tr ><td > 
  <label for="guest_title" >Title</label>
  </td ><td >
 <input data-theme="f"  id="guest_title" type="text" name="guest_title" value="<?php @print $_POST['guest_title']; ?>" placeholder="Mr" required />
</td ></tr >
<tr ><td > 
  <label for="Initials" >Initials</label>
  </td ><td >
 <input data-theme="f"  id="Initials" type="text" name="Initials" value="<?php @print $_POST['Initials']; ?>" placeholder="J" required />
</td ></tr >
<?php } ?>
<tr ><td > 
  <label for="surname">Last Name</label>
  </td ><td >
  <input data-theme="f" id="surname" type="text" name="surname" value="<?php @print $_POST['surname']; ?>" placeholder="Smith" required />
</td ></tr >
<tr ><td > 
<label for="email" >Email</label>
  </td ><td >
<input data-theme="f" id="email" type="email" name="email" value="<?php @print $_POST['email']; ?>" placeholder="test@example.com" parsley-type="email" required />
</td ></tr >
<tr ><td > 
  <label for="phone" >Phone</label>
  </td ><td >
  <input data-theme="f" id="phone" type="text" name="phone" value="<?php @print $_POST['phone']; ?>" placeholder="07123456789" required parsley-type="phone" />
</td ></tr >
<tr ><td > 
  <label for="cityName" >City</label>
  </td ><td >
  <input data-theme="f" id="cityName" type="text" name="cityName" value="<?php @print $_POST['cityName']; ?>" placeholder="City" required />
</td ></tr >
<tr ><td > 
  <label for="zipCode" >Postal Code</label>
  </td ><td >
  <input data-theme="f" id="zipCode" type="text" name="zipCode" value="<?php @print $_POST['zipCode']; ?>" placeholder="N1 1AA" required />
</td ></tr >

<tr ><td > 
  <label for="countryName" >Country</label>
  </td ><td >
        <!-- http://www.freeformatter.com/iso-country-list-html-select.html -->
        <select  data-theme="f" name="countryName"> 
                <option value="GB">United Kingdom</option> <option value="AF">Afghanistan</option> <option value="AX">Åland Islands</option> <option value="AL">Albania</option> <option value="DZ">Algeria</option> <option value="AS">American Samoa</option> <option value="AD">Andorra</option> <option value="AO">Angola</option> <option value="AI">Anguilla</option> <option value="AQ">Antarctica</option> <option value="AG">Antigua and Barbuda</option> <option value="AR">Argentina</option> <option value="AM">Armenia</option> <option value="AW">Aruba</option> <option value="AU">Australia</option> <option value="AT">Austria</option> <option value="AZ">Azerbaijan</option> <option value="BS">Bahamas</option> <option value="BH">Bahrain</option> <option value="BD">Bangladesh</option> <option value="BB">Barbados</option> <option value="BY">Belarus</option> <option value="BE">Belgium</option> <option value="BZ">Belize</option> <option value="BJ">Benin</option> <option value="BM">Bermuda</option> <option value="BT">Bhutan</option> <option value="BO">Bolivia, Plurinational State of</option> <option value="BQ">Bonaire, Sint Eustatius and Saba</option> <option value="BA">Bosnia and Herzegovina</option> <option value="BW">Botswana</option> <option value="BV">Bouvet Island</option> <option value="BR">Brazil</option> <option value="IO">British Indian Ocean Territory</option> <option value="BN">Brunei Darussalam</option> <option value="BG">Bulgaria</option> <option value="BF">Burkina Faso</option> <option value="BI">Burundi</option> <option value="KH">Cambodia</option> <option value="CM">Cameroon</option> <option value="CA">Canada</option> <option value="CV">Cape Verde</option> <option value="KY">Cayman Islands</option> <option value="CF">Central African Republic</option> <option value="TD">Chad</option> <option value="CL">Chile</option> <option value="CN">China</option> <option value="CX">Christmas Island</option> <option value="CC">Cocos (Keeling) Islands</option> <option value="CO">Colombia</option> <option value="KM">Comoros</option> <option value="CG">Congo</option> <option value="CD">Congo, the Democratic Republic of the</option> <option value="CK">Cook Islands</option> <option value="CR">Costa Rica</option> <option value="CI">Côte d'Ivoire</option> <option value="HR">Croatia</option> <option value="CU">Cuba</option> <option value="CW">Curaçao</option> <option value="CY">Cyprus</option> <option value="CZ">Czech Republic</option> <option value="DK">Denmark</option> <option value="DJ">Djibouti</option> <option value="DM">Dominica</option> <option value="DO">Dominican Republic</option> <option value="EC">Ecuador</option> <option value="EG">Egypt</option> <option value="SV">El Salvador</option> <option value="GQ">Equatorial Guinea</option> <option value="ER">Eritrea</option> <option value="EE">Estonia</option> <option value="ET">Ethiopia</option> <option value="FK">Falkland Islands (Malvinas)</option> <option value="FO">Faroe Islands</option> <option value="FJ">Fiji</option> <option value="FI">Finland</option> <option value="FR">France</option> <option value="GF">French Guiana</option> <option value="PF">French Polynesia</option> <option value="TF">French Southern Territories</option> <option value="GA">Gabon</option> <option value="GM">Gambia</option> <option value="GE">Georgia</option> <option value="DE">Germany</option> <option value="GH">Ghana</option> <option value="GI">Gibraltar</option> <option value="GR">Greece</option> <option value="GL">Greenland</option> <option value="GD">Grenada</option> <option value="GP">Guadeloupe</option> <option value="GU">Guam</option> <option value="GT">Guatemala</option> <option value="GG">Guernsey</option> <option value="GN">Guinea</option> <option value="GW">Guinea-Bissau</option> <option value="GY">Guyana</option> <option value="HT">Haiti</option> <option value="HM">Heard Island and McDonald Islands</option> <option value="VA">Holy See (Vatican City State)</option> <option value="HN">Honduras</option> <option value="HK">Hong Kong</option> <option value="HU">Hungary</option> <option value="IS">Iceland</option> <option value="IN">India</option> <option value="ID">Indonesia</option> <option value="IR">Iran, Islamic Republic of</option> <option value="IQ">Iraq</option> <option value="IE">Ireland</option> <option value="IM">Isle of Man</option> <option value="IL">Israel</option> <option value="IT">Italy</option> <option value="JM">Jamaica</option> <option value="JP">Japan</option> <option value="JE">Jersey</option> <option value="JO">Jordan</option> <option value="KZ">Kazakhstan</option> <option value="KE">Kenya</option> <option value="KI">Kiribati</option> <option value="KP">Korea, Democratic People's Republic of</option> <option value="KR">Korea, Republic of</option> <option value="KW">Kuwait</option> <option value="KG">Kyrgyzstan</option> <option value="LA">Lao People's Democratic Republic</option> <option value="LV">Latvia</option> <option value="LB">Lebanon</option> <option value="LS">Lesotho</option> <option value="LR">Liberia</option> <option value="LY">Libya</option> <option value="LI">Liechtenstein</option> <option value="LT">Lithuania</option> <option value="LU">Luxembourg</option> <option value="MO">Macao</option> <option value="MK">Macedonia, the former Yugoslav Republic of</option> <option value="MG">Madagascar</option> <option value="MW">Malawi</option> <option value="MY">Malaysia</option> <option value="MV">Maldives</option> <option value="ML">Mali</option> <option value="MT">Malta</option> <option value="MH">Marshall Islands</option> <option value="MQ">Martinique</option> <option value="MR">Mauritania</option> <option value="MU">Mauritius</option> <option value="YT">Mayotte</option> <option value="MX">Mexico</option> <option value="FM">Micronesia, Federated States of</option> <option value="MD">Moldova, Republic of</option> <option value="MC">Monaco</option> <option value="MN">Mongolia</option> <option value="ME">Montenegro</option> <option value="MS">Montserrat</option> <option value="MA">Morocco</option> <option value="MZ">Mozambique</option> <option value="MM">Myanmar</option> <option value="NA">Namibia</option> <option value="NR">Nauru</option> <option value="NP">Nepal</option> <option value="NL">Netherlands</option> <option value="NC">New Caledonia</option> <option value="NZ">New Zealand</option> <option value="NI">Nicaragua</option> <option value="NE">Niger</option> <option value="NG">Nigeria</option> <option value="NU">Niue</option> <option value="NF">Norfolk Island</option> <option value="MP">Northern Mariana Islands</option> <option value="NO">Norway</option> <option value="OM">Oman</option> <option value="PK">Pakistan</option> <option value="PW">Palau</option> <option value="PS">Palestinian Territory, Occupied</option> <option value="PA">Panama</option> <option value="PG">Papua New Guinea</option> <option value="PY">Paraguay</option> <option value="PE">Peru</option> <option value="PH">Philippines</option> <option value="PN">Pitcairn</option> <option value="PL">Poland</option> <option value="PT">Portugal</option> <option value="PR">Puerto Rico</option> <option value="QA">Qatar</option> <option value="RE">Réunion</option> <option value="RO">Romania</option> <option value="RU">Russian Federation</option> <option value="RW">Rwanda</option> <option value="BL">Saint Barthélemy</option> <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option> <option value="KN">Saint Kitts and Nevis</option> <option value="LC">Saint Lucia</option> <option value="MF">Saint Martin (French part)</option> <option value="PM">Saint Pierre and Miquelon</option> <option value="VC">Saint Vincent and the Grenadines</option> <option value="WS">Samoa</option> <option value="SM">San Marino</option> <option value="ST">Sao Tome and Principe</option> <option value="SA">Saudi Arabia</option> <option value="SN">Senegal</option> <option value="RS">Serbia</option> <option value="SC">Seychelles</option> <option value="SL">Sierra Leone</option> <option value="SG">Singapore</option> <option value="SX">Sint Maarten (Dutch part)</option> <option value="SK">Slovakia</option> <option value="SI">Slovenia</option> <option value="SB">Solomon Islands</option> <option value="SO">Somalia</option> <option value="ZA">South Africa</option> <option value="GS">South Georgia and the South Sandwich Islands</option> <option value="SS">South Sudan</option> <option value="ES">Spain</option> <option value="LK">Sri Lanka</option> <option value="SD">Sudan</option> <option value="SR">Suriname</option> <option value="SJ">Svalbard and Jan Mayen</option> <option value="SZ">Swaziland</option> <option value="SE">Sweden</option> <option value="CH">Switzerland</option> <option value="SY">Syrian Arab Republic</option> <option value="TW">Taiwan, Province of China</option> <option value="TJ">Tajikistan</option> <option value="TZ">Tanzania, United Republic of</option> <option value="TH">Thailand</option> <option value="TL">Timor-Leste</option> <option value="TG">Togo</option> <option value="TK">Tokelau</option> <option value="TO">Tonga</option> <option value="TT">Trinidad and Tobago</option> <option value="TN">Tunisia</option> <option value="TR">Turkey</option> <option value="TM">Turkmenistan</option> <option value="TC">Turks and Caicos Islands</option> <option value="TV">Tuvalu</option> <option value="UG">Uganda</option> <option value="UA">Ukraine</option> <option value="AE">United Arab Emirates</option> <option value="GB">United Kingdom</option> <option value="US">United States</option> <option value="UM">United States Minor Outlying Islands</option> <option value="UY">Uruguay</option> <option value="UZ">Uzbekistan</option> <option value="VU">Vanuatu</option> <option value="VE">Venezuela, Bolivarian Republic of</option> <option value="VN">Viet Nam</option> <option value="VG">Virgin Islands, British</option> <option value="VI">Virgin Islands, U.S.</option> <option value="WF">Wallis and Futuna</option> <option value="EH">Western Sahara</option> <option value="YE">Yemen</option> <option value="ZM">Zambia</option> <option value="ZW">Zimbabwe</option>
        </select>
</td ></tr >

<tr ><td >
        <label for="ccHolderFirstName" >Name On Card </label>
  </td ><td >
        <input class="half" data-theme="f" id="ccHolderFirstName" autocomplete="ccHolderFirstName" name="ccHolderFirstName" value="<?php @print $_POST['ccHolderFirstName']; ?>" placeholder="JOHN" required />
        <input class="half" data-theme="f" id="ccHolderLastName" autocomplete="ccHolderLastName" name="ccHolderLastName" placeholder="SMITH" value="<?php @print $_POST['ccHolderLastName']; ?>" required />
</td ></tr >
<tr ><td > 	
        <label for="ccnumber" >Card Number</label>
  </td ><td >
        <input data-theme="f" id="ccnumber" autocomplete="cc-number" name="ccnumber" value="<?php @print $_POST['ccnumber']; ?>" placeholder="xxxx xxxx xxxx xxxx" required /> 
</td ></tr >

<input id="cctype" name="cctype" type="hidden" /> 

<tr ><td > 
<label>Card Expiry</label>
  </td ><td >
 <select data-theme="f" name="ccexp_month" id="ccexp_month" title="select a month"> 
<?php for ($i=1; $i<=12; $i++)  {
  @print "<option value='" . str_pad($i, 2, '0', STR_PAD_LEFT) .
    "'> " . str_pad($i, 2, '0', STR_PAD_LEFT) . "</option>";
}
?>

 </select> 
 <select data-theme="f"  name="ccexp_year" id="ExpYear" title="select a year"> 
<?php 
$y = (int) date('y');
for ($i=$y; $i<=($y + 10); $i++)
{
  @print "<option value='" . str_pad($i, 2, '0', STR_PAD_LEFT) .
    "'> " . str_pad($i, 2, '0', STR_PAD_LEFT) . "</option>";
}
?>
</select> </div>

    <input data-theme="f" type="hidden" id="ccexp" autocomplete="cc-exp" name="ccexp" />
  </td ></tr >
  <tr ><td >
    <label>Card security code</label>
  </td ><td >
    <input data-theme="f" maxlength="3" placeholder="123" id="cvc" name="cvc" min="0" max="999" required />
  </td ></tr >
  <tr ><td colspan=2 > 
    <input data-theme="f" type="submit" name="submit"  value="Book" />
  </td ></tr >
</table>
</form>
<?php 
@print "<div class='clause' >" . str_replace('Venere','Essential Hotels',$_POST['Clause']) . "</div>";
?>
</center>

<script>
jQuery( "input#firstname" ).on( "blur", function() {
  jQuery( this ).val(function( i, val ) {
    jQuery( "input#ccHolderFirstName" ).val(val.toUpperCase());
    return val;
  });
});
jQuery( "input#surname" ).on( "blur", function() {
  jQuery( this ).val(function( i, val ) {
    jQuery( "input#ccHolderLastName" ).val(val.toUpperCase());
    return val;
  });
});
jQuery('#ccnumber').validateCreditCard(function(result) {

   /* alert('CC type: ' + result.card_type.name
     + '\nLength validation: ' + result.length_valid
      + '\nLuhn validation: + result.luhn_valid'); 
   jQuery('#ccnumber').addClass( result.card_type.name ); */
  if (result.length_valid) {
    jQuery('#ccnumber').addClass('check');
    if (result.card_type.name) {
      if (result.card_type.name == 'amex') {
        jQuery('#cctype').val( "AX" );
      } else if (result.card_type.name == 'diners_club_carte_blanche') {
        jQuery('#cctype').val( "DN" );
      } else if (result.card_type.name == 'diners_club_international') {
        jQuery('#cctype').val( "DN" );
      } else if (result.card_type.name == 'mastercard') {
        jQuery('#cctype').val( "MC" );
      } else if (result.card_type.name == 'visa') {
        jQuery('#cctype').val( "VI" );
      } else if (result.card_type.name == 'discover') {
        jQuery('#cctype').val( "DI" );
      }
    }

    jQuery('[type="submit"]').parent('.ui-btn').removeClass('ui-disabled');  

  } else {
    jQuery('#cctype').val("");
    jQuery('#ccnumber').removeClass('check');
    jQuery('[type="submit"]').parent('.ui-btn').addClass('ui-disabled'); 
  }
});
  </script>

  </body>
</html><?php } else { ?>
    <center> 
      Chat to us: <a href="tel:+441189714700" >0118 971 4700</a>
    </center>
  </body> 
  </html> <?php
}
/*
EC
EUROCARD

JC
JCB
 */

