const notes = [
{
    title: 'My First Note',
    body: 'This is my first note'
}, {
    title: 'My Second Note',
    body: 'This is my second note'
}, {
    title: 'My Third Note',
    body: 'This is my third note'
}];

// console.log(notes.length);
// console.log(notes[0]);

// notes.forEach(function(item,index){
//     console.log(`${item} located at ${index}`)
// })

const indexVal = notes.findIndex(function(note,index){
    return note.title === 'My Third Note';
})

console.log(indexVal);