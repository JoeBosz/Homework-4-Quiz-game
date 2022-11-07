var startBtn = document.querySelector(".startBtn");
var timerEl = document.querySelector(".timerEl");

console.log(timerEl);

var time = 20;

//create A variable for all the questions & choices //hint: array & objects
//var index = 0

//function to display question

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
