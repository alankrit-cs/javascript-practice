let tipCaculator = function(total, tipPercent=0.2){
    let tipPercentInPercentage = tipPercent*100;
    let totalTip = total*tipPercent;
    console.log(`A ${tipPercent*100}% tip on $${total} would be $${total*tipPercent}`)
    return `A ${tipPercentInPercentage}% tip on $${total} would be $${totalTip}`;

}

console.log(tipCaculator(400));
console.log(tipCaculator(1000,0.5));