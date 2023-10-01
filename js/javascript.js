// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';

// dark ==================================================

const btnDarkMode = document.querySelector(".fon__button");

// 1. Проверка темной темы на уровне системных настроек

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  btnDarkMode.classList.add("fon__button--active");
  document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage

if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add("fon__button--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("fon__button--active");
  document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
      btnDarkMode.classList.add("fon__button--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      btnDarkMode.classList.remove("fon__button--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  });


// Включение ночного режима по кнопке

btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("fon__button--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};



//  tell ============================================

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+3 (___)-___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

// header scroll исчезает при припрокрутки ========================


let prevScrollpos = window.scrollY;
window.onscroll = function (e) {
  e.preventDefault();
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("mobiele__footer").style.bottom = "0";
  } else {
    document.getElementById("header").style.top = "-145px";
    document.getElementById("mobiele__footer").style.bottom = "-145px";
  }
  prevScrollpos = currentScrollPos;
}

// бургер =========================================================

$('.burger-menu-btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('burger-menu-btn_active');
  $('.header-menu').toggleClass('header-menu_active');
});



// up-slide =====================================================

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,

    dynamicBullets: true,

    grabCursor: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});


$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    sldesToScroll: 1,
    speed: 500,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotHover: true,
    draggable: true,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: true,
    responsive: [{
        breakpoint: 1169,
        settings: {
          slidesToShow: 1
        }
      }

    ],


  });


});


// city ==========================================================


const city_all = document.querySelector(".city__all");
const citys_list = document.querySelector(".citys-list");
const city = document.querySelectorAll(".citys");


city_all.addEventListener("click", () => {
  citys_list.classList.toggle("active");
  city_all.querySelector(".city-down").classList.toggle("city-up");
});


city.forEach((citys) => {
  citys.addEventListener("click", () => {
    city.forEach((citys) => {
      citys.classList.remove(".city_all")
    });
    city_all.querySelector("span").innerHTML = citys.innerHTML;
    citys.classList.add(".city_all");
    citys_list.classList.toggle("active");
    city_all.querySelector(".city-down").classList.toggle(".city-up");
  });
});


// search

const search = document.querySelector('.search');
const body = document.querySelector('body');

search.addEventListener('click', function (e) {
  e.stopPropagation();
  this.classList.add('search--active');
});

body.addEventListener('click', function () {
  search.classList.remove('search--active');
});




// анимация добавления товара =====================================================

let count = 0;

$(".choice-want-btn").on("click", function () {
  let cart = $(".count__basket");
 
  let imgtodrag = $(this)
    .parent(".choice__footer")
    .parent(".mobiele-choice-text-block")
    .parent(".choice__item")
    .find("img")
    .eq(0);
  if (imgtodrag) {
    var imgclone = imgtodrag
      .clone()
      .offset({
        top: imgtodrag.offset().top,
        left: imgtodrag.offset().left

      })
      .css({
        opacity: "0.8",
        position: "absolute",
        height: "150px",
        width: "150px",
        objectFit: "cover",
        "z-index": "10000"
      })
      .appendTo($("body"))
      .animate({
          top: cart.offset().top + 20,
          left: cart.offset().left + 30,

          width: 75,
          height: 75
        },
        1000,
        "easeInOutExpo"
      );

    setTimeout(function () {
        count++;
        $(".count__basket .item-count").text(count);
      },

      1500);

    imgclone.animate({
        width: 0,
        height: 0
      },
      function () {
        $(this).detach();
      }
    );
  }


});