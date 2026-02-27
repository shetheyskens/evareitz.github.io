// contact-messy-text.js
function openContactPopup() {
    document.getElementById('contact-popup').classList.add('active');
}

function closeContactPopup() {
    document.getElementById('contact-popup').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const contactPopup = document.getElementById('contact-popup');
    if (!contactPopup) return;

    const contactTexts = contactPopup.querySelectorAll('.window-content p');
    
    contactTexts.forEach(paragraph => {
        const fullText = paragraph.innerText.trim();
        paragraph.innerHTML = '';
        
        fullText.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.dataset.vx = 0;
            span.dataset.vy = 0;
            span.dataset.offsetX = 0;
            span.dataset.offsetY = 0;
            paragraph.appendChild(span);
        });
    });

    const getSpans = () => contactPopup.querySelectorAll('.window-content span');
    const repulseRadius = 15;

    contactPopup.addEventListener('mousemove', (e) => {
        const spans = getSpans();
        spans.forEach(span => {
            const rect = span.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < repulseRadius) {
                const force = (repulseRadius - dist) / repulseRadius;
                const angle = Math.atan2(dy, dx);
                let vx = parseFloat(span.dataset.vx) - Math.cos(angle) * force * 15;
                let vy = parseFloat(span.dataset.vy) - Math.sin(angle) * force * 15;
                let offsetX = parseFloat(span.dataset.offsetX) + vx;
                let offsetY = parseFloat(span.dataset.offsetY) + vy;

                span.dataset.vx = vx;
                span.dataset.vy = vy;
                span.dataset.offsetX = offsetX;
                span.dataset.offsetY = offsetY;

                span.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            }
        });
    });

    // Bouton Reset
    const resetButton = document.getElementById('reset-contact-messy');
    resetButton?.addEventListener('click', () => {
        const spans = getSpans();
        spans.forEach(span => {
            span.dataset.vx = 0;
            span.dataset.vy = 0;
            span.dataset.offsetX = 0;
            span.dataset.offsetY = 0;
            span.style.transform = 'translate(0px, 0px)';
        });
    });

    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactPopup.classList.contains('active')) {
            closeContactPopup();
        }
    });
});


// about-messy-text.js
function openAboutPopup() {
    document.getElementById('about-popup').classList.add('active');
}

function closeAboutPopup() {
    document.getElementById('about-popup').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const aboutPopup = document.getElementById('about-popup');
    if (!aboutPopup) return;

    const aboutTexts = aboutPopup.querySelectorAll('.window-content p');
    
    aboutTexts.forEach(paragraph => {
        const fullText = paragraph.innerText.trim();
        paragraph.innerHTML = '';
        
        fullText.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.dataset.vx = 0;
            span.dataset.vy = 0;
            span.dataset.offsetX = 0;
            span.dataset.offsetY = 0;
            paragraph.appendChild(span);
        });
    });

    const getSpans = () => aboutPopup.querySelectorAll('.window-content span');
    const repulseRadius = 15;

    aboutPopup.addEventListener('mousemove', (e) => {
        const spans = getSpans();
        spans.forEach(span => {
            const rect = span.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < repulseRadius) {
                const force = (repulseRadius - dist) / repulseRadius;
                const angle = Math.atan2(dy, dx);
                let vx = parseFloat(span.dataset.vx) - Math.cos(angle) * force * 15;
                let vy = parseFloat(span.dataset.vy) - Math.sin(angle) * force * 15;
                let offsetX = parseFloat(span.dataset.offsetX) + vx;
                let offsetY = parseFloat(span.dataset.offsetY) + vy;

                span.dataset.vx = vx;
                span.dataset.vy = vy;
                span.dataset.offsetX = offsetX;
                span.dataset.offsetY = offsetY;

                span.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            }
        });
    });

    // Bouton Reset
    const resetButton = document.getElementById('reset-about-messy');
    resetButton?.addEventListener('click', () => {
        const spans = getSpans();
        spans.forEach(span => {
            span.dataset.vx = 0;
            span.dataset.vy = 0;
            span.dataset.offsetX = 0;
            span.dataset.offsetY = 0;
            span.style.transform = 'translate(0px, 0px)';
        });
    });

    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && aboutPopup.classList.contains('active')) {
            closeAboutPopup();
        }
    });
});