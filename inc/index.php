<?php

$site = 'essentialworld.travel';

if (isset($_GET['tour']) ) {
        
	// Include the config file
	include('inc/config.php');
	
	// Tour ID based on previous selection should be in the querystring
	isset($_GET['tour']) ? $tour = (int)$_GET['tour'] : $tour = 4;
	
	// Channel ID based on previous selection should be in the querystring
	isset($_GET['channel']) ? $channel = (int)$_GET['channel'] : null;
	
	// Query the TourCMS API, get back all the info on this Tour/Hotel
	$result = $tourcms->show_tour($tour, $channel);
	
	// Jump straight to the bit of XML related to making a new booking panel
	// includes rate and date info
	$booking_criteria = $result->tour->new_booking;
	print_r($booking_criteria);
  
} else {

  isset( $_GET['singleroom'] ) ? : $_GET['singleroom'] = "/2013/11/Royal-York-Hotel-Bedroom1.jpg"; 
  isset( $_GET['doubleroom'] ) ? : $_GET['doubleroom'] = "/2013/11/RoyalYorkDoubleSuperior-561x318.jpg";
  isset( $_GET['deluxeroom'] ) ? : $_GET['deluxeroom'] = "";
  isset( $_GET['familyroom'] ) ? : $_GET['familyroom'] = "";
  isset( $_GET['suiteroom']  ) ? : $_GET['suiteroom'] = "";

  isset( $_GET['singlemap'] ) ? : $_GET['singlemap'] = "Standard Single Room"; 
  isset( $_GET['doublemap'] ) ? : $_GET['doublemap'] = "Standard Double Room";
  isset( $_GET['deluxemap'] ) ? : $_GET['deluxemap'] = "";
  isset( $_GET['familymap'] ) ? : $_GET['familymap'] = "";
  isset( $_GET['suitemap']  ) ? : $_GET['suitemap'] = "";

}

?>
<center class="in-page" >
<form action="/venere/lib/find_rooms.php?id=<?php print $_GET['id'] ?>" method="post" style="max-width: 225px;" data-ajax="false" >
<fieldset class="date-box" data-role="controlgroup" data-type="horizontal"  data-theme="f" > 
		<input type="date" name="date-in" id="date-in" value="<?php
echo date( "Y-m-d", strtotime( "today" ) );
?>" type="date"  data-theme="f" data-role="datebox" data-options='{"mode": "calbox","overrideDateFormat":"%Y-%m-%d","useFocus":true,"afterToday":true,"themeDate":"f"}'readonly="readonly" />
  
	<input type="hidden" id="date" name="date" value="<?php
