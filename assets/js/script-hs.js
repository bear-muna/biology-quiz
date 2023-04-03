var submitBut = document.querySelector("#submit");
var usernameText = document.querySelector("#username");
var listName = document.querySelector("#listname");
var listScore = document.querySelector("#listscore");
var resetBut = document.querySelector("#reset");
var list = document.querySelector("#list");

var userScore;
var usersArray = [];


// create a user object

function storeArray() {
    localStorage.setItem("usersArray", JSON.stringify(usersArray));
}

function retrieveArray() {
    var parseArray = JSON.parse(localStorage.getItem("usersArray"));

    if (parseArray !== null) {
        usersArray = parseArray;
    }

    renderArray();
}

function renderArray() {

    listName.textContent = "";

    for (let i = 0; i < usersArray.length; i++) {
        var arrName = usersArray[i].name;

        var liName = document.createElement("li");
        liName.textContent = arrName;
        liName.setAttribute("data-index", i);

        listName.appendChild(liName);
    }

    listScore.textContent = "";

    for (let i = 0; i < usersArray.length; i++) {
        var arrScore = usersArray[i].score;

        var liScore = document.createElement("li");
        liScore.textContent = arrScore;
        liScore.setAttribute("data-index", i);

        listScore.appendChild(liScore);
    }

}

// push user object into an array

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

submitBut.addEventListener("click", submission);

resetBut.addEventListener("click", resetList);

retrieveArray();

console.log(usersArray);