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

let filters = {
    searchText: ''
}

let summary = function(todos){
    let unfinishedItems = 0;
    todos.forEach(function(todo){
        if(todo.completed === false){
            unfinishedItems = unfinishedItems+1;
        }
    })
    return `You have ${unfinishedItems} todos left`
}


let summaryElement = document.createElement('h3')
summaryElement.textContent = summary(todos)
document.querySelector('#todos-all').appendChild(summaryElement)

todos.forEach(function(todo){
    let item= document.createElement('p')
    item.textContent = todo.text
    document.querySelector('#todos-all').appendChild(item)
})

let renderTodos = function(todos, filters){
    var filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    });

    document.querySelector('#todos-all').innerHTML = '';

    let summaryEl = document.createElement('h3')
    summaryEl.textContent = summary(filteredTodos)
    document.querySelector('#todos-all').appendChild(summaryEl)


    filteredTodos.forEach(function(todo){
        let todoEl= document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos-all').appendChild(todoEl)
    })
}

document.querySelector('#todo-new').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})