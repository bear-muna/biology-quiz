// Variables created from .querySelector
var startEl = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var timerEl = document.querySelector("#timer");
var answerEl = document.querySelector("#answer");
var cardEl = document.querySelectorAll(".card");

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
// Prompt for timer running out
var lossPrompt = {
    question: "Sorry! Try again!",
    opt: ["", "", "", ""],
}

// Variables
var prompt = [];
var countForCard = 4;
var secondsLeft = 120;
var endTimerSeconds = 5;
var timerInterval;
var userScore;
var questions = [promptA, promptB, promptC, promptD, promptE, promptF, promptG];

// Function to display the text onto the cards
function displayText() {
    // Variable to keep track of how many objects are left in the array
    var countForPrompt = questions.length;
    // Generate a random number used for pulling a random prompt
    var num1 = Math.floor(Math.random() * countForPrompt);
    prompt = questions[num1];
    // Setting the question to the cad
    questionEl.textContent = prompt.question;
    // Splice out the used prompt from the array
    questions.splice(num1, 1);
    countForPrompt--;

    // For loop to randomly place answer on card
    for (let i = 0; i < cardEl.length; i++) {
        var num2 = Math.floor(Math.random() * countForCard);
        cardEl[i].textContent = prompt.opt[num2];
        cardEl[i].dataset.value = prompt.opt[num2];
        prompt.opt.splice(num2, 1);
        countForCard--;

    }
    countForCard = 4;
};

// Timer that will be displayed
function setTimer() {
    secondsLeft = 120;
    timerInterval = setInterval(function() {
        secondsLeft--;
        // Display time using .querySelector
        timerEl.textContent = secondsLeft + " seconds remaining!";
        // Once timer is 0, quiz ends
        if (secondsLeft <= 0) {
            endTimer();
            questionEl.textContent = lossPrompt.question;
        } else {
            return timerInterval;
        }
    }, 1000);
};

// Function to start event
function start(event) {
    // If statement used to ensure that the prompts are reloaded
    if (questions.length < 7) {
        location.reload();
    } else {
        displayText();
        setTimer();
    }
};

// Once quiz ends via time ends, then function will be used
// Reloads the page
function endTimer() {
    endTimerSeconds--;
    timerEl.textContent = endTimerSeconds + " seconds until reload!";
    if (endTimerSeconds === 0) {
        location.reload();
    }
}

// Function used to verify if answer is correct
function verification(event) {
    // Variable created to make sure target is .card
    var userAnswer = event.target;
    if (userAnswer.matches(".card")) {
        var value = userAnswer.getAttribute("data-value");
        while (questions.length !== 0) {
            // New set of questions will show if right
            if (value === prompt.ans) {
                displayText();
            } else {
                // Points deducted if wrong
                secondsLeft -= 10;
            }
            return;
        }
        // Finishing the quiz will prompt this
       if ((value === prompt.ans && questions.length === 0)) {
            clearInterval(timerInterval);
            questionEl.textContent = "CONGRATULATIONS! YOU WON!";
            console.log(secondsLeft);
            userScore = secondsLeft;
            localStorage.setItem("score", userScore);
        } 
    }
};

// Event listener on 'start' button
startEl.addEventListener("click", start);

// Event listener on 'cards'
answerEl.addEventListener("click", verification);
