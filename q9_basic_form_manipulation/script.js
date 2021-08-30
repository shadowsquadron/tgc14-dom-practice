
function getFormValues() {

    let email = document.querySelector("#email-address").value



    let model = null;

    let models = document.querySelectorAll(".phone-type")

    for(let model of models){
    
       if(model.checked){
         
                
             this.model = model
    
    
          }
    
    }
    
  
    let services = [];

    let serviceses = document.querySelectorAll(".services")

    for (let service of serviceses){
        
        if (service.checked){

            services.push(service.value)

        }

    }



    let pickup =  document.querySelector("#pick-up").value;


    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
