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

    runquiz();

}

function runquiz(){
    startButton.remove();
    document.querySelector("#intro").textContent = " ";
    var options = document.createElement("ul");
    options.className = "answer-options";

    for(var i=0; i<questions.length;i++){
        var question = questions[i].q;
        document.querySelector("h1").textContent = question;
        var answers = [questions[i].a1, questions[i].a2, questions[i].a3, questions[i].a4]
        for(var x=0; x<answers.length; x++){
            var option = document.createElement("li");
            option.innerHTML = "<button class='btn answer-option'>" + answers[x] +"</button>";
            options.appendChild(option);
        }
        quizArea.appendChild(options);
    }
}


startButton.addEventListener("click", startQuiz);