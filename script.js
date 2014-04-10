
$( document ).ready( function() {
    $('.tile').click(function()
    {
        console.log("hello!")
         if($(event.target).hasClass('status'))
        {
            console.log('statusChange');
            //change attend state
            swapAttend('001')
        }
         else
            //expand the tile
            $(this).children('.details').slideToggle();
    })
    
    function swapAttend(id)
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

    for (ind in events)
    {
        displayEvent(events[ind]);
    }
});

function displayEvent(data)
{
    console.log(data);

    var newTile=$("<div class='tile "+data.id+"'>"
        +"<div class='cover' style= 'background-image: url("+data.cover.source+");'>"
            +"<div class='gradient'>"
                +"<div class='name'>"+data.name+"</div>"
                +"<div class='status'> </div>"
            +"</div>"
        +"</div>"
        +"<div class='lower'>"
            +"<div class='location'>"
                +"<span class='venue'>"+data.venue+"</span>"
                +"<span class='location'>"+data.location+"</span>"
            +"</div>"
            +"<div class='time'>"
                +"<span class='from'>"+data.start_time+"</span> to "
                +"<span class='to'>"+data.end_time+"</span>"
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