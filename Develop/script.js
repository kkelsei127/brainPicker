//GLOBAL VARIABLES HERE
var timeEl = document.getElementById('countdown');

//ON CLICK WITH EVENT LISTENER FOR CLICKING START
//INTIALIZE TIMER, CHANGE TO QUESTIONS

//ON CLICK EVENT LISTENER FOR ANSWER, THIS WILL GO TO NEXT SCREEN
//MAYBE INCLUDE A WHILE LOOP

//TIMER FUNCTION
//START AT 60 SECONDS
//TAKE AWAY 15 SECONDS FOR EACH WRONG ANSWER
//ELSE NOTHING

    //COPIED THIS FROM SOLVED TIMERS ACTIVITY
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
        // Call the `displayMessage()` function
        //displayMessage();
      }
    }, 1000);
  }


//ONCE QUESTION FUNCTION IS OVER
//DISPLAY USER INPUT SCREEN
//GATHER USERS INITIALS / NAME
//USER HITS SUBMIT
//THEN LOG TO LEADERBOARD
//DISPLAY LEADERBOARD

//QUESTION FUNCTION
//WHEN USER CLICKS START BUTTON DISPLAY FIRST QUESTION
    //IF USER SELECTS RIGHT ANSWER DISPLAY MESSAGE
    //IF USER SELECTS WRONG ANSWER DISPLAY MESSAGE
        //TAKE 15 SECONDS FROM TIMER
//REPEAT THIS FOR ALL FIVE QUESTIONS
//END FUNCTION
