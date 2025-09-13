// Wähle alle Thumbnails und die Lightbox-Elemente aus
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

// Öffne die Lightbox und zeige das angeklickte Bild an
function openLightbox(index) {
    lightbox.style.display = 'flex';
    lightboxImg.src = thumbnails[index].src;
    currentIndex = index;
}

// Schließe die Lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Zeige das vorherige Bild an
function showPrevImage() {
    currentIndex = (currentIndex === 0) ? thumbnails.length - 1 : currentIndex - 1;
    lightboxImg.src = thumbnails[currentIndex].src;
}

// Zeige das nächste Bild an
function showNextImage() {
    currentIndex = (currentIndex === thumbnails.length - 1) ? 0 : currentIndex + 1;
    lightboxImg.src = thumbnails[currentIndex].src;
}

// Event-Listener für Thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => openLightbox(index));
});

// Event-Listener für Schließen der Lightbox
closeBtn.addEventListener('click', closeLightbox);

// Event-Listener für Navigation mit Pfeilen
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Schließen der Lightbox bei Klick außerhalb des Bildes
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
