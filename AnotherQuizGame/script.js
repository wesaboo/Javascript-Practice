var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

var quizDiv = document.getElementById("quizDiv");
var questionDiv =document.getElementById("questionDiv")
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var nextBtn = document.getElementById("nextBtn");
var scoreDiv = document.getElementById("score");

var numOfQuestion = questions.length;
var currentQuestion = 0;
var score = 0;

function renderQuestion (i) {
    var q = questions[i];
    questionDiv.textContent = (i + 1)+ ". " + q.question;
    choice1.textContent = q.choices[0];
    choice1.textContent = q.choices[1];
    choice1.textContent = q.choices[2];
    choice1.textContent = q.choices[3];
};

function nextQuestion () {
    var selectedOption = document.querySelector("input[type=radio]:checked")
}