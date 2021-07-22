

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



// load cards in deck on screen
function editDeck(deckNumber) {

    // empty the my-decks div
    $('#my-decks').empty();



    // if deck does not exist, create empty deck on screen
    if(localStorage.getItem('deck' + deckNumber) == null) {

        // add title bar 
        $('#my-decks').append(`
    
        <div class="cards-field deck-storage-number">${deckNumber+1}</div>
        <div class="cards-field deck-title">-</div>
        <div class="cards-field cards-title-front">-</div>
        <div class="cards-field cards-title-back">-</div>

        `);


        $('#my-decks').append(`

            <div class="cards-field cards-front">-</div>
            <div class="cards-field cards-back">-</div>
            <div class="cards-delete">X</div>
    
    `);

        // if deck does exist, load from localstorage
        }
        else {
            alert('not-empty');
        }

        // add buttons 
        $('#buttons-div').append(`

            <button id="add-card-btn">add card</button>
            <button id="save-deck-btn">save deck</button>

        `);
}

// add card button
$(document).on('click', '#add-card-btn', function(){

    $('#my-decks').append(`

    <div class="cards-field cards-front">-</div>
    <div class="cards-field cards-back">-</div>
    <div class="cards-delete">X</div>

`);

});

// save deck button
$(document).on('click', '#save-deck-btn', function(){

    let saveData = '';
    let numberOfCards = $('.cards-front').length;

    saveData = saveData + '{' + $('.deck-title').text() + '}\n';
    saveData = saveData + '#' + $('.cards-title-front').text() + ', ' + $('.cards-title-back').text() + '#\n';

    for(let i = 0; i < numberOfCards; i++) {

        saveData = saveData + $('.cards-front').eq(i).text() + ', ' + $('.cards-back').eq(i).text() + ';\n';      
    }
  

    saveData = saveData.slice(0, saveData.length-2);

    alert(saveData);

    let saveUnderDeckName = 'deck' + $('.deck-storage-number').text();

    alert('deck saved into local storage');

    localStorage.setItem(saveUnderDeckName, saveData);

    alert(localStorage.getItem(saveUnderDeckName));

});


// edit cards value
$(document).on('click', '.cards-field', function() {

    let x = prompt('change field value', '');

    // check whether new value is empty or not
    if(x === '') {
        $(this).text('-');
    }
    else {
        $(this).text(x); 
    }

});

// delete card
$(document).on('click', '.cards-delete', function() {

    // determine index to be deleted
    let x = $('.cards-delete').index(this);

    // delete the fields at index
    $('.cards-front').eq(x).remove();
    $('.cards-back').eq(x).remove();
    $('.cards-delete').eq(x).remove();

});


// edit deck button 
$(document).on('click', '.deck-edit', function() {

    editDeck($('.deck-edit').index(this));

});










/* hides toggle menu at loading website */
$('#toggle-menu').toggle();


/* toggle menu */
$('#navbar-toggle-button').on('click', function() {

    $('#toggle-menu').slideToggle('slow');

}); 