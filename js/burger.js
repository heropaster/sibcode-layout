let logo = $(".nav__logo");
let bar = $(".bar");
let links = $(".bar .nav-link, .socials span");
logo.on("click", function () {
  logo.toggleClass("active");
  bar.toggleClass("active");
});
links.on("click", function () {
  logo.toggleClass("active");
  bar.toggleClass("active");
});
