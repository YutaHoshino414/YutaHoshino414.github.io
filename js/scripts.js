(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (
          location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
      ) {
          var target = $(this.hash);
          target = target.length
              ? target
              : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
              $("html, body").animate(
                  {
                      scrollTop: target.offset().top,
                  },
                  1000,
                  "easeInOutExpo"
              );
              return false;
          }
      }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
      $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
      target: "#sideNav",
  });
})(jQuery); // End of use strict

// skill chart.js
// Front-end
var ctx = document.getElementById("myRaderChart");
var myRadarChart = new Chart(ctx, {
    type: 'radar', 
    data: { 
        labels: ["HTML", "CSS", "Javascript", "Vue.js", "Bootstrap"],
        datasets: [{
            label: 'フロントエンド',
            data: [80, 60, 30, 10, 50],
            backgroundColor: 'RGBA(30, 144, 255, 0.2)',
            borderColor: 'RGBA(30, 144, 255, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'RGB(30, 144, 255)'
        }]
    },
    options: {
        scale:{
            ticks:{
                suggestedMin: 0,
                suggestedMax: 100,
                stepSize: 20,
                callback: function(value, index, values){
                    return  value +  ''
                }
            }
        }
    }
});
// back-end
var cx = document.getElementById("myRaderChart2");
      var myRadarChart2 = new Chart(cx, {
          type: 'radar', 
          data: { 
              labels: ["Ruby", "Ruby on Rails", "DB", "AWS", "Git/Github", "Linux"],
              datasets: [{
                  label: 'サーバーサイド・インフラ',
                  data: [50, 60, 30, 30, 40, 20],
                  backgroundColor: 'RGBA(255, 51, 51, 0.2)',
                  borderColor: 'RGBA(255, 51, 51, 1)',
                  borderWidth: 1,
                  pointBackgroundColor: 'RGB(255, 51, 51)'
              }]
          },
          options: {
              scale:{
                  ticks:{
                      suggestedMin: 0,
                      suggestedMax: 100,
                      stepSize: 20,
                      callback: function(value, index, values){
                          return  value +  ''
                      }
                  }
              }
          }
      });