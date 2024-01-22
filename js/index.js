// DISCLOSURE: I've used ChatGPT to get started with the following code, 
// and I've fixed and tweaked it to make it work for this project along the way.

// Along the way I've learned: 

document.addEventListener('DOMContentLoaded', function () {
    // Title
    document.title = userMessages.headerTitle;

    // Header
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = userMessages.headerTitle;
    header.appendChild(headerTitle);

    // Making the nav and ul elements
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.style.listStyleType = 'none'; // Remove bullet points

    // Writer button
    const writerLi = document.createElement('li');
    const writerButton = document.createElement('button');
    writerButton.textContent = userMessages.writerHeader;
    writerButton.addEventListener('click', function () {
        window.location.href = 'writer.html';
    });
    writerLi.appendChild(writerButton);
    ul.appendChild(writerLi);

    // Reader button
    const readerLi = document.createElement('li');
    const readerButton = document.createElement('button');
    readerButton.textContent = userMessages.readerHeader;
    readerButton.addEventListener('click', function () {
        window.location.href = 'reader.html';
    });
    readerLi.appendChild(readerButton);
    ul.appendChild(readerLi);

    // Append ul to nav
    nav.appendChild(ul);

    // Append Header and Nav to body
    document.body.appendChild(header);
    document.body.appendChild(nav);
});