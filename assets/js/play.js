/* assets/js/play.js */
/* Author: Maurice Vossen */
/* August 2021 */


/* this javascript excecutes the practice of one deck */

/* create deck */
var memory = [];
var pullCard;
var amountOfCardsInDeck;

loadDeckIntoMemory();

openPlayScreen();

fireQuestion();


loadDeckData('deck1');

function loadDeckData(deckName) {

    let test = 'assets/decks/' + deckName + '.txt';

        $.get(test, function( data ) {
            //alert( "Data Loaded: " + data );
        });
}




//$.get("assets/decks/deck1.txt", function( data ) {
//  alert( "Data Loaded: " + data );
//});






function loadDeckIntoMemory() {

    /* first card in deck gives information about from and back side description */
    memory[0] = [];
    memory[0][0] = 'What is the capital of';
    memory[0][1] = 'Answer';

    memory[1] = [];
    memory[1][0] = 'Belgium';
    memory[1][1] = 'Brussels';
    memory[1][2] = 'true';

    memory[2] = [];
    memory[2][0] = 'Germany';
    memory[2][1] = 'Berlin';
    memory[2][2] = 'true';

    memory[3] = [];
    memory[3][0] = 'France';
    memory[3][1] = 'Paris';
    memory[3][2] = 'true';

    memory[4] = [];
    memory[4][0] = 'Italy';
    memory[4][1] = 'Rome';
    memory[4][2] = 'true';

    amountOfCardsInDeck = memory.length - 1;

}


/* this function loads the play (practice a deck) screen on the deck.html page */
function openPlayScreen() {

$('#content-decks-page').empty();



    $('#content-decks-page').append(`
    
        <div id="play-screen">
        
            <div id="shown-cards-stats">Card <b><span id="currentShownCard">0</span></b> of <b>${amountOfCardsInDeck}</b></div>


            <div id="card-div">
            
                <div id="question-field">
                
                    <span id="question-title">${memory[0][0]}</span>
                
                    <p id="question">-</p>
                
                </div>

                <div id="answer-field">

                    <span id="answer-title">${memory[0][1]}</span>
                
                    <p id="answer">-</p>
                
                </div>
            
            </div>


                <div id="input-answer-div">
            
            
                    <span id="input-text-title">type your answer</span><br>
                    <input type="text" id="input-textbox">
            
                </div>


            <div id="buttons-div">
            
                <button id="answer-button">answer</button>
                <button id="next-button">next</button>
                <button id="replay-button">replay</button>
            
            </div>
        
        
        </div>
    
    `);

}




function fireQuestion() {

    $('#answer-button').show();
    $('#next-button').hide();


    let currentShownCard = $('#currentShownCard').text();


    if(currentShownCard < amountOfCardsInDeck)
    {

        $('#answer').text('');

        do {

            pullCard = Math.floor(amountOfCardsInDeck * Math.random(0, 1)) + 1;

        } while(memory[pullCard][2] == 'false');

        memory[pullCard][2] = 'false';
        $('#question').text(memory[pullCard][0]);

        currentShownCard++;
        $('#currentShownCard').text(currentShownCard);

        $('#replay-button').hide();
    }

    else {
        $('#replay-button').show();
        $('#question').text('end of deck, push \'replay button\' below to repeat');
        $('#answer').text('');

        $('#question-title').hide();
        $('#answer-title').hide();

        $('#answer-button').hide();
        $('#next-button').hide();

    }

}


/* answer button event */
$('#answer-button').on('click', function() {

    $('#answer').text(memory[pullCard][1]);
    $('#next-button').show();

});


/* next button event */
$('#next-button').on('click', function() {

    fireQuestion();

});

$('#replay-button').on('click', function() {


    for(let i = 1; i < memory.length; i++) {
        memory[i][2] = 'true';

    }

    $('#currentShownCard').text('0');

    $('answer-button').show();
    $('next-button').show();
    $('#question-title').show();
    $('#answer-title').show();

    fireQuestion();

});
