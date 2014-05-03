
<!DOCTYPE html>
<head>
	<link href='style.css' rel='stylesheet' type='text/css'>
	<script src='http://code.jquery.com/jquery-1.11.0.min.js'></script>

	<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
	<script src="https://rawgithub.com/HPNeo/gmaps/master/gmaps.js"></script>
	<script src="jquery.storageapi.js"></script>
	<script src="jquery.fittext.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
	<script src="gmaps.js"></script>
	
	<!--get the event list (pass to js)-->
	<?php require_once("getEvents.php"); ?>
	<!--scale content to screen-->
	<script src='scale.js'></script>

	<script src='script.js'></script>
	<!--Display up the data-->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> <!--320-->
</head>

<html>
<body>
	<div id='cal'>
		<div id='labels'>
		    <span class='daylabel'>Su</span>
		    <span class='daylabel'>M</span>
		    <span class='daylabel'>T</span>
		    <span class='daylabel'>W</span>
		    <span class='daylabel'>Th</span>
		    <span class='daylabel'>F</span>
		    <span class='daylabel'>Sa</span>
	   	</div>
	   	<div id='holder'>
	   		<div id='datesPrev' class='dates'>
			    <span class='dayval' id='prev_0'></span>
			    <span class='dayval' id='prev_1'></span>
			    <span class='dayval' id='prev_2'></span>
			    <span class='dayval' id='prev_3'></span>
			    <span class='dayval' id='prev_4'></span>
			    <span class='dayval' id='prev_5'></span>
			    <span class='dayval' id='prev_6'></span>
		   	</div>

			<div id='datesCurr' class='dates'>
			    <span class='dayval' id='dayval_0'></span>
			    <span class='dayval' id='dayval_1'></span>
			    <span class='dayval' id='dayval_2'></span>
			    <span class='dayval' id='dayval_3'></span>
			    <span class='dayval' id='dayval_4'></span>
			    <span class='dayval' id='dayval_5'></span>
			    <span class='dayval' id='dayval_6'></span>
		   	</div>
		   	<div id='datesNext' class='dates'>
			    <span class='dayval' id='next_0'></span>
			    <span class='dayval' id='next_1'></span>
			    <span class='dayval' id='next_2'></span>
			    <span class='dayval' id='next_3'></span>
			    <span class='dayval' id='next_4'></span>
			    <span class='dayval' id='next_5'></span>
			    <span class='dayval' id='next_6'></span>
		   	</div>
		</div>
	   	<div id='fulldate'>
	   	</div>

   	</div>
	<!--navBar Larry-->

	<!--Once Larry formats tile in function in JS file, deletefollowing hardcode-->

	<div id='content'>

	</div>

</body>

</html>
