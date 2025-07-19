let start = document.getElementById("startbtn")
let stope = document.getElementById("stopbtn")
let restart = document.getElementById("restartbtn")
let audio = new Audio('二人の家.mp3')

let time = document.getElementById("timer")
let minutes = Number(document.getElementById("minutes").innerText)
let seconds = Number(document.getElementById("seconds").innerText)

totalsecond = 1500

function getTime(){ 
    minutes = Math.floor(totalsecond / 60)
    seconds = totalsecond % 60
    mulai()
}

let ID;

function mulai(){
    audio.loop = true
    audio.play()
    ID = setInterval(() => {
    time.innerText = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
    if(seconds === 0){
        if(minutes === 0){
            minutes = 25
            return clearInterval(getTime)
        }
        minutes--
        seconds = 60
        
    }
    console.log(minutes)
        seconds--
    console.log(seconds)
}, 1000);
    
}

start.addEventListener("click",mulai)
stope.addEventListener("click", function(){
    clearInterval(ID)
    audio.pause()
})
restart.addEventListener("click", function(){
    console.log(restart)
    minutes = 25
    seconds = 0
})
