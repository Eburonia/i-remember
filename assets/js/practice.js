// assets/js/practice.js
/* Author: Maurice Vossen */
/* August 2021 */


/* declare the memory for the deck */
let deckMemory = [];
let pullCard;

/* function loads the start screen of the practice page */
function openStartScreen() {

        /* clear the screen before loading the practice screen */
        $('#content-index').empty();

        /* load the start screen */
        $('#content-index').append(`
        
            <div id="start-screen">
            
                <div id="open-deck-div">
                    <h2>Open Deck</h2>
                    <p>Click the 'browse' button below and select a deck (.txt file)</p>
                    <input type="file" id="browse-button" />
                    <button id="load-deck-button">Load Deck</button><br>
                </div>

                <div id="example-deck-div">
                    <h2>Example Deck</h2>
                    <p>To show an example deck, please click the 'example deck' button below.</p>
                    <p>With this deck you can practice your knowledge about European capital cities and consists out of 30 cards.</p>
                    <button id="example-deck-button">Example Deck</button>
                </div>
            
            </div>
        
        `);

        $("#start-practice-button").prop('disabled', true);

}


/* function loads the play (practice a deck) screen on the deck.html page */
function openPracticeScreen() {

    /* clear the screen before loading the practice screen */
    $('#content-index').empty();


    /* load the practice screen */
    $('#content-index').append(`
    
        <div id="practice-flashcards">PRACTICE FLASHCARDS</div>

        <div id="deck-title">-</div>

        <div id="shown-cards-stats">CARD <span id="current-card">0</span> OF <span id="total-cards">-</span> SHOWN</div>
    
        <div id="flashcard">
        
            <div id="front-side">

                <span id="front-side-title">-</span>
                <p id="question"></p>

            </div>

            <div id="back-side">

                <span id="back-side-title">-</span>
                <p id="answer"></p>

                

            </div>

        </div>


        <div id="input-small-devices">
        
            <div id="answer-small-device">Show Answer</div>
            <div id="wrong-small-device">Wrong</div>
            <div id="correct-small-device">Correct</div>
        
        </div>


        <div id="input-field-div">

            <div id="score">CORRECT <span id="correct">0</span> - WRONG <span id="wrong">0</span></div>

            <div id="input-div"><input type="text" id="input-textbox"></div>

            <div id="buttons-div">

                <button id="answer-button">Show Answer</button>
                <button id="next-card-button">Next Card</button>
                <button id="replay-button">Replay</button>
                <button id="other-deck-button">Other Deck</button>
            
            </div>

        </div>

    `);


    /* hide the replay button */
    $('#replay-button').hide();


    $('#other-deck-button').hide();

}


/* function loads the deck's cards into the memory */
function loadDeckIntoMemory(importFile) {

    let start = importFile.indexOf('<deck>');
    let end = importFile.indexOf('</deck>');
  
    let cards = importFile.substring(start + 6, end);
  
    cards = cards.replace(/(\r\n|\n|\r)/gm, "");
    cards = cards.replace('\t', '');
  
    let card = cards.split('|');
    let frontside = '';
    let backside = '';
    let cardObj;

    for(let i in card) {
  
        frontside = card[i].slice(0, card[i].indexOf('+'));
        backside = card[i].slice(card[i].indexOf('+') + 1, card[i].length);
  
        cardObj =  {
  
            frontside: frontside,
            backside: backside,
            show: true
  
        }
  
    deckMemory.push(cardObj);
  
    }

}


/* function returns the deck description */
function getDeckDescription(importFile) {

    let start = importFile.indexOf('<deckname>');
    let end = importFile.indexOf('</deckname>');
  
    return importFile.substring(start + 10, end);

}


/* function returns the deck's cards front side description */
function getDeckFrontSideDescription(importFile) {

    let start = importFile.indexOf('<front-title>');
    let end = importFile.indexOf('</front-title>');
  
    return importFile.substring(start + 13, end);
  
}


/* function returns the deck's cards back side description */
function getDeckBackSideDescription(importFile) {

  let start = importFile.indexOf('<back-title>');
  let end = importFile.indexOf('</back-title>');

  return importFile.substring(start + 12, end);

}


/* function returns the number of cards in the loaded deck */ 
function getNumberOfCardsInDeck(deckMemory) {

    return deckMemory.length;

}



