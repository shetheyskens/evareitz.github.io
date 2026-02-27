//■■■ POP-UPS AVEC REDIMENSIONNEMENT COMPLET ■■■■■■■■■■■■■■■■■■■■■■

function openContactPopup() {
    const popup = document.getElementById('contact-popup');
    const container = popup.querySelector('.window-container-contact');
    
    // Reset à la position et taille par défaut
    container.style.position = 'fixed';
    container.style.top = '100px';
    container.style.right = '40px';
    container.style.left = 'auto';
    container.style.bottom = 'auto';
    container.style.width = '35%';
    container.style.height = 'auto';
    container.style.minWidth = '300px';
    container.style.minHeight = '200px';
    
    popup.classList.add('active');
}

function closeContactPopup() {
    document.getElementById('contact-popup').classList.remove('active');
}

function openAboutPopup() {
    const popup = document.getElementById('about-popup');
    const container = popup.querySelector('.window-container-about');
    
    // Reset à la position et taille par défaut
    container.style.position = 'fixed';
    container.style.top = '65%';
    container.style.right = '40px';
    container.style.left = 'auto';
    container.style.bottom = 'auto';
    container.style.width = '100%';
    container.style.height = 'auto';
    container.style.minWidth = '300px';
    container.style.minHeight = '150px';
    
    popup.classList.add('active');
}

function closeAboutPopup() {
    document.getElementById('about-popup').classList.remove('active');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeContactPopup();
        closeAboutPopup();
    }
});

//■■■ DRAG & DROP ET RESIZE WINDOWS ■■■■■■■■■■■■■■■■■■■■■■■■■■
document.addEventListener('DOMContentLoaded', () => {
    const windowContainers = document.querySelectorAll('.window-container-contact, .window-container-about');
    
    windowContainers.forEach(windowContainer => {
        // DRAG & DROP
        const windowHeader = windowContainer.querySelector('.window-header');
        let isDragging = false;
        let initialX, initialY;

        windowHeader?.addEventListener('mousedown', (e) => {
            // Ne pas drag si on clique sur les boutons
            if (e.target.classList.contains('window-close')) return;
            
            isDragging = true;
            const rect = windowContainer.getBoundingClientRect();
            initialX = e.clientX - rect.left;
            initialY = e.clientY - rect.top;
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                e.preventDefault();
                const currentX = e.clientX - initialX;
                const currentY = e.clientY - initialY;
                
                windowContainer.style.left = currentX + 'px';
                windowContainer.style.top = currentY + 'px';
                windowContainer.style.right = 'auto';
                windowContainer.style.bottom = 'auto';
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // RESIZE HANDLES
        createResizeHandles(windowContainer);
    });
});

function createResizeHandles(windowEl) {
    // Créer les 8 poignées de redimensionnement
    const positions = [
        'top', 'right', 'bottom', 'left',
        'top-left', 'top-right', 'bottom-right', 'bottom-left'
    ];
    
    positions.forEach(pos => {
        const handle = document.createElement('div');
        handle.className = `resize-handle ${pos}`;
        windowEl.appendChild(handle);
        
        handle.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            e.preventDefault();
            
            const startX = e.clientX;
            const startY = e.clientY;
            const startWidth = windowEl.offsetWidth;
            const startHeight = windowEl.offsetHeight;
            const startLeft = windowEl.offsetLeft;
            const startTop = windowEl.offsetTop;
            
            const minWidth = 300;
            const minHeight = 150;
            
            function resize(eMove) {
                const deltaX = eMove.clientX - startX;
                const deltaY = eMove.clientY - startY;
                
                // Top
                if (pos.includes('top')) {
                    const newHeight = Math.max(minHeight, startHeight - deltaY);
                    windowEl.style.height = newHeight + 'px';
                    windowEl.style.top = (startTop + startHeight - newHeight) + 'px';
                }
                
                // Bottom
                if (pos.includes('bottom')) {
                    const newHeight = Math.max(minHeight, startHeight + deltaY);
                    windowEl.style.height = newHeight + 'px';
                }
                
                // Left
                if (pos.includes('left')) {
                    const newWidth = Math.max(minWidth, startWidth - deltaX);
                    windowEl.style.width = newWidth + 'px';
                    windowEl.style.left = (startLeft + startWidth - newWidth) + 'px';
                }
                
                // Right
                if (pos.includes('right')) {
                    const newWidth = Math.max(minWidth, startWidth + deltaX);
                    windowEl.style.width = newWidth + 'px';
                }
            }
            
            function stopResize() {
                document.removeEventListener('mousemove', resize);
                document.removeEventListener('mouseup', stopResize);
            }
            
            document.addEventListener('mousemove', resize);
            document.addEventListener('mouseup', stopResize);
        });
    });
}