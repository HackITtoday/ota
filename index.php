<?php
//
// The box to be put in the hotel page. With the variables sent by URL of the iFrame  
//

//connection, auth
include './lib/auth.php';

$site = 'essentialhotels.co.uk';

isset( $_GET['singleroom'] ) ? : $_GET['singleroom'] = ""; 
isset( $_GET['doubleroom'] ) ? : $_GET['doubleroom'] = "";
isset( $_GET['deluxeroom'] ) ? : $_GET['deluxeroom'] = "";
isset( $_GET['familyroom'] ) ? : $_GET['familyroom'] = "";
isset( $_GET['suiteroom']  ) ? : $_GET['suiteroom'] = "";

isset( $_GET['singlemap'] ) ? : $_GET['singlemap'] = ""; 
isset( $_GET['doublemap'] ) ? : $_GET['doublemap'] = "";
isset( $_GET['deluxemap'] ) ? : $_GET['deluxemap'] = "";
isset( $_GET['familymap'] ) ? : $_GET['familymap'] = "";
isset( $_GET['suitemap']  ) ? : $_GET['suitemap'] = "";

isset( $_GET['singledisplay'] ) ? : $_GET['singledisplay'] = ""; 
isset( $_GET['doubledisplay'] ) ? : $_GET['doubledisplay'] = "";
isset( $_GET['deluxedisplay'] ) ? : $_GET['deluxedisplay'] = "";
isset( $_GET['familydisplay'] ) ? : $_GET['familydisplay'] = "";
isset( $_GET['suitedisplay']  ) ? : $_GET['suitedisplay'] = "";

?>
<center class="in-page" >
  <form action="/ota/lib/find_rooms.php" method="get" style="max-width: 225px;" data-ajax="false" >
    <input type="hidden" name='id' value=<?php print $_GET['id'] ?> />
    <fieldset class="date-box" data-role="controlgroup" data-type="horizontal"  data-theme="f" > 
      <input type="date" name="date-in" id="date-in" value="Tonight" type="date"  data-theme="f" data-role="datebox" data-options='{"mode": "calbox","overrideDateFormat":"%Y-%m-%d","useFocus":true,"afterToday":true,"themeDate":"f"}'readonly="readonly" style="text-align:center;margin-left:-80px" />

      <input type="hidden" id="date" name="date" value="<?php
      echo date( "Y-m-d", strtotime( "today" ) );
      ?>" />
    </fieldset>	
    <?php 
    $rates = array();

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

    <?php /* Single, Double, Deluxe, Family, Suite */ ?>
    <input type="hidden" name="images[Single]" value="<?php print str_replace(array("http://$site/wp-content/uploads/","https://$site/wp-content/uploads/"), "", $_GET['singleroom']); ?>" />
    <input type="hidden" name="images[Double]" value="<?php print str_replace(array("http://$site/wp-content/uploads/","https://$site/wp-content/uploads/"), "", $_GET['doubleroom']); ?>" />
    <input type="hidden" name="images[Deluxe]" value="<?php print str_replace(array("http://$site/wp-content/uploads/","https://$site/wp-content/uploads/"), "", $_GET['deluxeroom']); ?>" />
    <input type="hidden" name="images[Family]" value="<?php print str_replace(array("http://$site/wp-content/uploads/","https://$site/wp-content/uploads/"), "", $_GET['familyroom']); ?>" />
    <input type="hidden" name="images[Suite]"  value="<?php print str_replace(array("http://$site/wp-content/uploads/","https://$site/wp-content/uploads/"), "", $_GET['suiteroom']); ?>" />

    <input type="hidden" name="display[Single]" value="<?php print $_GET['singledisplay']; ?>" />
    <input type="hidden" name="display[Double]" value="<?php print $_GET['doubledisplay']; ?>" />
    <input type="hidden" name="display[Deluxe]" value="<?php print $_GET['deluxedisplay']; ?>" />
    <input type="hidden" name="display[Family]" value="<?php print $_GET['familydisplay']; ?>" />
    <input type="hidden" name="display[Suite]"  value="<?php print $_GET['suitedisplay']; ?>" />

    <input type="hidden" name="map[Single]" value="<?php print $_GET['singlemap']; ?>" />
    <input type="hidden" name="map[Double]" value="<?php print $_GET['doublemap']; ?>" />
    <input type="hidden" name="map[Deluxe]" value="<?php print $_GET['deluxemap']; ?>" />
    <input type="hidden" name="map[Family]" value="<?php print $_GET['familymap']; ?>" />
    <input type="hidden" name="map[Suite]"  value="<?php print $_GET['suitemap']; ?>" />

    <input type="hidden" name="ota"  value="<?php print $_GET['ota']; ?>" />
<?php
if (isset( $_GET['debug'] )) { print '<input type="hidden" name="debug" value="'. $_GET['debug'] .'" />'; }
?>
    <input data-theme="f" type="submit" name="submit" value="Find Rooms" />
  </form>
</center>	
