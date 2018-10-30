// constantes

const rules = document.querySelectorAll(".rules");
const jason = document.querySelector(".jason");
const characters = document.querySelector(".characters");
const monitors = document.querySelector(".monitors");
const advice = document.querySelector(".advice");


// transition opacity
window.addEventListener("scroll", function() {
  // rules
  for (var i = 0; i < rules.length; i++){
      if ( window.scrollY >= 900){
        rules[i].style.opacity = "1";
        }else{
        rules[i].style.opacity = "0";
        }
      }
      
  // Page 3
  if ( window.scrollY >= 2100){
    characters.style.opacity = "1";
    monitors.style.opacity = "1";
  }else{
    characters.style.opacity = "0";
    monitors.style.opacity = "0";
  }

  // Page 4
  if ( window.scrollY >= 3350){
    advice.style.opacity = "1";
  }else{
    advice.style.opacity = "0";
  }
  
  // Jason
  if ( window.scrollY >= 4700){
    jason.style.opacity = "1";
    }else{
    jason.style.opacity = "0";
    }
});