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

/*




const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const imageOnView = document.querySelector("#banner > img");
const textOnView = document.querySelector("#banner > p");
const numberSlide = slides.length;
let i = 0;

function showDots() {
  const dots = document.querySelector(".dots");
  for (let a = 0; a < numberSlide; a++) {
    const dot = document.querySelector(".dot");
    dot.id = "span" + a;
    dot.addEventListener("click", function (event) {
      i = Number(event.target.id.replace("span", ""));
      showSlide();
    });
    dots.appendChild(dot);
    if (a == 0) {
      dots.children[a].classList.add("dot_selected");
    }
  }
}

showDots();

function selected() {
  const dot = document.getElementsByClassName("dot");
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove("dot_selected");
  }
  dot[i].classList.add("dot_selected");
}
function showSlide() {
  imageOnView.src = `./assets/images/slideshow/${slides[i].image}`;
  textOnView.innerHTML = slides[i].tagLine;
  selected();
}
showSlide();
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

startTimeout(); */
