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
const exampleData = [
    {
        title: 'Project 1',
        description: 'Description for project 1',
        link: 'https://example.com/project1',
        picture: 'https://example.com/project1.jpg',
        alt: 'Project 1 Image'
    },
    {
        title: 'Project 2',
        description: 'Description for project 2',
        link: 'https://example.com/project2',
        picture: 'https://example.com/project2.jpg',
        alt: 'Project 2 Image'
    }
];

// Store example data in localStorage for testing
localStorage.setItem('projectCards', JSON.stringify(exampleData));