function scrollDown(targetId) {
  document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const slideInElements = document.querySelectorAll(".slide-in");

  function checkSlide() {
    var slideInAt;
    slideInElements.forEach((element) => {
      if (element.id === "projects") {
        slideInAt =
          window.scrollY + window.innerHeight - element.clientHeight / 2 + 750;
      } else {
        slideInAt =
          window.scrollY + window.innerHeight - element.clientHeight / 2;
      }
      const elementBottom = element.offsetTop + element.clientHeight;
      const isHalfShown = slideInAt > element.offsetTop;
      const isNotScrolledPast = window.scrollY < elementBottom;

      if (isHalfShown && isNotScrolledPast) {
        element.classList.add("in-view");
      } else {
        element.classList.remove("in-view");
      }
    });
  }

  checkSlide();

  window.addEventListener("scroll", checkSlide);
});
