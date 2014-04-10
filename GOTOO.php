
<!DOCTYPE html>
<head>
	<link href='style.css' rel='stylesheet' type='text/css'>
	<script src='http://code.jquery.com/jquery-1.11.0.min.js'></script>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
	<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
	<!--get the event list (pass to js)-->
	<?php require_once("getEvents.php"); ?>
	<!--scale content to screen-->
	<script src='scale.js'></script>

	<script src='script.js'></script>
	<!--Display up the data-->
</head>

<html>
<body>
	<div id='larrychange'></div>

	<!--navBar Larry-->

	<!--Once Larry formats tile in function in JS file, deletefollowing hardcode-->

	<div id='content'>

	<div class='tile 001'>
		<div class='cover'>
			<div class='gradient'>
				<div class='name'>Event name</div>
				<div class='status 001'> </div>
			</div>
		</div>
		<div class='lower'>
			<div class='location'>
				<span class="venue">Barton Hall</span>
				<span class="Address">200 University Ave, Ithaca, NY</span>
			</div>
			<div class='time'>
				<span class="from">10:00am</span> to
				<span class="to">2:30pm</span>
			</div>
		</div>
		<div class='details'>
				<div  class='description'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
				<div class="map_canvas"></div>
		</div>
	
	</div>

	</div>

</body>

</html>
