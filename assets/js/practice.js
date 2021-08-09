// assets/js/practice.js
/* Author: Maurice Vossen */
/* August 2021 */


/* declare the memory for the deck */
let deckMemory = [];


/* function loads the start screen of the practice page */
function openStartScreen() {

        /* clear the screen before loading the practice screen */
        $('#content-index').empty();

        /* load the start screen */
        $('#content-index').append(`
        
            <div id="start-screen">
            
                <div id="open-deck-div">Open Deck
                <p>Click the 'browse button' bellow and select a deck (.txt file)</p>
                <input type="file" id="browse-button" />
                <button id="load-deck-button">Load Deck</button>
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

    /* focus on textbox when screen loads */
    $('#input-textbox').focus();

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
  
    return importFile.substring(start+10, end);

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

    /* hide answer */
    $('#back-side-title').hide();
    $('#answer').hide();
    $('#input-textbox').val('');
    


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
        $("#answer-button").hide();
        $("#next-card-button").hide();

        /* tell end-user they have finished all cards */
        $('#front-side-title').text('');
        $('#question').text('all cards shown, press \'replay button\' below to repeat this deck');

        $('#back-side-title').text('');
        $('#answer').text('');

        $('#other-deck-button').show();


        /* show the replay button in order to repeat this deck */
        $('#replay-button').show();
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
        $('#deck-title').text(getDeckDescription(deck));

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

    $('#back-side-title').show();
    $('#answer').show();

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
    
    if(e.which == 13) {
        

        /* get input answer and correct answer */
        let inputAnswer = $('#input-textbox').val();
        let correctAnswer = deckMemory[pullCard].backside;


        /* convert input answer and correct answer to lowercase for comparison reasons */
        inputAnswer = inputAnswer.toLowerCase();
        correctAnswer = correctAnswer.toLowerCase();

        
        if(inputAnswer === correctAnswer) {
            $('#back-side-title').show();
            $('#answer').text('Correct Answer!').css('color', 'limegreen').show();

            /* Timeout 2 seconds before next question will be fired */
            setTimeout(fireQuestion, 2000);

        }

        else
        {
            $('#answer').text('Wrong Answer!').css('color', 'red');
            $('#answer').show();
        }

    }

});