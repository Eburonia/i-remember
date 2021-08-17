// assets/js/practice.js
// Author: Maurice Vossen
// August 2021


// declare the memory for the deck
let deckMemory = [];

// memory for current shown card on screen
let pullCard;


// function loads the start screen of the practice page
function openStartScreen() {

        // clear the screen before loading the start screen of the practice page
        $('#content-practice').empty();

        // load the start screen
        $('#content-practice').append(`
        
            <div id="start-screen">
            
                <div id="open-deck-div">

                    <h2>Practice <i class="fas fa-play-circle"></i></i></h2>
                    <h3>Open Deck</h3>

                    <p>Click the 'browse' button below and select a deck (.txt file)</p>

                    <div id="browse-button-div">

                        <input type="file" id="browse-button" title="Select a deck" aria-label="click this button to select a deck"/><br>
                        <button id="load-deck-button" title="Load the selected deck" aria-label="click this button to load the selected deck">Load Deck</button><br>

                    </div>

                </div>

                <div id="example-deck-div">

                    <h3>Example Deck</h3>

                    <p>To show an example deck, please click the 'example deck' button below.</p>
                    <p>With this deck you can practice your knowledge about European capital cities and consists out of 30 cards.</p>

                    <button id="example-deck-button" title="Load an example deck" aria-label="click this button to load an example deck">Example Deck</button>

                </div>
            
            </div>
        
        `);

        // button will be shown when file has been selected
        $('#load-deck-button').hide();

}


// function loads the practice section of the practice page
function openPracticeScreen() {


    // clear the screen before loading the practice screen
    $('#content-practice').empty();


    // load the practice screen
    $('#content-practice').append(`
    
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

            <div id="input-div">
                
                <input type="text" id="input-textbox">
            
            </div>

            <div id="buttons-div">

                <button id="answer-button" title="show the cards answer" aria-label="click this button to show the answer">Show Answer</button>
                <button id="replay-button" title="replay this deck" aria-label="click this button to replay this deck">Replay</button>
                <button id="other-deck-button" title="select another deck" aria-label="click this button to select another deck">Other Deck</button>
            
            </div>


            <div id="input-small-devices">
        
                <div class="button-small-device" id="wrong-button-small-device">Wrong</div>
                <div class="button-small-device" id="answer-button-small-device">Answer</div>
                <div class="button-small-device" id="correct-button-small-device">Correct</div>
    
            </div>

        </div>

    `);


    // hide buttons on desktop 
    $('#replay-button').hide();
    $('#other-deck-button').hide();

    // hide buttons on small devices
    $('#replay-deck-button-small-device').hide();
    $('#other-deck-button-small-device').hide();

}


// function loads the flashcard set into the memory
function loadDeckIntoMemory(importFile) {

    let start = importFile.indexOf('<deck>');
    let end = importFile.indexOf('</deck>');

    // store all cards from file
    let cards = importFile.substring(start + 6, end);

    let frontside = '';
    let backside = '';
    
    let cardObj;
  
    // remove new lines from file
    cards = cards.replace(/(\r\n|\n|\r)/gm, "");

    // remove tabs from file
    cards = cards.replace('\t', '');
  
    let card = cards.split('|');

    // store all cards in card object and add them to memory 
    for(let i in card) {
  
        frontside = card[i].slice(0, card[i].indexOf('+'));
        backside = card[i].slice(card[i].indexOf('+') + 1, card[i].length);
  
        cardObj =  {
  
            frontside: frontside,
            backside: backside,
            show: true
  
        }
  
        // add card object to memory 
        deckMemory.push(cardObj);
  
    }

}


// function returns the deck's description
function getDeckDescription(importFile) {

    let start = importFile.indexOf('<deckname>');
    let end = importFile.indexOf('</deckname>');
  
    return importFile.substring(start + 10, end);

}


// function returns the card's front-side description
function getDeckFrontSideDescription(importFile) {

    let start = importFile.indexOf('<front-title>');
    let end = importFile.indexOf('</front-title>');
  
    return importFile.substring(start + 13, end);
  
}


// function returns the card's back-side description
function getDeckBackSideDescription(importFile) {

  let start = importFile.indexOf('<back-title>');
  let end = importFile.indexOf('</back-title>');

  return importFile.substring(start + 12, end);

}


// function returns the number of cards in the imported deck
function getNumberOfCardsInDeck(deckMemory) {

    return deckMemory.length;

}


