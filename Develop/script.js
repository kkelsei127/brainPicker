//GLOBAL VARIABLES HERE
var timerEl = document.getElementById('countdown');
var startBttn = document.getElementById('#startButton'); 

//DISPLAYS THE FOLLOWING:
//this displays the countdown, but also initializes it
    //need to figure out how to keep at 60 until event listener
 countdown = 60;


//ON CLICK WITH EVENT LISTENER FOR CLICKING START
//INTIALIZE TIMER, CHANGE TO QUESTIONS

//ON CLICK EVENT LISTENER FOR ANSWER, THIS WILL GO TO NEXT SCREEN
//MAYBE INCLUDE A WHILE LOOP



// Timer that counts down from 60
function countdown() {
    var timeLeft = 60;
  
    var timeInterval = setInterval(function () {
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

//QUESTION
//WHEN USER CLICKS START BUTTON DISPLAY FIRST QUESTION
    //IF USER SELECTS RIGHT ANSWER DISPLAY MESSAGE
    //IF USER SELECTS WRONG ANSWER DISPLAY MESSAGE
        //TAKE 15 SECONDS FROM TIMER
//REPEAT THIS FOR ALL FIVE QUESTIONS
//END FUNCTION
function makeQuiz(event){
    event.preventDefault;
    startBttn.addEventListener("click", quiz());
    console.log('button clicked');
    countdown();
}


//QUESTION FUNCTION
//need to display each keyvalue object pair below const questions

//for each wrong answer TIMER FUNCTION
//TAKE AWAY 15 SECONDS FOR EACH WRONG ANSWER
//ELSE NOTHING
function quiz() {
    console.log('quiz will load, hopefully....');
}

const questions = [
    {
        question: 'This is question 1',
        answers: {
            a: 'answer a',
            b: 'answer b',
            c: 'answer c'
        },
        correctAnswer: 2,
    },
    {
        question: 'This is question 2',
        answers: {
            a: 'answer a',
            b: 'answer b',
            c: 'answer c'
        },
        correctAnswer: 2,
    },
    {
        question: 'This is question 3',
        answers: {
            a: 'answer a',
            b: 'answer b',
            c: 'answer c'
        },
        correctAnswer: 2,
    },
    {
        question: 'This is question 4',
        answers: {
            a: 'answer a',
            b: 'answer b',
            c: 'answer c'
        },
        correctAnswer: 2,
    },
    {
        question: 'This is question 5',
        answers: {
            a: 'answer a',
            b: 'answer b',
            c: 'answer c'
        },
        correctAnswer: 2,
    },
];



//ONCE Quiz  IS OVER
//DISPLAY USER INPUT SCREEN
//GATHER USERS INITIALS / NAME
//USER HITS SUBMIT
//THEN LOG TO LEADERBOARD
//DISPLAY LEADERBOARD




