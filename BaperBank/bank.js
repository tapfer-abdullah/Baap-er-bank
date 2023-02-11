//Adding deposit amount 
document.getElementById('deposit-btn').addEventListener('click', function(){
    //New deposit
    let NewDepositAmountText = document.getElementById('deposit-amount');
    let NewDepositAmount = NewDepositAmountText.value;

    //old deposit
    let deposited = document.getElementById('deposited-amount');
    let depositedAmount = deposited.innerText;


    //Balance
    let BalanceText = document.getElementById('Balance');
    let Balance = BalanceText.innerText;
    let totalBalance = parseFloat(Balance) + parseFloat(NewDepositAmount) ;
    BalanceText.innerText = totalBalance.toFixed(2);

    // console.log(Balance);
    // console.log(totalBalance);


    //Total deposit
    let totalDeposit = parseFloat(depositedAmount) + parseFloat(NewDepositAmount);
    deposited.innerText =  totalDeposit.toFixed(2);

    //making input field null
    NewDepositAmountText.value = '';

    // console.log(NewDepositAmount);
    // console.log(depositedAmount);
    // console.log(totalDeposit);
    
})

// withdraw-amount
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //Original withdraw amount
    let withdrawAmountText = document.getElementById('withdraw-amount');
    let withdrawAmount = withdrawAmountText.innerText;

    //new withdraw input field
    let newWithdrawText = document.getElementById('new-withdraw');
    let newWithdraw = newWithdrawText.value;


    // Total balance
    let BalanceText = document.getElementById('Balance');
    let Balance = BalanceText.innerText;
    //Reduced Balance
    let totalBalance = parseFloat(Balance) - parseFloat(newWithdraw);
    //To fixe is used to control floating number
    BalanceText.innerText = totalBalance.toFixed(2);

    // Adding to withdraw 
    let removeAmount = parseFloat(withdrawAmount) + parseFloat(newWithdraw);
    withdrawAmountText.innerText = removeAmount.toFixed(2);
    // console.log(newWithdraw)

    // making input field null 
    newWithdrawText.value = '';

})