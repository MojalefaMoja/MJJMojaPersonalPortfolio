$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scroll > 500) {
            $('.back_top').addClass("show");
        } else {
            $('.back_top').removeClass("show");
        }
    });

    /* toggle menu/navbar script*/

    $('.menu_btn').click(function() {
        $('.navbar  .menu').toggleClass("active");
        $('.menu_btn i').toggleClass("active");

    });

});