
function set(key, obj) {
    return localStorage.setItem(key, JSON.stringify(obj))
}
function get(key) {
    return JSON.parse(localStorage.getItem(key));
}
var hash={};
$( document ).ready( function() {
    init();
    drawCal();
    //on click
    for (ind in events)
    {
        //add missing geoinformation
        hash[events[ind].id]=events[ind];
        displayEvent(events[ind]);
    }
    console.log("HASH: "+hash);
    scale();
    $('.tile').click(function(){clicked($(this));});
});
function init()
{
var going=get('attending');
if (going==null)
    set('attending',[]);
}
//TODOS
    //HOME PAGE
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
        //change attend state
        swapAttend(curr);
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
                GMaps.geocode({
                      address: hash[currID].venue.name+",Ithaca, NY",
                      callback: function(results, status) {
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


function drawCal()
{
    var today=new Date();
    var sunday=new Date();
    sunday.setDate(today.getDate() - today.getDay())
    for (var i=0;i<7;i++)
    {
        var curr=new Date();
        curr.setDate(sunday.getDate()+i)
        if(curr>=today)
        $("#dayval_"+i).html(curr.getMonth()+"/"+curr.getDate())
        if(curr.getDay()==today.getDay())
            $("#dayval_"+i).addClass("selected")
    }
    writeDate();

$('.dates').live("click",function() {
    $('.dates').each(function() {
            if($(this).attr('id')=='datesCurr')
                $(this).animate({left: '-100%'}, 500 );
            if($(this).attr('id')=='datesNext')
            $(this).animate({left: '0%'}, 500 );
    });
});

$('.navIcon').on('click', function() {
    $('.navIcon').removeClass('navIconClicked');
    console.log("we made it in");
    var icon = $(this).attr("id");
    $(this).addClass('navIconClicked');
    
    if ($(this).attr("id")=='navAll') {
        console.log('poop1'+$(this).attr("id"));
        $('#top-pane').html("<img class='insidePane' src='res/ALL.png'/>");
    } else if ($(this).attr("id")=='navGoing') {
        console.log('poop2'+$(this).attr("id"));
        $('#top-pane').html("<img class='insidePane' src='res/ATT.png'/>");
    } else if ($(this).attr("id")=='navRec') {
        console.log('poop3'+$(this).attr("id"));
        $('#top-pane').html("<img class='insidePane' src='res/rec.png'/>");
    }
});

}
function writeDate()
{
    var monthNames = ["", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER" ];
    var dayNames = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
    var monthDay=$('.selected').html().split("/");
    var NUM = monthNames[monthDay[0]]
    var MONTH = monthDay[1]
    var DAY = dayNames[$('.selected').attr("id").split("_")[1]]
    $('#fulldate').html(DAY+", "+MONTH+" "+NUM);
}

function swapAttend(curr) //GRONER
{
    var id=curr.attr('id')
    var status=curr.find('.status');
    status.toggleClass('going');
    if(status.hasClass('going'))
    {
        var update=get('attending');
        update.push(id);
        set('attending', update);
    }
    else
    {
        var currAtt=get('attending');
        currAtt.splice(currAtt.indexOf(id,1))
        set('attending', currAtt);
    }
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
    var going=''
    if (get('attending').indexOf(data.id)!=-1)
        going=' going';

    var newTile=$("<div class='tile' id='"+data.id+"'>"
        +"<div class='cover' style= 'background-image: url("+data.cover.source+");'>"
            +"<div class='gradient'>"
                +"<div class='name'>"+data.name+"</div>"
                +"<div class='status"+going+"'> </div>"
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



