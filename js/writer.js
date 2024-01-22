// DISCLOSURE: I've used ChatGPT to get started with the following code, 
// and I've fixed and tweaked it to make it work for this project along the way.

// Along the way I've learned: 

class Note {
    constructor(content) {
        this.content = content;
    }
}

const notesBox = document.getElementById('notes-box');
const addNotesButton = document.getElementById('add-notes-button');
let notes = [];

// Load existing notes from local storage
window.onload = function() {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = savedNotes.map(note => new Note(note.content));
    showNotes();
    updateLastSavedTime();
}

// Function to show the notes to the DOM
function showNotes() {
    notesBox.innerHTML = '';
    notes.forEach((note, index) => {
        const textArea = document.createElement('textarea');
        textArea.value = note.content;
        textArea.addEventListener('input', (e) => {
            notes[index].content = e.target.value;
            saveNotes();
        })

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeNote(index);
        });

        notesBox.appendChild(textArea);
        notesBox.appendChild(removeButton);
    });
}

// Function to add a note
addNotesButton.addEventListener('click', () => {
    notes.push(new Note(''));
    showNotes();
});

// Function to remove a note
function removeNote(index) {
    notes.splice(index, 1);
    showNotes();
    saveNotes();
}

// Function to save the notes to local storage
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
    updateLastSavedTime();
}

// Function to update the last saved time display
function updateLastSavedTime() {
    const now = new Date().toLocaleTimeString();
    document.getElementById('saveTime').textContent = `Last saved at: ${now}`;
}

// Save notes to local storage in 2 second intervals
setInterval(saveNotes, 2000);