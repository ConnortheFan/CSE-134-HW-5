class consoleHello extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Hello everyone from the console")
    }
}

customElements.define("console-hello", consoleHello);