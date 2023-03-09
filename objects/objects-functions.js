let TempratureConverter = function(temprature){
    let fahrenheit, celsius;
    if(temprature.type === 'Fahrenheit'){
        celsius = (temprature.value - 32) * 5/9;
        fahrenheit = temprature.value;
    }else if(temprature.type === 'Celsius'){
        fahrenheit = (temprature.value * (9/5)) + 32; 
        celsius = temprature.value;
    }

    return {
        TempratureInFahrenheit: fahrenheit,
        TempratureInCelsius: celsius
    }
}

let temp1 = {
    value: 50,
    type: 'Fahrenheit'
}

let temp2 = {
    value:45,
    type: 'Celsius'
}

console.log(TempratureConverter(temp1))
console.log(TempratureConverter(temp2))