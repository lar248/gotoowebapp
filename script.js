
var hash={};
$( document ).ready( function() {
    //on click
    for (ind in events)
    {
        //add missing geoinformation
        hash[events[ind].id]=events[ind];

        displayEvent(events[ind]);
    }
    console.log(hash);
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
            //change attend state
            swapAttend(curr);
        }
         else
         {
            //expand the tile
            var expOne=curr.children('.details');
            $('.details').not(expOne).slideUp();
            var openning= !expOne.is(":visible")
            expOne.slideToggle();
            //draw Map
            if (openning)
            {
                var currID=curr.attr('id');
                if(hash[currID].venue.latitude!=undefined)
                {    
                    new GMaps({
                        div: '#map_'+currID,
                        lat: hash[currID].venue.latitude,
                        lng: hash[currID].venue.longitude
                    });
                }
                else
                {
                    console.log("INELSE: "+ hash[currID].location)

                    GMaps.geocode({
                          address: hash[currID].venue.name+",Ithaca, NY",
                          callback: function(results, status) {
                            console.log(status)

                            if (status == 'OK') {
                              var latlng = results[0].geometry.location;
                            new GMaps({
                                div: '#map_'+currID,
                                lat: latlng.lat(),
                                lng: latlng.lng()
                            });
                            }
                        }
                    });
            }
        }       
    }
}




function swapAttend(curr) //GRONER
    {
        var status=curr.find('.status');
        status.toggleClass('going');
        if(status.hasClass('going'))
        {
        }
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

    var newTile=$("<div class='tile' id='"+data.id+"'>"
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
                +"<div class='map_canvas' id='map_"+data.id+"' ></div>"
        +"</div>");

    $("#content").append(newTile)
       $(".details").hide();
 
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



