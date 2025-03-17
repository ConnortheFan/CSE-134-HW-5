class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    margin: 16px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .card h2 {
                    margin: 0 0 8px;
                    font-size: 1.5em;
                }
                .card p {
                    margin: 0;
                    color: #666;
                }
            </style>
            <div class="card">
                <h2>${this.getAttribute('title')}</h2>
                <picture>
                    <img src=${this.getAttribute('picture')} alt=${this.getAttribute('alt')}>
                </picture>
                <p>${this.getAttribute('description')}</p>
                <a href=${this.getAttribute('link')}>Learn More</a>
            </div>
        `;
    }
}

customElements.define('project-card', ProjectCard);