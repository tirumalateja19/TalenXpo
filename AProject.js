document.querySelector(".search-btn").addEventListener("click", function () {
  alert("Search feature is currently not implemented.");
});
const panels = document.querySelectorAll(".panel");

// optional Changing cards
  const links = document.querySelectorAll(".optional-sidebar a");
  const cards = document.querySelectorAll(".optional-card");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevents the page from redirecting or reloading

      links.forEach((l) => l.classList.remove("optional-active"));
      this.classList.add("optional-active");

      cards.forEach((card) => card.classList.remove("optional-active"));

      const cardId = this.id + "-card";
      document.getElementById(cardId).classList.add("optional-active");
    });
  });

// Expanding cards
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