function fireQuestion() {


    let currentCard = $('#current-card').text();
    $("#next-card-button").hide();

    /* hide answer */
    $('#back-side-title').hide();
    $('#front-side-title').show();
    $('#answer').hide();


    /* reset the input textbox when question is fired */
    $('#input-textbox').val('');
    $('#input-textbox').prop('disabled', false);
    $('#input-textbox').focus();


    /* pull a card and show it on screen */
    if(currentCard < deckMemory.length) {
        do {

            pullCard = Math.floor(deckMemory.length * Math.random(0, 1));

        } while(deckMemory[pullCard].show == false);

        /* cards which are already shown on screen set to false */
        deckMemory[pullCard].show = false;

        /* show the question on screen */
        $('#question').text(deckMemory[pullCard].frontside);
        $('#answer').text(deckMemory[pullCard].backside);

        /* iterate number of shown cards */
        currentCard++;
        $('#current-card').text(currentCard);
    
    }

    /* when al cards are shown of screen */
    else {
        $("#next-card-button").hide();

        /* tell end-user they have finished all cards */
        $('#front-side-title').hide();
        $('#question').text('All cards shown, press the \'Replay\' button below to repeat this deck or press \'Other Deck\' to select an other deck.');

        /* disable input textbox */
        $('#input-textbox').prop('disabled', true);
        $("#input-textbox").blur(); // deselect textbox

        $('#back-side-title').hide();
        $('#answer').text('Your score is: ');

        $('#other-deck-button').show();


        /* show the replay button in order to repeat this deck */
        $('#replay-button').show();
    }
    
}


/* function will increment the correct answer score */
function incrementCorrectAnswer() {

    let currentCorrectAnswerValue = $('#correct').text();
    let currentCard = $('#current-card').text();
    let correctScore = $('#correct').text();
    let wrongScore = $('#wrong').text();

    if((parseInt(correctScore) + parseInt(wrongScore)) < parseInt(currentCard)) {

        currentCorrectAnswerValue++;
        $('#correct').text(currentCorrectAnswerValue);

    }

}


/* function will increment the wrong answer score */
function incrementWrongAnswer() {

    let currentWrongAnswerValue = $('#wrong').text();
    let currentCard = $('#current-card').text();
    let correctScore = $('#correct').text();
    let wrongScore = $('#wrong').text();

    if((parseInt(correctScore) + parseInt(wrongScore)) < parseInt(currentCard)) {

        currentWrongAnswerValue++;
        $('#wrong').text(currentWrongAnswerValue);

    }
}



/* loads the start screen */
openStartScreen();



/* click events */

/* function loads the deck on screen */
/* Credit: this is not my code, from internet */
document.querySelector("#load-deck-button").addEventListener('click', function() {

    let deck;

    let file = document.querySelector("#browse-button").files[0];
    let reader = new FileReader();

    /* check if textfile is selected */
    if(file.name.substring(file.name.length-4, file.name.length) === '.txt') {
       
        /* clear the screen before loading a deck into the practice screen */
        $('#content-index').empty();

        /* open the practice screen */
        openPracticeScreen();

    }

    else {
        alert('select a .txt file');
        return;
    }

    
    reader.addEventListener('load', function(e) {

        deck = e.target.result;

        /* load the deck into the storage */
        loadDeckIntoMemory(deck);

        /* load the deck description into the practice screen */
        $('#deck-title').text(getDeckDescription(deck).toUpperCase());

        /* load the amount of card in the loaded deck into the practice screen */
        $('#total-cards').text(getNumberOfCardsInDeck(deckMemory));

        /* load the deck's front side of cards description into the practice screen */
        $('#front-side-title').text(getDeckFrontSideDescription(deck));

        /* load the deck's back side of cards description into the practice screen */
        $('#back-side-title').text(getDeckBackSideDescription(deck));

        /* fire first question on practice screen */
        fireQuestion();

    });

    reader.readAsText(file);
 
});


/* on click show the question answer */
$(document).on('click', '#answer-button', function(){

    incrementWrongAnswer();

    $('#back-side-title').show();
    $('#answer').css('color', 'deepskyblue').show();

    $('#input-textbox').focus();

});


/* on click show the next question */
$(document).on('click', '#next-card-button', function(){

    fireQuestion();

});


/* on click repeat the deck */
$(document).on('click', '#replay-button', function() {

    for(let i = 0; i < deckMemory.length; i++) {

        deckMemory[i].show = true;
 
    }

    

    $("#answer-button").show();

    $('#current-card').text(0);

    $('#next-card-button').show();

    $('#replay-button').hide();
   
    $('#other-deck-button').hide();

    $('#correct').text(0);

    $('#wrong').text(0);


    fireQuestion();

});


/* on click load other deck on screen to practice */
$(document).on('click', '#other-deck-button', function(){

    /* reloads the start screen and empties the memory */
    location.reload(); 

});

