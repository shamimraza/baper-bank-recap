document.getElementById("btn-submit").addEventListener('click', function(){
   const inputDepositElement = document.getElementById("input-deposit");
   const inputDepositElementString = inputDepositElement.value;

   if(inputDepositElementString == ""){
    alert('please provide some value')
    return;
   }
   
   const newDepositElementTotal = parseFloat(inputDepositElementString);
   inputDepositElement.value = "";


    const inputSpanElement = document.getElementById("input-amout");
    const inputSpanElementString = inputSpanElement.innerText;
    const inputSpanElementNumber = parseFloat(inputSpanElementString);


    const previousElementNumber = inputSpanElementNumber + newDepositElementTotal;
    //  value set

    inputSpanElement.innerText = previousElementNumber;



    const currentTotalElement = document.getElementById("span-total");
    const currentTotalElementString = currentTotalElement.innerText;
    const currentTotal = parseFloat(currentTotalElementString);

    // set amount
    const currentTotalAmount = currentTotal + newDepositElementTotal;

    currentTotalElement.innerText = currentTotalAmount;
})