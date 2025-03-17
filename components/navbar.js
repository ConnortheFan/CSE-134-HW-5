
const links0 = `
    <ul class="navbar-main">
        <li><a href="./index.html">Home</a></li>

        <li class="dropdown">
            <a href="./projects/index.html" class="dropdown-btn">Projects</a>

            <ul class="dropdown-content">
                <li><a href="./projects/sudokusolver.html">Sudoku Solver</a></li>
                <li><a href="./projects/project2.html">Project 2</a></li>
            </ul>
        </li>

        <li class="dropdown">
            <a href="./labs/index.html" class="dropdown-btn">Labs</a>
        
            <ul class="dropdown-content">
                <li><a href="./labs/lab1.html">Lab 1</a></li>
                <li><a href="./labs/lab2.html">Lab 2</a></li>
            </ul>
        </li>
        
        <li><a href="./aboutme.html">About Me</a></li>

        <li><a href="./contactme.html">Contact Me</a></li>

        <li><a href="./tags.html">Tags</a></li>
    </ul>
`

const links1 = `
    <ul class="navbar-main">
        <li><a href="../index.html">Home</a></li>

        <li class="dropdown">
            <a href="../projects/index.html" class="dropdown-btn">Projects</a>

            <ul class="dropdown-content">
                <li><a href="../projects/sudokusolver.html">Sudoku Solver</a></li>
                <li><a href="../projects/project2.html">Project 2</a></li>
            </ul>
        </li>

        <li class="dropdown">
            <a href="../labs/index.html" class="dropdown-btn">Labs</a>
        
            <ul class="dropdown-content">
                <li><a href="../labs/lab1.html">Lab 1</a></li>
                <li><a href="../labs/lab2.html">Lab 2</a></li>
            </ul>
        </li>
        
        <li><a href="../aboutme.html">About Me</a></li>

        <li><a href="../contactme.html">Contact Me</a></li>

        <li><a href="../tags.html">Tags</a></li>
    </ul>
`

class Navbar extends HTMLElement {
    constructor() {
        super();
        this.links = links0;
    }
    
    connectedCallback() {
        this.nested = this.getAttribute('data-nested');
        if (this.nested == "0") {
            this.links = links0;
        } else if (this.nested == "1") {
            this.links = links1;
        }
        this.innerHTML = `
            <nav class="navbar">
                <a href="./index.html" id="logo">ConnortheFan</a>
                <label for="menu" id="menu-label" tabindex="0">Menu</label>
                <input id="menu" type="checkbox">
                ${this.links}
                <label id="switch" class="switch">
                    <input type="checkbox" onchange="toggleTheme()" id="theme-toggle">
                    <span class="theme-toggle round"></span>
                </label>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', Navbar);