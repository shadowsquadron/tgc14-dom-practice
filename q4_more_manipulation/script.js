let header = document.querySelector("h1")

header.style.backgroundColor = "green"
header.style.border="3px solid black"


let finished = document.querySelector("li.finished")

finished.innerHTML="Repay credit card debt"


let urgent = document.querySelector("#urgent") //or p#urgent 
urgent.style.border="2px solid black"


let emphasis = document.querySelector(".emphasis")
emphasis.style.textDecoration="underline"

let pEmphasis = document.querySelector('p.emphasis')
pEmphasis.style.backgroundColor = "orange"
pEmphasis.style.lineHeight = "24px" 
pEmphasis.style.fontSize = "32px"


let todo = document.querySelector("#urgent>.todo")
todo.style.backgroundColor="yellow"


let h2 = document.querySelector("h2")
h2.innerHTML='<span class="greetings">About Us</span>'