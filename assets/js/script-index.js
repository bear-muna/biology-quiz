var startEl = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var timerEl = document.querySelector("#timer");
var answerEl = document.querySelector("#answer");
var cardEl = document.querySelectorAll(".card");

console.log(cardEl);

// store the prompts as objects

var promptA = {
    question: "Answer: A",
    ans: "A",
    opt: ["A", "B", "C", "D"],
}
var promptB = {
    question: "Answer: B",
    ans: "B",
    opt: ["A", "B", "C", "D"],
}
var promptC = {
    question: "Answer: C",
    ans: "C",
    opt: ["A", "B", "C", "D"],
}
var promptD = {
    question: "Answer: D",
    ans: "D",
    opt: ["A", "B", "C", "D"],
}

// variables

var prompt = [];
var countForCard = 4;
var secondsLeft = 120;
var correctAnswer = 0;
var timerInterval;
var userScore;
var questions = [promptA, promptB, promptC, promptD];


// Object to store into local storage




// Array of prompt objects


function displayText() {

    var countForPrompt = questions.length;

    var num1 = Math.floor(Math.random() * countForPrompt);

    prompt = questions[num1];

    questionEl.textContent = prompt.question;

    questions.splice(num1, 1);
    
    countForPrompt--;

    for (let i = 0; i < cardEl.length; i++) {

        var num2 = Math.floor(Math.random() * countForCard);

        cardEl[i].textContent = prompt.opt[num2];

        cardEl[i].dataset.value = prompt.opt[num2];
        
        prompt.opt.splice(num2, 1);

        countForCard--;

    }

    countForCard = 4;
};

function setTimer() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining!";

        if (secondsLeft == 0) {
            clearInterval(timerInterval);            
        } else {
            return timerInterval;
        }


    }, 1000);
};

function start(event) {

    displayText();
    setTimer(); 
};

function verification(event) {
    var userAnswer = event.target;

    if (userAnswer.matches(".card")) {
        var value = userAnswer.getAttribute("data-value");

        while (questions.length !== 0) {
            
            if (value === prompt.ans) {
                displayText();
                correctAnswer++;
            }

            return;

        }

        if (value === prompt.ans && questions.length === 0) {
            clearInterval(timerInterval);
            questionEl.textContent = "CONGRATULATIONS! YOU WON!";
            console.log(secondsLeft);
            userScore = secondsLeft;
            localStorage.setItem("score", userScore);
        }

    }

};

startEl.addEventListener("click", start);

answerEl.addEventListener("click", verification);
