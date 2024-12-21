// SMOOTH SCROLL
$(document).ready(function () {
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      1250
    );
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// WORD SUGGESTIONS
$(document).ready(function () {
  const suggestionsList = [
    "Home",
    "About",
    "Profile",
    "Skills",
    "Works",
    "Art",
    "Features",
    "Contact",
  ];

  const sectionMap = {
    Home: "#hero",
    Works: "#features",
    Art: "#features",
    Features: "#features",
    About: "#about",
    Profile: "#profile",
    Skills: "#profile",
    Contact: "#contact",
  };

  $("#search-bar").on("input", function () {
    const input = $(this).val().toLowerCase();
    const matches = suggestionsList.filter((word) =>
      word.toLowerCase().startsWith(input)
    );

    if (input && matches.length) {
      $("#suggestions").empty().show();
      matches.forEach((match) => {
        $("#suggestions").append(`<li class="list-group-item">${match}</li>`);
      });
    } else {
      $("#suggestions").hide();
    }
  });

  // ONCLICK SUGGESTION
  $(document).on("click", "#suggestions li", function () {
    const selectedWord = $(this).text();
    $("#search-bar").val(selectedWord);
    const sectionId = sectionMap[selectedWord];

    if (sectionId) {
      $("html, body").animate(
        {
          scrollTop: $(sectionId).offset().top,
        },
        1250
      );
    }

    $("#suggestions").hide();
  });

  // HIDE SUGGESTION
  $(document).on("click", function (e) {
    if (!$(e.target).closest("#search-bar").length) {
      $("#suggestions").hide();
    }
  });
});

// CHANGING TITLES
const titles = [
  "Code C.A.D.A.N.C.E.",
  "Racel C. Rivera",
  "IT Student",
  "Visual Designer",
  "Art Creator",
  "Passionate Cyclist",
  "Strategic Gamer",
  "Volunteer Scout",
];

let index = 0;

function updateTitle() {
  const dynamicText = document.querySelector(".dynamic-text");

  dynamicText.classList.remove("visible");

  setTimeout(() => {
    dynamicText.textContent = titles[index];
    dynamicText.classList.add("visible");
    index = (index + 1) % titles.length;
  }, 900);
}

setInterval(updateTitle, 2750);
updateTitle();

function openImage(element) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  const imageUrl = window
    .getComputedStyle(element)
    .backgroundImage.slice(5, -2);

  modalImage.src = imageUrl;

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("imageModal");

  modal.style.display = "none";

  document.body.style.filter = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert(
        `Thank you, ${name}! Your message has been received. I'll get back to you soon.`
      );

      form.reset();
    } else {
      alert("Please fill out all fields before submitting the form.");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dreamBikeCarousel = document.querySelector("#dream-bike .carousel");
  const slides = document.querySelectorAll("#dream-bike .slide");
  const totalSlides = slides.length;

  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = currentIndex * -100;
    dreamBikeCarousel.style.transform = `translateX(${offset}%)`;
  }

  setInterval(nextSlide, 5500);
});
