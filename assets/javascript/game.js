// VARIABLES
// ==========================================================================

// The array of answers for this word game. (Answer, Length)
var answer = ["ME", "HANA", "KUCHI", "MIMI", "MAYUGE", "MATSUGE"];

// Computer pick
var pickedAnswer;

// Create variables that hold references to the places in the HTML where we want to display things.
var alreadyGuessedText = document.getElementById("alreadyGuessedField");
var currentWordText = document.getElementById("currentWordField");
var guessRemainingCount = document.getElementById("guessRemainingField");
var winsCount = document.getElementById("winsField");

// Counter / initial value
var winsCount = 0;
var totalCount = 0;
var alreadyGuessedCount = 0;

var alreadyGuessedText = [];
var currentWordText = [];
var alreadyAnsweredText = [];
var inputHistory = [];


// PROCESS
// ==========================================================================

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    if (totalCount === 0) {

        // Preparetion
        //=======================================================================
        // Initialize
        guessRemainingCount = 12;

        // Randomly chooses a choice from the answer array.
        pickedAnswer = answer[Math.floor(Math.random() * answer.length)];
        console.log(pickedAnswer);

        // Get mumber of charactor in Answer
        var a = pickedAnswer.length;

        // Display "CURRENT WORDS" with "_"
        for (var i = 0; i < a; i++) {
            currentWordText = currentWordText + "_,";
        }
        // Insert space between words
        currentWordText = currentWordText.split(',').join(' ');

        //Display in HTML
        document.getElementById("winsField").textContent = 0;
        document.getElementById("currentWordField").textContent = currentWordText;
        document.getElementById("guessRemainingField").textContent = guessRemainingCount;
        document.getElementById("alreadyGuessedField").textContent = alreadyGuessedText;

        currentWordText = [];
        totalCount++;
    }

    // MAIN PROCESS
    //=======================================================================

    else {

        totalCount++;
        guessRemainingCount = guessRemainingCount - 1;
        
        // Determines which key was pressed, converts it to Uppercase, and saves it to a variable.
        var inputWord = event.key.toUpperCase();

        inputHistory.push(inputWord);
        console.log("inputWord" + inputWord);
        console.log("inputHistory: " + inputHistory);

        // Get mumber of charactor in Answer
        var a = pickedAnswer.length;

        // Check inputWord is included in pickedAnswer
        for (var j = 0; j < a; j++) {

            // Already typed before?
            if (inputHistory.indexOf(inputWord) === -1){


//                console.log("=====" + j + "=====");
//                console.log(inputWord);
//                console.log("alreadyGuessedFlag: " + alreadyGuessedFlag);
//                console.log("alreadyAnsweredFlag: " + alreadyAnsweredFlag);
//                console.log("pickedAnswer[j]: " + pickedAnswer[j]);

                // If inputWord is NEW

                // WIN? -- inputWord is included in pickedAnswer
                if (inputWord === pickedAnswer[j]) {

                    currentWordText[j] = inputWord;
//                    alreadyAnsweredText[j] = inputWord;

                    console.log("=====" + j + "=====");
                    console.log(inputWord);
                    console.log("currentWordText[0]" + currentWordText[0]);
                    console.log("currentWordText[1]" + currentWordText[1]);
                    console.log("currentWordText[2]" + currentWordText[2]);
                    console.log("currentWordText[3]" + currentWordText[3]);
                    console.log("currentWordText[4]" + currentWordText[4]);


                    // WIN now??
                    //if (currentWordText.split(',').join('') === pickedAnswer){
                    //winsCount = winsCount + 1;
                    //totalCount = 0
                    //}
                }

                // LOOSE -- inputWord is not included in pickedAnswer
                else  {
                    alreadyGuessedText[j] = inputWord;
                }
            }
        }
   
    // Display in HTML
    document.getElementById("winsField").value = winsCount;
    document.getElementById("currentWordField").textContent = currentWordText;
    document.getElementById("guessRemainingField").textContent = guessRemainingCount;
    document.getElementById("alreadyGuessedField").textContent = alreadyGuessedText;
    }
}
