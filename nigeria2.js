let nav = document.querySelector(".side-nav");
let ham = document.querySelector(".mobile");
let close = document.querySelector(".close");
let header = document.querySelector(".head")

ham.onclick = function(e){
    nav.style.width = "70%";
    e.stopPropagation()
}

close.onclick = function(){
    nav.style.width = 0;
}
document.querySelector("body").onclick = function( event ) {
    var a  = event.target;
    if(a != nav){
      nav.style.width = 0
  }
  }