document.getElementById("logo").addEventListener("click", function () {
    window.location.href = "index.html";
});

document.getElementById("btn").addEventListener("click", function () {
    window.location.href = "profile.html";
});

var typing = new Typed('.typing', {
    strings: ["pandorash dé frontend", "design and creative", "profile portofolio"],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true
});

document.getElementById("github").addEventListener("click", function () {
    window.location.href = "https://github.com/fnticxdesign";
});

document.getElementById("insta").addEventListener("click", function () {
    window.location.href = "https://instagram.com/hgadtya_";
});

document.getElementById("globe").addEventListener("click", function (){
    window.location.href = "http://pandorashop.my.id";
});

var buttonEl = document.getElementById('openerBtn');
var cardEl = document.querySelector('.card');

buttonEl.addEventListener('click', function() {
    cardEl.classList.toggle('opened');
});

document.getElementById("social-ig").addEventListener("click", function () {
    window.location.href = "https://instagram.com/hgadtya_";
});