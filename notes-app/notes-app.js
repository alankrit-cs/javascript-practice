let notes = [
    {
        title: 'Wake up early morning',
        body: 'Wake up by 7:00 AM in the morning'
    },
    {
        title:'Eat your breakfast',
        body: 'Have a protein rich platter'
    },
    {
        title: 'Office',
        body: 'Complete the office tasks assigned to you'
    },    
    {
        title: 'Eat your lunch',
        body: 'Have carbs, fat too'
    },
    {
        title: 'Return home',
        body: 'Reach home before 7:00 PMs'
    }
]

let filters = {
    searchText: ''
}

let renderNotes = function(notes,filters){
    let filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText);
    })
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(filteredNote){
        let notesEl = document.createElement('p')
        notesEl.textContent = filteredNote.title
        document.querySelector('#notes').appendChild(notesEl)
    })
}

document.querySelector('#search-tag').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes,filters)
})

notes.forEach(function(filteredNote){
    let notesEl = document.createElement('p')
    notesEl.textContent = filteredNote.title
    document.querySelector('#notes').appendChild(notesEl)
})


document.querySelector('#my-form').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target.firstName.value)
    e.target.firstName.value = ''
})

document.querySelector('#sort-selector').addEventListener('change', function(e){
    console.log(e.target.value)
})

//localStorage
localStorage.setItem('todoKey', JSON.stringify(notes))

console.log(JSON.parse(localStorage.getItem('todoKey')))

localStorage.removeItem('todoKey')

localStorage.clear()