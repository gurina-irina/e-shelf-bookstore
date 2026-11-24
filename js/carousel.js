document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("track");
  const carouselBox = document.getElementById("carousel");

  if (!track) return;

  const bestsellers = books.slice(0, 8);
  track.innerHTML = bestsellers
    .map((book) => createBookCard(book, { isCarousel: true }))
    .join("");

  const n = track.children.length;
  [...track.children].slice(0, 5).forEach((c) => {
    const k = c.cloneNode(true);
    k.setAttribute("aria-hidden", "true");
    track.append(k);
  });

  let i = 0,
    timer;

  const move = (anim = true) => {
    track.style.transition = anim ? "" : "none";
    track.style.transform = `translateX(-${i * track.children[0].offsetWidth}px)`;
    track.offsetWidth;
  };

  const fix = () => {
    if (i >= n) {
      i -= n;
      move(false);
    }
  };

  const next = () => {
    fix();
    i++;
    move();
  };
  const prev = () => {
    if (i <= 0) {
      i = n;
      move(false);
    }
    i--;
    move();
  };
  const auto = () => {
    clearInterval(timer);
    timer = setInterval(next, 2000);
  };

  track.addEventListener("transitionend", fix);
  document.getElementById("next").onclick = () => {
    next();
    auto();
  };
  document.getElementById("prev").onclick = () => {
    prev();
    auto();
  };
  carouselBox.onmouseenter = () => clearInterval(timer);
  carouselBox.onmouseleave = auto;
  window.addEventListener("resize", () => move(false));
  auto();
});
