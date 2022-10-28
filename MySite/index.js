//Primary animation for a panel that is clicked
$(".ttl-btn").on("click", function()
{
        $(".ttl-btn").hide();
        $(".txtAnimate").hide();
        $(".particle").hide();
        if($(this).hasClass("abt-btn"))
        {
            $(".aboutcontent").animate({padding: 0, width: "100vw"}, 300);
            $(".aboutcontent").find(".backbutton").show();
            $(".content").show();
            $("#carouselSubjects").show();
        }
        if($(this).hasClass("pro-btn"))
        {
            $(".projectcontent").animate({padding: 0, marginLeft: "0", width: "100vw"}, 300);
            $(".projectcontent").find(".backbutton").show();
        }
        if($(this).hasClass("por-btn"))
        {
            $(".portfoliocontent").animate({padding: 0, marginTop: "0", height: "100vh"}, 300);
            $(".portfoliocontent").find(".backbutton").show();
        }
        if($(this).hasClass("con-btn"))
        {
            $(".contactcontent").animate({padding: 0, height: "100vh"}, 300);
            $(".contactcontent").find(".backbutton").show();
        }
});

$(".bk-btn").on('click', function()
{
    $(".backbutton").hide();
    $(".particle").show();
    $(".ttl-btn").show();
    $(".txtAnimate").show();
    if($(this).parent().parent().hasClass("aboutcontent"))
    {
        $(".aboutcontent").animate({width: 0}, 300);
    }
    if($(this).parent().parent().hasClass("projectcontent"))
    {
        $(".projectcontent").animate({width: 0, marginLeft: "100vw"}, 300);
    }
    if($(this).parent().parent().hasClass("portfoliocontent"))
    {
        $(".portfoliocontent").animate({height: 0, marginTop: "100vh"}, 300);
    } 
    if($(this).parent().parent().hasClass("contactcontent"))
    {
        $(".contactcontent").animate({height: 0}, 300);
    }         
});

//Animates clickable display panels when mouse is hovering
$(".ttl-btn").on("mouseover", function()
{
        $(this).find("h1").animate({color: "#F6F5FC"});
});

//Animates clickable panels back to original settings when mouse is no longer hovering
$(".ttl-btn").on("mouseleave", function() 
{
    $(this).find("h1").animate({color: "black"});
});