// function fires a question
function fireQuestion() {

    // current shown card number
    let currentCard = $('#current-card').text();


    // enable answer button + css styling small devices
    $('#answer-button-small-device').prop('disabled', false);
    $('#answer-button-small-device').css('background-color', 'deepskyblue');
    $('#answer-button-small-device').css('color', 'whitesmoke');


    // disable correct button, set styling small devices
    $('#correct-button-small-device').prop('disabled', true);
    $('#correct-button-small-device').css('background-color', 'lightgray');


    // disable wrong button, set styling small devices
    $('#wrong-button-small-device').prop('disabled', true);
    $('#wrong-button-small-device').css('background-color', 'lightgray');


    // show sections 
    $('#front-side-title').show();
    $('#score').show();


    // hide answer sections
    $('#back-side-title').hide();
    $('#answer').hide();


    // reset the input-textbox when this function is fired and focus
    $('#input-textbox').val('');
    $('#input-textbox').prop('disabled', false);
    $('#input-textbox').focus();


    // pull a random card and show it on screen
    if(currentCard < deckMemory.length) {

        // select a card (pullCard) which has not been shown yet
        do {

            pullCard = Math.floor(deckMemory.length * Math.random(0, 1));

        } while(deckMemory[pullCard].show == false);


        // set show card to false (won't be shown on screen anymore when pulling a new card)
        deckMemory[pullCard].show = false;


        // show the cards question on screen
        $('#question').text(deckMemory[pullCard].frontside);


        // add answer on screen (won't be visible)
        $('#answer').text(deckMemory[pullCard].backside);


        // iterate number of shown cards on screen
        currentCard++;
        $('#current-card').text(currentCard);
    
    }

    // when al cards are shown of screen
    else {

        // tell end-user they have finished all cards
        $('#front-side-title').hide();

        $('#question').html("All cards shown.<br>Press the 'Replay' button below to repeat this deck.<br>Or press 'Other Deck' to select an other deck.");

        // disable input textbox
        $('#input-textbox').prop('disabled', true);
        $("#input-textbox").blur(); // deselect textbox

        $('#back-side-title').hide();

        $('#answer').css('color', '#707070');
        $('#answer').show();
        $('#answer').text('');
        $('#answer').append(`Your score is:<br>Correct Answers: ${$('#correct').text()}<br>Wrong Answers: ${$('#wrong').text()}`);

        $('#score').hide();


            $('#correct-button-small-device').hide();
            $('#answer-button-small-device').hide();
            $('#wrong-button-small-device').hide();
      
            $('#replay-deck-button-small-device').show();
            $('#other-deck-button-small-device').show();

            $('#replay-button').show();
            $('#other-deck-button').show();
            
            $('#answer-button').hide();

    }
    
}


// function will increment the 'correct answer' score
function incrementCorrectAnswer() {

    let currentCorrectAnswerValue = $('#correct').text();
    let currentCard = $('#current-card').text();
    let correctScore = $('#correct').text();
    let wrongScore = $('#wrong').text();

    // increment only 1 time
    if((parseInt(correctScore) + parseInt(wrongScore)) < parseInt(currentCard)) {

        currentCorrectAnswerValue++;
        $('#correct').text(currentCorrectAnswerValue);

    }

}


// function will increment the 'wrong answer' score
function incrementWrongAnswer() {

    let currentWrongAnswerValue = $('#wrong').text();
    let currentCard = $('#current-card').text();
    let correctScore = $('#correct').text();
    let wrongScore = $('#wrong').text();

    // increment only 1 time
    if((parseInt(correctScore) + parseInt(wrongScore)) < parseInt(currentCard)) {

        currentWrongAnswerValue++;
        $('#wrong').text(currentWrongAnswerValue);

    }
}


// function replays the deck
function replayDeck() {


    // reset deck memory shown cards to true
    for(let i = 0; i < deckMemory.length; i++) {

        deckMemory[i].show = true;
 
    }


    // reset values
    $('#current-card').text(0);
    $('#correct').text(0);
    $('#wrong').text(0);


    // reset buttons and card stats
    $('#correct-button-small-device').show();
    $('#answer-button-small-device').show();
    $('#wrong-button-small-device').show();
    $('#shown-cards-stats').show();


    // hide buttons desktop
    $('#replay-button').hide();
    $('#other-deck-button').hide();


    // hide buttons small device
    $('#replay-deck-button-small-device').hide();
    $('#other-deck-button-small-device').hide();


    // show answer button desktop
    if ($(window).width() > 900) {
        $('#answer-button').show();
    }
    // hide small device
    else {
        $('#answer-button').hide();
    }


    // fire first question on screen
    fireQuestion();

}



// function loads the start screen
openStartScreen();



// all click events from here

