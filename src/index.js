const ctx = document.getElementById('canvas').getContext('2d')

const game = new Game(ctx)
const start = document.getElementById("start")
const pause = document.getElementById("pause")
const reload = document.getElementById("reload")
const welcome = document.getElementById("welcome")


start.addEventListener('click',  () =>{
    game.start()
    start.classList.add("btn-hidden")
    welcome.classList.add("d-none")
  }) 
  
pause.onclick = () => {
    start.classList.remove("btn-hidden")
    game._pause()
}
reload.onclick = () => document.location.reload()
