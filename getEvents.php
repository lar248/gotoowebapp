<?php 
 	require_once("fb-sdk/src/facebook.php");
	  $config = array(
      'appId' => '275395405958888',
      'secret' => '690f87de871dd61cdf6dca1b0454a7e6',
      'fileUpload' => false, // optional
      'allowSignedRequest' => false, // optional, but should be set to false for non-canvas apps
  	);
  $facebook = new Facebook($config);
  
$creators=["CornellHillel","dansmallspresents"];


$allEvents=[];
foreach ($creators as $creator)
{
	try {
        $events = $facebook->api('/'.$creator.'/events?fields=id,owner,name,updated_time,cover,description,start_time,end_time,venue,location,ticket_uri,cover&since=now&limit=5000','GET');
        $enc= $events[data];
        $allEvents=array_merge($allEvents, $enc);
      } catch(FacebookApiException $e) {
        // If the user is logged out, you can have a 
        // user ID even though the access token is invalid.
        // In this case, we'll get an exception, so we'll
        // just ask the user to login again here.
        echo "ERROR".$e;
      }  
}
echo "<script>var events=".json_encode($allEvents)."; </script>";

 ?>