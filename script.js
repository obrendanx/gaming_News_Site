// window.addEventListener("hashchange", function() { scrollBy(0, -75, ) })
function changeClass(){
  var el = document.getElementById("main_ul");
  if(el.classList.contains("show")){
    el.classList.remove("show");
    el.classList.add("hide");
  }else{
    el.classList.add("show");
    el.classList.remove("hide");
  };
  console.log("test");
};
