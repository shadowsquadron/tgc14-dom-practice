

let roll= document.querySelector("#roll")


roll.addEventListener('click', function(){


    let rand_1 =  Math.floor(Math.random()*(6-0+1)+0)
    let box_1 = document.querySelector("#box_1")
    box_1.innerHTML = rand_1



    let rand_2 =  Math.floor(Math.random()*(6-0+1)+0)
    let box_2 = document.querySelector("#box_2")
    box_2.innerHTML = rand_2

    let result = document.querySelector("#result")
    result.innerHTML = rand_1 + rand_2


})