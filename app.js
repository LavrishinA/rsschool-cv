const sections = document.querySelectorAll(".section");
const allSections = document.querySelector(".main-content");
const sectBtns = document.querySelector(".controls");
const sectBtn = document.querySelectorAll(".control");

sectBtns.addEventListener("click", function (e) {
  //buttons active class
  const clicked = e.target.closest(".control");
  if (!clicked) return;
  sectBtn.forEach((btn) => btn.classList.remove("active-btn", "active"));
  clicked.classList.add("active-btn", "active");

  //sections active class
  const id = e.target.dataset.id;
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  const activeSection = document.getElementById(id);
  activeSection.classList.add("active");
  console.log(id);
});