echo date( "Y-m-d", strtotime( "today" ) );
?>" />
</fieldset>	
	<?php 
		$rates = array();
		// TourCMS
		// Process the available rates for this Tour/Hotel
		if (isset($booking_criteria->people_selection->rate)) {  // if TourCMS
		foreach ($booking_criteria->people_selection->rate as $rate) {
			$rates[] = (string)$rate->rate_id;
			// Process the labels
			// Label_1 might be blank, for 
			(string)$rate->label_1 != "" ? $label = $rate->label_1 : $label = "Number of People";
			(string)$rate->label_2 != "" ? $label .= "(" . $rate->label_2 . ")" : null;
			if ($label == "Adults") {
			?>
			<fieldset data-role="controlgroup" data-type="horizontal" > 
			<legend><?php print "Guests" ?></legend>
					<?php
						$count = (int)$rate->minimum;
						$max = (int)$rate->maximum;
						
						while($count <= $max) {
						  if ($count<>0) {
							?> 
							  <input type="radio" id="people-<?php print $count; ?>" name="<?php print $rate->rate_id; ?>" checked="checked" value="<?php print $count; ?>" /><label for="people-<?php print $count; ?>"> <?php print $count; ?></label>
							<?php	
						  }
							$count ++;
						}
					?>
			
                        </fieldset>
			<?php
			}
		}

		
		// Set some sensible default time		
		$default_date = strtotime("+2 weeks Saturday");
	?>
	<label>Date<input type="text" name="date" value="" type="date" data-role="datebox" data-options='{"mode": "calbox","overrideDateFormat":"%Y-%m-%d","useFocus":true,"afterToday":true}'readonly="readonly" /></label>
	<?php 
		$date_type = $booking_criteria->date_selection->date_type;
		if($date_type == "DATE_NIGHTS" || $date_type == "DATE_DAYS"):
			$min_hdur = $booking_criteria->date_selection->duration_minimum;
			$max_hdur = $booking_criteria->date_selection->duration_maximum;
			$def_hdur = (int)$result->tour->duration;
			?>
			<fieldset data-role="controlgroup" data-type="horizontal" > 

<a title="One less night" class="ui-disabled nights-minus" data-theme="f" href="#!" data-role="button" data-icon="minus" data-iconpos="notext"></a>
<a data-role="button" class="ui-disabled" id="set_night_display" >1 Night</a> 
<a title="One more night" class="nights-plus" data-theme="f" href="#!" data-role="button" data-icon="plus" data-iconpos="notext"></a>

			</fieldset>

	<input name="hdur" data-min-nights="<?php print $min_hdur; ?>" data-max-nights="<?php print $max_hdur; ?>" id="set_night_textbox" type="hidden" value="<?php print $def_hdur; ?>" /> <?php /* update this with js */ ?>
	<input type="hidden" name="rates" value="<?php print implode(",", $rates); ?>" />
	<input type="hidden" name="tour" value="<?php print $tour; ?>" />
	<input type="hidden" name="channel" value="<?php print $channel; ?>" />

			<?php
		endif;
		} else { // if not TourCMS

			?>
                        <input name="hdura" data-min-a="1" data-max-a="6" id="set_a_textbox" type="hidden" value="1" />
                        <input name="hdurr" data-min-r="1" data-max-r="6" id="set_r_textbox" type="hidden" value="1" />
                        <input name="nights" data-min-nights="1" data-max-nights="20" id="set_night_textbox" type="hidden" value="1" />
                        <input name="hdurc" data-min-c="0" data-max-c="12" id="set_c_textbox" type="hidden" value="0" />
                        <fieldset data-role="controlgroup" data-type="horizontal" > 
                          <a title="One less night" class="ui-disabled nights-minus" data-theme="f" href="#!" data-role="button" data-icon="minus" data-iconpos="notext"></a>
                          <a data-role="button" class="ui-disabled" id="set_night_display" >1 Night</a> 
                          <a title="One more night" class="nights-plus" data-theme="f" href="#!" data-role="button" data-icon="plus" data-iconpos="notext"></a>
                        </fieldset>
                        <fieldset data-role="controlgroup" data-type="horizontal" > 
                          <a title="One less" class="ui-disabled a-minus" data-theme="f" href="#!" data-role="button" data-icon="minus" data-iconpos="notext"></a>
                          <a data-role="button" class="ui-disabled display" id="set_a_display" >1 Guest</a> 
                          <a title="One more" class="a-plus" data-theme="f" href="#!" data-role="button" data-icon="plus" data-iconpos="notext"></a>
                        </fieldset>
                        <fieldset data-role="controlgroup" data-type="horizontal" >
                          <a title="One less" class="ui-disabled r-minus" data-theme="f" href="#!" data-role="button" data-icon="minus" data-iconpos="notext"></a>
                          <a data-role="button" class="ui-disabled display"  id="set_r_display" >1 Room</a> 
                          <a title="One more" class="r-plus" data-theme="f" href="#!" data-role="button" data-icon="plus" data-iconpos="notext"></a>
                        </fieldset>

	<?php	
		}
	?>
			
	<?php /* Single, Double, Deluxe, Family, Suite
http://essentialworld.travel/wp-content/uploads/
	*/
	
	?>
<input type="hidden" name="images[Single]" value="<?php print str_replace("http://$site/wp-content/uploads/", "", $_GET['singleroom']); ?>" />
<input type="hidden" name="images[Double]" value="<?php print str_replace("http://$site/wp-content/uploads/", "", $_GET['doubleroom']); ?>" />
<input type="hidden" name="images[Deluxe]" value="<?php print str_replace("http://$site/wp-content/uploads/", "", $_GET['deluxeroom']); ?>" />
<input type="hidden" name="images[Family]" value="<?php print str_replace("http://$site/wp-content/uploads/", "", $_GET['familyroom']); ?>" />
<input type="hidden" name="images[Suite]"  value="<?php print str_replace("http://$site/wp-content/uploads/", "", $_GET['suiteroom']); ?>" />

<input type="hidden" name="map[Single]" value="<?php print $_GET['singlemap']; ?>" />
<input type="hidden" name="map[Double]" value="<?php print $_GET['doublemap']; ?>" />
<input type="hidden" name="map[Deluxe]" value="<?php print $_GET['deluxemap']; ?>" />
<input type="hidden" name="map[Family]" value="<?php print $_GET['familymap']; ?>" />
<input type="hidden" name="map[Suite]"  value="<?php print $_GET['suitemap']; ?>" />

	
	<input data-theme="f" type="submit" name="submit" value="Availability" />
</form>
</center>	
