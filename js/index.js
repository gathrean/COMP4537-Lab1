document.addEventListener('DOMContentLoaded', function () {
    // Title
    document.title = userMessages.headerTitle;

    // Header
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = userMessages.headerTitle;
    header.appendChild(headerTitle);

    // Links to Reader and Writer pages
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const writerLi = document.createElement('li');
    const readerLi = document.createElement('li');

    const writerAnchor = document.createElement('a');
    writerAnchor.href = 'writer.html';
    writerAnchor.textContent = userMessages.writerHeader;
    writerLi.appendChild(writerAnchor);
    ul.appendChild(writerLi);

    const readerAnchor = document.createElement('a');
    readerAnchor.href = 'reader.html';
    readerAnchor.textContent = userMessages.readerHeader;
    readerLi.appendChild(readerAnchor);
    ul.appendChild(readerLi);

    nav.appendChild(ul);

    // Append elements to body
    document.body.appendChild(header);
    document.body.appendChild(nav);
});