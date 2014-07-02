<?php
include('../inc/top.php');
?>
<center class="pay_where">
<form action="/venere/lib/booking.php" method="post" style="max-width:400px" data-ajax="false" >

<?php
print '<input type="submit" name="paynow" data-theme="f" value="Pay Now" />
  ';
print '<input type="submit" name="athotel" data-theme="f" value="At Hotel" />
  ';
print '<input type="hidden" name="HotelID" value="'. $_POST['HotelID'] .'" />
  ';
print '<input type="hidden" name="roomID" value="'. $_POST['roomID'] .'" />
  ';
print '<input type="hidden" name="totalPrice" value="'. $_POST['totalPrice'] .'" />
  ';
print '<input type="hidden" name="ratePlanID" value="'. $_POST['ratePlanID'] .'" />
  ';
print '<input type="hidden" name="quantity" value="'. $_POST['quantity'] .'" />
  ';
print '<input type="hidden" name="date-in" value="'. $_POST['date-in'] .'" />
  ';
print '<input type="hidden" name="date-out" value="'. $_POST['date-out'] .'" />
  ';
print '<input type="hidden" name="AvailBookingToken" value="'. $_POST['AvailBookingToken'] .'" />
  ';
print '<input type="hidden" name="sellingMethod" value="'. $_POST['sellingMethod'] .'" />
  ';
print '<input type="hidden" name="prepaid" value="'.$_POST['prepaid'].'" />
  ';
?>

</form>

</center>
</body>
</html>
