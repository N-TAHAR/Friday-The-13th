const rules = document.querySelectorAll(".rules");


window.addEventListener("scroll", function() {
  for (var i = 0; i < rules.length; i++){
      if ( window.scrollY >= 700){
        rules[i].style.opacity = "1";
        }else{
        rules[i].style.opacity = "0";
        }
      }

});