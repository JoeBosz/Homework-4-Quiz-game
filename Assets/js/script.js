var startBtn = document.querySelector(".startBtn");
var timerEl = document.querySelector(".timerEl");
var questionTitle = document.getElementById('questionTitle');
var questionEl = document.getElementById('choiceContainer')

console.log(timerEl);

var time = 30;

//create A variable for all the questions & choices //hint: array & objects
//var index = 0

var arr = [
  {
    question: "What is 21 x 4?",
    choices: ['84, 72, 96, 82'],
    correct: '84',

    question: "What is 1240 ÷ 4",
    choices: ['320, 310, 360, 310'],
    correct: '310',

    question: "What is 8 x 9?",
    choices: ['82, 96, 72, 84'],
    correct: '72',

    question: "What is 96 ÷ 8?",
    choices: ['13, 18, 16, 12'],
    correct: '12',


}
]

//function to display question

function displayQuestions () {
  questionArea.classList = "";
  question.textContent = arr[0].question;
  a.textContent = arr[0].choices[0]
  b.textContent = arr [1].choices[1]
  c.textContent = arr[2].choices[2]
  d.textContent = arr[3].choices[3]
}
//increase index value after user picked a choice
//call the function to display question again

function startTimer() {
  timerEl.textContent = time;
  var timeInterval = setInterval(function () {
    console.log("Hello");
    time--;
    timerEl.textContent = time;

    if(time <= 0){
        clearInterval(timeInterval)
    }
  }, 1000);
}

function startQuiz() {
  console.log("Goodbye");
}


startBtn.addEventListener("click", function () {
  startTimer();
  startQuiz();
});
