

const navbar = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#1b1d1f";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

const fadeInElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  fadeInElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.add("visible");
    }
  });
});

const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  backToTop.style.display = window.scrollY > 200 ? "flex" : "none";
};

backToTop.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
