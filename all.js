/**
 * custom.js
 * custom JavaScript functions and plugin initialization
 */
$(function () {

    'use strict';

    /* Preloader animation */

    $(window).load(function () {
        var preloader = $('#preloader');
        preloader.fadeOut(500, function () {
            $(this).remove();
        });
    });


    /* Link highlight on scroll */

    function linkScrollSpy() {
        var navHeight = $('.navbar-header').outerHeight(),
            el = $('body');
        el.scrollspy({
            target: '.navbar',
            offset: navHeight + 1
        });
    }

    linkScrollSpy();


    /* Scroll to top button */

    function scrollToTop() {
        var btn = $('.scroll-to-top');
        btn.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                btn.fadeIn(300);
            } else {
                btn.fadeOut(300);
            }
        });
    }

    scrollToTop();


    /* Navbar Animation */

    function animateNav() {
        var offset = $(window).scrollTop(),
            target = $('body.enable-sticky-nav').find('.navbar');
        if (offset > 21) {
            target.addClass('nav-sticky');
        } else {
            target.removeClass('nav-sticky');
        }
    }

    animateNav();

    $(window).scroll(function () {
        animateNav();
    });

}); // end $(function () {})


$(document).ready(function () {}

    formValidation();


    /**
     * Smooth scrolling
     * Adapted from: http://css-tricks.com/snippets/jquery/smooth-scrolling/
     */

    function smoothLinkScroll() {
        var scroll_links = $("a[href*=#]:not([href=#], [role='tab'], .panel-title a)");
        scroll_links.each(function () {
            var $this = $(this);
            $this.click(function () {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash),
                        offset = $(".navbar-header").outerHeight();
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - offset + 1
                        }, 1000);
                        return false;
                    }
                }
            });
        });
    }

    smoothLinkScroll();


    /**
     * Parallax Scrolling
     * Adapted from: http://code.tutsplus.com/tutorials/simple-parallax-scrolling-technique--net-27641
     */

    function parallaxScroll() {
        var section = $('section.parallax');
        section.each(function () {
            var $this = $(this),
                $offset = $this.data('speed') || 3,
                $window = $(window);

            function scrollbg() {
                var yPos = -(($window.scrollTop() - $this.offset().top) / $offset),
                    coords = '50% ' + yPos + 'px';
                $this.css({
                    backgroundPosition: coords
                });
            }
            scrollbg();
            $window.scroll(function () {
                scrollbg();
            });
        });
    }

    parallaxScroll();


    /* Image Background using data-background="xx" */

    function sectionbg() {
        var elem = $('.section');
        elem.each(function () {
            var $this = $(this),
                bgimage = $this.data('background');
            if (bgimage) {
                $this.css({
                    backgroundImage: 'url(' + bgimage + ')'
                });
            }
        });
    }

    sectionbg();


    /**
     * Animate items as they appear
     * uses jQuery viewport checker plugin
     */

    function animateWhenVisible() {
        var anim_items = $('.animated'),
            no_animation = $('body').hasClass('no-animation');
        if (anim_items.length && !no_animation) {
            anim_items.addClass('invisible').viewportChecker({
                classToAdd: null,
                offset: 100,
                callbackFunction: function (elem) {
                    var animclass = elem.data('animation'),
                        animdelay = elem.data('animdelay');
                    if (animdelay) {
                        setTimeout(function () {
                            elem.addClass('visible ' + animclass);
                        }, animdelay);
                    } else {
                        elem.addClass('visible ' + animclass);
                    }
                }
            });
        }
    }

    animateWhenVisible();


    /* Owl Slider and Carousel */

    function initOwlSliders() {
        var owl = $("#owl-slider, #owl-testimonials");
        if (owl.length) {
            owl.owlCarousel({
                singleItem: true,
                autoPlay: true,
                stopOnHover: true,
                navigation: false
            });
        }
    }

    initOwlSliders();

    function initOwlCarousels() {
        var owl = $(".carousel-only"),
            item_num = owl.data("items");
        if (owl.length) {
            owl.owlCarousel({
                items: item_num,
                itemsCustom: false,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 2],
                itemsTabletSmall: false,
                itemsMobile: [479, 1],
                singleItem: false,
                itemsScaleUp: false
            });
        }
    }

    initOwlCarousels();


    /* Tabs */

    function initTabs() {
        var tab_items = $('.nav-tabs a');
        tab_items.each(function () {
            var $this = $(this);
            $this.click(function (e) {
                e.preventDefault();
                $this.tab('show');
            });
        });
    }

    initTabs();


}); // end $(document).ready(function () {})
