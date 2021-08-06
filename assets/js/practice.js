/* assets/js/practice.js */
/* Author: Maurice Vossen */
/* August 2021 */


/* declare the memory for the dack */
var deckMemory = [];

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
                <button id="load-deck-button">load deck</button></div>
            
            </div>
        
        `);

}


/* function loads the play (practice a deck) screen on the deck.html page */
function openPracticeScreen() {

    /* clear the screen before loading the practice screen */
    $('#content-index').empty();


    /* load the practice screen */
    $('#content-index').append(`
    
        <div id="practice-flashcards">PRACTICE FLASHCARDS</div>

        <div id="deck-title">ENGLISH - DUTCH</div>

        <div id="shown-cards-stats">CARD <span id="card-from">4</span> OF <span id="total-cards">10</span> SHOWN</div>
    
        <div id="flashcard">
        
            <div id="front-side">

                <span id="front-side-title">QUESTION</span>
                <p id="question">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolore? Quas eius tempore animi similique consequuntur eum mollitia optio tempora fugit tenetur sit modi reprehenderit quis, accusantium, eligendi, ipsam distinctio.</p>

            </div>

            <div id="back-side">

                <span id="back-side-title">ANSWER</span>
                <p id="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolore? Quas eius tempore animi similique consequuntur eum mollitia optio tempora fugit tenetur sit modi reprehenderit quis, accusantium, eligendi, ipsam distinctio.</p>

            </div>

        </div>

        <div id="input-field-div">

            <div id="score">CORRECT <span id="correct">4</span> - WRONG <span id="wrong">6</span></div>

            <div id="input-div"><input type="text" id="input-textbox"></div>

            <div id="buttons-div">

                <button id="answer-button">show answer</button>
                <button id="next-card-button">next card</button>
            
            </div>

        </div>

    `);

    /* focus on textbox when screen loads */
    $('#input-textbox').focus();

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



/* loads the start screen */
openStartScreen();



/* click events */

/* function loads the deck on screen */
/* Credit: this is not my code, from internet */
document.querySelector("#load-deck-button").addEventListener('click', function() {

    //alert('test');

    let deck;

    let file = document.querySelector("#browse-button").files[0];
    let reader = new FileReader();

    /* check if textfile is selected */
    if(file.name.substring(file.name.length-4, file.name.length) === '.txt') {
       /* a txt file is selected */
    }
    else {
        alert('select a .txt file');
        return;
    }

    
    reader.addEventListener('load', function(e) {

        deck = e.target.result;


        /* load the deck into the storage */
        loadDeckIntoMemory(deck);

       
        /* clear the screen before loading a deck into the practice screen */
        $('#content-index').empty();


        /* open the practice screen */
        openPracticeScreen()


        /* load deckname on screen */
        // $('#cards-summary-div').append(`<div id="deck-title" class="change-field">${getDeckDescription(deck)}</div>`);


        /* load card front and backside description on screen */
        // $('#deck-title').after(`
        
          //  <div id="cards-description-div">
             //   <div id="cards-title-frontside" class="change-field">${getDeckFrontSideDescription(deck)}</div>
              //  <div id="cards-title-backside" class="change-field">${getDeckBackSideDescription(deck)}</div>
           // </div>

       // `);

        /* loads the cards on screen */
       // loadCardsOnScreen(deck);

    });

    reader.readAsText(file);
    
});


/* on click show the question answer */
$('#answer-button').on('click', function(){

    alert('test');

});


/* on click show the next question */
$('#next-card-button').on('click', function(){

    alert('test');

});