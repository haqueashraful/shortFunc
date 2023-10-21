let depositeBtn = document.getElementById("btn-deposite");

depositeBtn.addEventListener("click", function(){

    
    let newDepositeValue = getInnerTextByID("deposite-field");
    let preDepositeValue = getPreElementByID("deposite-total");


    if(newDepositeValue > 0){
        let depositeTotal = preDepositeValue + newDepositeValue;
        setById("deposite-total", depositeTotal);
    
        let preBalance = getPreElementByID("balance-total");
    
        let newBalance = newDepositeValue + preBalance;
    
        setById("balance-total", newBalance);
    
        document.getElementById("deposite-field").value = "";
    }
    else{
        alert("Please enter a Positive value!");
        document.getElementById("deposite-field").value = "";
    }
   
})


