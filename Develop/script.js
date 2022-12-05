//GLOBAL VARIABLES HERE
var timerEl = document.getElementById('countdown');
var startBttn = document.getElementById('startButton');
var questionsDiv = document.getElementById('questionsDiv');
var questionTitle = document.getElementById('questionTitle');
var buttonsDiv = document.getElementById('buttons');
var choices = document.getElementById('choices');
var finalScreen = document.getElementById('finalScreen');
var leaderInput = document.querySelector('#leaderName');
var leaderBoardForm = document.querySelector('#leaderBoardForm');
var leaderList = document.querySelector('#leaderList');

var leaders = [];

var correct = 0;
var incorrect = 0;
var questionIndex = 0;

var timeLeft ;
var timeInterval ;


const questions = [
    {
        question: 'In key-value pairs, to which side is the "key" side and which side is the "value" side?',
        answers: [
             'Key: left, Value: right',
             'Key: right, Value: Left',
             'Key: left, Value: left'
        ],
        correctAnswer: 'Key: left, Value: right',
    },
    {
        question: 'What JavaScript method converts an object or an array into a string?',
        answers: [
            'JSON.parse()',
            'JASON.stringify()',
            'JSON.stringify()'
       ],
       correctAnswer: 'JSON.stringify()',
    },
    {
        question: 'In CSS what selector is used to call an ID?',
        answers: [
            'The "."',
            'The "#"',
            'The "$"'
       ],
       correctAnswer: 'The "#"',
    },
    {
        question: 'What does DOM stand for?',
        answers: [
            'Department of Ministry',
            'Department of Muggles',
            'Document Object Model'
       ],
       correctAnswer: 'Document Object Model',
    },
    {
        question: 'What method inserts a set of string object after the last child of an element?',
        answers: [
            'Element.append()',
            'Element.add()',
            'Element.attribute()'
       ],
       correctAnswer: 'Element.append()',
    },
];

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
        //we set the display to none to stop the questions
        questionsDiv.style.display = 'none' 
        //add the time div from html
        var time = document.getElementById('time')
        //show the div
        time.style.display = 'flex'
        //allow user to retry
        startBttn.style.display = 'flex'
      }
    }, 1000);
  }

//this sums up the quiz
function quiz() {
    var instructions = document.getElementById('instructions')
    //we initialize the countdown timer
    countdown();
    //we set the display to flex to show it
    questionsDiv.style.display = 'flex';
    //we remove the start button
    startBttn.style.display = 'none';
    //remove the instructions
    instructions.style.display ='none';
    questionIndex = 0;
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
        //add to the score
        correct++
        console.log(correct, 'correct')
    }
    //if the answer clicked does not match the same value as that questions, correct answer then
    else {
        incorrect++
        //then display incorrect
        console.log(incorrect, 'incorrect!')
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
    questionsDiv.style.display = 'none'
    //this removes the hidden attribute from the final screen
    finalScreen.removeAttribute('class', 'hidden')
}

//renders items in a leader list as <li> elements
function renderLeaders() {
    // clear leaderList element
    leaderList.innerHTML = '';

    //render a new li for each leader added
    for (var i = 0; i < leaders.length; i++) {
        var leader = leaders[i];

        var li = document.createElement('li');
        li.textContent = leader;
        li.setAttribute('data-index', i);

        leaderList.appendChild(li);
    }
}

function init(){
    //get items from local storage
    var storedLeaders = JSON.parse(localStorage.getItem('leaders'));

    //if leaders were retrieved from localStorage, update leaders array to it
    if (storedLeaders !== null) {
        leaders = storedLeaders;
    }

    renderLeaders();
}

function storeLeaders() {
    //stringify and set key in localStorage to leaders array
    localStorage.setItem('leaders', JSON.stringify(leaders));
}

//add submit event to form
leaderBoardForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var leaderText = leaderInput.value.trim();

    var user = {
        leaderText: leaderText,
        score: correct
    }

    //return from function early if submitted leaderText is blank
    if (leaderText === '') {
        return;
    }

    //add new user to leaders array, clear the input
    leaders.push(JSON.stringify(user.leaderText));
    leaderInput.value = '';

    //store updated leaders in localStorage, re-render list
    storeLeaders();
    renderLeaders();

})

init()
startBttn.onclick = quiz;



