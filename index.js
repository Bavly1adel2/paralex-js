document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        if (document.documentElement.scrollTop > 10) {
            document.getElementById('nav').classList.add('shrink');
        } else {
            document.getElementById('nav').classList.remove('shrink');
        }
    });
});
