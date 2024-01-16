const start=document.querySelector('#start')
const stop=document.querySelector('#stop')
const randomColor=()=>{
const hex='0123456789ABCDEF'
let color='#'
for(let i=0;i<6;i++)
{
    color+=hex[Math.floor(Math.random()*16)]
}
return color
}

let IntervalId
const changeColor=()=>{
    document.body.style.backgroundColor=randomColor()
}
start.addEventListener('click',(event)=>{
    IntervalId=setInterval(changeColor,1000)
    changeColor()
})
stop.addEventListener('click',(event)=>{
    clearInterval(IntervalId)
})