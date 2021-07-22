

loadDecksOnScreen();

// loading a summary of all 10 decks on the screen
function loadDecksOnScreen() {

    // empty the my-decks div
    $('#my-decks').empty();

    // add title bar
    $('#my-decks').append(`
    
    <div class="deck-field deck-title">my decks</div>
    
    `);

    for(let i = 0; i < 10; i++) {

        $('#my-decks').append(`
    
            <div class="deck-field deck-play">play</div>
            <div class="deck-field deck-descr">description</div>
            <div class="deck-field deck-edit">edit</div>

        `);
    }
}




function editDeck(deckNumber) {

    // empty the my-decks div
    $('#my-decks').empty();



    // if deck does not exist, create empty deck on screen
    if(localStorage.getItem('deck' + deckNumber) == null) {

        // add title bar 
        $('#my-decks').append(`
    
        <div class="cards-field deck-title">my deck1</div>
        <div class="cards-field cards-title">English</div>
        <div class="cards-field cards-title">Dutch</div>

        `);


        $('#my-decks').append(`

            <div class="cards-field cards-front">empty</div>
            <div class="cards-field cards-back">empty</div>
    
    `);

        // if deck does exist, load from localstorage
        }
        else {
            alert('not-empty');
        }

        // add buttons 
        $('#buttons-div').append(`

            <button id="add-card-btn">add card</button>

        `);



     


    

}

// add card button
$(document).on('click', '#add-card-btn', function(){

    $('#my-decks').append(`

    <div class="cards-field cards-front">empty</div>
    <div class="cards-field cards-back">empty</div>

`);

});



$(document).on('click', '.deck-edit', function() {

    editDeck($('.deck-edit').index(this));

});










/* hides toggle menu at loading website */
$('#toggle-menu').toggle();


/* toggle menu */
$('#navbar-toggle-button').on('click', function() {

    $('#toggle-menu').slideToggle('slow');

}); 