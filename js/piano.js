var keys = document.querySelectorAll(".key");

function playNote(e){
    
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key   = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!key){
        return;
    }
    
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
    if(e.propertyName != "transform"){
       return;
    }
    this.classList.remove("playing");
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);