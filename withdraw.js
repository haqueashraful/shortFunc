const withdrawBtn = document.getElementById("btn-withdraw");
withdrawBtn.addEventListener("click", function(){
    let newWithdrawValue = getInnerTextByID("withdraw-field");

    let prewithdrawValue = getPreElementByID("withdraw-total");
    let balanceInfo = document.getElementById("balance-total").innerText;
if( balanceInfo < newWithdrawValue){
    alert("Your Balance is Low!!");  
    document.getElementById("withdraw-field").value = "";
}
else if(newWithdrawValue > 0){
    let withdrawTotal = prewithdrawValue + newWithdrawValue;

    setById("withdraw-total", withdrawTotal);
    
    let preBalance = getPreElementByID("balance-total");
    
    let newBalance = preBalance - newWithdrawValue;
    
    setById("balance-total", newBalance);
    document.getElementById("withdraw-field").value = "";
}
else{
    alert("Please enter a positive number!!");
    document.getElementById("withdraw-field").value = "";
}

})