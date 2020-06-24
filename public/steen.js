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
            paint = "Self-portrait, Jan Havickz Steen, Gallery of honour";
        } else if (currentQuestionsNumber == 2) {
            paint = "Children learning a cat to dance, Gallery of honour";
        } else if (currentQuestionsNumber == 3) {
            paint = "The Feast of ST Nicolas, Gallery of honour";
        } else if (currentQuestionsNumber == 4) {
            paint = "The merry family, Gallery of honour";
        } else if (currentQuestionsNumber == 5) {
            paint = "The sick woman, Gallery of honour";
        } else if (currentQuestionsNumber == 6) {
            paint = "Prince's day, Gallery of honour";
        } else if (currentQuestionsNumber == 7) {
            paint = "The drunken couple, Gallery of honour";
        } else if (currentQuestionsNumber == 8) {
            paint = "Woman at her toilet, Gallery of honour";
        } else if (currentQuestionsNumber == 9) {
            paint = "Interior with a Woman Feeding a Parrot, Gallery of honour";
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
  new Question("Where was Jan steen born?", ["Denhaag", "Leiden", "Zoetermeer", "Utrecht"], "Leiden"),
  new Question("When was this painting created?", ["1662", "1664", "1668", "1670"], "1670"),
  new Question("How is this painting also called", ["The dog lesson", "The animal lesson", "Children having fun", "The dancing lesson"], "The dancing lesson"),
  new Question("When does the feast of december take place?", ["January", "April", "July", "December"], "December"),
  new Question("Who was Jan Steen's wife?", ["Suzanne", "Kim", "Margaret", "Josefien"], "Margaret"),
  new Question("In which century did Jan Havickz. Steen live?", ["15th", "16th", "17th", "18th"], "17th"),
  new Question("Who's birthday is celebrated on prince's day?", ["Prince William III of Orange-Nassau", "Prince William II of Orange-Nassau", "Prince William I of Orange-Nassau", "Napoleon"], "Prince William III of Orange-Nassau"),
  new Question("Which animal can be found on a lot of Jan Steen's paintings?", ["A cat", "A bird", "A dog", "A fish"], "A dog"),
  new Question("He visited the same school as another famous artist. Which one? ", ["Vermeer", "Vincent van Gogh", "Rembrandt van Rhijn", "Da Vinci"], "Rembrandt van Rhijn"),
  new Question("In which year did Jan Havickz. Steen died?", ["1670", "1673", "1679", "1680"], "1679"),


];


var quiz = new Quiz(questions);

populate();
