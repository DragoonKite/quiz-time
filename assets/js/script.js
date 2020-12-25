var score = 0;
var timer = 90;
//Array to store quesions and answer options
var questions = [{q:"Question1" , a1:"Answer 1", a2:"Answer 2", a3:"Answer 3", a4:"Answer 4"},
{q:"Question2" , a1:"Answer 1", a2:"Answer 2", a3:"Answer 3", a4:"Answer 4"},
{q:"Question3" , a1:"Answer 1", a2:"Answer 2", a3:"Answer 3", a4:"Answer 4"},
{q:"Question4" , a1:"Answer 1", a2:"Answer 2", a3:"Answer 3", a4:"Answer 4"}];
//array to store correct answers
var answerKey = [];

//selects main area of page to manipulate later to display questions/answers
var quizArea = document.querySelector("main")
//selects the p element with the id timer
var timerCounter = document.querySelector("#timer");
//selects the Start Quiz button to later listen for a click event and start quiz
var startButton = document.querySelector(".start-btn");
//create an unordered list element to later store answer options
var options = document.createElement("ul");
options.className = "answer-options";

//starts timer and then calls the main quiz function
function startQuiz(event){

    var timerCountdown = setInterval(function(){
        if(timer > 0){
            timerCounter.textContent = "Time Remaining: " + timer;
            timer--;
        }
        else{
            clearInterval(timerCountdown);
            timerCounter.textContent = "Time Remaining: " + 0;
        }
    },1000)

    runquiz();

}

//displays quiz contents, adjust score and time remaining based on user input
function runquiz(){
    //remove start button
    startButton.remove();
    //remove intro paragraph
    document.querySelector("#intro").remove();

    //iterate over questions array
    questionIterator = 0;
    displayQuestion(questionIterator);    
};

function displayQuestion(i){
    
    options.innerHTML=" ";
    var question = questions[i].q;
    //displays question inplace of "Welcome to Quiz Time"
    document.querySelector("h1").textContent = question;
    //store anser choices to iterate over
    var answers = [questions[i].a1, questions[i].a2, questions[i].a3, questions[i].a4]
    //iterate over answer choices
    for(var x=0; x<answers.length; x++){
        //turn answer choices into buttons within list elements
        var option = document.createElement("li");
        option.innerHTML = "<button class='btn answer-option' id='" + i +"'>" + answers[x] +"</button>";
        //add list elements to unordered list
        options.appendChild(option);
    }
    //add unordered list to main area and disply on page
    quizArea.appendChild(options);      
};

startButton.addEventListener("click", startQuiz);