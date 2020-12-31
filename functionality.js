function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return;//for stopping the function
    // console.log(audio);
    key.classList.add('playing');
    audio.currentTime = 0; // rewind to the start
    audio.play();
    // console.log(key);
    
}

function removeTransition(e){
// console.log(e);
if(e.propertyName !=='transform') return; //skips it if not a transforms
e.target.classList.remove('playing'); 
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);


