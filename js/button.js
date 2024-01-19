class Button {
    constructor(label, destination) {
        this.label = label;
        this.destination = destination;
    }

    render() {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = this.label;
        buttonElement.addEventListener('click', () => {
            window.location.href = this.destination;
        });
        document.body.appendChild(buttonElement);
    }
}

// Create buttons
const writerButton = new Button('Go to Writer', 'writer.html');
const readerButton = new Button('Go to Reader', 'reader.html');

// Render buttons
writerButton.render();
readerButton.render();
