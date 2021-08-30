
let arrests = document.querySelectorAll(".a")

for(let arrest of arrests){

    arrest.style.backgroundColor="red"
    
    let text = arrest.innerHTML

    arrest.innerHTML=text+" (jailed)"

}



let undercovers = document.querySelectorAll(".a.undercover")

for(let undercover of undercovers){

    undercover.style.backgroundColor="yellow"
    


}