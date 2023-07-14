// Define your quiz questions and options
var questions = [
    {
      question: "What is the capital of Italy?",
      options: ["Rome", "Paris", "Madrid", "Athens"],
      answer: 0
    },
    {
      question: "Who wrote the novel 'Pride and Prejudice'?",
      options: ["Jane Austen", "Charlotte Bronte", "Virginia Woolf", "Emily Dickinson"],
      answer: 0
    },
    {
      question: "Which country won the FIFA World Cup in 2018?",
      options: ["France", "Germany", "Brazil", "Spain"],
      answer: 0
    }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  var time = 60;
  var timer;
  
  // Function to display the current question and options
  function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var question = questions[currentQuestion];
    
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
  
    for (var i = 0; i < question.options.length; i++) {
      var option = document.createElement("button");
      option.textContent = question.options[i];
      option.setAttribute("onclick", "checkAnswer(" + i + ")");
      optionsElement.appendChild(option);
    }
  }
  
  // Function to check the selected answer
  function checkAnswer(option) {
    var question = questions[currentQuestion];
  
    if (option === question.answer) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to update the timer
  function updateTimer() {
    var timerElement = document.getElementById("time");
    timerElement.textContent = time;
    time--;
  
    if (time < 0) {
      endQuiz();
    }
  }
  
  // Function to start the quiz
  function startQuiz() {
    displayQuestion();
    timer = setInterval(updateTimer, 1000);
    document.getElementById("next").disabled = false;
  }
  
  // Function to end the quiz
  function endQuiz() {
    clearInterval(timer);
  
    var container = document.querySelector(".container");
    container.innerHTML = "<h2>Quiz Completed!</h2><p>Your score: " + score + "/" + questions.length + "</p>";
  
    var scoreElement = document.getElementById("score");
    scoreElement.textContent = "Final Score: " + score + "/" + questions.length;
  }
  
  // Start the quiz when the page loads
  window.onload = startQuiz;
  

  