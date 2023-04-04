// Variables created by .querySelector
var submitBut = document.querySelector("#submit");
var usernameText = document.querySelector("#username");
var listName = document.querySelector("#listname");
var listScore = document.querySelector("#listscore");
var resetBut = document.querySelector("#reset");
var list = document.querySelector("#list");

// Variables
var userScore;
var usersArray = [];


// Used to store the array into local storage
function storeArray() {
    localStorage.setItem("usersArray", JSON.stringify(usersArray));
}

// Grab array from local storage
function retrieveArray() {
    var parseArray = JSON.parse(localStorage.getItem("usersArray"));

    if (parseArray !== null) {
        usersArray = parseArray;
    }

    renderArray();
}

// Function used to show user and score
function renderArray() {

    // Clears the space in order to make new elements from an array
    listName.textContent = "";

    // Create separate 'li' elements for the username
    for (let i = 0; i < usersArray.length; i++) {
        var arrName = usersArray[i].name;

        var liName = document.createElement("li");
        liName.textContent = arrName;
        liName.setAttribute("data-index", i);

        // appends the element into the browser
        listName.appendChild(liName);
    }

    // Clears the space in order to make new elements from an array
    listScore.textContent = "";

    // Create separate 'li' elements for the username
    for (let i = 0; i < usersArray.length; i++) {
        var arrScore = usersArray[i].score;

        var liScore = document.createElement("li");
        liScore.textContent = arrScore;
        liScore.setAttribute("data-index", i);

        // appends the element onto the browser
        listScore.appendChild(liScore);
    }

}

// Function used the username and score into an object
function submission(event) {
    event.preventDefault();
    
    var user = {
            name: usernameText.value,
            score: userScore,
    }

    if (usernameText.value.trim() === "") {
        return;
    }

    user.name = usernameText.value.trim();
    user.score = localStorage.getItem("score");
    usersArray.push(user);

    storeArray();
    renderArray();

    usernameText.value = "";
}

// Clear the local storage
function resetList(event) {
    event.preventDefault();

    usersArray = [];
    var parseArray = JSON.parse(localStorage.getItem("usersArray"));

    if (parseArray !== null) {

        localStorage.clear();

        listName.textContent = "";
        listScore.textContent = "";
    } 

}

// event listener on the submit button
submitBut.addEventListener("click", submission);
// event listener on the reset button
resetBut.addEventListener("click", resetList);

// Displays current users and scores when starting page
retrieveArray();
