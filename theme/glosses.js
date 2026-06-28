// Kindle-style tap-to-show gloss bubbles on mobile
document.addEventListener('click', function (e) {
    var target = e.target.closest('.gloss');
    document.querySelectorAll('.gloss.active').forEach(function (el) {
        if (el !== target) el.classList.remove('active');
    });
    if (target) target.classList.toggle('active');
});
