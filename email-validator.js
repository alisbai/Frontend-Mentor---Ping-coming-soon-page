class EmailValidator {
    constructor(DOMInput, DOMMessage) {
        this.DOMInput = DOMInput;
        this.DOMMessage = DOMMessage;
    }
    assignEvent(eventToAssign) {
        this.DOMInput.addEventListener(eventToAssign,() => this.manageClick());
    }

    isValidEmail() {
        const email = this.DOMInput.value;
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        return emailRegex.test(email);
    }
    displayError() {
        this.DOMInput.classList.add('red-border');
        this.DOMMessage.classList.add('opacity-1');
    }
    removeError() {
        this.DOMInput.classList.remove('red-border');
        this.DOMMessage.classList.remove('opacity-1');
    }

    manageClick() {
        if(this.isValidEmail()) {
            this.removeError()
        }
        else {
            this.displayError();
        }
    }

    
}