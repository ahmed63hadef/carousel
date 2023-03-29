const slides = [
  {
    image: "Joconde.jpeg",
  },
  {
    image: "American ghotic.jpeg",
  },
  {
    image: "La cène.jpeg",
  },
  {
    image: "Guerinica.jpeg",
  },
  {
    image: "La jeune fille a la perle.jpeg",
  },
  {
    image: "La naissance de venus.jpeg",
  },
  {
    image: "La nuit etoilee.jpeg",
  },
  {
    image: "La persistance de la memoire.jpeg",
  },
  {
    image: "La ronde de nuit.jpeg",
  },
  {
    image: "Le baiser.jpeg",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const imageOnView = document.querySelector(".imagePrincipal");
let numberSlide = slides.length;
let i = 0;

function showSlide() {
  imageOnView.src = `./images/${slides[i].image}`;
}
showSlide();

arrowRight.addEventListener("click", function () {
  clearTimeout(timeoutId);
  if (i == numberSlide - 1) {
    i = 0;
  } else {
    i++;
  }
  showSlide();
  startTimeout();
});

arrowLeft.addEventListener("click", function () {
  clearTimeout(timeoutId);
  if (i == 0) {
    i = numberSlide - 1;
  } else {
    i--;
  }
  showSlide();
  startTimeout();
});

// boucle infinie au temps //
let timeoutId;

function startTimeout() {
  timeoutId = setTimeout(function () {
    if (i == numberSlide - 1) {
      i = 0;
    } else {
      i++;
    }
    showSlide();
    startTimeout();
  }, 5000);
}

startTimeout();
