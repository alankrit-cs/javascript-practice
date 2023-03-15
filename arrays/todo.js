let todos = [{
    text: 'Complete JavaScript',
    completed: true
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
    completed: false
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

// console.log(getThingsToDo(todos));

const sortTodos = function(todos){
    todos.sort(function(a,b){
        if(a.completed === false && b.completed === true){
            return -1;
        }
        else if(a.completed === true && b.completed === false){
            return 1;
        }
        else{
            return 0;
        }
    })
}

sortTodos(todos);
console.log(todos);