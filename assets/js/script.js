var score = 0;
var timer = 90;
//Array to store quesions and answer options
var questions = [{q:"Which method could you use to convert data to a string before saving to local storage?" , a1:"1. JSON.stringify()", a2:"2. json.stringify()", a3:"3. JSON.Stringify()", a4:"4. json.Stringify()"},
{q:"Which character pair is used to declare a variable is an array?" , a1:"1. {}", a2:"2. []", a3:"3. ()", a4:"4. ''"},
{q:"Which is not a way to iterate over an object?" , a1:"1. for()", a2:"2. while()", a3:"3. if()", a4:"4. do{}while()"},
{q:"Which is not a comparison operator?" , a1:"1. ==", a2:"2. ===", a3:"3. &&", a4:"4. +"}];
//array to store correct answers
var answerKey = ["0", "1", "2", "3"];

//selects main area of page to manipulate later to display questions/answers
var quizArea = document.querySelector("main")
//selects the p element with the id timer
var timerCounter = document.querySelector("#timer");
//selects the Start Quiz button to later listen for a click event and start quiz
var startButton = document.querySelector(".start-btn");
//create an unordered list element to later store answer options
var options = document.createElement("ul");
options.className = "answer-options";
//used to iterate over questions one at a time
var questionIterator = 0;

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
    displayQuestion(questionIterator);    
};

function displayQuestion(i){
    
    options.innerHTML=" ";
    var question = questions[i].q;
    //displays question inplace of "Welcome to Quiz Time"
    document.querySelector("h1").textContent = question;
    //sets id of question in array to be chacked agaisnt later
    options.setAttribute("question-id", i)
    //store anser choices to iterate over
    var answers = [questions[i].a1, questions[i].a2, questions[i].a3, questions[i].a4]
    //iterate over answer choices
    for(var x=0; x<answers.length; x++){
        //turn answer choices into buttons within list elements
        var option = document.createElement("li");
        option.innerHTML = "<button class='btn answer-option' id='" + x +"'>" + answers[x] +"</button>";
        //add list elements to unordered list
        options.appendChild(option);
    }
    //add unordered list to main area and disply on page
    quizArea.appendChild(options);      
};

function getSelectedAnswer(event){
    var targetAnswer = event.target;

    //check if it was an answer option
    if (targetAnswer.matches(".answer-option")){
        answerId = targetAnswer.getAttribute("id")
    };
    checkAnswer(questionIterator, answerId);

};

function checkAnswer(q,a){
    if (a === answerKey[q]){
        score += 10;
        console.log(score);
    }
    else{
        timer -= 10;
    }
    questionIterator ++;
    if(questionIterator < questions.length){
        displayQuestion(questionIterator)
    }
    else{
        localStorage.setItem("newScore", score)
        window.location.href = "./assets/pages/save-score.html";
    }
}

startButton.addEventListener("click", startQuiz);
options.addEventListener("click", getSelectedAnswer)