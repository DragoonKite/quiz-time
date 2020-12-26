var newScore = localStorage.getItem("newScore");
var saveScoreBtn = document.querySelector("#save-score");

if(!localStorage.getItem("highScores")){
    var highScores=[]
}
else{
    var highScores = JSON.parse(localStorage.getItem("highScores"))
};




function saveScore(event){

    var initials = document.querySelector("#initials").value;
    if(!initials){
        alert("Please enter your initials into the box.")
    }
    else{
        highScores.push({name: initials, score: newScore});
        localStorage.setItem("highScores", JSON.stringify(highScores));
        window.location.href="./high-score.html"
    }
}


saveScoreBtn.addEventListener("click", saveScore)