
/* declare deck array */
let deck = [];

/* declare deckname description and cards */
deck[0] = [[],[]];

/* assign deckname description */
deck[0][0] = "a";

/* declare cards */
deck[0][1] = [[],[]];

/* assign front side and back side descriptions of cards */
deck[0][1][0] = 'English';
deck[0][1][1] = 'Dutch';

/* declare cards */
deck[0][2] = [[],[]];

/* asign front side and back side values to first card */
deck[0][2][0] = 'House';
deck[0][2][1] = 'Huis';

addDecksToSummaryOnScreen();






function addDecksToSummaryOnScreen() {

    /* clear all decks in summary */
    $('#my-decks-summary').empty();

    for(let i = 0; i < deck.length; i++) {

        $('#my-decks-summary').append(`       
        <div class="my-decks-item">
        <div class="my-decks-btn my-decks-play">play</div>
        <div class="my-decks-btn my-decks-desc">${deck[i][0]}</div>
        <div class="my-decks-btn my-decks-edit">edit</div>
        </div>
        `);

    }

}


function createNewDeck() {

    //let deckName = prompt('Add new deck name', '');

        let a = String(deck[0][0]);
        let c = "b";

        if(a == c) {
            alert('Deckname already exist!');
          
        }
        else
        {

           
        }
       

    

      

            deck[deck.length] = [[],[]];
            deck[deck.length - 1] = deckName
        
            $('#my-decks-summary').append(`<div class="my-decks-item">
            <div class="my-decks-btn my-decks-play">play</div>
            <div class="my-decks-btn my-decks-desc">${deck[deck.length - 1]}</div>
            <div class="my-decks-btn my-decks-edit">edit</div></div>`);

        

    

}



$(document).on('click', '.my-decks-desc', function() {

    $('.my-decks-desc').css('background-color', ' #707070');

    $(this).css('background-color', 'red');

});


$('#btn-delete-deck').on('click', function() {

    for(let i = 0; i < deck.length; i++) {


        if(document.getElementsByClassName('my-decks-desc')[i].style.backgroundColor == "red") {
            alert(decks);
        }
        
    }

    

});



$('#btn-add-deck').on('click', function() {

    createNewDeck();

});

    
/* ---------- toggle ---------- */

/* hides toggle menu at loading website */
$('#toggle-menu').toggle();


/* toggle menu */
$('#navbar-toggle-button').on('click', function() {

    $('#toggle-menu').slideToggle('slow');

});