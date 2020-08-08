const prev = document.getElementById("prev");
const next = document.getElementById("next");
const firstSlide = document.getElementById("first-slide");
const secondSlide = document.getElementById("second-slide");

prev.addEventListener("click", () => {
  secondSlide.classList.toggle("show");
  firstSlide.classList.toggle("hide");
});

next.addEventListener("click", () => {
  secondSlide.classList.toggle("show");
  firstSlide.classList.toggle("hide");
});
