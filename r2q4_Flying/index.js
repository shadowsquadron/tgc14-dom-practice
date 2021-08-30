function extractFormInfo()
{
  
  let firstName = document.querySelector("#firstname").value
  
  let lastName = document.querySelector("#lastname").value
  
  let ticketClass = null

  let tickets = document.querySelectorAll(".ticket")

  for(let ticket of tickets){
    
    if (ticket.checked){

        ticketClass=ticket.value

    }

  }
  
  let options = []

  let optionses = document.querySelectorAll(".options")

  for(let option of optionses){

    if(option.checked){

      options.push(option.value)

    }


  }


  let prices={
    "first_class":1200,
    "business_class":750,
    "economy_class":250
  }

  let total = prices[ticketClass] + 10*options.length

  summary=document.querySelector("#summary")
  summary.innerHTML=`First Name: ${firstName} <br> Last Name: ${lastName} <br> Ticket Class: ${ticketClass} <br> Options: ${options.join(", ")} <br> Total: $${total}`

 
  


}


let btn=document.querySelector("#btn")
btn.addEventListener("click", extractFormInfo) // put in the function as a value and not the function itself; remove the bracket when the function is called