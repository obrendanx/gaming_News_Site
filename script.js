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

function likevideo(elem) {
  var one = document.getElementById("fa-thumbs-one");
  var two = document.getElementById("fa-thumbs-two");
  var three = document.getElementById("fa-thumbs-three");
  var four = document.getElementById("fa-thumbs-four");
  var five = document.getElementById("fa-thumbs-five");
  var six = document.getElementById("fa-thumbs-six");
  var seven = document.getElementById("fa-thumbs-seven");
  var eight = document.getElementById("fa-thumbs-eight");
  var nine = document.getElementById("fa-thumbs-nine");
  var ten = document.getElementById("fa-thumbs-ten");
  var eleven = document.getElementById("fa-thumbs-eleven");

  if(elem == "fa-thumbs-one"){
    one.classList.add("fa-color");
  }else if(elem == "fa-thumbs-two"){
    two.classList.add("fa-color");
  }else if(elem == "fa-thumbs-three"){
    three.classList.add("fa-color");
  }else if(elem == "fa-thumbs-four"){
    four.classList.add("fa-color");
  }else if(elem == "fa-thumbs-five"){
    five.classList.add("fa-color");
  }else if(elem == "fa-thumbs-six"){
    six.classList.add("fa-color");
  }else if(elem == "fa-thumbs-seven"){
    seven.classList.add("fa-color");
  }else if(elem == "fa-thumbs-eight"){
    eight.classList.add("fa-color");
  }else if(elem == "fa-thumbs-nine"){
    nine.classList.add("fa-color");
  }else if(elem == "fa-thumbs-ten"){
    ten.classList.add("fa-color");
  }else if(elem == "fa-thumbs-eleven"){
    eleven.classList.add("fa-color");
  }
}
