/* CHALLENGE: Build expense tracker
• add income
• add expense
• get summary
• reset account
*/

let myAccount = {
    name: 'jason',
    income: 0,
    expense: 0
}

let addExpense = (account, amount)=>{
    account.expense += amount;
}

let addIncome = (account, amount) => {
    account.income += amount;
}

let getSummary = (account)=>{
    return `there is a balance of ${account.income} with ${account.expense}in expenses`
}

let resetAccount = (account) => {
    account.expense = 0;
    account.income = 0;
}

addExpense(myAccount, 3200);
addExpense(myAccount, 50);
addExpense(myAccount, 200);

addIncome(myAccount, 150000200);

console.log(getSummary(myAccount));

resetAccount(myAccount);

console.log(getSummary(myAccount));