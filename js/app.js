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




/*     Modal     ======================================================================= */


$('[data-modal]').on('click', function(event){
    event.preventDefault();
    let modal = $(this).data('modal');

    $('body').addClass('no-scroll');
    $(modal).addClass('show');

    setTimeout(function() {
        $(modal).find('.modal__content').css({
            transform: 'scale(1)',
            opacity: '1'
        });
    }, 200);
});


/* Закрытие модального окна по Крестику и Фону */

$('[data-modal-close]').on('click', function(event) {
    event.preventDefault();
    let modal = $(this).parents('.modal');

    modalClose(modal);
});

/* При клике в любую область закрывается модальное окно */
$('.modal').on('click', function() {
    let modal = $(this);
   

    modalClose(modal);
});

/*  отменяем клик по контекту модалки, что бы она не закрывалась  */
$('.modal__content').on('click', function(event) {
    event.stopPropagation();
});


function modalClose(modal) {
    
    modal.find('.modal__content').css({
        transform: 'scale(0.5)',
        opacity: '0'
    });

    setTimeout(function() {
        $('body').removeClass('no-scroll');
        modal.removeClass('show');
    }, 200);
}




/*   Slider Slick ------------------------------------------------ */

let introSlider = $("#introSlider");

introSlider.slick({
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2500,
});

$('#introSliderPrev').on('click', function() {
    introSlider.slick('slickPrev')
});

$('#introSliderNext').on('click', function() {
    introSlider.slick('slickNext')
});

});


