let todos = [{
    text: 'Complete JavaScript',
    completed: false
},{
    text: 'Take Notes',
    completed: false
},{
    text: 'Buy Food',
    completed: true
},{
    text: 'Cook',
    completed: true
},{
    text: 'Eat',
    completed: true
}]

const deleteTodos = function(AllTodoS, ItemTextToDelete){
    const Index = AllTodoS.findIndex(function(todo, index){
        return todo.text.toLowerCase() === ItemTextToDelete.toLowerCase();
    });
    if(Index>-1){
        AllTodoS.splice(Index,1);
    }
}

// deleteTodos(todos, 'book')
// console.log(todos);

const getThingsToDo = function(listOfItems){
    return itemsToDo = listOfItems.filter(function(item,index){
        return item.completed === false;
    })
}

console.log(getThingsToDo(todos));