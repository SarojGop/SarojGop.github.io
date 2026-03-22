document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        var target = document.getElementById(href.substring(1));
        if (target) window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
        // Close mobile menu
        document.querySelector('.nav-links').classList.remove('open');
      }
    });
  });

  // Mobile menu
  var toggle = document.getElementById('nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.querySelector('.nav-links').classList.toggle('open');
    });
  }

  // Scroll spy
  window.addEventListener('scroll', function () {
    var pos = window.scrollY + 100;
    document.querySelectorAll('section[id]').forEach(function (sec) {
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
        document.querySelectorAll('.nav-links a').forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id);
        });
      }
    });
  });
});
