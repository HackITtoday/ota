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
  <label for="Initials" >Title</label>
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
<?php if ($_POST['ota'] == 1) { ?> 
<tr ><td > 
  <label for="countryName" >Country</label>
  </td ><td >
        <!-- http://www.freeformatter.com/iso-country-list-html-select.html -->
        <select  data-theme="f" name="countryName"> 
                <option value="GB">United Kingdom</option> <option value="AF">Afghanistan</option> <option value="AX">Åland Islands</option> <option value="AL">Albania</option> <option value="DZ">Algeria</option> <option value="AS">American Samoa</option> <option value="AD">Andorra</option> <option value="AO">Angola</option> <option value="AI">Anguilla</option> <option value="AQ">Antarctica</option> <option value="AG">Antigua and Barbuda</option> <option value="AR">Argentina</option> <option value="AM">Armenia</option> <option value="AW">Aruba</option> <option value="AU">Australia</option> <option value="AT">Austria</option> <option value="AZ">Azerbaijan</option> <option value="BS">Bahamas</option> <option value="BH">Bahrain</option> <option value="BD">Bangladesh</option> <option value="BB">Barbados</option> <option value="BY">Belarus</option> <option value="BE">Belgium</option> <option value="BZ">Belize</option> <option value="BJ">Benin</option> <option value="BM">Bermuda</option> <option value="BT">Bhutan</option> <option value="BO">Bolivia, Plurinational State of</option> <option value="BQ">Bonaire, Sint Eustatius and Saba</option> <option value="BA">Bosnia and Herzegovina</option> <option value="BW">Botswana</option> <option value="BV">Bouvet Island</option> <option value="BR">Brazil</option> <option value="IO">British Indian Ocean Territory</option> <option value="BN">Brunei Darussalam</option> <option value="BG">Bulgaria</option> <option value="BF">Burkina Faso</option> <option value="BI">Burundi</option> <option value="KH">Cambodia</option> <option value="CM">Cameroon</option> <option value="CA">Canada</option> <option value="CV">Cape Verde</option> <option value="KY">Cayman Islands</option> <option value="CF">Central African Republic</option> <option value="TD">Chad</option> <option value="CL">Chile</option> <option value="CN">China</option> <option value="CX">Christmas Island</option> <option value="CC">Cocos (Keeling) Islands</option> <option value="CO">Colombia</option> <option value="KM">Comoros</option> <option value="CG">Congo</option> <option value="CD">Congo, the Democratic Republic of the</option> <option value="CK">Cook Islands</option> <option value="CR">Costa Rica</option> <option value="CI">Côte d'Ivoire</option> <option value="HR">Croatia</option> <option value="CU">Cuba</option> <option value="CW">Curaçao</option> <option value="CY">Cyprus</option> <option value="CZ">Czech Republic</option> <option value="DK">Denmark</option> <option value="DJ">Djibouti</option> <option value="DM">Dominica</option> <option value="DO">Dominican Republic</option> <option value="EC">Ecuador</option> <option value="EG">Egypt</option> <option value="SV">El Salvador</option> <option value="GQ">Equatorial Guinea</option> <option value="ER">Eritrea</option> <option value="EE">Estonia</option> <option value="ET">Ethiopia</option> <option value="FK">Falkland Islands (Malvinas)</option> <option value="FO">Faroe Islands</option> <option value="FJ">Fiji</option> <option value="FI">Finland</option> <option value="FR">France</option> <option value="GF">French Guiana</option> <option value="PF">French Polynesia</option> <option value="TF">French Southern Territories</option> <option value="GA">Gabon</option> <option value="GM">Gambia</option> <option value="GE">Georgia</option> <option value="DE">Germany</option> <option value="GH">Ghana</option> <option value="GI">Gibraltar</option> <option value="GR">Greece</option> <option value="GL">Greenland</option> <option value="GD">Grenada</option> <option value="GP">Guadeloupe</option> <option value="GU">Guam</option> <option value="GT">Guatemala</option> <option value="GG">Guernsey</option> <option value="GN">Guinea</option> <option value="GW">Guinea-Bissau</option> <option value="GY">Guyana</option> <option value="HT">Haiti</option> <option value="HM">Heard Island and McDonald Islands</option> <option value="VA">Holy See (Vatican City State)</option> <option value="HN">Honduras</option> <option value="HK">Hong Kong</option> <option value="HU">Hungary</option> <option value="IS">Iceland</option> <option value="IN">India</option> <option value="ID">Indonesia</option> <option value="IR">Iran, Islamic Republic of</option> <option value="IQ">Iraq</option> <option value="IE">Ireland</option> <option value="IM">Isle of Man</option> <option value="IL">Israel</option> <option value="IT">Italy</option> <option value="JM">Jamaica</option> <option value="JP">Japan</option> <option value="JE">Jersey</option> <option value="JO">Jordan</option> <option value="KZ">Kazakhstan</option> <option value="KE">Kenya</option> <option value="KI">Kiribati</option> <option value="KP">Korea, Democratic People's Republic of</option> <option value="KR">Korea, Republic of</option> <option value="KW">Kuwait</option> <option value="KG">Kyrgyzstan</option> <option value="LA">Lao People's Democratic Republic</option> <option value="LV">Latvia</option> <option value="LB">Lebanon</option> <option value="LS">Lesotho</option> <option value="LR">Liberia</option> <option value="LY">Libya</option> <option value="LI">Liechtenstein</option> <option value="LT">Lithuania</option> <option value="LU">Luxembourg</option> <option value="MO">Macao</option> <option value="MK">Macedonia, the former Yugoslav Republic of</option> <option value="MG">Madagascar</option> <option value="MW">Malawi</option> <option value="MY">Malaysia</option> <option value="MV">Maldives</option> <option value="ML">Mali</option> <option value="MT">Malta</option> <option value="MH">Marshall Islands</option> <option value="MQ">Martinique</option> <option value="MR">Mauritania</option> <option value="MU">Mauritius</option> <option value="YT">Mayotte</option> <option value="MX">Mexico</option> <option value="FM">Micronesia, Federated States of</option> <option value="MD">Moldova, Republic of</option> <option value="MC">Monaco</option> <option value="MN">Mongolia</option> <option value="ME">Montenegro</option> <option value="MS">Montserrat</option> <option value="MA">Morocco</option> <option value="MZ">Mozambique</option> <option value="MM">Myanmar</option> <option value="NA">Namibia</option> <option value="NR">Nauru</option> <option value="NP">Nepal</option> <option value="NL">Netherlands</option> <option value="NC">New Caledonia</option> <option value="NZ">New Zealand</option> <option value="NI">Nicaragua</option> <option value="NE">Niger</option> <option value="NG">Nigeria</option> <option value="NU">Niue</option> <option value="NF">Norfolk Island</option> <option value="MP">Northern Mariana Islands</option> <option value="NO">Norway</option> <option value="OM">Oman</option> <option value="PK">Pakistan</option> <option value="PW">Palau</option> <option value="PS">Palestinian Territory, Occupied</option> <option value="PA">Panama</option> <option value="PG">Papua New Guinea</option> <option value="PY">Paraguay</option> <option value="PE">Peru</option> <option value="PH">Philippines</option> <option value="PN">Pitcairn</option> <option value="PL">Poland</option> <option value="PT">Portugal</option> <option value="PR">Puerto Rico</option> <option value="QA">Qatar</option> <option value="RE">Réunion</option> <option value="RO">Romania</option> <option value="RU">Russian Federation</option> <option value="RW">Rwanda</option> <option value="BL">Saint Barthélemy</option> <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option> <option value="KN">Saint Kitts and Nevis</option> <option value="LC">Saint Lucia</option> <option value="MF">Saint Martin (French part)</option> <option value="PM">Saint Pierre and Miquelon</option> <option value="VC">Saint Vincent and the Grenadines</option> <option value="WS">Samoa</option> <option value="SM">San Marino</option> <option value="ST">Sao Tome and Principe</option> <option value="SA">Saudi Arabia</option> <option value="SN">Senegal</option> <option value="RS">Serbia</option> <option value="SC">Seychelles</option> <option value="SL">Sierra Leone</option> <option value="SG">Singapore</option> <option value="SX">Sint Maarten (Dutch part)</option> <option value="SK">Slovakia</option> <option value="SI">Slovenia</option> <option value="SB">Solomon Islands</option> <option value="SO">Somalia</option> <option value="ZA">South Africa</option> <option value="GS">South Georgia and the South Sandwich Islands</option> <option value="SS">South Sudan</option> <option value="ES">Spain</option> <option value="LK">Sri Lanka</option> <option value="SD">Sudan</option> <option value="SR">Suriname</option> <option value="SJ">Svalbard and Jan Mayen</option> <option value="SZ">Swaziland</option> <option value="SE">Sweden</option> <option value="CH">Switzerland</option> <option value="SY">Syrian Arab Republic</option> <option value="TW">Taiwan, Province of China</option> <option value="TJ">Tajikistan</option> <option value="TZ">Tanzania, United Republic of</option> <option value="TH">Thailand</option> <option value="TL">Timor-Leste</option> <option value="TG">Togo</option> <option value="TK">Tokelau</option> <option value="TO">Tonga</option> <option value="TT">Trinidad and Tobago</option> <option value="TN">Tunisia</option> <option value="TR">Turkey</option> <option value="TM">Turkmenistan</option> <option value="TC">Turks and Caicos Islands</option> <option value="TV">Tuvalu</option> <option value="UG">Uganda</option> <option value="UA">Ukraine</option> <option value="AE">United Arab Emirates</option> <option value="GB">United Kingdom</option> <option value="US">United States</option> <option value="UM">United States Minor Outlying Islands</option> <option value="UY">Uruguay</option> <option value="UZ">Uzbekistan</option> <option value="VU">Vanuatu</option> <option value="VE">Venezuela, Bolivarian Republic of</option> <option value="VN">Viet Nam</option> <option value="VG">Virgin Islands, British</option> <option value="VI">Virgin Islands, U.S.</option> <option value="WF">Wallis and Futuna</option> <option value="EH">Western Sahara</option> <option value="YE">Yemen</option> <option value="ZM">Zambia</option> <option value="ZW">Zimbabwe</option>
        </select>
</td ></tr >

<?php } else { ?>

<tr ><td > 
  <label for="countryName" >Country</label>
  </td ><td >
<select data-theme="f" name="countryName">
  <option value="1">England</option>
  <option value="2">Scotland</option>
  <option value="3">Wales</option>
  <option value="4">Northern Ireland</option>
  <option value="5">Republic of Ireland</option>
  <option value="6">USA</option>
  <option value="7">Italy</option>
  <option value="8">Zambia</option>
  <option value="9">Argentina</option>
  <option value="10">Austria</option>
  <option value="11">Australia</option>
  <option value="12">The Bahamas</option>
  <option value="13">Barbados</option>
  <option value="14">Belgium</option>
  <option value="15">Belize</option>
  <option value="16">Brazil</option>
  <option value="17">Andorra</option>
  <option value="18">Canada</option>
  <option value="19">Chile</option>
  <option value="20">Cayman Islands</option>
  <option value="21">Cyprus</option>
  <option value="22">Czech Republic</option>
  <option value="23">Denmark</option>
  <option value="24">Germany</option>
  <option value="25">Netherlands</option>
  <option value="26">Ecuador</option>
  <option value="27">Egypt</option>
  <option value="28">Latvia</option>
  <option value="29">Fiji</option>
  <option value="30">Finland</option>
  <option value="31">France</option>
  <option value="32">Peru</option>
  <option value="33">Greece</option>
  <option value="34">Hungary</option>
  <option value="35">India</option>
  <option value="36">Indonesia</option>
  <option value="37">Côte D'Ivoire</option>
  <option value="38">Antigua and Barbuda</option>
  <option value="39">Israel</option>
  <option value="40">Japan</option>
  <option value="41">Jamaica</option>
  <option value="42">Kenya</option>
  <option value="43">Bermuda</option>
  <option value="44">British Virgin Islands</option>
  <option value="45">Estonia</option>
  <option value="46">Luxembourg</option>
  <option value="47">China</option>
  <option value="48">Puerto Rico</option>
  <option value="49">Malaysia</option>
  <option value="50">Malta</option>
  <option value="51">Mauritius</option>
  <option value="52">Mexico</option>
  <option value="53">Morocco</option>
  <option value="54">Norway</option>
  <option value="55">Costa Rica</option>
  <option value="56">Pakistan</option>
  <option value="57">Portugal</option>
  <option value="58">Hong Kong</option>
  <option value="59">Maldives</option>
  <option value="60">Slovenia</option>
  <option value="61">Singapore</option>
  <option value="62">Spain</option>
  <option value="63">Grenada</option>
  <option value="64">Sweden</option>
  <option value="65">Switzerland</option>
  <option value="66">Taiwan</option>
  <option value="67">Thailand</option>
  <option value="68">South Korea</option>
  <option value="69">Tunisia</option>
  <option value="70">Turkey</option>
  <option value="71">Romania</option>
  <option value="72">Venezuela</option>
  <option value="73">Iceland</option>
  <option value="74">Colombia</option>
  <option value="75">Panama</option>
  <option value="76">United Arab Emirates</option>
  <option value="77">Sri lanka</option>
  <option value="78">South Africa</option>
  <option value="79">Samoa</option>
  <option value="80">New Zealand</option>
  <option value="81">Slovakia</option>
  <option value="82">Trinidad and Tobago</option>
  <option value="83">Dominican Republic</option>
  <option value="84">Cuba</option>
  <option value="85">Russia</option>
  <option value="87">Nepal</option>
  <option value="88">Netherlands Antilles</option>
  <option value="89">Martinique</option>
  <option value="90">Saudi Arabia</option>
  <option value="91">Bulgaria</option>
  <option value="92">Monaco</option>
  <option value="93">Jordan</option>
  <option value="94">Philippines</option>
  <option value="95">Poland</option>
  <option value="96">Saint Lucia</option>
  <option value="97">Croatia</option>
  <option value="98">Lithuania</option>
  <option value="99">Azerbaijan</option>
  <option value="433">Nicaragua</option>
  <option value="434">Niger</option>
  <option value="435">Nigeria</option>
  <option value="524">Zimbabwe</option>
  <option value="536">Uruguay</option>
  <option value="537">Uzbekhistan</option>
  <option value="538">Niue</option>
  <option value="539">Palau</option>
  <option value="541">Ukraine</option>
  <option value="542">New Caledonia</option>
  <option value="543">Uganda</option>
  <option value="545">Papua New Guinea</option>
  <option value="547">Yemen</option>
  <option value="548">Paraguay</option>
  <option value="549">Virgin Islands</option>
  <option value="555">Wallis and Futuna</option>
  <option value="556">Vanuatu</option>
  <option value="558">Oman</option>
  <option value="559">West Bank</option>
  <option value="561">Western Sahara</option>
  <option value="562">Vietnam</option>
  <option value="563">Suriname</option>
  <option value="564">San Marino</option>
  <option value="565">Sao Tome and The Principe</option>
  <option value="566">Sudan</option>
  <option value="567">Saint Helena</option>
  <option value="568">Saint Kitts and Nevis</option>
  <option value="569">Saint Pierre and Miquelon</option>
  <option value="570">Saint Vincent and The Grenadines</option>
  <option value="571">Serbia</option>
  <option value="572">Seychelles</option>
  <option value="573">Solomon Islands</option>
  <option value="574">Sierra Leone</option>
  <option value="577">Somalia</option>
  <option value="578">Senegal</option>
  <option value="579">Qatar</option>
  <option value="581">Reunion</option>
  <option value="582">Tonga</option>
  <option value="584">Tuvalu</option>
  <option value="585">Turks and Caicos Islands</option>
  <option value="586">Turkmenistan</option>
  <option value="587">Rwanda</option>
  <option value="588">Syria</option>
  <option value="589">Swaziland</option>
  <option value="590">Svalbard</option>
  <option value="591">Tokelau</option>
  <option value="592">Togo</option>
  <option value="593">Tanzania</option>
  <option value="594">Tajikistan</option>
  <option value="595">Congo</option>
  <option value="596">Comoros</option>
  <option value="597">Cocos (Keeling) Islands</option>
  <option value="599">Cook Islands</option>
  <option value="600">Congo, Democratic Republic of the</option>
  <option value="601">Central African Republic</option>
  <option value="602">Cape Verde</option>
  <option value="603">Cameroon</option>
  <option value="605">Christmas Island</option>
  <option value="606">Chad</option>
  <option value="607">Faroe Islands</option>
  <option value="608">Falkland Islands (Islas Malvinas)</option>
  <option value="611">French Polynesia</option>
  <option value="612">French Guiana</option>
  <option value="613">East Timor</option>
  <option value="614">Dominica</option>
  <option value="615">Djibouti</option>
  <option value="616">Ethiopia</option>
  <option value="617">Equitorial Guinea</option>
  <option value="618">El Salvador</option>
  <option value="619">Bahrain</option>
  <option value="621">Aruba</option>
  <option value="622">Belarus</option>
  <option value="624">Bangladesh</option>
  <option value="625">Algeria</option>
  <option value="626">Albania</option>
  <option value="627">Afghanistan</option>
  <option value="628">Armenia</option>
  <option value="629">Anguilla</option>
  <option value="630">Angola</option>
  <option value="631">Burkina Faso</option>
  <option value="632">Brunei</option>
  <option value="633">British Indian Ocean Territory</option>
  <option value="634">Cambodia</option>
  <option value="635">Burundi</option>
  <option value="636">Burma</option>
  <option value="637">Bolivia</option>
  <option value="638">Bhutan</option>
  <option value="639">Benin</option>
  <option value="641">Botswana</option>
  <option value="642">Bosnia and Herzegovina</option>
  <option value="643">Liechtenstein</option>
  <option value="644">Libya</option>
  <option value="645">Liberia</option>
  <option value="646">Madagascar</option>
  <option value="647">Macedonia</option>
  <option value="648">Macau</option>
  <option value="649">Kyrgyzstan</option>
  <option value="650">Kuwait</option>
  <option value="651">Kiribati</option>
  <option value="652">Lesotho</option>
  <option value="653">Lebanon</option>
  <option value="654">Laos</option>
  <option value="655">Montserrat</option>
  <option value="656">Mongolia</option>
  <option value="657">Moldova</option>
  <option value="659">Namibia</option>
  <option value="660">Mozambique</option>
  <option value="661">Marshall Islands</option>
  <option value="662">Mali</option>
  <option value="663">Malawi</option>
  <option value="664">Micronesia, Federated States of</option>
  <option value="665">Mayotte</option>
  <option value="666">Mauritania</option>
  <option value="667">Guadeloupe</option>
  <option value="668">Greenland</option>
  <option value="670">Guinea</option>
  <option value="672">Guatemala</option>
  <option value="673">Gaza Strip</option>
  <option value="674">Gambia, The</option>
  <option value="675">Gabon</option>
  <option value="676">Gibraltar</option>
  <option value="677">Ghana</option>
  <option value="678">Georgia</option>
  <option value="681">Iraq</option>
  <option value="682">Kazakhstan</option>
  <option value="685">Haiti</option>
  <option value="686">Guyana</option>
  <option value="687">Guinea Bissau</option>
  <option value="688">Iran</option>
  <option value="689">Honduras</option>
  <option value="11950">Eritrea</option>
  <option value="11951">North Korea</option>
  <option value="11952">Nauru</option>
  <option value="21794">Montenegro</option>
  <option value="1000004">Curacao</option>
  <option value="1000005">Bonaire, Sint Eustatius and Saba</option>
  <option value="1000006">Sint Maarten</option>
</select>
  
</td ></tr >
<?php } ?>
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

