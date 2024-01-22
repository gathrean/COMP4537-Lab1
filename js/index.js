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

    // Writer link
    const writerLi = document.createElement('li');
    const writerAnchor = document.createElement('a');
    writerAnchor.href = 'writer.html';
    writerAnchor.textContent = userMessages.writerHeader;
    writerLi.appendChild(writerAnchor);
    ul.appendChild(writerLi);

    // Reader link
    const readerLi = document.createElement('li');
    const readerAnchor = document.createElement('a');
    readerAnchor.href = 'reader.html';
    readerAnchor.textContent = userMessages.readerHeader;
    readerLi.appendChild(readerAnchor);
    ul.appendChild(readerLi);

    // Append ul to nav
    nav.appendChild(ul);

    // Append Header and Nav to body
    document.body.appendChild(header);
    document.body.appendChild(nav);
});