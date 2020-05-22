$('#nav_hov').hover(
       function changeClass(){
         var nav_hov = document.getElementById("nav_hov");
         if(nav_hov.hover = true){
           document.getElementById("sub_sub_link").classList.add("show");
           document.getElementById("sub_sub_linkl").classList.remove("hide");
         }else{
           document.getElementById("sub_sub_link").classList.remove("show");
           document.getElementById("sub_sub_link").classList.add("hide");
       };
       console.log("test");
);
