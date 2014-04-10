<?php 
  //Facebook app configuration
 	require_once("fb-sdk/src/facebook.php");
	  $config = array(
      'appId' => '275395405958888',
      'secret' => '690f87de871dd61cdf6dca1b0454a7e6',
      'fileUpload' => false, // optional
      'allowSignedRequest' => false, // optional, but should be set to false for non-canvas apps
  	);
  //create new config variable
  $facebook = new Facebook($config);

//event creator catalog  
$creators=["CornellHillel","dansmallspresents"];

$allEvents=[]; //event array to be populated
foreach ($creators as $creator)
{
	try {
        $events = $facebook->api('/'.$creator.'/events?fields=id,owner,name,updated_time,cover,description,start_time,end_time,venue,location,ticket_uri,cover&since=now&limit=5000','GET');
        $enc= $events[data];
        $allEvents=array_merge($allEvents, $enc);
      } catch(FacebookApiException $e) {
        echo "ERROR".$e;
      }  
}
echo "<script>var events=".json_encode($allEvents)."; </script>";

 ?>