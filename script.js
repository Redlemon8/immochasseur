let lastScrollTop = 0;
const banner = document.getElementById('banner');
const form = document.getElementById('myForm');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYoffset || this.document.documentElement.scrollTop;
    if (scrollTop <= 0) {
        banner.style.top = '0';
        banner.style.opacity = '1';
    } else if (scrollTop > lastScrollTop) {
        banner.style.top = '0';
        banner.style.opacity = '0'
    } else {
        banner.style.top = '0';
        banner.style.opacity = '1';
    }
    lastScrollTop = scrollTop;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Votre message a été envoyé avec succés !');
});