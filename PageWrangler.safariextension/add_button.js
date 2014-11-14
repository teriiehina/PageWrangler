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


var editButton    = document.getElementsByClassName("edit-button")[0];

var sep1          = document.createElement("span");
sep1.textContent  = " | ";

var sep2          = document.createElement("span");
sep2.textContent  = " | ";

var mtpas         = document.createElement("a");
mtpas.href        = "#";
mtpas.onclick     = teriiehina_mark_this_page;
mtpas.textContent = "Mark This Page";

var ttpas         = document.createElement("a");
ttpas.href        = "#";
ttpas.onclick     = teriiehina_toggle_this_page;
ttpas.textContent = "Toggle This Page";

editButton.appendChild(sep1);
editButton.appendChild(mtpas);
editButton.appendChild(sep2);
editButton.appendChild(ttpas);



