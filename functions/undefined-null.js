//Undefined for variable
let name;

if(name === undefined){
    console.log('Please input a valid name');
}
else{
    console.log(name);
}

//Undefined for function arguments
let square = function(number){
    console.log(number);
}

square();

//Undefined as function return default value

let cube = function(number){
    console.log(number*number*number)
}

let cubeValue = cube(3);
console.log(cubeValue)

//Null as assigned value
let age = 27;
//age=undefined;
age=null;

console.log(null);