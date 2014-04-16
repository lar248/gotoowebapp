
$( document ).ready( function() {
    //on click
    for (ind in events)
    {
        displayEvent(events[ind]);
    }
    scale();
    $('.tile').click(function(){clicked($(this));});
});
//TODOS
    //HOME PAGE
        //MAKE SWAP-ATTEND WORK -GRONER
        //MAKE SWAP-ATTEND RECORD AND PERSIST -GRONER
        
    
        //GET MAP WORKING -LAR
        //FORMAT TILES -LAR
            //TICKET FUNCTIONALITY-ICON WRAPPED IN <A> -LAR

    //UI -LAR
        //NAV BAR -LAR
        //MAKE CAL UI -GRON
            //CAL FUNCTIONALITY -GRON

function clicked(curr)
{
        //if clicked on status
         if($(event.target).hasClass('status'))
        {
            console.log('statusChange');
            //change attend state
            swapAttend(curr);
        }
         else
         {
            //expand the tile
            var expOne=curr.children('.details');
            $('.details').not(expOne).slideUp();
            expOne.slideToggle();
    }
}

function swapAttend(id) //GRONER
    {
        var status=$('.'+id).children('.cover').children('.gradient').children('.status');
        var state= status.css("background-image");
        if(state=="url(file:///Users/adamgroner/Documents/go2/res/go.png)")
            status.css("background-image","url(res/check.png)");
        else
            status.css("background-image","url(res/go.png)");
        //save state to cache
            //get event id get state
            //if going
            //add id->state
    }
//get all when page loads
function getAttend() //GRONER
{

}


function displayEvent(data)
{
    console.log(data);

    // var location
    var theLocation = "";
    var theAddress = "";

    if (data.location != "") {
        theLocation += data.location;
    } 

    if (data.venue.street != undefined && data.venue.street != "" && data.venue.city != undefined && data.venue.country != undefined) {
        theAddress += " " +data.venue.street + ", " +data.venue.city + ", " +data.venue.country;
    } else if (data.venue.street != undefined && data.venue.street != "") {
        theAddress += " " +data.venue.street;
    } else if (data.venue.city != undefined && data.venue.country != undefined) {
        theAddress += " " +data.venue.city + ", " +data.venue.country;
    } else if (data.venue.city != undefined) {
        theAddress += " " +data.venue.city;
    } else if (data.venue.city != undefined) {
        theAddress += " " +data.venue.country;
    }

    // // var time
    var start_time = "";
    var end_time = "";
    if (data.start_time != undefined) {
        start_time = formatTime(data.start_time);
    }
    if (data.end_time != undefined) {
        end_time = formatTime(data.end_time);
    }


    

    //anytime i see something like a link, make it a URL

    var newTile=$("<div class='tile "+data.id+"'>"
        +"<div class='cover' style= 'background-image: url("+data.cover.source+");'>"
            +"<div class='gradient'>"
                +"<div class='name'>"+data.name+"</div>"
                +"<div class='status'> </div>"
            +"</div>"
        +"</div>"
        +"<div class='lower'>"
            +"<div class='location'>"
                +"<span class='venue'><u>"+theLocation+"</u></span>"
                +"<span class='location'>"+theAddress+"</span>"
            +"</div>"
            +"<div class='time'>"
                +"<span class='from'>"+start_time+"</span> to "
                +"<span class='to'>"+end_time+"</span>"
            +"</div>"
        +"</div>"
        +"<div class='details'>"
                +"<div  class='description'>"
                    +data.description
                    +"</div>"
                +"<div class='map_canvas'></div>"
        +"</div>");

    $("#content").append(newTile)
}

function showmap() //LARRY
{

}

function formatTime(time) { //LARRY
    console.log(time);
    var result = time.split("-");
    console.log(result);

    //TODO
        //format the content to look like 04/17 @ 7pm

    return result[1];

}
