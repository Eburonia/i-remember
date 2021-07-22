

loadDecksOnScreen();

// loading a summary of all 10 decks on the screen
function loadDecksOnScreen() {

    // empty the my-decks div
    $('#my-decks').empty();

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

$(document).on('click', '.deck-descr', function() {

    

});


