$(function(){

    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    let scrollTop = $(this).scrollTop();


/* Header add class header--dark on scroll =========================== */

    headerScroll (); 
    
$(window).on("scroll resize", function(){
    headerScroll ();
});

function headerScroll() {
    introH = intro.innerHeight();
    headerH = header.innerHeight();

    let scrollTop = $(this).scrollTop();
     
    if( scrollTop >= (introH - headerH) ) {
        header.addClass("header--dark");
    } else {
        header.removeClass("header--dark");
    }
}


/* Плавный скрол к блокам сайта. Smooth Scroll to section ======================================= */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let scrollEl = $(this).data("scroll");
        let scrollElpos = $(scrollEl).offset().top;

        $("html, body").animate({
            scrollTop: scrollElpos - headerH  /* Или -70 пикселей */
        }, 300)   /* время скролла в милисекундах */
    });


    /* ScrollSpy =========================================================== */

    let windowH = $(window).height();

    scrollSpy(scrollTop);

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();

        scrollSpy(scrollTop);
    });
        
        function scrollSpy() {
            $("[data-scrollspy]").each(function() {
                let $this = $(this);
                let sectionId = $this.data("scrollspy");
                let sectionOffset = $this.offset().top;
                sectionOffset = sectionOffset - (windowH * 0.4);
                
                if(scrollTop >= sectionOffset) {
                    $('#nav [data-scroll]').removeClass('active');
                    $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
                }
                if(scrollTop <= 250) {
                    $('#nav [data-scroll]').removeClass('active');
                }
            });
        }

})


