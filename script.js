//■■■ DETAILS DES PROJETS ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const projectsData = {
    femmesdecinema: {
        title: "Femmes de cinéma",
        year: "2025",
        description: "Concevoir la mise en page d’un hors-série des Cahiers du Cinéma dédié aux portraits de réalisatrices, en traduisant graphiquement la singularité de chaque parcours.",
        intention: "Projet éditorial explorant la déconstruction des codes patriarcaux du cinéma à travers une mise en page expérimentale, utilisant l’asymétrie, la fragmentation et l’interaction. La forme graphique sert de langage pour questionner, renouveler et reconfigurer les récits et les normes visuelles.",
        softwares: "[indesign] [photoshop]",
        images: ["images/Femmes-de-cinema-image-1.png", "images/Femmes-de-cinema-image-2.png", "images/Femmes-de-cinema-image-3.png", "images/Femmes-de-cinema-image-4.png", "images/Femmes-de-cinema-image-2.png", "images/Femmes-de-cinema-image-2.png", "images/Femmes-de-cinema-image-2.png"]
    },
    femmes2: {
        title: "Femmes de cinéma - Image 2",
        year: "2026",
        description: "Portraits de réalisatrices"
    },
    waronscreen: {
        title: "War on screen",
        year: "2025",
        description: "L'équipe WOS vous invite à réfléchir à la nouvelle identité visuelle du festival à travers la création de l'affiche de la 14e édition. Elle sera exposée lors de l'édition 2026.",
        intention: "L'affiche interroge le pouvoir de l'image comme acte de mémoire, capable d'immortaliser des vies menacées de disparition. La joie et l'innocence des enfants, figées dans la lumière de la projection, subsistent face à un effacement progressif suggéré par les particules.",
        softwares: "[illustrator] [photoshop]",
        images: ["images/war-on-screen-1.png", "images/c mon cafe.jpg"]
    }
};

let currentProject = null;
let currentImageIndex = 0;

function showInfo(projectId) {
    const project = projectsData[projectId];
    const infoDiv = document.getElementById('project-info');
    const imagesContainer = document.getElementById('info-images');
    
    currentProject = projectId; // Sauvegarder le projet actuel
    
    document.getElementById('info-title').textContent = project.title;
    document.getElementById('info-year').textContent = project.year;
    document.getElementById('info-description').textContent = project.description;
    document.getElementById('info-intention').textContent = project.intention;
    document.getElementById('info-softwares').textContent = project.softwares;
    
    imagesContainer.innerHTML = '';
    if (project.images && project.images.length > 0) {
        project.images.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = project.title;
            img.onclick = () => openLightbox(index); // Ouvrir la lightbox au clic
            imagesContainer.appendChild(img);
        });
    }
    
    infoDiv.classList.add('active');
    imagesContainer.classList.add('active');
}





//■■■ LIGHTBOX ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// Ouvrir la lightbox
function openLightbox(imageIndex) {
    if (!currentProject) return;
    
    const project = projectsData[currentProject];
    if (!project.images || project.images.length === 0) return;
    
    currentImageIndex = imageIndex;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    lightboxImage.src = project.images[currentImageIndex];
    lightbox.classList.add('active');
}

// Fermer la lightbox
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Navigation dans la lightbox
function changeImage(direction) {
    if (!currentProject) return;
    
    const project = projectsData[currentProject];
    if (!project.images || project.images.length === 0) return;
    
    currentImageIndex += direction;
    
    // Boucler : revenir au début ou à la fin
    if (currentImageIndex < 0) {
        currentImageIndex = project.images.length - 1;
    } else if (currentImageIndex >= project.images.length) {
        currentImageIndex = 0;
    }
    
    document.getElementById('lightbox-image').src = project.images[currentImageIndex];
}

// Event listeners pour la lightbox
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-prev').addEventListener('click', () => changeImage(-1));
document.querySelector('.lightbox-next').addEventListener('click', () => changeImage(1));

// Fermer avec Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});

// Fermer en cliquant en dehors de l'image
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

// Fermer les infos en cliquant ailleurs
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('projects-preview') && 
        !document.getElementById('project-info').contains(e.target) &&
        !document.getElementById('info-images').contains(e.target)) {
        document.getElementById('project-info').classList.remove('active');
        document.getElementById('info-images').classList.remove('active');
    }
});

// p5.js code pour le dessin
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    strokeWeight(0.5);
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





//■■■ POP-UPS ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

// Ouvrir la pop-up contact
function openContactPopup() {
    document.getElementById('contact-popup').classList.add('active');
}

// Fermer la pop-up contact
function closeContactPopup() {
    document.getElementById('contact-popup').classList.remove('active');
}

// Ouvrir la pop-up about
function openAboutPopup() {
    document.getElementById('about-popup').classList.add('active');
}

// Fermer la pop-up about
function closeAboutPopup() {
    document.getElementById('about-popup').classList.remove('active');
}

// Fermer avec Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeContactPopup();
        closeAboutPopup();
    }
});

// Drag & drop pour TOUTES les fenêtres
document.addEventListener('DOMContentLoaded', () => {
    const windowContainers = document.querySelectorAll('.window-container-contact, .window-container-about');
    
    windowContainers.forEach(windowContainer => {
        const windowHeader = windowContainer.querySelector('.window-header');
        let isDragging = false;
        let initialX, initialY;

        windowHeader?.addEventListener('mousedown', (e) => {
            isDragging = true;
            initialX = e.clientX - (windowContainer.offsetLeft || 0);
            initialY = e.clientY - (windowContainer.offsetTop || 0);
            
            // Empêcher la sélection de texte pendant le drag
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                e.preventDefault();
                const currentX = e.clientX - initialX;
                const currentY = e.clientY - initialY;
                
                windowContainer.style.position = 'absolute';
                windowContainer.style.left = currentX + 'px';
                windowContainer.style.top = currentY + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    });
});