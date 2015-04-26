//toggle menu
$("#menu-ico").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $("#menu-ico").toggleClass("toggled");
});
//toggle flip effect on arrow
$(window).scroll(function(e) {
    var height = $(window).scrollTop();
    if (height > 540) {
        $("#arrow").addClass('flip');
    } else {
        $("#arrow").removeClass('flip');
        console.log(height);
    }
})
//assign actions to arrow button
$("#up").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
            scrollTop: 0
        },
        1000);
})
$("#down").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
            scrollTop: $("#intro").offset().top
        },
        1000);
})
//toggle animation for menu icon
$("#menu-ico").click(function(e) {
    $("#menu-ico").toggleClass("arrow")
})

//set up menu links
$(".menu-item").click(function(e){
    e.preventDefault();
    var href = this.getAttribute("href");
    console.log(href)
    $("html,body").animate({
            scrollTop: $(href).offset().top
        },
        500);
})