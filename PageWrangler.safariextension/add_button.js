function teriiehina_mark_read(t) 
{
    var url = "https://feedwrangler.net/api/v1/feed_items/mark_read?access_token=";
    var e   = new XMLHttpRequest;
    var n   = document.getElementById("token");

    var stateChangeHandler = function() 
    {
        if (4 == e.readyState) 
        {
            e.responseText;
            var n = document.getElementById(t + "-title");
            n.style.fontWeight = "normal"
        }
    };

    null != n && (e.open("get", url + n.innerHTML + "&feed_item_id=" + t, !0), 
                  e.onreadystatechange = stateChangeHandler, 
                  e.send(null));
}

function teriiehina_toggle_read(t) {
    var url = "https://feedwrangler.net/api/v1/feed_items/toggle_read?access_token=";
    var e   = new XMLHttpRequest;
    var n   = document.getElementById("token");
    
    var stateChangeHandler = function() 
    {
        if (4 == e.readyState) 
        {
            var n = e.responseText, a = JSON.parse(n);
            var i = document.getElementById(t + "-title");
            
            if ("true" == a.feed_item.read.toString()) 
            {
                i.style.fontWeight = "normal"
            } 
            else 
            {
                i.style.fontWeight = "bold"
            }
        }
    };
    
    e.open("get", url + n.innerHTML + "&feed_item_id=" + t, !0); 
    e.onreadystatechange = stateChangeHandler;
    e.send(null);
}

var teriiehina_mark_this_page = function()
{    
    var elements      = document.getElementsByClassName("stream_item");
    var elementsCount = elements.length;
        
    for (var bullet = 0; bullet < elementsCount; bullet++) 
    {
        var elementId = elements[bullet].getAttribute("id");
        elementId     = elementId.replace("-block" , "");

        teriiehina_mark_read(elementId);
    }
    
    buttonTop.textContent = "Mark This Page";
}

function sleep(ms) 
{
    var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {}
}

var teriiehina_toggle_this_page = function()
{    
    var elements      = document.getElementsByClassName("stream_item");
    var elementsCount = elements.length;
    
    for (var bullet = 0; bullet < elementsCount; bullet++) 
    {
        var elementId = elements[bullet].getAttribute("id");
        elementId     = elementId.replace("-block" , "");
        
        teriiehina_toggle_read(elementId);
    }
}


var editButtonTop    = document.getElementsByClassName("edit-button")[0];
var editButtonBottom = document.getElementsByClassName("edit-button-bottom")[0];

var sep1          = document.createElement("span");
sep1.textContent  = " | ";

var sepBottom         = document.createElement("span");
sepBottom.textContent = " | ";

var mtpas         = document.createElement("a");
mtpas.href        = "#";
mtpas.onclick     = teriiehina_mark_this_page;
mtpas.textContent = "Mark This Page";
mtpas.id          = "mark_this_page_top";

var linkBottom         = document.createElement("a");
linkBottom.href        = "#";
linkBottom.onclick     = teriiehina_mark_this_page;
linkBottom.textContent = "Mark This Page";
linkBottom.id          = "mark_this_page_bottom";

editButtonTop.appendChild(sep1);
editButtonTop.appendChild(mtpas);

editButtonBottom.appendChild(sepBottom);
editButtonBottom.appendChild(linkBottom);



