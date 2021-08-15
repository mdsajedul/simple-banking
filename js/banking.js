
// deposit 
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value) ;
    const depositTotal = document.getElementById('deposit-total');
   
   const previousDepositAmount = parseFloat(depositTotal.innerText) ;
   const newDepositTotal = previousDepositAmount + newDepositAmount;

   depositTotal.innerText = newDepositTotal;

//    update account balance 

const balanceTotal = document.getElementById('balance-total');
const previousBalanceTotal = parseFloat(balanceTotal.innerText);

const newBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotal.innerText = newBalanceTotal;

//    clear the deposit input field 
    depositInput.value = '';



})

// withdaw

document.getElementById('withdaw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithwrawAmount = parseFloat(withdrawInput.value);
    
    // set withdraw total 

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);

    const newWithdrawTotal = previousWithdrawTotal + newWithwrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    const newBalanceTotal = previousBalanceTotal - newWithwrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear text 

    withdrawInput.value = '';

})