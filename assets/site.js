// The theme switch and the top bar's hairline. The page works without this
// file: it just stays light, with no line under the bar.
(function () {
  var root = document.documentElement;
  var key = 'bizcareers.theme';

  function set(theme) {
    if (theme === 'dark') root.dataset.theme = 'dark';
    else delete root.dataset.theme;
    var dark = theme === 'dark';
    document.querySelectorAll('.theme-btn').forEach(function (b) {
      b.setAttribute('aria-label', dark ? 'Switch to light' : 'Switch to dark');
      b.setAttribute('aria-pressed', String(dark));
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#0A1113' : '#F4F6F6');
  }

  set(root.dataset.theme === 'dark' ? 'dark' : 'light');

  document.querySelectorAll('.theme-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      set(next);
      try { localStorage.setItem(key, next); } catch (e) { /* Private window: not remembered. */ }
    });
  });

  var bar = document.querySelector('.bar');
  if (bar) {
    var onScroll = function () { bar.classList.toggle('is-scrolled', window.scrollY > 4); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
