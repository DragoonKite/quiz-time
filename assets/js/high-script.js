var returnBtn = document.querySelector("#return-to-main");
var clearBtn = document.querySelector("#clear-btn")
var scoreDisplay = document.querySelector("ol")


if(localStorage.getItem("highScores")=== null){
    window.alert("No current high scores. Take the quiz first!");
    window.location.href="../../index.html"
}
else{
    var highScores = JSON.parse(localStorage.getItem("highScores"))
    //sort highscores in descending order
    highScores.sort(function(a,b){
        return b.score-a.score;
    });
    displayScores(highScores)
};

function displayScores(scores){
    for(var i=0; i < scores.length; i++){
        var listScore = document.createElement("li");
        listScore.innerHTML=scores[i].name + ": " + scores[i].score;
        if(i%2 === 0){
            listScore.style.background = "red";
        }
        scoreDisplay.appendChild(listScore)
    }
};

function clearScores(event){
    localStorage.removeItem("highScores");
    scoreDisplay.remove();
    window.alert("Scores cleared, returning to the main page");
    window.location.href="../../index.html";
};

returnBtn.addEventListener("click", function(){
    window.location.href="../../index.html"
});

clearBtn.addEventListener("click", clearScores)