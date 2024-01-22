// DISCLOSURE: I've used ChatGPT to get started with the following code, 
// and I've fixed and tweaked it to make it work for this project along the way.

// MY HOSTED WEBSITE: https://comp4537-lab1-gathrean.vercel.app/

// In this lab I gained some experience with working with local storage and 
// it kinda gave me some ideas on how chat messaging works (though it's more complex than this).

const notesContainer = document.getElementById('notesDisplay');

// Function to render notes to the DOM
function renderNotes(notes) {
    notesContainer.innerHTML = '';
    notes.forEach(note => {
        const paragraph = document.createElement('p');
        paragraph.textContent = note.content;
        notesContainer.appendChild(paragraph);
    });
}

// Function to retrieve and display notes
function retrieveNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    renderNotes(savedNotes);
    updateLastRetrievedTime();
}

// Function to update the last retrieved time display
function updateLastRetrievedTime() {
    const now = new Date().toLocaleTimeString();
    const retrievalTimeElement = document.getElementById('retrievalTime');
    retrievalTimeElement.textContent = userMessages.retrievalTime + now;
}

// Retrieve and display notes every 2 seconds
setInterval(retrieveNotes, 2000);

// Initial retrieval
retrieveNotes();

// Function to handle home button click
function goToHome() {
    location.href = 'index.html';
}

// Set home button label
const homeButton = document.querySelector('footer button');
homeButton.textContent = userMessages.homeButtonLabel;

console.log("Home Button Label:", homeButton.textContent); // Add this line for debugging

// Attach click event to home button
homeButton.addEventListener('click', goToHome);