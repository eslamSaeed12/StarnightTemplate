$(document).ready(function () {
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

  let navbar = document.querySelector(".navheader");

  // autonavbar
  window.onload = () => {

    if (window.scrollY > 700) {
      navbar.style.height = 80 + "px";
    } else {
      navbar.style.height = 0;
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
  };
});

var li = document.querySelectorAll(".needHelp ul li");

window.addEventListener("scroll", () => {
  if (window.scrollY > 260 && window.scrollY < 1000) {

    li[0].classList.add("tog-i", "font-weight-bold")
  } else {
    li[0].classList.remove("tog-i", "font-weight-bold")
  }
  if (window.scrollY > 1000 && window.scrollY < 1670) {

    li[1].classList.add("tog-i", "font-weight-bold")
  } else {
    li[1].classList.remove("tog-i", "font-weight-bold")
  }
  if (window.scrollY > 1670 && window.scrollY < 2305) {
    li[2].classList.add("tog-i", "font-weight-bold")

  } else {
    li[2].classList.remove("tog-i", "font-weight-bold")
  }
  if (window.scrollY > 2305 && window.scrollY < 2900) {
    li[3].classList.add("tog-i", "font-weight-bold")

  } else {
    li[3].classList.remove("tog-i", "font-weight-bold")
  }
  if (window.scrollY > 2900 && window.scrollY < 3400) {
    li[4].classList.add("tog-i", "font-weight-bold")

  } else {
    li[4].classList.remove("tog-i", "font-weight-bold")
  }
  
})

window.addEventListener("scroll", () => {
  var helpIcon = document.querySelector(".fa-question-circle");
  if (window.pageYOffset > 2305) {
    helpIcon.classList.add("tgc");
    li.forEach((itm) => {
      itm.classList.add("tgc");
    })
  } else {
    helpIcon.classList.remove("tgc");
    li.forEach((itm) => {
      itm.classList.remove("tgc");
    })
  }
})


function stopSub() {
  let eve = document.querySelector(".submit");
  eve.addEventListener("click", (event) => {
    event.preventDefault();
  }, false)
}
stopSub();


console.log(window.pageYOffset)
