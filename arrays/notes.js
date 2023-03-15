const notes = [
{
    title: 'Diwali',
    body: 'This is my first note'
}, {
    title: 'christmas',
    body: 'This is my second note'
}, {
    title: 'Eid',
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

// console.log(FilteredNotes(notes, 'data'))
// console.log(findNote(notes, 'My Third Note'));

const sortNotes = function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1;
        }
        else if( b.title.toLowerCase() < a.title.toLowerCase()){
            return 1;
        }
        else{
            return 0;
        }
    })
}

sortNotes(notes)

console.log(notes)

console.log(['dwight','jim','andy','micheal'].sort())