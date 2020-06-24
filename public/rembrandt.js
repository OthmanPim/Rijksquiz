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
            paint = "self-portrait Rembrandt van Rhijn, room2.8";
        } else if (currentQuestionsNumber == 2) {
            paint = "De Nightwatch, Nightwatch gallery";
        } else if (currentQuestionsNumber == 3) {
            paint = "Musical Company, room 2.8";
        } else if (currentQuestionsNumber == 4) {
            paint = "The Sampling Officials of the Amsterdam Drapers’ Guild, Gallery of honour";
        } else if (currentQuestionsNumber == 5) {
            paint = "Landscape with a Stone Bridge, room 2.8";
        } else if (currentQuestionsNumber == 6) {
            paint = "Old Woman Reading, room 2.8";
        } else if (currentQuestionsNumber == 7) {
            paint = "Musical Company, room 2.8";
        } else if (currentQuestionsNumber == 8) {
            paint = "Isaac and Rebecca, Known as ‘The Jewish Bride’, gallery of honour";
        } else if (currentQuestionsNumber == 9) {
            paint = "Landscape with a Stone Bridge, room 2.8";
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
    new Question("What is the name of this painting?", ["Nightwatch ", "The Sampling Officials of the Amsterdam Drapers", "Monalisa", "Musical Company"], "4"),
    new Question("Where was Rembrandt born?", ["Middelburg", "Leiden", "Amsterdam", "Utrecht"], "Leiden"),
    new Question("When was Rembrandt deceased?", ["1612", "1598", "1654", "1669"], "1669"),
    new Question("What is the name of Rembrandt's first student?", ["Josef Klein", "Jan Janssen", "Othman", "Gerrit Dou"], "Gerrit Dou"),
    new Question("Who was Rembrandt's first wife?", ["Monica", "Beatrix", "Saskia", "Josefien"], "Saskia"),
    new Question("In which century did Rembrandt live?", ["15th", "16th", "17th", "18th"], "17th"),
    new Question("What makes Rembrandt's paintings so special?", ["Oil paint", "Watercolor", "Clair-obscur", "Nature"], "Clair-obscur"),
    new Question("What is Rembrandt's most famous work?", ["the Night Watch", "the seamstresses", "the Jewish Bride", "the Soldier"], "the Night Watch"),
    new Question("Where in Amsterdam Rembrandt lived the longest?", ["Keizersgracht", "Rembrandtplein", "Jodenbreestraat", "Westermarkt"], "Jodenbreestraat"),
    new Question("When was the Night Watch created?", ["1640-1642", "1615-1617", "1623-1625", "1633-1636"], "1640-1642"),


];


var quiz = new Quiz(questions);

populate();
