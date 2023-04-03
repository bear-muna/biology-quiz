var submitBut = document.querySelector("#submit");
var usernameText = document.querySelector("#username");

var userScore;
var userName;
var usersArray = [];


// create a user object

// push user object into an array

function submission(event) {
    event.preventDefault();
    
    var user = {
            name: userName,
            score: userScore,
    }

    user.name = username.value;

    user.score = localStorage.getItem("score");
        
    usersArray.push(user);
 
    localStorage.setItem("user", JSON.stringify(usersArray));
    
    retrieve();

}

function retrieve() {
    var parseArray = JSON.parse(localStorage.getItem("usersArray"));

    console.log(parseArray);
}

submitBut.addEventListener("click", submission);