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

function loadDeckIntoMemory() {

    /* first card in deck gives information about from and back side description */
    memory[0] = [];
    memory[0][0] = 'english';
    memory[0][1] = 'dutch';

    memory[1] = [];
    memory[1][0] = 'car';
    memory[1][1] = 'auto';
    memory[1][2] = 'true';

    memory[2] = [];
    memory[2][0] = 'door';
    memory[2][1] = 'deur';
    memory[2][2] = 'true';

    memory[3] = [];
    memory[3][0] = 'window';
    memory[3][1] = 'raam';
    memory[3][2] = 'true';

    memory[4] = [];
    memory[4][0] = 'table';
    memory[4][1] = 'tafel';
    memory[4][2] = 'true';

    amountOfCardsInDeck = memory.length - 1;

}


function openPlayScreen() {

    /* this function loads the play (practice a deck) screen on the deck.html page */

    $('#content-decks-page').append(`
    
        <div id="play-screen">
        
            <div id="card-div">
            
                <div id="question-field">
                
                    <span id="question-title">question</span>
                
                    <p id="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                
                </div>

                <div id="answer-field">

                    <span id="answer-title">answer</span>
                
                    <p id="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                
                </div>
            
            </div>

            <div id="buttons-div">
            
                <button id="answer-button">answer</button>
                <button id="next-button">next</button>    
            
            </div>
        
        
        </div>
    
    `);


}



function fireQuestion() {

    
    do {

        pullCard = Math.floor(amountOfCardsInDeck * Math.random(0, 1)) + 1;

    }while(memory[pullCard][2] == 'false');

    memory[pullCard][2] = 'false';
    $('#question').text(memory[pullCard][0]);

}


/* answer button event */
$('#answer-button').on('click', function() {

    $('#answer').text(memory[pullCard][1]);

});


/* next button event */
$('#next-button').on('click', function() {

    fireQuestion();
    $('#answer').text('');

});
