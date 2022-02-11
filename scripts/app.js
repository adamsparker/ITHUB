const accordion = document.getElementsByClassName('menu__item');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;

TweenMax.to({}, 0.016, {
repeat: -1,
onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
            left: posX - 20,
            top: posY - 20
        }
    });

    TweenMax.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY
        }
    });
}
});

$(document).on("mousemove", function(e) {
mouseX = e.pageX;
mouseY = e.pageY;
});


var modalBtns = document.querySelectorAll('.modal-able');

modalBtns.forEach(function(btn){
    btn.onclick = function(){
    var modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = "flex";
  };
});   

var closeBtns = document.querySelectorAll(".modal__close");

closeBtns.forEach(function(btn){
btn.onclick = function(){
  var modal = (btn.closest(".modal-holder").style.display = "none");
  };
});