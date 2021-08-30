// PLACE YOUR CODE HERE


let emphasis = document.querySelectorAll(".emphasis")

for(let text of emphasis){

    text.style.fontFamily="Verdana"


}

let finish = document.querySelectorAll("li.finished") // li with class 


for(let f of finish){
    
    f.style.textDecoration="line-through" 


}


let lowTodo = document.querySelectorAll("#low-priority .todo") // ul with li children based on class

for (let lt of lowTodo){

    lt.style.backgroundColor="blue"

}


let alerts = document.querySelectorAll(".alert")

for(let alert of alerts){

    alert.style.color="red"

}