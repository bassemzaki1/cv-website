/*global $, document, window */

$(document).ready(function () {
    
    'use strict';

    // Click To Move To Buttom
    
    $('.down').click(function () {
        $('html, body').animate({
            scrollTop: 640
        }, 1000);
    });
    
    //Caching the scroll top element
     
    var scrollButton = $('#scroll-top');
     
    $(window).scroll(function () {
     // console.log($(this).scrollTop());

        if ($(this).scrollTop() >= 200) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
             
    });
     
    // Click on button to scroll top
    scrollButton.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    });
    
    // owl carousel plugin
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    

    $('[data-toggle="popover"]').popover();

    
    
});
