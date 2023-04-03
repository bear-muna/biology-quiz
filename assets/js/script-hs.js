var submitBut = document.querySelector("#submit");
var usernameText = document.querySelector("#username");

var userScore;

function submission(event) {
    event.preventDefault();

    var user = {
        name: username.value,
        score: userScore,
    }

    localStorage.setItem("user", JSON.stringify(user));

    retrieve();

}

function retrieve() {
    var parseUsername = JSON.parse(localStorage.getItem("user"));

    console.log(parseUsername);
}



submitBut.addEventListener("click", submission);