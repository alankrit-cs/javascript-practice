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


let summary = function(todos){
    let unfinishedItems = 0;
    todos.forEach(function(todo){
        if(todo.completed === false){
            unfinishedItems = unfinishedItems+1;
        }
    })
    return `You have ${unfinishedItems} todos left`
}

let summaryParagraph = document.createElement('h3')
summaryParagraph.textContent = summary(todos);
document.querySelector('body').appendChild(summaryParagraph)

todos.forEach(function(todo){
    let item= document.createElement('p')
    item.textContent = todo.text
    document.querySelector('body').appendChild(item)
})

document.querySelector('#my-button').addEventListener('click', function(e){
    console.log(e)
    e.target.textContent = 'Button Clicked'
    e.target.disabled = true;
})