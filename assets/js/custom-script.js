(function ($) {
  "use strict";
//portfolio horizontal
  if ($(".portfolio-horizontal-two__carousel").length) {
    var myCarousel = $(".portfolio-horizontal-two__carousel");
    var textCountWrap = $(".portfolio-horizontal-two__carousel__count");
    var dotsBlock = $(".portfolio-horizontal-two__carousel__progress");

    myCarousel
      .on("initialized.owl.carousel changed.owl.carousel", function (e) {
        var carousel = e.relatedTarget;
        console.log(carousel);

        if (!e.namespace) {
          return;
        }
        var text =
          '<span class="current-number">' +
          "0" +
          (carousel.relative(carousel.current()) + 1) +
          "</span>" +
          '<span class="sep">/</span>' +
          '<span class="counted-number">' +
          "0" +
          carousel.items().length +
          "</span>";
        textCountWrap.html(text);

        var dotIndex = carousel.relative(carousel.current());
        dotsBlock.find("li").removeClass("active");
        dotsBlock.find("li").eq(dotIndex).addClass("active");
      })
      .owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        smartSpeed: 700,
        autoplay: 5000,
        autoplayTimeout: 5000,
        dots: false,
        navText: [
          '<span class="icon nav-button-left"></span>',
          '<span class="icon nav-button-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2,
            margin: 30
          },
          992: {
            items: 3,
            margin: 30
          },
          1200: {
            items: 4,
            margin: 40
          },
          1500: {
            items: 4,
            margin: 50
          },
          1600: {
            items: 5,
            margin: 50
          }
        }
      });

    dotsBlock.on("click", "li", function (e) {
      myCarousel.trigger("to.owl.carousel", [$(this).index(), 300]);
    });
  }

})(window.jQuery);