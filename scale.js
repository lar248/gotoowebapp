function scale()
{
    var height=$( ".cover" ).width()*.37;
    $( ".cover" ).css("height", height);
}
$("document").ready(function()
{
    scale();
});
$( window ).resize(function() 
{
        scale();
});
//FONT SCALING
$( document ).ready( function() {
        var $body = $('body'); //Cache this for performance

        var setBodyScale = function() {
            var scaleSource = $body.width(),
                scaleFactor = 0.35,                     
                maxScale = 600,
                minScale = 30; //Tweak these values to taste

            var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

            if (fontSize > maxScale) fontSize = maxScale;
            if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

            $('body').css('font-size', fontSize + '%');
        }

        $(window).resize(function(){
            setBodyScale();
        });
        //Fire it when the page first loads:
        setBodyScale();
});