/* on click check the user-input answer with the correct answer */
// Credit: https://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery
$(document).on('keypress', '#input-textbox',  function(e) {
    
    /* clear the answer field */
    $('#answer').hide();

    /* when enter key is pressed */
    if(e.which == 13) {
        
        /* disable input textbox */
        $('#input-textbox').prop('disabled', true);


        /* get input answer and correct answer */
        let inputAnswer = $('#input-textbox').val();
        let correctAnswer = deckMemory[pullCard].backside;

        /* convert input answer and correct answer to lowercase for comparison reasons */
        if(inputAnswer.toLowerCase() === correctAnswer.toLowerCase()) {

            /* deselect the textbox */
            $("#input-textbox").blur();

            $('#back-side-title').show();
            $('#answer').text(correctAnswer);
            $('#answer').show().css('color', 'limegreen').show();

            /* Increment correct score */
            incrementCorrectAnswer();

            /* Timeout 2 seconds before next question will be fired */
            setTimeout(fireQuestion, 2000);

        }

        else
        {
            /* disable input textbox */
            $('#input-textbox').prop('disabled', false);


            /* show on screen the answer is wrong */
            $('#answer').text('Wrong Answer!').css('color', 'red');
            $('#answer').show();


            /* Increment correct score */
            incrementWrongAnswer();


        }

    }

});


$(document).on('click', '#example-deck-button', function(){

    /* declare card object */
    let cardObj =  {
  
        frontside: '',
        backside: '',
        show: true

    }


    /* open the practice screen */
    openPracticeScreen();


    /* load the deck description into the practice screen */
    $('#deck-title').text(('European Capital Cities').toUpperCase());

    /* load the amount of card in the loaded deck into the practice screen */
    $('#total-cards').text(20);
    
    /* load the deck's front side of cards description into the practice screen */
    $('#front-side-title').text('What is the capital of');
    
    /* load the deck's back side of cards description into the practice screen */
    $('#back-side-title').text('Answer');



    /* card 1 */
    cardObj =  {
        frontside: 'the Netherlands',
        backside: 'the Hague',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 2 */
    cardObj =  {
        frontside: 'Belgium',
        backside: 'Brussels',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 3 */
    cardObj =  {
        frontside: 'France',
        backside: 'Paris',
        show: true
    }
    
    deckMemory.push(cardObj);


    /* card 4 */
    cardObj =  {
        frontside: 'Spain',
        backside: 'Madrid',
        show: true
    }
        
    deckMemory.push(cardObj);

    
    /* card 5 */
    cardObj =  {
        frontside: 'Portugal',
        backside: 'Lisbon',
        show: true
    }
        
    deckMemory.push(cardObj);

    
    /* card 6 */
    cardObj =  {
        frontside: 'Italy',
        backside: 'Rome',
        show: true
    }

    deckMemory.push(cardObj);
         

    /* card 7 */
    cardObj =  {
        frontside: 'Croatia',
        backside: 'Zagreb',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 8 */
    cardObj =  {
        frontside: 'Serbia',
        backside: 'Belgrade',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 9 */
    cardObj =  {
        frontside: 'Austria',
        backside: 'Vienna',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 10 */
    cardObj =  {
        frontside: 'Czech Republic',
        backside: 'Prague',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 11 */
    cardObj =  {
        frontside: 'Germany',
        backside: 'Berlin',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 12 */
    cardObj =  {
        frontside: 'Norway',
        backside: 'Oslo',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 13 */
    cardObj =  {
        frontside: 'Danmark',
        backside: 'Copenhagen',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 14 */
    cardObj =  {
        frontside: 'Sweden',
        backside: 'Stockholm',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 15 */
    cardObj =  {
        frontside: 'Finland',
        backside: 'Helsinki',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 16 */
    cardObj =  {
        frontside: 'Hungary',
        backside: 'Budapest',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 17 */
    cardObj =  {
        frontside: 'Romenia',
        backside: 'Bucharest',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 18 */
    cardObj =  {
        frontside: 'Greece',
        backside: 'Athens',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 19 */
    cardObj =  {
        frontside: 'Bulgaria',
        backside: 'Sofia',
        show: true
    }

    deckMemory.push(cardObj);


    /* card 20 */
    cardObj =  {
        frontside: 'Poland',
        backside: 'Warsaw',
        show: true
    }

    deckMemory.push(cardObj);

    fireQuestion();

});




$(document).on('click', '#answer-small-device', function() {

    $('#answer').show();

});


$(document).on('click', '#wrong-small-device', function() {

    incrementWrongAnswer();

    /* Timeout 2 seconds before next question will be fired */
    setTimeout(fireQuestion, 2000);

});


$(document).on('click', '#correct-small-device', function() {

    incrementCorrectAnswer();

    /* Timeout 2 seconds before next question will be fired */
    setTimeout(fireQuestion, 2000);

});