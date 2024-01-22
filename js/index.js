document.addEventListener('DOMContentLoaded', function() {
    // Title
    document.title = userMessages.headerTitle;

    // Header
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = userMessages.headerTitle;
    header.appendChild(headerTitle);

    // Buttons

    // Append elements to body
    document.body.appendChild(header);
});