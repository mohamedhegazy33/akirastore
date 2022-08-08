// toggle lanauge dropdown
var lanaugedrop = document.getElementById("lanaugedrop");
var uldrop = document.getElementById("uldrop")
function showdropdown(){
    uldrop.classList.toggle("lanauge-dropdown-toggle");
}
// toggle curr dropdown
var currencydropdown = document.getElementById("currencydropdown");
var currdropdowntoggle = document.getElementById("currdropdowntoggle");
function currdropdown(){
    currdropdowntoggle.classList.toggle("curr-dropdown-toggle");
}

// slider
const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });

