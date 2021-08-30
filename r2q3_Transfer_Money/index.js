

let topUp= document.querySelector("#topUp10")

topUp.addEventListener("click",function(){


    let account = document.querySelector("#account")
    let account_balance = parseInt(account.innerHTML)


    account_balance=account_balance+10

    account.innerHTML = account_balance
    



})


let transfer10ToWallet = document.querySelector("#transfer10ToWallet")

transfer10ToWallet.addEventListener("click",function(){


    let account = document.querySelector("#account")
    let account_balance = parseInt(account.innerHTML)


    account_balance=account_balance-10


    

    if(account_balance >= 0 ){

        account.innerHTML = account_balance

        let wallet = document.querySelector("#other-wallet")
        let wallet_balance = parseInt(wallet.innerHTML)


        wallet_balance=wallet_balance+10

        wallet.innerHTML = wallet_balance
    
    }else{

        alert("You are officially broke in account!")

    }


})


let transfer10ToAccount = document.querySelector("#transfer10ToAccount")

transfer10ToAccount.addEventListener("click",function(){


   

    let wallet = document.querySelector("#other-wallet")
    let wallet_balance = parseInt(wallet.innerHTML)


    wallet_balance=wallet_balance-10
    if(wallet_balance >= 0 ){
        wallet.innerHTML = wallet_balance

        let account = document.querySelector("#account")
        let account_balance = parseInt(account.innerHTML)
    
    
        account_balance=account_balance+10
    
        account.innerHTML = account_balance
    }else{

        alert("You are officially broke in wallet!")

    }
   
    



})




let spend = document.querySelector("#spend")

spend.addEventListener("click", function(){

    let input= document.querySelector("#amount").value

    if (input!="" && input>=0){
        let wallet = document.querySelector("#other-wallet")
        let wallet_balance = parseInt(wallet.innerHTML)


        wallet_balance=wallet_balance-input
        
        if(wallet_balance >= 0 ){
            wallet.innerHTML = wallet_balance
        }else{

            alert("You are officially broke in wallet!")

        }

    }else{


        alert("Please insert a proper amount")

    }



})