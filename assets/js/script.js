

loadDecksOnScreen();
checkLocalMemoryItemsExist();




function checkLocalMemoryItemsExist() {

    if(localStorage.getItem('deck10') === null) {
      alert('does not exist');
    }
    else
    {
      alert('does exist');
    }
  
  
  }
  







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
    
        <div class="cards-field deck-storage-number">${deckNumber}</div>
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
        
            loadDeck(deckNumber);
        }


        // add buttons 
        $('#buttons-div').append(`

            <button id="add-card-btn">add card</button>
            <button id="save-deck-btn">save deck</button>
            <button id="close-deck-btn">close deck</button>

        `);
}


// load the deck content onto screen
function loadDeck(deckNumber) {



    let deck = 'deck' + (deckNumber);

 

    let deckContent = localStorage.getItem(deck);

  
    
    // remove line breaks
    deckContent = deckContent.replace(/(?:\r\n|\r|\n)/g, '');

    // remove whitespaces
    deckContent = deckContent.replace(/\s/g, '');

    //alert('hier');

            // add title bar 
            $('#my-decks').append(`
    
            <div class="cards-field deck-storage-number">${deckNumber}</div>
            <div class="cards-field deck-title">-</div>
            <div class="cards-field cards-title-front">-</div>
            <div class="cards-field cards-title-back">-</div>
    
            `);

    // add deck description to screen
    for(let i in deckContent) {

        if(deckContent.charAt(i) === '}') {
            
            let deckDescription = deckContent.slice(0, i);
            $('.deck-title').text(deckDescription);
        }
    }

    let startPosition;
    let endPosition;

    // add card front side description
    for(let i in deckContent) {

        if(deckContent.charAt(i) === '}') {

            startPosition = i;
        }

        if(deckContent.charAt(i) === '#') {

            endPosition = i;
        }

        
    }

    startPosition++;

    let cardFrontAndBackSideDescription = deckContent.slice(startPosition, endPosition);
    let cardFrontSideDescription;
    let cardBackSideDescription;

    cardFrontSideDescription = cardFrontAndBackSideDescription.slice(0, cardFrontAndBackSideDescription.indexOf(','));
    cardBackSideDescription = cardFrontAndBackSideDescription.slice(cardFrontAndBackSideDescription.indexOf(',')+1, cardFrontAndBackSideDescription.length);
    

    $('.cards-title-front').text(cardFrontSideDescription);
    $('.cards-title-back').text(cardBackSideDescription);





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

    saveData = saveData + $('.deck-title').text() + '}\n';
    saveData = saveData + $('.cards-title-front').text() + ', ' + $('.cards-title-back').text() + '#\n';


    if(numberOfCards != 0) {
        
        for(let i = 0; i < numberOfCards; i++) {
            saveData = saveData + $('.cards-front').eq(i).text() + ', ' + $('.cards-back').eq(i).text() + ';\n';      
        }
  
        saveData = saveData.slice(0, saveData.length-2);
        }

    let saveUnderDeckName = 'deck' + $('.deck-storage-number').text();

    alert('deck saved under ' + saveUnderDeckName);

    localStorage.setItem(saveUnderDeckName, saveData);

    //alert(localStorage.getItem(saveUnderDeckName));

});


// close deck button
$(document).on('click', '#close-deck-btn', function() {

    // empty the my-decks div
    $('#my-decks').empty();

    // remove the buttons
    $('#add-card-btn').remove();
    $('#save-deck-btn').remove();
    $('#close-deck-btn').remove();
    
    // load the deck summary on screen
    loadDecksOnScreen();

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

    let x = $('.deck-edit').index(this);
    x++;

    editDeck(x);

});










/* hides toggle menu at loading website */
$('#toggle-menu').toggle();


/* toggle menu */
$('#navbar-toggle-button').on('click', function() {

    $('#toggle-menu').slideToggle('slow');

}); 