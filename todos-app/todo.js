let todos = []

let filters = {
    searchText: '',
    hideCompleted: false
}

getSavedTodos();

document.querySelector('#todo-new').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#create-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({text: e.target.todoText.value, completed:e.target.isComplete.checked})
    filters.searchText=''
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.todoText.value=''
})

document.querySelector('#hideCompleted').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})