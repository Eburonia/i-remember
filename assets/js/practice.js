/* assets/js/practice.js */
/* Author: Maurice Vossen */
/* August 2021 */


/* this function loads the play (practice a deck) screen on the deck.html page */
function openPlayScreen() {

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

openPlayScreen();

/* on click show the question answer */
$('#answer-button').on('click', function(){

    alert('test');

});


/* on click show the next question */
$('#next-card-button').on('click', function(){

    alert('test');

});


