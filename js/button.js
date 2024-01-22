import { USER_MESSAGES } from './lang/messages/en/user.js';

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

export { Button };