(function () {
  'use strict';
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('nk-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  var tocLinks = document.querySelectorAll('[data-toc] a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove('is-active'); });
          var link = map[en.target.id];
          if (link) link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  var top = document.querySelector('[data-top]');
  if (top) {
    var check = function () { top.hidden = window.scrollY < 600; };
    window.addEventListener('scroll', check, { passive: true });
    check();
    top.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
