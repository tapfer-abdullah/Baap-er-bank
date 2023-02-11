
document.getElementById("submit-btn").addEventListener('click', function(){
//Email input
const emailData = document.getElementById("email-data").value;
//Password data
const passwordData = document.getElementById("pas-data").value;

//Default or original email and password
const email = "akbkck@huhu.com";
const password = "secret";

if(emailData === email && passwordData === password){
    window.location.href = 'bank.html';
}
else{
    alert('Invalid User');
}
})

//Adding deposit amount 
document.getElementById('deposit-btn').addEventListener('click', function(){
    // const NewDepositAmount = document.getElementById('deposit-amount').value;

    // //old deposit
    // const deposited = document.getElementById('deposited-amount');
    // const depositedAmount = deposited.value;

    // const totalDeposit = depositedAmount + NewDepositAmount;
    // // deposited.innerText =  "$ "+totalDeposit;


    // console.log(NewDepositAmount);
    // console.log(depositedAmount);
    // console.log(totalDeposit);
    console.log('x')
    
})