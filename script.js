//■■■ DETAILS DES PROJETS ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const projectsData = {
    femmesdecinema: {
        title: "Femmes de cinéma",
        year: "2025",
        categories: ["books"],
        description: "Concevoir la mise en page d'un hors-série des Cahiers du Cinéma dédié aux portraits de réalisatrices, en traduisant graphiquement la singularité de chaque parcours.",
        intention: "Projet éditorial explorant la déconstruction des codes patriarcaux du cinéma à travers une mise en page expérimentale, utilisant l'asymétrie, la fragmentation et l'interaction. La forme graphique sert de langage pour questionner, renouveler et reconfigurer les récits et les normes visuelles.",
        softwares: "[indesign] [photoshop]",
        images: ["images/Femmes-de-cinema-image-1.png", "images/Femmes-de-cinema-image-2.png", "images/Femmes-de-cinema-image-3.png", "images/Femmes-de-cinema-image-4.png"]
    },
    waronscreen: {
        title: "War on screen",
        year: "2025",
        categories: ["posters"],
        description: "L'équipe WOS vous invite à réfléchir à la nouvelle identité visuelle du festival à travers la création de l'affiche de la 14e édition. Elle sera exposée lors de l'édition 2026.",
        intention: "L'affiche interroge le pouvoir de l'image comme acte de mémoire, capable d'immortaliser des vies menacées de disparition. La joie et l'innocence des enfants, figées dans la lumière de la projection, subsistent face à un effacement progressif suggéré par les particules.",
        softwares: "[illustrator] [photoshop]",
        images: ["images/war-on-screen-1.png", "images/war-on-screen-2.png"]
    },
        rapportdestage: {
        title: "Rapport de stage",
        year: "2026",
        categories: ["books"],
        description: "L'équipe WOS vous invite à réfléchir à la nouvelle identité visuelle du festival à travers la création de l'affiche de la 14e édition. Elle sera exposée lors de l'édition 2026.",
        intention: "L'affiche interroge le pouvoir de l'image comme acte de mémoire, capable d'immortaliser des vies menacées de disparition. La joie et l'innocence des enfants, figées dans la lumière de la projection, subsistent face à un effacement progressif suggéré par les particules.",
        softwares: "[illustrator] [photoshop]",
        images: ["images/rds-1.2.png", "images/war-on-screen-2.png"]
    },
    voixdestras: {
        title: "Voix de Strasbourg",
        year: "2026",
        categories: ["video"],
        softwares: "[after effects] [procreate]",
        images: ["images/voix-de-stras-1.png"]
    },
    cmoncafe: {
        title: "C'mon Café",
        year: "2026",
        categories: ["branding"],
        description: "Une start-up lance un nouveau coffret de café comprenant tous les objets et produits pour vivre une découverte gustative personnalisé.",
        intention: "Dans un contexte de surconsommation, le projet valorise l'artisanat et l'imperfection en s'inspirant des philosophies Mingei et Wabi-sabi. C mon café place le client au centre de la création de son mélange, faisant de chaque café un objet unique, humain et accessible.",
        softwares: "[blender] [photoshop] [illustrator]",
        images: ["images/c-mon-café-2.png"]
    },
    paspresse: {
        title: "Pas Pressé",
        year: "2026",
        categories: ["branding"],
        description: "Création de l'identité visuelle ainsi que de la modélisation.",
        intention: "Le design des bouteilles s'inspire des contenants médicaux pour inspirer confiance et légitimité, privilégiant un visuel d'expertise et de rigueur.",
        softwares: "[blender] [photoshop] [illustrator]",
        images: ["images/pas-pressé-1.png"]
    },
    ornement: {
        title: "Ornement",
        year: "2024",
        categories: ["object"],
        softwares: "[illustrator] [photoshop]",
        images: ["images/ornement-1.jpg"]
    },
    datamoshing: {
        title: "Datamoshing",
        year: "2026",
        categories: ["experimentations"],
        softwares: "[touch designer]",
        images: ["images/datamoshing-2.jpg"]
    },
    datamoshing2: {
        title: "Datamoshing 2",
        year: "2026",
        categories: ["experimentations"],
        softwares: "[touch designer]",
        images: ["images/datamoshing-1.jpg"]
    },
    olaradio: {
        title: "Ola Radio",
        year: "2025",
        categories: ["web"],
        description: "Adaptation d'un site web déjà existant dans un format responsive. Choix porté sur Ola Radio, une webradio indépendante marseillaise portée spécialisée dans la musique électronique.",
        softwares: "[figma]",
        images: ["images/ola-radio-2.png"]
    },
    projet10: {
        title: "𝒲ear me ✄𓄧⚉ ∷⃝♪",
        mediums: "graphite sur calque",
        year: "2025",
        categories: ["illustration"],
        images: ["images/wear-me-3.png"]
    },
    projet11: {
        title: "Falaise",
        year: "2026",
        categories: ["illustration"],
        images: ["images/falaise-1.png"]
    },
    projet12: {
        title: "Fragile",
        year: "2025",
        categories: ["photography", "posters"],
        description: "Une exposition organisée par La Chambre en collaboration avec Eva Reitz. Fragile rassemble une série de photographies autour de la fragilité, où se croisent plumes, tissu déchiré et corps figé. Les images captent des instant où chaque matière semble sur le point de se rompre, de tomber ou de disparaître. Tout ici parle d'équilibres instables, d'apparitions brèves, de formes abîmées. L'exposition parle d'équilibres instables, d'apparitions brèves, de formes abîmées.",
        images: ["images/Screenshot 2026-02-23 at 10.37.32.png"]
    },
    lampe: {
        title: "lampe",
        mediums: "metal",
        year: "2024",
        categories: ["photography"],
        description: "Fortement inspirée par le mouvement brutaliste, j'ai concu ma lampe avec une forme rappelant celle des poteaux électriques.",
        softwares: "[indesign] [photoshop] [blender]",
        images: ["images/sarai-fenrings-1.jpg"]
    },
    projet13: {
        title: "Mix",
        year: "2024",
        categories: ["photography"],
        description: "Shooting pour une cover d'un DJ set de cinq DJ strasbourgeois dans lequel j'ai joué le rôle d'assistante lumière et de créatrice de contenu pour les réseaux sociaux.",
        softwares: "[figma]",
        images: ["images/sarai-fenrings-1.jpg"]
    }
};

