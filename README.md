# Quiz

## Description
Welcome to my 'Quiz'! Here you'll be able to test you knowledge with biology-based questions!
The logic behind this project was created with HTML, CSS, and JavaScript. With JavaScript, I was able to create objects containing: questions and answers. The values in these objects were then displayed on their respective cards via DOM modifications. If you are able to complete the quiz within the time limit, the time was saved into local storage. In the 'high-scores' HTML file, you are able to save your name and respective score which will then be displayed. 
One challenge that I faced was randomly displaying the answers onto the cards. To solve this issue, I had to randomly pull a number which will be the index from the answers array. After pulling from the answers array, I had to splice out the answer from the answer array then decrement the random number generator by one. This method was also used when trying to pull a random prompt object from the questions array. 
Another problem that I faced was properly displaying the 'user' and 'score' values as 'li' elements. To solve this, I had to use a for loop and create 'li' elements in the for loop. These elements would then be appended into their respective 'ul'. 
After completing this project, I was able to gain more knowledge on how to use JavaScript and properly use events.

## Installation
N/A

## Usage
To run the quiz, you will have to press the 'start' button. You will then be asked a series of questions and a timer will begin. Choosing correctly will spawn in a new set of questions and answers. If you choose the wrong answer, the timer will be deducted 10 seconds. Answer the questions as fast and efficiently as possible. After completing the questions, click to 'High Scores' tab and cement your name onto the leaderboard.

## Credits
N/A

## License
Refer to license in repository.

## Screenshots

## Links
GitHub repository: https://github.com/bear-muna/fourth-challenge
