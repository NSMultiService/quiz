// tableau contenant toutes les questions du quiz

const quizData = [
  {
    question: "Comment s'appelle le créateur du monde ?",
    response: ["David", "Moïse", "Bondieu", "Lazare"],
    correct: "Bondieu",
  },
  {
    question: "Qui a crée l'arche de Noé ?",
    response: ["Noé", "Moïse", "Bondieu", "Lazare"],
    correct: "Noé",
  },
  {
    question: "quel est le roi qui a vaincu le géant Goliath ?",
    response: ["David", "Moïse", "Bondieu", "Lazare"],
    correct: "David",
  },
  {
    question: " qui a été avalé par un grand poisson ?",
    response: ["David", "Jonas", "Moïse", "Bondieu", "Lazare"],
    correct: "Jonas",
  },
  {
    question: "qui a reçu les dix commandements ?",
    response: ["David", "Moïse", "Bondieu", "Lazare"],
    correct: "Moïse",
  },
  {
    question: " Comment s'appelle la femme d'Adam ?",
    response: ["David", "Moïse", "Ève", "Bondieu", "Lazare"],
    correct: "Ève",
  },
];

//varible qui garde la position de la question actuelle

let currentQuestion = 0;
let score = 0;

//charge une question

function getQuestion() {
  //réinitialiser le texte du resultat
  document.getElementById("result").innerText = "";

  //récupérer la question actuelle depuis quizData
  const q = quizData[currentQuestion];

  //afficher le texte de la question dans l'élément avec id="question"
  document.getElementById("question").innerText = q.question;

  //récuperation la zone de réponse
  const responseDiv = document.getElementById("response");

  //validation de la zone de réponse
  responseDiv.innerHTML = "";

  //boucle sur chaque réponse possible
  q.response.forEach((rep) => {
    //création d'un bouton html
    const btn = document.createElement("button");

    //classe de bouton
    btn.classList.add("btn");

    //le texte du bouton
    btn.innerText = rep;

    //appelle la fonction checkResponse par le bouton
    btn.onclick = () => checkAnswer(rep);

    //ajouter le dans la zone des réponse
    responseDiv.appendChild(btn);
  });
}

//vérifier la réponse

function checkAnswer(answer) {
  if (answer === quizData[currentQuestion].correct) {
    score++;
    document.getElementById("result").innerHTML =
      "Félicitations champion, tu as gagné un point <img src='images/images.png' alt='Bonne réponse' width='30'> ";
  } else {
    //document.getElementById("result").innerHTML = "oups...  Mauvaise réponse  color: <br> <img src='/image/images.png'alt='Mauvaise réponse' width= '100'";
    document.getElementById("result").innerHTML =
      "Oups... Mauvaise réponse <img src='images/images.jpeg' alt='Mauvaise réponse' width='30'> ";
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    setTimeout(getQuestion, 1000);
  } else {
    setTimeout(showFinalResult, 1000);
  }
}

//afficher le resultat final

function showFinalResult() {
  document.querySelector(".container-quiz").innerHTML = `<h2> Quiz Terminé </h2>
    <p> Ton score : ${score} / ${quizData.length}  </p>`;
}

//charger la première question au démarrage
getQuestion();
