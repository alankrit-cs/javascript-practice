const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],
    addExpense: function(description, amount){
        let Expense = {
            description: description,
            amount: amount
        }
    
        this.expenses.push(Expense)
    },
    getAccountSummary: function(){
        let totalExpense = 0;
        let totalIncome = 0;
        this.expenses.forEach(function(item,index){
            totalExpense = totalExpense+item.amount;
        })
        this.income.forEach(function(item){
            totalIncome = totalIncome+item.amount;
        })
        return `${this.name} has a balance of $${totalIncome-totalExpense}. $${totalIncome} in income. $${totalExpense} in expenses.`
    },
    addIncome: function(description, amount){
        this.income.push({description: description, amount:amount});
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Salary', 1000)
account.addIncome('Course',200)
console.log(account.getAccountSummary())