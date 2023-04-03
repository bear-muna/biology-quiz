var submitBut = document.querySelector("#submit");
var usernameText = document.querySelector("#username");
var list = document.querySelector("#list");
var resetBut = document.querySelector("#reset");

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
    list.textContent = "";

    for (let i = 0; i < usersArray.length; i++) {
        var arr = usersArray[i];

        var li = document.createElement("li");
        li.textContent = arr;
        li.setAttribute("data-index", i);

        list.appendChild(li);


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

    var parseArray = JSON.parse(localStorage.getItem("usersArray"));

    if (parseArray !== null) {

        localStorage.clear();

        list.textContent = "";

    } 

}

submitBut.addEventListener("click", submission);

resetBut.addEventListener("click", resetList);

retrieveArray();