$(document).ready(function () {


  window.addEventListener("load", function () {
    window.scroll({
      top: window.scrollY - 0.25,
      behavior: "smooth"
    })
  })

  // body nice scroll 

  $("body").niceScroll({

    cursorcolor: "#0d2c49",
    cursorwidth: "20px",
    cursorborderradius: 0
  });



  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //  some responsive
  window.onload = function () {
    if (window.innerWidth <= 600) {
      $("header .display-2")
        .removeClass("display-2")
        .addClass("display-4");
    } else {
      return 0;
    }

    window.onresize = function () {
      if (window.innerWidth > 600) {
        $("header .display-4")
          .removeClass("display-4")
          .addClass("display-2");
      } else {
        $("header .display-2")
          .removeClass("display-2")
          .addClass("display-4");
      }
    };
  };

  $(".slick").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $(".slick-dots").addClass("mt-3");
  /* 
        let navbar = document.querySelector(".navheader");
        
          // autonavbar
          window.onload = () => {
            if (window.scrollY > 700) {
              navbar.style.height = 80 + "px";
            } else {
              //navbar.style.height = 0;
              navbar.style.top = "-100" + "px";
            }
          }; 

        
          var prevScrollpos = window.pageYOffset;
          window.onscroll = function () {
            if (window.scrollY > 700) {
              navbar.style.height = 80 + "px";
              var currentScrollPos = window.pageYOffset;

              if (prevScrollpos < currentScrollPos) {
                navbar.style.top = "-100" + "px";
              } else {
                navbar.style.top = 0;
              }
              prevScrollpos = currentScrollPos;
            } else {
              navbar.style.height = 0;
            }
          }; */
});



let navbar = document.querySelector(".navheader");
var prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", autoHideFunc);

function autoHideFunc() {
  window.onscroll = function () {

    if (window.scrollY > 700) {
      navbar.style.height = 80 + "px";
      var currentScrollPos = window.pageYOffset;

      if (prevScrollpos < currentScrollPos) {

        navbar.style.top = "-100" + "px";
      } else {
        navbar.style.top = 0;
      }
      prevScrollpos = currentScrollPos;
    } else {
      navbar.style.height = 0;
    }
  }
}


function stopSub() {
  let eve = document.querySelector(".submit");
  eve.addEventListener(
    "click",
    event => {
      event.preventDefault();
    },
    false
  );
}
stopSub();

window.addEventListener("load", () => {
  if (window.scrollY > 3600) {
    $(".scroller").addClass("showme");
  } else {
    $(".scroller").removeClass("showme");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 3600) {
    $(".scroller").addClass("showme");
  } else {
    $(".scroller").removeClass("showme");
  }
});

function widgets() {
  $(".fa-question-circle").click(function () {
    $(".srch-Input").toggleClass("search-animation");
  });
}
widgets();

// scrolling

$("#contact").click(function () {
  window.scroll({
    top: 3490,
    behavior: "smooth"
  });
});
$("#feat").click(function () {
  window.scroll({
    top: 2782,
    behavior: "smooth"
  });
});

$("#prices").click(function () {
  window.scroll({
    top: 2060,
    behavior: "smooth"
  });
});
$("#clients").click(function () {
  window.scroll({
    top: 1420,
    behavior: "smooth"
  });
});
$("#download").click(function () {
  window.scroll({
    top: 702,
    behavior: "smooth"
  });
});
$(".scroller .scrollUp .fa-arrow-up").click(function () {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});

$(".start-now").click(function () {
  window.scroll({
    top: 702,
    behavior: "smooth"
  });
});

// open anc close sign in modal 
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


function linkScroll(link, scrolSize) {
  window.scroll({
    top: scrolSize,
    behavior: "smooth"
  })
}



// handle menu side toggler when no have to use it 

window.addEventListener("load", function () {
  if (window.scrollY < 702) {
    $(".menu-toggler-aside").fadeOut()
  } else {
    $(".menu-toggler-aside").fadeIn()
  }
})

window.addEventListener("scroll", function () {
  if (window.scrollY < 702) {
    $(".menu-toggler-aside").fadeOut()
  } else {
    $(".menu-toggler-aside").fadeIn()
  }
})
$(".menu-toggler-aside i").click(function () {
  $(".navbar").fadeToggle("fast")
  window.scroll({
    top: window.pageYOffset - 0.5,
    behavior: "smooth"
  })
})

//menu toogle better user experince better usability 

// some responsive 

// menu from left

function leftMenuOpen() {
  let containerMenu = document.getElementById("mySidenav");
  containerMenu.style.width = "250px";
}

function leftMenuClose() {
  $(".secondery-navbar").toggleClass("nav-Toggler-aside");
}

// side nav toggle 

function navToggle() {

  $(".secondery-navbar").toggleClass("nav-Toggler-aside");

}

window.addEventListener("load", function () {

  if (window.scrollY < 700) {
    $(".menu-trigger").css("display", "none");
  } else {
    $(".menu-trigger").css("display", "block");
  }
})

window.addEventListener("scroll", function () {

  if (window.scrollY < 700) {
    $(".menu-trigger").css("display", "none");
  } else {
    $(".menu-trigger").css("display", "block");
  }
})

var handleOverFlow = $(".navbar-normal");



$(".dropdown-toggle").click(function () {
  $(".navheader").toggleClass("fix-header-flow")
})


$(window).on("load", function () {
  //$(".lds-facebook").fadeOut();
  $(".loader").fadeOut(3000)
})