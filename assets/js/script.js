var startEl = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var timerEl = document.querySelector("#timer");
var answerEl = document.querySelector("#answer");
var cardEl = document.querySelectorAll(".card");

console.log(cardEl);

// variables

var count = 4;
secondsLeft = 120;

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

// Array of prompt objects

var questions = [promptA, promptB, promptC, promptD];

function displayText() {
    prompt = questions[Math.floor(Math.random() * questions.length)];

    questionEl.textContent = prompt.question;

    // TODO: Some opt are the same in multiple cards

    for (let i = 0; i < cardEl.length; i++) {

        var num = Math.floor(Math.random() * count);

        console.log(num);

        console.log(prompt);

        console.log(prompt.opt);

        cardEl[i].textContent = prompt.opt[num];
        
        prompt.opt.splice(num, 1);

        count--;

        console.log(prompt.opt);
    }
};

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining!";

        if (secondsLeft == 0) {
            clearInterval(timerInterval);            
        } else {
            return timerInterval;
        }


    }, 1000);
}

displayText();
setTimer();