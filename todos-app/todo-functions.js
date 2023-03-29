let getSavedTodos = function(){
    //Fetch the todos from local storage, if they already exist
    if(localStorage.getItem('todos') !== null){
        todos = JSON.parse(localStorage.getItem('todos'))
        renderTodos(todos, filters)
    }
}

let renderTodos = function(todos, filters){
    if(todos !== null){
        let filteredTodos
        if(filters.hideCompleted === false){
            filteredTodos = todos.filter(function(todo){
                return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
            });
        
        }else{
            filteredVals = todos.filter(function(todo){
                return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
            });
            filteredTodos = filteredVals.filter(function(todo){
                return !todo.completed
            })
        }
    
        document.querySelector('#todos-all').innerHTML = '';
    
        document.querySelector('#todos-all').appendChild(generateSummaryDOM(filteredTodos))
    
        filteredTodos.forEach(function(todo){
            document.querySelector('#todos-all').appendChild(generateTodoDOM(todo))
        })
    }
}

let summary = function(todos){
    if(todos!==null){
        let unfinishedItems = 0;
        todos.forEach(function(todo){
            if(todo.completed === false){
                unfinishedItems = unfinishedItems+1;
            }
        })
        return `You have ${unfinishedItems} todos left`
    }
}

let saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

let generateSummaryDOM = function(filteredTodos){
    let summaryEl = document.createElement('h3')
    summaryEl.textContent = summary(filteredTodos)
    return summaryEl;
}

let generateTodoDOM = function(todo){
    let todoEl= document.createElement('p')
    todoEl.textContent = todo.text
    return todoEl;
}