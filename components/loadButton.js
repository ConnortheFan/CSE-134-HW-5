document.getElementById('load-local').addEventListener('click', loadLocalData);
document.getElementById('load-remote').addEventListener('click', loadRemoteData);

function loadLocalData() {
    const data = JSON.parse(localStorage.getItem('projectCards'));
    if (data) {
        populateProjectCards(data);
    } else {
        alert('No local data found.');
    }
}

function loadRemoteData() {
    fetch('https://api.jsonbin.io/b/your-jsonbin-id')
        .then(response => response.json())
        .then(data => {
            populateProjectCards(data);
        })
        .catch(error => {
            console.error('Error fetching remote data:', error);
        });
}

function populateProjectCards(data) {
    const container = document.getElementById('project-cards-container');
    container.innerHTML = ''; // Clear existing cards

    data.forEach(project => {
        const card = document.createElement('project-card');
        card.setAttribute('title', project.title);
        card.setAttribute('description', project.description);
        card.setAttribute('link', project.link);
        if (project.picture) {
            card.setAttribute('picture', project.picture);
            card.setAttribute('alt', project.alt || 'Project Image');
        }
        container.appendChild(card);
    });
}

// Example data to store in localStorage
const projectData = [
    {
        title: "Sudoku Solver",
        description: "This project was a personal project that I made to help teach people how to algorithmically solve Sudokus. When you run it, you should just input an unsolved Sudoku and it will output all the steps required to solve it. These steps will be detailed, so hopefully you are able to learn from them.",
        link: "sudokusolver.html",
        picture: "../assets/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.png",
        alt: "Sudoku from Wikipedia",
    },
    {
        title: "Project 2: WIP",
        description: "Placeholder project 2, not ready yet.",
        link: "project2.html",
        picture: "../assets/under-construction.jpg",
        alt: "Under Construction",
    }
];

// Store example data in localStorage for testing
localStorage.setItem('projectCards', JSON.stringify(projectData));