window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.body.style.backgroundColor = `rgb(${scrollPosition % 255}, ${200 - scrollPosition % 255}, ${150})`;
});
