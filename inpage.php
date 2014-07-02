<?php  $site = 'essentialhotels.co.uk';
?>
  <iframe width="310" scrolling="no" height="290" frameborder="0" align="middle" style="overflow: hidden;position: absolute; right: 6px; top: 10px; z-index: 4999;" allowtransparency="true" src="https://essentialhotels.co.uk/venere/out.php?doubleroom=<?php
print str_replace("http://$site/wp-content/uploads", "",
       	get_post_meta($post->ID, 'classictwinroom', true)); // classic twiw
  ?>&deluxeroom=<?php
  print str_replace("http://$site/wp-content/uploads", "",
	  get_post_meta($post->ID, 'executivedoubleroom', true)); //p
  ?>&familyroom=<?php
  print str_replace("http://$site/wp-content/uploads", "",
	  get_post_meta($post->ID, 'executivetwinroom', true)); //p
  ?>&suiteroom=<?php
  print str_replace("http://$site/wp-content/uploads", "",
	  get_post_meta($post->ID, 'juniorsuiteroom', true)); //p
  ?>&singleroom=<?php
  print str_replace("http://$site/wp-content/uploads", "",
	  get_post_meta($post->ID, 'classicdoublerm', true)); //p
  ?>&doublemap=<?php
  print get_post_meta($post->ID, 'classictwinroomdes', true);//Room descriptions from venere.com
  ?>&deluxemap=<?php
  print get_post_meta($post->ID, 'executivedoublermdes', true); 
  ?>&familymap=<?php
  print get_post_meta($post->ID, 'executivetwinrmdescr', true);
  ?>&suitemap=<?php
  print get_post_meta($post->ID, 'juniorsuitermdes', true);
  ?>&singlemap=<?php
  print get_post_meta($post->ID, 'classicdoublermdes', true);
  ?>&id=<?php
  print get_post_meta($post->ID, 'hotelid', true); //  hotel ID from venere.com
  ?>&doubledisplay=<?php
  print get_post_meta($post->ID, 'classictwinrmtitle', true);// How we display the room names
  ?>&deluxedisplay=<?php
  print get_post_meta($post->ID, 'executivedblrmtitle', true);//t
  ?>&familydisplay=<?php
  print get_post_meta($post->ID, 'executivetwinrmtitle', true);//t
  ?>&ota=<?php
  print get_post_meta($post->ID, 'bookingservices', true);//t
  ?>&suitedisplay=<?php
  print get_post_meta($post->ID, 'juniorrmtitle', true);//t
  ?>&singledisplay=<?php
  print get_post_meta($post->ID, 'classicdblrmtitle', true);//t
  ?>" ></iframe> <?php


