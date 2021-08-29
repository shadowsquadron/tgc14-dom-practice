
inc_button = document.querySelector("#increment")

inc_button.addEventListener('click', function(){

    let box = document.querySelector("#box").innerHTML
    let nodeText = document.querySelector("#box")
    box=parseInt(box)+1
    
    if (box <= 10 && box%2===0){
        nodeText.style.backgroundColor="green"
        nodeText.innerHTML=box
    }else if(box <= 10){
        nodeText.style.backgroundColor="red"
        nodeText.innerHTML=box

    }
        
 

})

dec_button = document.querySelector("#decrement")

dec_button.addEventListener('click', function(){

    let box = document.querySelector("#box").innerHTML
    let nodeText = document.querySelector("#box")
    box=parseInt(box)-1
    
    if (box >= 0 && box%2===0){
        nodeText.style.backgroundColor="green"
        nodeText.innerHTML=box
    }else if(box >= 0){
        nodeText.style.backgroundColor="red"
        nodeText.innerHTML=box
    
    }



})


rst_button = document.querySelector("#reset")

rst_button.addEventListener('click', function(){

    
    let nodeText = document.querySelector("#box")
    nodeText.style.backgroundColor="green"
    nodeText.innerHTML=0



})