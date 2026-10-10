(function () {
  var r = document.documentElement,
    rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("th").onclick = function () {
    var d = r.dataset.theme
      ? r.dataset.theme === "dark"
      : !matchMedia("(prefers-color-scheme: light)").matches;
    r.dataset.theme = d ? "light" : "dark";
  };
  var ro = [
      "AI-powered web apps",
      "MERN stack products",
      "ML models in Python",
      "things people use",
    ],
    el = document.getElementById("ty"),
    i = 0,
    j = 0,
    del = false;
  (function tk() {
    var w = ro[i];
    if (rm) {
      el.textContent = w;
      return;
    }
    el.textContent = w.slice(0, j);
    if (!del && j < w.length) {
      j++;
      setTimeout(tk, 70);
    } else if (!del) {
      del = true;
      setTimeout(tk, 1500);
    } else if (j > 0) {
      j--;
      setTimeout(tk, 35);
    } else {
      del = false;
      i = (i + 1) % ro.length;
      setTimeout(tk, 300);
    }
  })();
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".rv").forEach(function (n, k) {
    n.style.transitionDelay = (k % 3) * 80 + "ms";
    io.observe(n);
  });
  document.querySelectorAll("[data-n]").forEach(function (n) {
    var t = +n.dataset.n,
      s = null;
    if (rm) {
      n.textContent = t;
      return;
    }
    function st(ts) {
      s = s || ts;
      var p = Math.min((ts - s) / 1200, 1);
      n.textContent = Math.round(t * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(st);
    }
    setTimeout(function () {
      requestAnimationFrame(st);
    }, 900);
  });
  var pg = document.getElementById("pg");
  addEventListener(
    "scroll",
    function () {
      var m = r.scrollHeight - innerHeight;
      pg.style.width = (m > 0 ? (scrollY / m) * 100 : 0) + "%";
    },
    { passive: true },
  );
})();
document.addEventListener("click", function (e) {
  var a = e.target.closest && e.target.closest('a[href^="#"]');
  if (!a) return;
  var id = a.getAttribute("href").slice(1),
    t = id ? document.getElementById(id) : document.body;
  if (!t) return;
  e.preventDefault();
  t.scrollIntoView({ behavior: "smooth", block: "start" });
});
(function () {
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  document.querySelectorAll(".tl").forEach(function (n) {
    io.observe(n);
  });
  var h = document.querySelector("header.top"),
    links = [].slice.call(document.querySelectorAll(".lk a")),
    secs = links.map(function (a) {
      return document.querySelector(a.getAttribute("href"));
    });
  function act() {
    h.classList.toggle("sc", scrollY > 20);
    var y = scrollY + innerHeight * 0.35,
      c = -1;
    secs.forEach(function (x, i) {
      if (x && x.offsetTop <= y) c = i;
    });
    links.forEach(function (a, i) {
      a.classList.toggle("on", i === c);
    });
  }
  addEventListener("scroll", act, { passive: true });
  act();
  var g = document.getElementById("gl");
  if (
    g &&
    matchMedia("(hover:hover)").matches &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    addEventListener(
      "pointermove",
      function (e) {
        g.style.left = e.clientX + "px";
        g.style.top = e.clientY + "px";
      },
      { passive: true },
    );
  }
})();
