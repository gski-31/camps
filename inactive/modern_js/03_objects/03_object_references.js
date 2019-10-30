let myAccount = {
    name: 'jason',
    expenses: 0,
    income: 0
}

let addExpense = (account, amount)=>{
    account.expenses += amount;
}

addExpense(myAccount, 26);
console.log(myAccount)