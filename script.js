const keypress = (e) =>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if(!audio){
        return
    }
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
    
}

window.addEventListener('keydown', keypress)




const keys = document.querySelectorAll('.key')
function transitionEnd(e){
    this.classList.remove('playing')
}
    

keys.forEach(key=>{
    key.addEventListener('animationend', transitionEnd)
})

function keyclick(e){
    const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`)

    if(!audio){
        return
    }
    audio.currentTime = 0;
    audio.play()
    this.classList.add('playing')
   
    
}


keys.forEach(key=>{
    key.addEventListener('click', keyclick)
})