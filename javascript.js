window.onload = start;

function start()
{
    $('#mySidenav').css('width', '0')
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

    if(windowwidth <= 1360)
    {
        
    }

    if(windowwidth > 1360)
    {
        
    }

    setTimeout("nav()", 1);
}