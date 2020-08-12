// window.addEventListener("hashchange", function() { scrollBy(0, -75, ) })
function changeClass(){
  var el = document.getElementById("main_ul");
  var ban = document.getElementById("banner");
  var nav = document.getElementById('main_nav');
  var menuBtn = document.getElementById('menuImg');
  if(el.classList.contains("show")){
    el.classList.remove("show");
    el.classList.add("hide");

    nav.classList.remove("height_inc");
    menuBtn.src = "https://cdn1.iconfinder.com/data/icons/starter-mobile-app/100/mobile_button-16-512.png";

    ban.classList.add("show");
    ban.classList.remove("hide");
  }else{
    el.classList.add("show");
    el.classList.remove("hide");

    nav.classList.add("height_inc");
    menuBtn.src = "https://cdn4.iconfinder.com/data/icons/web-app-ui/64/web-navigation-ui_icon-49-512.png";

    ban.classList.remove("show");
    ban.classList.add("hide");
  };
  console.log("test");
};

function dropdown(){
  var ell = document.getElementById("scnd_ul");

  if(ell.classList.contains("show")){
    ell.classList.remove("show");
    ell.classList.add("hide");
  }else{
    ell.classList.add("show");
    ell.classList.remove("hide");
  };
};

//div tilt


$(document).ready(function() {
    var cyber = document.getElementByClassName('blue');
    var ffseven = document.getElementByClassName('green');
     if($(window).width() > 768) {
         $(cyber).attr("src", "images/cyberpunk.jpg");
         $(ffseven).attr("src", "images/ffseven.jpg");
     }
});

function getTime(){
  var posted = new Date();
  var date = posted.getFullYear()+'-'+(posted.getMonth()+1)+'-'+posted.getDate()+" "+posted.getTime();
  return date;
};

artOnePosted = getime();
console.log(artOnePosted);
