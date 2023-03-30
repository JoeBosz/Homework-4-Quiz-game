const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
// var timerEl = document.querySelector(".timerEl");
// var questionTitle = document.getElementById('questionTitle');
// var questionEl = document.getElementById('choiceContainer')
// var a = document.getElementById('a');
// var b = document.getElementById('b');
// var c = document.getElementById('c');
// var d = document.getElementById('d');

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

// var time = 30;

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}



function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add('hide');
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide');
  }
  else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if(correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// function displayQuestions () {
//   questionTitle.classList = "";
//   // question.textContent = arr[0].question;
//   a.textContent = arr[0].choices[0]
//   b.textContent = arr [0].choices[1]
//   c.textContent = arr[0].choices[2]
//   d.textContent = arr[0].choices[3]
// }

//create A variable for all the questions & choices //hint: array & objects
//var index = 0

const questions = [
  {
    question: "What is 21 x 4?",
    answers: [
      { text: "84", correct: true },
      { text: "72", correct: false },
      { text: "96", correct: false },
      { text: "82", correct: false },
    ],
  },
  {
    question: "What is 1240 ÷ 4",
    answers: [ 
      { text: "320", correct: false },
      { text: "310", correct: true },
      { text: "360", correct: false },
      { text: "310", correct: false },
    ],
  },
  {
    question: "What is 8 x 9?",
    answers: [
      { text: "82", correct: false },
      { text: "96", correct: false },
      { text: "72", correct: true },
      { text: "84", correct: false },
    ],
  },
  {
    question: "What is 96 ÷ 8?",
    answers: [
      { text: "13", correct: false },
      { text: "18", correct: false },
      { text: "16", correct: false },
      { text: "12", correct: true },
    ],
  }
];

// const questions = [
//   {
//     question: "What is 21 x 4?",
//     answers: [
//       { text: "84", correct: true },
//       { text: "72", correct: false },
//       { text: "96", correct: false },
//       { text: "82", correct: false },
//     ],
//     // choices: ['84, 72, 96, 82'],
//     // correct: '84',

//     // question: "What is 1240 ÷ 4",
//     // choices: ['320, 310, 360, 310'],
//     // correct: '310',

//     // question: "What is 8 x 9?",
//     // choices: ['82, 96, 72, 84'],
//     // correct: '72',

//     // question: "What is 96 ÷ 8?",
//     // choices: ['13, 18, 16, 12'],
//     // correct: '12',


// }
// ]


//function to display question

//increase index value after user picked a choice
//call the function to display question again

// function startTimer() {
//   timerEl.textContent = time;
//   var timeInterval = setInterval(function () {
//     console.log("Hello");
//     time--;
//     timerEl.textContent = time;

//     if(time <= 0){
//         clearInterval(timeInterval)
//     }
//   }, 1000);
// }


// questionTitle.addEventListener("click", function(event) {
//   if(event.target.textContent === arr[0].correct) {
//       console.log('Correct');
//   } else {
//       timeLeft-=5;
//   }
// });





// startBtn.addEventListener("click", function () {
//   startTimer();
//   startQuiz();
//   displayQuestions();
// });
