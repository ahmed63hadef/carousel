const slides = [
  {
    image: "Joconde.jpeg",
    tagLine: "LA JOCONDE, DE LEONARDO DA VINCI",
    tagLine2:
      "Le portrait de Lisa Gherardini, épouse de Francesco del Giocondo, plus connue sous le nom de La Gioconda (La Joconde en français) ou Mona Lisa, est une œuvre de la Renaissance italienne de Léonard de Vinci. La Joconde a été achetée par le roi de France François Ier au début du XVIe siècle et est depuis lors la propriété de l'État français. C'est incontestablement le \"joyau des collections du musée du Louvre.\"",
  },
  {
    image: "American ghotic.jpeg",
    tagLine: "AMERICAN GOTHIC, DE GRANT WOOD",
    tagLine2:
      "American Gothic est une peinture créée dans les années 1930 par Grant Wood. Le tableau représente un fermier tenant une fourche et une femme, interprétée par certains comme sa fille et par d'autres comme sa femme, devant une maison rurale de style gothique. C'est l'une des images les plus reconnues et les plus parodiées de l'art américain du XXe siècle.",
  },
  {
    image: "La cène.jpeg",
    tagLine: "LA CÈNE, DE LÉONARD DE VINCI",
    tagLine2:
      " La Cène est une peinture murale originale de Léonard de Vinci, réalisée entre 1495 et 1498. La Cène se trouve sur le mur sur lequel elle a été peinte à l'origine, dans le réfectoire du couvent dominicain de Santa Maria delle Grazie à Milan (Italie), un site classé au patrimoine mondial par l'Unesco en 1980. Léonard de Vinci a peint La Cène pour son mécène, le duc Ludovico Sforza de Milan. La peinture murale n'est pas une fresque traditionnelle, mais a été peinte à la détrempe et à l'huile sur deux couches de plâtre. Il mesure 460 cm de haut sur 880 cm de large. De nombreux experts et historiens de l'art considèrent la Cène de Léonard de Vinci comme l'une des plus grandes œuvres picturales du monde.",
  },
  {
    image: "Guerinica.jpeg",
    tagLine: "GUERNICA, DE PABLO PICASSO",
    tagLine2:
      "Guernica est un tableau attribué à l'artiste espagnol Pablo Picasso, peint à Paris entre mai et juin 1937. Le titre du tableau fait allusion au bombardement de Guernica, qui a eu lieu le 26 avril 1937, pendant la guerre civile espagnole. Elle a été commandée par le directeur général des Beaux-Arts, Josep Renau, à la demande du gouvernement de la deuxième République espagnole, pour être exposée dans le pavillon espagnol lors de l'Exposition internationale de 1937 à Paris, afin de sensibiliser à la cause républicaine en pleine guerre civile espagnole.",
  },
  {
    image: "La jeune fille a la perle.jpeg",
    tagLine: "LA JEUNE FILLE À LA PERLE, DE JOHANNES VERMEER",
    tagLine2:
      " La fille à la perle, également connue sous le nom de fille au turban, est l'un des chefs-d'œuvre du peintre néerlandais Johannes Vermeer. Il utilise une boucle d'oreille en perle comme point focal. Le tableau est actuellement exposé au musée Mauritshuis de La Haye.",
  },
  {
    image: "La naissance de venus.jpeg",
    tagLine: "LA NAISSANCE DE VÉNUS, DE SANDRO BOTTICCELI",
    tagLine2:
      "La Naissance de Vénus de Sandro Botticelli est un tableau, l'un des chefs-d'œuvre du maître florentin et du Quattrocento italien. Le tableau est exécuté à la détrempe sur toile et mesure 278,5 cm de large sur 172,5 cm de haut. Il est conservé à la Galerie des Offices à Florence, où la salle 10-14 est appelée celle de Botticelli.",
  },
  {
    image: "La nuit etoilee.jpeg",
    tagLine: "LA NUIT ÉTOILÉE, DE VINCENT VAN GOGH",
    tagLine2:
      "La nuit étoilée est un tableau du peintre post-impressionniste néerlandais Vincent van Gogh. Peint en juin 1889, il représente la vue de la chambre d'asile de Vincent van Gogh à Saint-Rémy-de-Provence, juste avant l'aube, avec l'ajout d'un village imaginaire. Il fait partie de la collection permanente du Musée d'art moderne de New York depuis 1941, après avoir été acquis grâce a Lillie P. Bliss. La Nuit étoilée, largement considérée comme le chef-d'œuvre de Van Gogh, est l'une des peintures les plus reconnues de l'histoire de la culture occidentale.",
  },
  {
    image: "La persistance de la memoire.jpeg",
    tagLine: "LA PERSISTANCE DE LA MÉMOIRE, DE SALVADOR DALI",
    tagLine2:
      '"La persistance de la mémoire", ou "Montres molles" ou "Montres fondantes"), achevée par Salvador Dalí en 1931, est l\'une de ses œuvres les plus célèbres. Elle a été réalisée avec la technique de l\'huile sur toile, qui est de style surréaliste. Elle mesure 24 x 33 cm. L\'œuvre a été présentée lors de la première exposition personnelle de Dalí à la Galerie Pierre Colle à Paris, du 3 au 15 juin 1931, puis lors d\'une exposition à la galerie Julien Levy à New York. Elle se trouve au Musée d\'art moderne de New York, où elle est arrivée en 1934.',
  },
  {
    image: "La ronde de nuit.jpeg",
    tagLine: "LA RONDE DE NUIT, DE REMBRANDT",
    tagLine2:
      "La Ronde de nuit ou La Ronde de nuit est le nom du plus célèbre tableau de l'artiste néerlandais Rembrandt van Rijn, peint entre 1640 et 1642. C'est l'un des joyaux de l'exposition permanente du Rijksmuseum d'Amsterdam, spécialisé dans l'art néerlandais.",
  },
  {
    image: "Le baiser.jpeg",
    tagLine: "LE BAISER, DE GUSTAV KLIMT",
    tagLine2:
      "Le Baiser est un tableau du peintre autrichien Gustav Klimt. L'œuvre est une peinture à l'huile avec des feuilles d'or et d'étain sur toile. Elle a une dimension de 180 x 180 centimètres et a été créée entre 1907-08.",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const imageOnView = document.querySelector(".imagePrincipal");
const textOnView1 = document.querySelector(".p1");
const textOnView2 = document.querySelector(".p2");

console.log(textOnView1);
console.log(textOnView2);

let numberSlide = slides.length;
let i = 0;

function showDots() {
  const dots = document.querySelector(".dots");
  for (let a = 0; a < numberSlide; a++) {
    const dot = document.querySelector(".dot");
    dot.id = "not selected" + a;
    dot.addEventListener("click", function (event) {
      i = Number(event.target.id.replace("not selected", ""));
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
  imageOnView.src = `./images/${slides[i].image}`;
  textOnView1.innerHTML = slides[i].tagLine;
  textOnView2.innerHTML = slides[i].tagLine2;

  selected();
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
  }, 20000);
}

startTimeout();
