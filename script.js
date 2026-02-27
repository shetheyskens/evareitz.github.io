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
    voixdestras: {
        title: "Voix de Strasbourg",
        year: "2025",
        categories: ["video"],
        description: "",
        softwares: "[after effects] [procreate]",
        images: ["images/voix-de-stras-1.png"]
    },
    cmoncafe: {
        title: "C'mon Café",
        year: "2025",
        categories: ["branding"],
        description: "",
        softwares: "[illustrator] [procreate] [blender]",
        images: ["images/c-mon-café-2.png"]
    },
    paspresse: {
        title: "Pas Pressé",
        year: "2024",
        categories: ["branding"],
        description: "",
        softwares: "[illustrator]",
        images: ["images/pas-pressé-1.png"]
    },
    ornement: {
        title: "Ornement",
        year: "2024",
        categories: ["object"],
        description: "",
        softwares: "[illustrator] [photoshop]",
        images: ["images/ornement-1.jpg"]
    },
    datamoshing: {
        title: "Datamoshing",
        year: "2024",
        categories: ["experimentations"],
        description: "",
        softwares: "[touch designer]",
        images: ["images/datamoshing-2.jpg"]
    },
    datamoshing2: {
        title: "Datamoshing 2",
        year: "2024",
        categories: ["experimentations"],
        description: "",
        softwares: "[touch designer]",
        images: ["images/datamoshing-1.jpg"]
    },
    olaradio: {
        title: "Ola Radio",
        year: "2024",
        categories: ["web"],
        description: "",
        softwares: "[figma]",
        images: ["images/ola-radio-2.png"]
    },
    projet10: {
        title: "𝒲ear me ✄𓄧⚉ ∷⃝♪",
        mediums: "graphite sur calque",
        year: "2024",
        categories: ["illustration"],
        description: "",
        images: ["images/wear-me-3.png"]
    },
    projet11: {
        title: "Falaise",
        year: "2025",
        categories: ["illustration"],
        description: "",
        images: ["images/falaise-1.png"]
    },
    projet12: {
        title: "Fragile",
        year: "2025",
        categories: ["photography", "posters"],
        description: "Une exposition organisée par La Chambre en collaboration avec Eva Reitz. Fragile rassemble une série de photographies autour de la fragilité, où se croisent plumes, tissu déchiré et corps figé. Les images captent des instant où chaque matière semble sur le point de se rompre, de tomber ou de disparaître. Tout ici parle d’équilibres instables, d’apparitions brèves, de formes abîmées. L’exposition parle d’équilibres instables, d’apparitions brèves, de formes abîmées.",
        images: ["images/Screenshot 2026-02-23 at 10.37.32.png"]
    },
    lampe: {
        title: "lampe",
        mediums: "metal",
        year: "2024",
        categories: ["photography"],
        description: "",
        images: ["images/sarai-fenrings-1.jpg"]
    },
    projet13: {
        title: "Mix",
        year: "2024",
        categories: ["photography"],
        description: "",
        images: ["images/sarai-fenrings-1.jpg"]
    },
    projet14: {
        title: "Projet 14",
        year: "2024",
        categories: ["illustration"],
        description: "",
        images: ["images/Screenshot 2026-02-03 at 22.49.47.png"]
    }
};

let currentProject = null;
let currentImageIndex = 0;
let currentFilter = 'all'; // Filtre actuel

//■■■ SYSTÈME DE FILTRE ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

function filterProjects(category) {
    currentFilter = category;

    // Mettre à jour les boutons actifs
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');

    // Filtrer les images du carousel
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

function showInfo(projectId) {
    const project = projectsData[projectId];
    const infoDiv = document.getElementById('project-info');
    const imagesContainer = document.getElementById('info-images');

    currentProject = projectId;

    document.getElementById('info-title').textContent = project.title;
    document.getElementById('info-mediums').textContent = project.mediums;
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
            img.onclick = () => openLightbox(index);
            imagesContainer.appendChild(img);
        });
    }

    infoDiv.classList.add('active');
    imagesContainer.classList.add('active');
}

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

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-prev').addEventListener('click', () => changeImage(-1));
document.querySelector('.lightbox-next').addEventListener('click', () => changeImage(1));

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('projects-preview') &&
        !document.getElementById('project-info').contains(e.target) &&
        !document.getElementById('info-images').contains(e.target)) {
        document.getElementById('project-info').classList.remove('active');
        document.getElementById('info-images').classList.remove('active');
    }
});

//■■■ P5.JS ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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