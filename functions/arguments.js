let tipCaculator = function(total, tipPercent=0.2){
    return total*tipPercent;
}

console.log(tipCaculator(400));
console.log(tipCaculator(1000,0.5));

let tipCaculatory = function(total=400, tipPercent){
    return total*tipPercent;
}

console.log(tipCaculatory(undefined,20));
