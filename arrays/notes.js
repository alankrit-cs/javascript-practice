const notes = [
{
    title: 'My First Note',
    body: 'This is my first note'
}, {
    title: 'My Second Note data',
    body: 'This is my second note'
}, {
    title: 'My Third Note',
    body: 'This is my third note data'
}];

const indexVal = notes.findIndex(function(note,index){
    return note.title === 'My Third Note';
})

// console.log(indexVal);

const findNote = function(notes, noteTitleToFind){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitleToFind.toLowerCase();
    })
}

const FilteredNotes = function(notes, query){
    return val = notes.filter(function(note, index){
        return (note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query))
    })
}

console.log(FilteredNotes(notes, 'data'))
// console.log(findNote(notes, 'My Third Note'));