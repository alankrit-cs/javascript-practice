let Person = {
    name: 'Alankrit',
    age: 26,
    location: 'India'
}

console.log(Person);
console.log(`${Person.name} is ${Person.age} and lives in ${Person.location}`);

Person.age = Person.age+1;

console.log(`${Person.name} is ${Person.age} and lives in ${Person.location}`);