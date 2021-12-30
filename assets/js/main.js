var lastScrollTop;
navbar = document.getElementById('custom-nav');
header = document.getElementById('header');
window.addEventListener('scroll', function() {
    

    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > lastScrollTop) {
        navbar.style.top = "-100px";
        header.style.background = "transparent";
    } else {
        navbar.style.top = "0";
        if (window.scrollY > 50) {
            header.style.background = "#101820";
            header.style.transition = "1s";
        } else {
            header.style.background = "transparent";
        }
    }
    lastScrollTop = scrolled;
})
