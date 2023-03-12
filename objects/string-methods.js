let isValidPassword = function(password){
    return (password.length > 8 && (!password.includes('password')));
}

console.log(isValidPassword('asdfd'));
console.log(isValidPassword('fkjcbsd@kj35##'));
console.log(isValidPassword('abc1password2'));


//Some built in string methods
let name = ' Dwight Schrute '

//To check length
console.log(name.length);

//To convert to uppercase
console.log(name.toUpperCase())

//To convert to lowercase
console.log(name.toLowerCase())

//Trim
console.log(name.trim())

//To check if string has some substring
console.log(name.includes('dwi'))