function populate() {
    if(quiz.isEnded ()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess ("btn" +i, choices[i]);
        }

        showProgress();
    }
};

function guess (id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        alert("Walk to " + paint);
        quiz.guess(guess);
        populate();
    }

}

function showProgress() {
    var currentQuestionsNumber = quiz.questionsIndex +1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionsNumber + " of the " +quiz.questions.length;
    if (currentQuestionsNumber == 1) {
            paint = "The milkmaid, Gallery of honour";
        } else if (currentQuestionsNumber == 2) {
            paint = "Woman reading a letter, Gallery of honour";
        } else if (currentQuestionsNumber == 3) {
            paint = "The little street, Gallery of honour";
        } else if (currentQuestionsNumber == 4) {
            paint = "The love letter, Gallery of honour";
        } else if (currentQuestionsNumber == 5) {
            paint = "The milkmaid, Gallery of honour";
        } else if (currentQuestionsNumber == 6) {
            paint = "Woman reading a letter, Gallery of honour";
        } else if (currentQuestionsNumber == 7) {
            paint = "The little street, Gallery of honour";
        } else if (currentQuestionsNumber == 8) {
            paint = "The love letter, Gallery of honour";
        } else if (currentQuestionsNumber == 9) {
            paint = "The love letter, Gallery of honour";
        }
}

function showScores(){
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id = 'score'> Your score is: " +quiz.score +"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
    var element = document.getElementById("picture1").style.visibility = "visible";
    element.innerHTML = gameOverHtml;
};

var questions = [
  new Question("Where was Vermeer born?", ["Denhaag", "Delft", "Zoetermeer", "Utrecht"], "Delft"),
  new Question("When was this painting created?", ["C.1660", "C.1664", "C.1668", "C. 1670"], "1660"),
  new Question("What is the woman wearing?", ["A night jacket", "A dress", "Man clothes", "A blanket"], "A night jacket"),
  new Question("How is this painting also called", ["The little street", "The big street", "Vermeer's home", "The ugly houses"], "The little street"),
  new Question("Who was Vermeer's wife?", ["Suzanne", "Kim", "Catharina", "Josefien"], "Catharina"),
  new Question("In which century did Vermeer live?", ["15th", "16th", "17th", "18th"], "17th"),
  new Question("How many daughters did Johannes Vermeer had?", ["0", "2", "4", "7"], "7"),
  new Question("What is Vermeer's most famous work?", ["Girl with a Pearl Earring", "The Night watch", "The love letter", "Woman reading a letter"], "Girl with a Pearl Earring"),
  new Question("When was this painting created?", ["1670", "1665", "1664", "1675"], "1670"),
  new Question("In which year did Vermeer die?", ["1672", "1675", "1678", "1677"], "1675"),


];


var quiz = new Quiz(questions);

populate();
