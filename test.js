document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const toc = document.getElementById('toc-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        toc.classList.toggle('active');
    });
});