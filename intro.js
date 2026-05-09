(function () {

    var keyEl      = document.getElementById('key-img');
    var lockEl     = document.getElementById('lock');
    var lockZone   = document.getElementById('lock-zone');
    var keyTurning = document.getElementById('key-turning');
    var hintEl     = document.getElementById('hint');
    var introScene = document.getElementById('intro-scene');
    var loadScreen = document.getElementById('loading-screen');
    var doorLeft   = document.getElementById('door-left');
    var doorRight  = document.getElementById('door-right');

    var isDragging = false;
    var startMouseX = 0, startMouseY = 0;
    var startElemX  = 0, startElemY  = 0;
    var keyUsed = false;

    keyEl.style.position = 'fixed';
    keyEl.style.right    = '80px';
    keyEl.style.bottom   = '80px';
    keyEl.style.left     = 'auto';
    keyEl.style.top      = 'auto';

    keyEl.querySelector('img').addEventListener('dragstart', function(e){ e.preventDefault(); });

    keyEl.addEventListener('mousedown', function (e) {
        if (keyUsed) return;
        e.preventDefault();
        var rect = keyEl.getBoundingClientRect();
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        startElemX  = rect.left;
        startElemY  = rect.top;
        keyEl.style.left   = rect.left + 'px';
        keyEl.style.top    = rect.top  + 'px';
        keyEl.style.right  = 'auto';
        keyEl.style.bottom = 'auto';
        isDragging = true;
        keyEl.classList.add('dragging');
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup',   onMouseUp);
    });

    function onMouseMove(e) {
        if (!isDragging) return;
        var dx = e.clientX - startMouseX;
        var dy = e.clientY - startMouseY;
        keyEl.style.left = (startElemX + dx) + 'px';
        keyEl.style.top  = (startElemY + dy) + 'px';
        checkProximity(e.clientX, e.clientY);
    }

    function onMouseUp(e) {
        if (!isDragging) return;
        isDragging = false;
        keyEl.classList.remove('dragging');
        lockZone.classList.remove('active');
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup',   onMouseUp);
        checkDrop(e.clientX, e.clientY);
    }

    keyEl.addEventListener('touchstart', function (e) {
        if (keyUsed) return;
        e.preventDefault();
        var touch = e.touches[0];
        var rect  = keyEl.getBoundingClientRect();
        startMouseX = touch.clientX;
        startMouseY = touch.clientY;
        startElemX  = rect.left;
        startElemY  = rect.top;
        keyEl.style.left   = rect.left + 'px';
        keyEl.style.top    = rect.top  + 'px';
        keyEl.style.right  = 'auto';
        keyEl.style.bottom = 'auto';
        isDragging = true;
        keyEl.classList.add('dragging');
        document.addEventListener('touchmove', onTouchMove, { passive: false });
        document.addEventListener('touchend',  onTouchEnd);
    }, { passive: false });

    function onTouchMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        var touch = e.touches[0];
        var dx = touch.clientX - startMouseX;
        var dy = touch.clientY - startMouseY;
        keyEl.style.left = (startElemX + dx) + 'px';
        keyEl.style.top  = (startElemY + dy) + 'px';
        checkProximity(touch.clientX, touch.clientY);
    }

    function onTouchEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        keyEl.classList.remove('dragging');
        lockZone.classList.remove('active');
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend',  onTouchEnd);
        var touch = e.changedTouches[0];
        checkDrop(touch.clientX, touch.clientY);
    }

    function checkProximity(cx, cy) {
        var lockRect = lockEl.getBoundingClientRect();
        var lockCX   = lockRect.left + lockRect.width  / 2;
        var lockCY   = lockRect.top  + lockRect.height / 2;
        var dist     = Math.hypot(cx - lockCX, cy - lockCY);
        if (dist < 110) {
            lockZone.classList.add('active');
        } else {
            lockZone.classList.remove('active');
        }
    }

    function checkDrop(cx, cy) {
        var lockRect = lockEl.getBoundingClientRect();
        var lockCX   = lockRect.left + lockRect.width  / 2;
        var lockCY   = lockRect.top  + lockRect.height / 2;
        var dist     = Math.hypot(cx - lockCX, cy - lockCY);
        if (dist < 90) {
            triggerUnlock();
        } else {
            keyEl.style.left   = 'auto';
            keyEl.style.top    = 'auto';
            keyEl.style.right  = '80px';
            keyEl.style.bottom = '80px';
        }
    }
function triggerUnlock() {
    if (keyUsed) return;
    keyUsed = true;
    keyEl.style.display  = 'none';
    hintEl.style.opacity = '0';

    var video = document.getElementById('door-video');
    video.style.display = 'block';
    lockEl.style.zIndex = '100';

    var disappearAt = 1.95;

    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= disappearAt) {
            lockEl.style.display = 'none';
        }
    });

    function onVideoEnd() {
        introScene.style.display = 'none';
        loadScreen.classList.add('visible');
        setTimeout(function () {
            loadScreen.classList.remove('visible');
            setTimeout(function () {
                document.body.classList.add('intro-done');
            }, 600);
        }, 2200);
    }

    video.addEventListener('ended', onVideoEnd);
    video.addEventListener('canplaythrough', function() {
        video.play();
    }, { once: true });
    video.load();
}
})();