// on click, function loads the practice screen 
// Credit: https://usefulangle.com/post/193/javascript-read-local-file
document.querySelector("#load-deck-button").addEventListener('click', function() {

    let deck;

    let file = document.querySelector("#browse-button").files[0];
    let reader = new FileReader();

    //check whether textfile is selected
    if(file.name.substring(file.name.length-4, file.name.length) === '.txt') {
       
        // clear the screen before loading the selected deck on screen
        $('#content-practice').empty();

        // load the selected deck on screen
        openPracticeScreen();

    }

    // in case no .txt file has been selected
    else {
        alert('select a .txt file');
        return;
    }

    
    reader.addEventListener('load', function(e) {

        deck = e.target.result;

        // load the selected deck into the memory
        loadDeckIntoMemory(deck);

        // load the deck description on screen
        $('#deck-title').text(getDeckDescription(deck).toUpperCase());

        // load the amount of cards in the deck on screen
        $('#total-cards').text(getNumberOfCardsInDeck(deckMemory));

        // load the cards front-side description on screen
        $('#front-side-title').text(getDeckFrontSideDescription(deck));

        // load the cards back-side description on screen
        $('#back-side-title').text(getDeckBackSideDescription(deck));

        // fire first question on screen
        fireQuestion();

    });

    reader.readAsText(file);
 
});


// on click, show the question's answer
$(document).on('click', '#answer-button', function(){

    // showing the answer is cheating, wrong answer will be incremented
    incrementWrongAnswer();

    $('#back-side-title').show();
    $('#answer').text(deckMemory[pullCard].backside);
    $('#answer').css('color', 'deepskyblue').show();

    // focus on input-textbox end-user can type correct answer
    $('#input-textbox').focus();

});


// on click, replay the deck
$(document).on('click', '#replay-button', function() {

    replayDeck();

});


// on click, load other deck on screen to practice
$(document).on('click', '#other-deck-button', function(){

    // reloads the start screen and automatically empties the memory
    location.reload(); 

});


// on click, check the user-input answer with the correct answer
// Credit: https://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery
$(document).on('keypress', '#input-textbox',  function(e) {
    
    // clear the answer field
    $('#answer').hide();

    // when 'enter key' is pressed
    if(e.which == 13) {
        
        // disable input textbox
        $('#input-textbox').prop('disabled', true);


        // get input answer and correct answer
        let inputAnswer = $('#input-textbox').val();
        let correctAnswer = deckMemory[pullCard].backside;


        // convert input answer and correct answer to lowercase for comparison reasons
        // in case of correct given answer
        if(inputAnswer.toLowerCase() === correctAnswer.toLowerCase()) {

            // disable the textbox
            $("#input-textbox").blur();

            // correct answer
            $('#back-side-title').show();
            $('#answer').text(correctAnswer);
            $('#answer').show().css('color', 'limegreen').show();

            // increment correct score
            incrementCorrectAnswer();

            // timeout 2 seconds before next question will be fired
            setTimeout(fireQuestion, 2000);

        }

        // in case of wrong given answer
        else
        {
            // disable input textbox
            $('#input-textbox').prop('disabled', false);

            // show on screen the answer is wrong
            $('#answer').text('Wrong Answer!').css('color', 'red');
            $('#answer').show();

            // increment wrong score
            incrementWrongAnswer();

        }

    }

});


// on click, load the example card deck (European Topography)
$(document).on('click', '#example-deck-button', function(){

    // declare card object
    let cardObj =  {
  
        frontside: '',
        backside: '',
        show: true

    };


    // open the practice screen
    openPracticeScreen();


    // load the deck description on screen
    $('#deck-title').text(('European Capital Cities').toUpperCase());

    // load the amount of cards in the deck on screen
    $('#total-cards').text(20);
    
    // load the cards front-side description on screen
    $('#front-side-title').text('What is the capital of');
    
    // load the cards back-side description on screen
    $('#back-side-title').text('Answer');


    // load 20 cards into memory

    // card 1
    cardObj =  {
        frontside: 'the Netherlands',
        backside: 'the Hague',
        show: true
    };

    deckMemory.push(cardObj);


    // card 2
    cardObj =  {
        frontside: 'Belgium',
        backside: 'Brussels',
        show: true
    };

    deckMemory.push(cardObj);


    // card 3
    cardObj =  {
        frontside: 'France',
        backside: 'Paris',
        show: true
    };
    
    deckMemory.push(cardObj);


    // card 4
    cardObj =  {
        frontside: 'Spain',
        backside: 'Madrid',
        show: true
    };
        
    deckMemory.push(cardObj);

    
    // card 5
    cardObj =  {
        frontside: 'Portugal',
        backside: 'Lisbon',
        show: true
    };
        
    deckMemory.push(cardObj);

    
    // card 6
    cardObj =  {
        frontside: 'Italy',
        backside: 'Rome',
        show: true
    };

    deckMemory.push(cardObj);
         

    // card 7
    cardObj =  {
        frontside: 'Croatia',
        backside: 'Zagreb',
        show: true
    };

    deckMemory.push(cardObj);


    // card 8
    cardObj =  {
        frontside: 'Serbia',
        backside: 'Belgrade',
        show: true
    };

    deckMemory.push(cardObj);


    // card 9
    cardObj =  {
        frontside: 'Austria',
        backside: 'Vienna',
        show: true
    };

    deckMemory.push(cardObj);


    // card 10
    cardObj =  {
        frontside: 'Czech Republic',
        backside: 'Prague',
        show: true
    };

    deckMemory.push(cardObj);


    // card 11
    cardObj =  {
        frontside: 'Germany',
        backside: 'Berlin',
        show: true
    };

    deckMemory.push(cardObj);


    // card 12
    cardObj =  {
        frontside: 'Norway',
        backside: 'Oslo',
        show: true
    };

    deckMemory.push(cardObj);


    // card 13
    cardObj =  {
        frontside: 'Danmark',
        backside: 'Copenhagen',
        show: true
    };

    deckMemory.push(cardObj);


    // card 14
    cardObj =  {
        frontside: 'Sweden',
        backside: 'Stockholm',
        show: true
    };

    deckMemory.push(cardObj);


    // card 15
    cardObj =  {
        frontside: 'Finland',
        backside: 'Helsinki',
        show: true
    };

    deckMemory.push(cardObj);


    // card 16
    cardObj =  {
        frontside: 'Hungary',
        backside: 'Budapest',
        show: true
    };

    deckMemory.push(cardObj);


    // card 17
    cardObj =  {
        frontside: 'Romenia',
        backside: 'Bucharest',
        show: true
    };

    deckMemory.push(cardObj);


    // card 18
    cardObj =  {
        frontside: 'Greece',
        backside: 'Athens',
        show: true
    };

    deckMemory.push(cardObj);


    // card 19
    cardObj =  {
        frontside: 'Bulgaria',
        backside: 'Sofia',
        show: true
    };

    deckMemory.push(cardObj);


    // card 20
    cardObj =  {
        frontside: 'Poland',
        backside: 'Warsaw',
        show: true
    };

    deckMemory.push(cardObj);


    // fire first question
    fireQuestion();

});


