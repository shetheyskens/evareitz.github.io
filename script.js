// Données des projets
const projects = {
    waronscreen: {
        title: "war on screen",
        year: "2026",
        images: "images/img1.png", // Chemin vers l'image
        description: "L’équipe WOS vous invite à réfléchir à la nouvelle identité visuelle du festival à travers la création de l’affiche de la 14e édition. Elle sera exposée lors de l’édition 2026.",
        intention: "L’affiche interroge le pouvoir de l’image comme acte de mémoire, capable d’immortaliser des vies menacées de disparition. La joie et l’innocence des enfants, figées dans la lumière de la projection, subsistent face à un effacement progressif suggéré par les particules."
    },
    femmesdecinema: {
        title: "femmes de cinéma",
        year: "2026",
        description: "Description"
    },
    projet3: {
        title: "projet 3",
        year: "2025",
        description: "Description"
    },
    projet4: {
        title: "projet 4",
        year: "2025",
        description: "Description"
    }
    // Ajoutez vos autres projets ici
};

// Fonction pour afficher la description d'un projet
function showProject(projectId) {
    const project = projects[projectId];
    const descriptionDiv = document.getElementById('project-description');
    
    descriptionDiv.innerHTML = `
        <h2 class="project-title">${project.title}</h2>
        <p class="project-year">${project.year}</p>
        <p class="project-desc">${project.description}</p>
        ${project.intention ? `<div class="project-intention">${project.intention}</div>` : ''}
        ${project.images ? `<img src="${project.images}" alt="${project.title}" class="project-image">` : ''}
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