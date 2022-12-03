//GLOBAL VARIABLES HERE
var timerEl = document.getElementById('countdown');
var startBttn = document.getElementById('startButton');
var questionsDiv = document.getElementById('questionsDiv');
var questionTitle = document.getElementById('questionTitle');
var buttonsDiv = document.getElementById('buttons');
var choices = document.getElementById('choices');
var questionIndex = 0;
var timeLeft ;
var finalScreen = document.getElementById('finalScreen');
var timeInterval ;


// Timer that counts down from 60
function countdown() {
    timeLeft = 60;
  
    timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);       
      }
    }, 1000);
  }

//this sums up the quiz
function quiz() {
    //we initialize the countdown timer
    countdown();
    //we remove the hidden attribute to the questions
    questionsDiv.removeAttribute('class', 'hide');
    //we call the next questions function
    nextQuestion();
}

//this brings the next question and answer set to display
function nextQuestion() {
    //this sets a variable to the questions index value in the question array
    var currentQ = questions[questionIndex];
    //this takes the current questions title located in the html and makes it equal to javascripts current question
    questionTitle.textContent = currentQ.question
    //this sets the choices in the html to an empty string, allowing it to reset after user prompts through questions
    choices.innerHTML = ''
    //this states for the current questions answer, 
    currentQ.answers.forEach(function(answer) {
        //create an answer button for each answer
        var answerButton = document.createElement('button')
        //inside the button put what that answers text content is
        answerButton.textContent = answer
        //this sets the value of the button equal to the value of the answer
        answerButton.setAttribute('value', answer)
    //set attribute as above to add class for styling
        //on the answer button we click we will run the check answer function
        answerButton.onclick = checkAnswer
        //this adds the answer button for the appropriate set of array
        choices.append(answerButton)
    })
}

//this checks the answer
function checkAnswer(){
    //this takes the value we click and compares it to the answer of the index value of the question in the questions array that we are on
    if (this.value === questions[questionIndex].correctAnswer){
        //if the value we click is the same value as that questions correct answer, then we need to
            //ADD INCREMENT TO SCORE TOTAL
        console.log('correct!')
    }
    //if the answer clicked does not match the same value as that questions, correct answer then
    else {
        //then display incorrect
        console.log('incorrect!')
        //remove 10 seconds from time remaining
        timeLeft -= 10
        //display the correct number
        timerEl.textContent = timeLeft
    }
    //this keeps going to the next question
    questionIndex ++
    //this states that once the index value of the question is at the last value of the length of questions
    if (questionIndex === questions.length){
        //then we finish the quiz
        finishQuiz()
    //if not, we keep going to the next question
    } else {
        nextQuestion()
    }
}

//this finalizes the quiz
function finishQuiz(){
    //this stops the timer once the quiz is complete
    clearInterval(timeInterval)
    //this sets the questions div to hidden
    questionsDiv.setAttribute('class', 'hidden')
    //this removes the hidden attribute from the final screen
    finalScreen.removeAttribute('class', 'hidden')
}
startBttn.onclick= quiz;
//ONCE Quiz  IS OVER
//DISPLAY USER INPUT SCREEN
//GATHER USERS INITIALS / NAME
//USER HITS SUBMIT
//THEN LOG TO LEADERBOARD
//DISPLAY LEADERBOARD




const questions = [
    {
        question: 'This is question 1',
        answers: [
             'answer a',
             'answer b',
             'answer c'
        ],
        correctAnswer: 'answer a',
    },
    {
        question: 'This is question 2',
        answers: [
            'answer a',
            'answer b',
            'answer c'
       ],
       correctAnswer: 'answer a',
    },
    {
        question: 'This is question 3',
        answers: [
            'answer a',
            'answer b',
            'answer c'
       ],
       correctAnswer: 'answer a',
    },
    {
        question: 'This is question 4',
        answers: [
            'answer a',
            'answer b',
            'answer c'
       ],
       correctAnswer: 'answer a',
    },
    {
        question: 'This is question 5',
        answers: [
            'answer a',
            'answer b',
            'answer c'
       ],
       correctAnswer: 'answer a',
    },
];








