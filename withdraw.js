document.getElementById("withdraw-button").addEventListener('click', function(){
    const newTotalElement = document.getElementById("input-withdraw");
    const newTotalElementString = newTotalElement.value;

    if(newTotalElementString == ""){
        alert('please provide a valid number')
        return;
    }
    const newTotalElementTotal = parseFloat(newTotalElementString);
    newTotalElement.value = "";


    const previousElement = document.getElementById("span-balance");
    const previousElementString = previousElement.innerText;
    const previousElementTotal = parseFloat(previousElementString);

    // value set

    const updateBalance = previousElementTotal + newTotalElementTotal;
    previousElement.innerText = updateBalance;


    const currentTotalElement = document.getElementById("span-total");
    const currentTotalElementString = currentTotalElement.innerText;
    const currentTotalBalance = parseFloat(currentTotalElementString);

    const totalUpdateAmount = currentTotalBalance - newTotalElementTotal;

    currentTotalElement.innerText = totalUpdateAmount;

})