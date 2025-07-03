// Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});

// Optional: close menu when a link is clicked (on small screens)
document.querySelectorAll(".nav-list li a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navList.classList.add("hidden");
    }
  });
});

// search
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const cards = document.querySelectorAll(".hero-card");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach((card) => {
      const name = card.querySelector("p").textContent.toLowerCase();
      card.style.display = name.includes(searchTerm) ? "flex" : "none";
    });
  });
});

// filter
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const cards = document.querySelectorAll(".hero-card");
  const filterButtons = document.querySelectorAll(".filter-btn");

  let activeFilter = "all";

  function filterCards() {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach((card) => {
      const name = card.querySelector("p").textContent.toLowerCase();
      const universe = card.getAttribute("data-universe");

      const matchesSearch = name.includes(searchTerm);
      const matchesFilter = activeFilter === "all" || universe === activeFilter;

      card.style.display = matchesSearch && matchesFilter ? "flex" : "none";
    });
  }

  searchInput.addEventListener("input", filterCards);

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.getAttribute("data-filter");

      // Optional: highlight active button
      filterButtons.forEach((b) =>
        b.classList.remove("bg-opacity-100", "ring")
      );
      btn.classList.add("bg-opacity-100", "ring", "ring-white");

      filterCards();
    });
  });
});
