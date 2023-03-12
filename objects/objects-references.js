let myAccount = {
    name: 'Andrew Bernard',
    income: 0,
    expenses: 0
}

let addExpenses = function(account, amount){
    account.expenses = account.expenses + amount;
}

let addIncome = function(account, amount){
    account.income = account.income+amount;
}

let resetAccount = function(account){
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function(account){
    return `Account for ${account.name} has $${account.income-account.expenses}. $${account.income} in income. $${account.expenses} as in expenses.`;
}

addIncome(myAccount, 1000);
addExpenses(myAccount, 100);
addExpenses(myAccount, 200);
console.log(getAccountSummary(myAccount));

resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
