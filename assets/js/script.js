var score = 0;
var timer = 90;
var questions = [{q:"Question" , a1:"Answer 1", a2:"Answer 2", a3:"Answer 3", a4:"Answer 4"}];

var quizArea = document.querySelector("main")
var timerCounter = document.querySelector("#timer");
var startButton = document.querySelector(".start-btn");

function startQuiz(event){

    var timerCountdown = setInterval(function(){
        if(timer > 0){
            timerCounter.textContent = "Time Remaining: " + timer;
            timer--;
        }
        else{
            timerCounter.textContent = "Time Remaining: " + 0;
        }
    },1000)



}


startButton.addEventListener("click", startQuiz);