let currentProject = null;
let currentImageIndex = 0;
let currentFilter = 'all';
let isPinned = false; // Nouveau : savoir si on a cliqué pour "épingler" l'info

//■■■ SYSTÈME DE FILTRE ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
function filterProjects(category) {
    currentFilter = category;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');

    const allImages = document.querySelectorAll('.projects-preview');

    allImages.forEach(img => {
        const projectId = img.getAttribute('data-project-id');
        const project = projectsData[projectId];

        if (category === 'all' || (project.categories && project.categories.includes(category))) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

//■■■ AFFICHAGE DES INFOS ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
function showInfo(projectId, isClick = false) {
    const project = projectsData[projectId];
    
    if (!project) {
        console.error('Projet non trouvé:', projectId);
        return;
    }
    
    // Si c'est un clic, on épingle l'info
    if (isClick) {
        isPinned = true;
    }
    
    const infoDiv = document.getElementById('project-info');
    const imagesContainer = document.getElementById('info-images');
    
    currentProject = projectId;
    
    // Gérer l'état actif des images
    document.querySelectorAll('.projects-preview').forEach(img => {
        img.classList.remove('active');
    });
    
    const selectedImage = document.querySelector(`[data-project-id="${projectId}"]`);
    if (selectedImage) {
        selectedImage.classList.add('active');
    }
    
    // Remplir les infos
    const titleElement = document.getElementById('info-title');
    const mediumsElement = document.getElementById('info-mediums');
    const yearElement = document.getElementById('info-year');
    const descElement = document.getElementById('info-description');
    const intentionElement = document.getElementById('info-intention');
    const softwaresElement = document.getElementById('info-softwares');
    
    if (titleElement) titleElement.textContent = project.title || '';
    if (mediumsElement) mediumsElement.textContent = project.mediums || '';
    if (yearElement) yearElement.textContent = project.year || '';
    if (descElement) descElement.textContent = project.description || '';
    if (intentionElement) intentionElement.textContent = project.intention || '';
    if (softwaresElement) softwaresElement.textContent = project.softwares || '';
    
    // Remplir les images
    imagesContainer.innerHTML = '';
    if (project.images && project.images.length > 0) {
        project.images.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = project.title;
            img.onclick = () => openLightbox(index);
            imagesContainer.appendChild(img);
        });
    }
    
    infoDiv.classList.add('active');
    imagesContainer.classList.add('active');
}

function hideInfo() {
    // Ne cacher que si ce n'est pas épinglé
    if (!isPinned) {
        document.getElementById('project-info').classList.remove('active');
        document.getElementById('info-images').classList.remove('active');
        
        document.querySelectorAll('.projects-preview').forEach(img => {
            img.classList.remove('active');
        });
    }
}

// Ajouter les événements hover et click
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.projects-preview');
    
    projectImages.forEach(img => {
        // Hover : afficher temporairement
        img.addEventListener('mouseenter', () => {
            if (!isPinned) { // Seulement si pas épinglé
                const projectId = img.getAttribute('data-project-id');
                if (projectId) {
                    showInfo(projectId, false);
                }
            }
        });
        
img.addEventListener('mouseleave', () => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) {
        hideInfo();
    }
});
        
// Click : afficher les infos + ouvrir la lightbox
img.addEventListener('click', () => {
    const projectId = img.getAttribute('data-project-id');
    if (projectId) {
        showInfo(projectId);
        currentProject = projectId;
        currentImageIndex = 0;
        openLightbox(0);
    }
});
    });
    
    // Cliquer en dehors pour désépingler
    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('projects-preview') && 
            !document.getElementById('project-info').contains(e.target) &&
            !document.getElementById('info-images').contains(e.target)) {
            
            isPinned = false;
            hideInfo();
        }
    });
});

//■■■ LIGHTBOX ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function changeImage(direction) {
    if (!currentProject) return;

    const project = projectsData[currentProject];
    if (!project.images || project.images.length === 0) return;

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = project.images.length - 1;
    } else if (currentImageIndex >= project.images.length) {
        currentImageIndex = 0;
    }

    document.getElementById('lightbox-image').src = project.images[currentImageIndex];
}

document.querySelector('.lightbox-close').addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
});

document.querySelector('.lightbox-prev').addEventListener('click', (e) => {
    e.stopPropagation();
    changeImage(-1);
});

document.querySelector('.lightbox-next').addEventListener('click', (e) => {
    e.stopPropagation();
    changeImage(1);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

//■■■ P5.JS ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    strokeWeight(0.75);
    stroke('#ff6363');
}

function draw() {
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
    if (key === 'c' || key === 'C') {
        background(255);
    }
}