window.onload = start;
var first = true;
function start()
{
    $('#opennavbutton').css('display', 'none')
    nav();
}


function onas()
{
    $('#content').delay(1000).fadeIn(1000, function(){});
    $('#content2').fadeOut(1000, function(){});
}

function kontakt()
{
    $('#content').fadeOut(1000, function(){});
    
    $('#content2').delay(1000).fadeIn(1000, function(){});
}

function openNav()
{
    $( "#nav" ).animate({
    width: "toggle"
  }, 1000, function() {});
    document.getElementById("opennavbutton").style.display = "none";
}

function closeNav()
{
    $( "#nav" ).animate({
        width: "toggle"
      }, 1000, function() {});
    $('#opennavbutton').delay(1000).fadeIn(1000, function(){});
}

function nav()
{
    var windowwidth = $(window).width();

    if((windowwidth <= 1360) && (first))
    {
        $('#opennavbutton').css('display', 'block')
        first = false;
    }

    if(windowwidth > 1360)
    {
        $('#opennavbutton').css('display', 'none')
		$('#nav').css('display', 'none')
        first = true;
    }

    setTimeout("nav()", 1);
}