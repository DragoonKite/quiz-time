var newScore = localStorage.getItem("newScore");
var saveScoreBtn = document.querySelector("#save-score");

if(!localStorage.getItem("highScores")){
    var highScores=[]
}
else{
    var highScores = JSON.parse(localStorage.getItem("highScores"))
};

//displays most recent score to the user
document.querySelector("main p").innerHTML += newScore;


function saveScore(event){

    var initials = document.querySelector("#initials").value;
    if(!initials){
        //prevent user from inputing no initials
        alert("Please enter your initials into the box.")
    }
    else{
        //add recent score to list and saves that in local storage
        highScores.push({name: initials, score: newScore});
        localStorage.setItem("highScores", JSON.stringify(highScores));
        window.location.href="./high-score.html"
    }
}


saveScoreBtn.addEventListener("click", saveScore)