window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const body = document.body;

    // Déclenche la transition après 200 pixels de défilement
    if (scrollPosition > 200) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});
