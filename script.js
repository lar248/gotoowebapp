
$( document ).ready( function() {
    //on click
    for (ind in events)
    {
        displayEvent(events[ind]);
    }
    scale();
    $('.tile').click(function(){clicked($(this));});

    var map = new GMaps({
        div: '.map_canvas',
        lat: 51.5073346,
        lng: -0.1276831,
        zoom: 12,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : false,
    });

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
    } else if (data.venue.city != undefined) {
        theAddress += " " +data.venue.city;
    } 

    // var time
    var start_time = "";
    var end_time = "";
    if (data.start_time != undefined) {
        start_time = formatTime(data.start_time);
    }
    if (data.end_time != undefined) {
        end_time = " to " + formatTime(data.end_time);
    }

    //var map



    //anytime I see something like a link, make it a URL in the content
    //console.log(data.description);

    //what to make a link:
        //http
        //.com, .org, .edu, .net, .gov, .int, .mil, .us
    //var link = findLinks(data.description);
    //var map = 'http://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=300x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&sensor=false';

    var newTile=$("<div class='tile "+data.id+"'>"
        +"<div class='cover' style= 'background-image: url("+data.cover.source+");'>"
            +"<div class='gradient'>"
                +"<div class='name'>"+data.name+"</div>"
                +"<div class='status'> </div>"
            +"</div>"
        +"</div>"
        +"<div class='lower'>"
            +"<div class='location'>"
                +"<span class='venue'>"+theLocation+"</span>"
                +"<span class='location'>"+theAddress+"</span>"
            +"</div>"
            +"<div class='time'>"
                +"<span class='from'>"+start_time+"</span>"
                +"<span class='to'>"+end_time+"</span>"
            +"</div>"
        +"</div>"
        +"<div class='details'>"
                +"<div class='description'>"
                +data.description
                +"</div>"
                +"<div class='map_canvas'></div>"
        +"</div>");

    $("#content").append(newTile)
}

function formatTime(time) { //LARRY-Date.parse() TODO
    var dateTime = Date.parse(time);
    var date = new Date(dateTime);
    var month = 1+date.getMonth();
    var time = getFormattedTime(date.getHours(), date.getMinutes());
    var day = date.getDate();
    return month+ "/" + day + " @ " + time;
}

function trimNumber(s) {
    while (s.substr(0,1) == '0' && s.length>1) { 
        s = s.substr(1,2); 
    }
    return s;
};

function getFormattedTime(hours, minutes) {
    var hours = ((hours + 11) % 12) + 1;
    var amPm = hours > 11 ? 'pm' : 'am';
    if (minutes == 0) {minutes='00';}
    return hours + ':' + minutes + amPm;
};

function findLinks (description) { //LARRY
    //var potentialLink = data.description.search("http")
    //var linkWords = (["http", ".com", ".org", ".edu", ".net", ".gov", ".int", ".mil", ".us"]);
}



