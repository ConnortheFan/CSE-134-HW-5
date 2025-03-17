class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const picture = this.getAttribute('picture');
        const alt = this.getAttribute('alt') || 'Project Image';
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const link = this.getAttribute('link');

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    margin: 16px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                }
                .card h2 {
                    margin: 0 0 8px;
                    font-size: 1.5em;
                }
                .card h2 a {
                    text-decoration: none;
                    color: inherit;
                }
                .card p {
                    margin: 0;
                    color: #666;
                }
                .card .content {
                    flex: 1;
                }
                .card picture {
                    margin-left: 16px;
                    flex: 0 0 25%; /* Ensure the picture takes up 25% of the card's width */
                }
                .card picture img {
                    width: 100%;
                    height: auto;
                }
                .card .learn-more {
                    display: inline-block;
                    margin-top: 10px;
                }
                @media (max-width: 600px) {
                    .card {
                        flex-direction: column;
                    }
                    .card picture {
                        margin-left: 0;
                        margin-top: 16px;
                        flex: 0 0 100%; /* Ensure the picture takes up 100% of the card's width on small screens */
                    }
                }
            </style>
            <div class="card">
                <div class="content">
                    <h2><a href="${link}">${title}</a></h2>
                    <p>${description}</p>
                    <a href="${link}" class="learn-more">Learn More</a>
                </div>
                ${picture ? `<picture><img src="${picture}" alt="${alt}"></picture>` : ''}
            </div>
        `;
    }
}

customElements.define('project-card', ProjectCard);