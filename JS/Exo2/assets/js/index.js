window.addEventListener('load', function() {
    const title = document.getElementById('title');
    setTimeout(() => {
        title.classList.add('show');
    }, 500); // Délai avant que le titre apparaisse
});