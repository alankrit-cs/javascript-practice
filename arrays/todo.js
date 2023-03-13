const todos = ['todo 1', 'todo 2', 'todo 3', 'todo 4', 'todo 5']

todos.splice(2,1);
todos.push('The last todo');
todos.shift();

//Length of an array
console.log(`You have ${todos.length} todos`);

todos.forEach(function(data,index){
    console.log(`${index+1}. ${data}`);
});

