document.querySelector('#create-notes').addEventListener('click', function(e){
    console.log('Create button clicked');
})

document.querySelector('#remove-notes').addEventListener('click',function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
})