// on click, increment wrong answer score on small devices and fire a new card
$(document).on('click', '#wrong-button-small-device', function() {

    // disable to prevent incrementing wrong answer 2 times or correct answer
    $('#wrong-button-small-device').prop('disabled', true);
    $('#correct-button-small-device').prop('disabled', true);

    incrementWrongAnswer();

    // change styling
    $('#answer').css('color', 'red');
    $('#wrong-button-small-device').css('background-color', '#990000');

    // Timeout 2 seconds before next question will be fired
    setTimeout(fireQuestion, 2000);
    
});


// on click, show the answer on screen and disable the correct and wrong buttons
$(document).on('click', '#answer-button-small-device', function() {

    // enable correct and wrong buttons
    $('#correct-button-small-device').prop('disabled', false);
    $('#wrong-button-small-device').prop('disabled', false);


    // change styling
    $('#correct-button-small-device').css('background-color', 'limegreen');
    $('#correct-button-small-device').css('color', 'whitesmoke');
    $('#wrong-button-small-device').css('background-color', 'red');
    $('#wrong-button-small-device').css('color', 'whitesmoke');


    // show answer on screen
    $('#back-side-title').show();
    $('#answer').css('color', 'deepskyblue');
    $('#answer').show();


    // disable answer button 
    $('#answer-button-small-device').prop('disabled', true);
    $('#answer-button-small-device').css('background-color', 'lightgray');


    // change styling
    $('#correct-button-small-device').css('background-color', 'limegreen');
    $('#wrong-button-small-device').css('background-color', 'red');

});


// on click, increment correct answer score on small devices and fire a new card
$(document).on('click', '#correct-button-small-device', function() {

    // disable to prevent incrementing correct answer 2 times or wrong answer
    $('#wrong-button-small-device').prop('disabled', true);
    $('#correct-button-small-device').prop('disabled', true);

    incrementCorrectAnswer();

    // change styling
    $('#answer').css('color', 'limegreen');
    $('#correct-button-small-device').css('background-color', 'green');

    // Timeout 2 seconds before next question will be fired
    setTimeout(fireQuestion, 2000);
    
});


// on click, replay the active deck from the beginning
$(document).on('click', '#replay-deck-button-small-device', function() {

    replayDeck();

});


// on click, go to the begin screen to select another deck
$(document).on('click', '#other-deck-button-small-device', function() {

    // reloads the start screen and automatically empties the memory
    location.reload(); 

});


// on change, show load button when a (.txt) file is selected
$('#browse-button').change(function() {

    // selected file
    let file = document.querySelector("#browse-button").files[0];


    // check wheter txt file is selected
    if(file.name.substring(file.name.length-4, file.name.length) === '.txt') {
        
        // file can be loaded on screen by pressing load deck button
        $('#load-deck-button').show();
    }

    // in case no .txt file is selected
    else {
        alert('please select a .txt file');
    }

});





    