/* ----------------------------------------------
    Exercices JavaScript : animer avec
    la bibliothèque GSAP
   ----------------------------------------------
    Installer GSAP
   ---------------------------------------------- */
import { gsap } from "gsap";
/* -----------------------
    Exercice 1
   -----------------------
    Déplacer l'item 1 de 100px vers la gauche
    durant 3 secondes
   ----------------------- */
gsap.to("#js-exercise-1", {
  x: -100,
  duration: 3,
  repeat: -1,
  yoyo: true,
});
/* -----------------------
    Exercice 2
   -----------------------
    Effectuer une rotation de l'item 2 de 45 degrés
    durant 2 secondes
    après un délai de 2 secondes
   ----------------------- */
gsap.to("#js-exercise-2", {
  rotate: 45,
  duration: 2,
  delay: 2,
  repeat: -1,
  yoyo: true,
});

/* -----------------------
    Exercice 3
   -----------------------
    Changer l'item 3 d'échelle (75%)
    et d'opacité (0.5)
    durant 2 secondes
    après un délai de 1 secondes
   ----------------------- */
gsap.to("#js-exercise-3", {
  scale: 0.75,
  opacity: 0.5,
  duration: 2,
  delay: 1,
  repeat: -1,
  yoyo: true,
});
/* -----------------------
    Exercice 4
   -----------------------
    Rétablir l'item 4 DEPUIS une échelle de 75%
    et d'opacité (0.5)
    durant 2 secondes
    après un délai de 1 secondes
   ----------------------- */
gsap.fromTo(
  "#js-exercise-4",
  {
    scale: 0.75,
    opacity: 0.5,
    duration: 2,
    delay: 1,
    repeat: -1,
    yoyo: true,
  },
  {
    scale: 1,
    opacity: 1,
    repeat: -1,
    yoyo: true,
  }
);
/* -----------------------
    Exercice 5 (timeline)
   -----------------------
    Déplacer l'item 5 de -100px vers la gauche
    durant 3 secondes
    PUIS effectuer une rotation de l'item 5 de 45 degrés
    durant 2 secondes après un délai de 1 seconde
    PUIS déplacer l'item 5 de 100px vers le haut
    durant 2 secondes après un délai de 1 seconde
   ----------------------- */
gsap
  .timeline({
    yoyo: true,
    repeat: -1,
  })
  .to("#js-exercise-5", {
    x: -100,
    duration: 3,
  })
  .to("#js-exercise-5", {
    rotate: 45,
    duration: 2,
    delay: 1,
  })
  .to("#js-exercise-5", {
    y: -100,
    duration: 2,
    delay: 1,
  });
/* -----------------------
    Exercice 6 (timeline)
   -----------------------
    Déplacer l'item 6 de 100px vers le bas
    durant 3 secondes
    ET SIMULTANEMENT changer l'item 6 d'échelle (75%)
    durant 5 secondes
   ----------------------- */
gsap
  .timeline({
    yoyo: true,
    repeat: -1,
  })
  .to("#js-exercise-6", {
    y: 100,
    duration: 3,
    scale: 0.75,
    duration: 5,
  });
/* -----------------------
    Exercice 7 (repeat + yoyo)
   -----------------------
    Effectuer une rotation de l'item 7 de 135 degrés
    durant 2 secondes
    avec un easing elastic.out
    et répéter ce mouvement à l'infini
   ----------------------- */
gsap
  .timeline({
    yoyo: true,
    repeat: -1,
  })
  .to("#js-exercise-7", {
    rotate: 135,
    duration: 2,
    ease: "elastic.out(1,0.3)",
  });
/* -----------------------
    Exercice 8
   -----------------------
    Réaliser une animation libre
    lorsque le bouton est cliqué
   ----------------------- */

let buttonElement = document.querySelector("#js-exercise-8");
let paragraphElement = document.querySelector("#js-exercise-8 p");

buttonElement.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  paragraphElement.textContent = randomNumber;
  gsap.fromTo(
    paragraphElement,
    { scale: 1 },
    { scale: 1.2, duration: 0.2, ease: "power1.out", yoyo: true, repeat: 1 }
  );
});

// autre transition possible mais avec ce JS et CSS commenté à la fin:

// let buttonElement = document.querySelector("#js-exercise-8");
// let paragraphElement = document.querySelector("#js-exercise-8 p");

// buttonElement.addEventListener("click", function () {
//   let randomNumber = Math.floor(Math.random() * 100) + 1;
//   paragraphElement.textContent = randomNumber;
//   paragraphElement.classList.add("zoom");
//   setTimeout(function () {
//     paragraphElement.classList.remove("zoom");
//   }, 300);
// });
