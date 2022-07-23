var sectionopen = false;


$(".div_1").on("click", function()
{
    if(!sectionopen)
    {
        $(this).removeClass("move");
        $(this).find("h1").removeClass("txtAnimate");
        $(this).parent().removeClass("move");
        $(".txtAnimate").hide();
        $(".move").animate({padding: 0, border: 0, height: 0, margin: 0}, 300).animate({width: 0}, 300);
        setTimeout(function(){ $(this).animate({margin: 0, width: 1500, height: 1000}, 300)}.bind(this), 600);
        for(let i=0; i<3; i++)
        {
            setTimeout(function(){$(this).find("h1").after("<div class=infodiv></div>")}.bind(this), 1000);
            setTimeout(function(){ $(this).find(".infodiv").animate({width: 1400}, 300).animate({height: 250}), 300}.bind(this), 1000);
        }
        sectionopen = true;
    }
});

// $(".div_1").on("click", function()
// {
//     if(sectionopen === true)
//     {
//         $(this).addClass("move");
//         $(this).find("h1").addClass("txtAnimate");
//         $(this).parent().addClass("move");
//         $(".txtAnimate").show();
//         $(".move").animate({padding: 0, border: 0, height: 200, margin: 0}, 300).animate({width: 0}, 300);
//         setTimeout(function(){ $(this).animate({margin: 0, width: 1500, height: 1000}, 300)}.bind(this), 600);
//         for(let i=0; i<3; i++)
//         {
//             setTimeout(function(){$(this).find("h1").after("<div class=infodiv></div>")}.bind(this), 1000);
//             setTimeout(function(){ $(this).find(".infodiv").animate({width: 1400}, 300).animate({height: 250}), 300}.bind(this), 1000);
//         }
//         sectionopen = false;
//     }
// });

$(".selection").on("mouseover", function()
{
    if(!sectionopen)
    {
        $(this).animate({backgroundColor: "#F7FDFF"});
        $(this).find("h1").animate({color: "black"});
        $(this).find("p").animate({color: "black"});
    }
});

$(".selection").on("mouseleave", function() 
{
    $(this).animate({backgroundColor: "#78909C"});
    $(this).find("h1").animate({color: "white"});
    $(this).find("p").animate({color: "white"});
});






