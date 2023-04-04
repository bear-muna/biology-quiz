var startEl = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var timerEl = document.querySelector("#timer");
var answerEl = document.querySelector("#answer");
var cardEl = document.querySelectorAll(".card");

console.log(cardEl);

// store the prompts as objects

var promptA = {
    question: "What is the center of an atom called?",
    ans: "Nucleus",
    opt: ["Nucleus", "Proton", "Quark", "Electron"],
}
var promptB = {
    question: "What is the colored part of an eye called?",
    ans: "Iris",
    opt: ["Iris", "Pupil", "Fovea", "Cornea"],
}
var promptC = {
    question: "What is the range of the pH scale?",
    ans: "0-14",
    opt: ["1-10", "0-14", "1-7", "1-99"],
}
var promptD = {
    question: "Where in the cell are proteins created?",
    ans: "Ribosome",
    opt: ["Mitochondria", "Plasma Membrane", "Ribosome", "Nucleus"],
}
var promptE = {
    question: "DNA duplication occurs where in the cell?",
    ans: "Nucleus",
    opt: ["Cytoplasm", "Mitochondria", "Endoplasmic Reticulum", "Nucleus"],
}
var promptF = {
    question: "Osmosis is the process of what permeating throughout the cellular membrane?",
    ans: "Water",
    opt: ["Nucleotide", "Water", "Proteins", "Fatty Acids"],
}
var promptG = {
    question: "What is the largest organ in the body?",
    ans: "Skin",
    opt: ["Skin", "Small Intestine", "Heart", "Brain"],
}
var lossPrompt = {
    question: "Sorry! Try again!",
    opt: ["", "", "", ""],
}

// variables

var prompt = [];
var countForCard = 4;
var secondsLeft = 120;
var endTimerSeconds = 5;
var timerInterval;
var userScore;
var questions = [promptA, promptB, promptC, promptD, promptE, promptF, promptG];


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

    secondsLeft = 120;

    timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining!";

        if (secondsLeft <= 0) {
            endTimer();

            questionEl.textContent = lossPrompt.question;


        } else {
            return timerInterval;
        }


    }, 1000);
};

function start(event) {

    if (questions.length < 7) {
        location.reload();
    } else {
        displayText();
        setTimer();
    }

};

function endTimer() {
    
    endTimerSeconds--;
    timerEl.textContent = endTimerSeconds + " seconds until reload!";

    if (endTimerSeconds === 0) {
        location.reload();
    }
}

function verification(event) {
    var userAnswer = event.target;

    if (userAnswer.matches(".card")) {
        var value = userAnswer.getAttribute("data-value");
        
        while (questions.length !== 0) {
            
            if (value === prompt.ans) {
                displayText();
            } else {
                secondsLeft -= 10;
            }

            return;

        }

       if ((value === prompt.ans && questions.length === 0)) {
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
