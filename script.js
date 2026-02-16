// Données des projets
const projects = {
    waronscreen: {
        title: "war on screen",
        year: "2026",
        description: "this project reimagines the spray, a quick, unpredictable street art gesture, in digital and augmented reality.particles move and transform, creating an interactive space where sound and motion collide."
    },
    femmesdecinema: {
        title: "femmes de cinéma",
        year: "2026",
        description: "Description de angel candles..."
    },
    projet3: {
        title: "projet 3",
        year: "2025",
        description: "Description de worldisaster..."
    },
    projet4: {
        title: "projet 4",
        year: "2025",
        description: "Description de data synesthesia..."
    }
    // Ajoutez vos autres projets ici
};

// Fonction pour afficher la description d'un projet
function showProject(projectId) {
    const project = projects[projectId];
    const descriptionDiv = document.getElementById('project-description');

    descriptionDiv.innerHTML = `
        <h2>${project.title}</h2>
        <p style="color: #666; font-style: italic; margin: 10px 0;">${project.year}</p>
        <p>${project.description}</p>
    `;
}

// p5.js code pour le dessin
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    strokeWeight(2);
    stroke(0);
}

function draw() {
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
    if (key === 'c' || key === 'C') {
        background(255);
    }
}