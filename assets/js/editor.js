
$('#content-editor-page').append(`

    <div id="cards-summary-div">
    
    </div>

    <div id="cards-summary-buttons">
        
            <input type="file" id="browse-button" />
            <button id="read-button">Read File</button>
            <button id="new-button">New Deck</button>
            <button id="add-row">Add Row</button>
            <button id="export-deck">Export</button>

    </div>

`);



document.querySelector("#read-button").addEventListener('click', function() {

        let deck;
        let numberOfCardsInDeck;

		let file = document.querySelector("#browse-button").files[0];
		let reader = new FileReader();

		reader.addEventListener('load', function(e) {


            /* load file content into storage */
            deck = e.target.result;


            /* clear the screen before loading a deck on screen */
            $('#cards-summary-div').empty();


            /* load deckname on screen */
            $('#cards-summary-div').append(`<div id="deck-title" class="change-field">${getDeckDescription(deck)}</div>`);
    

            /* load card front and backside description on screen */
            $('#deck-title').after(`
            
                <div id="cards-description-div">
                    <div id="cards-title-frontside" class="change-field">${getDeckFrontSideDescription(deck)}</div>
                    <div id="cards-title-backside" class="change-field">${getDeckBackSideDescription(deck)}</div>
                </div>

            `);

            /* loads the cards on screen */
            loadCardsOnScreen(deck);


            
        /* 
            $('#cards-summary-div').empty();
            
            $('#cards-summary-div').append(`<div id="cards-summary-title">Deck Name</div>`);

            
        for(let i = 0; i < numberOfCardsInDeck; i++) {

                $('#cards-summary-title').after(`
            
                <div class="cards-summary-frontside">${deck[i].brand}</div>
                <div class="cards-summary-backside">${deck[i].color}</div>
            
                `);

            }
                */



		});

		reader.readAsText(file);
        
});





/* this function exports the deck to a text */
function exportDecktoTxt() {

}



$('#export-deck').on('click', function(){

    let exportDeck = `<deckname>${$('#deck-title').text()}</deckname>\n\n`;

    exportDeck = exportDeck + `<front-title>${$('#cards-title-frontside').text()}</front-title>\n`;
    exportDeck = exportDeck + `<back-title>${$('#cards-title-backside').text()}</back-title>\n\n`;

    


    let cards = '';

    

    //alert(exportDeck);

    let numberOfCardsOnScreen = $('.card-frontside').length;

    for(let i = 0; i < numberOfCardsOnScreen; i++) {
        cards = cards + $('.card-frontside').eq(i).text() + ',' + $('.card-backside').eq(i).text() + ';\n';
    }

    cards = cards.substring(0, cards.length-2);

    exportDeck = exportDeck + `<deck>\n${cards}\n</deck>`;

    alert(exportDeck);
   

});


/* this function loads the deck description */
function getDeckDescription(importFile) {

    let start = importFile.indexOf('<deckname>');
    let end = importFile.indexOf('</deckname>');
  
    return importFile.substring(start+10, end);

  }



/* this function loads the deck's cards front side description */
function getDeckFrontSideDescription(importFile) {

    let start = importFile.indexOf('<front-title>');
    let end = importFile.indexOf('</front-title>');
  
    return importFile.substring(start + 13, end);
  
  }



/* this function loads the deck's cards back side description */
function getDeckBackSideDescription(importFile) {

  let start = importFile.indexOf('<back-title>');
  let end = importFile.indexOf('</back-title>');

  return importFile.substring(start + 12, end);

}




/* this function loads the deck's cards on screen */
function loadCardsOnScreen(importFile) {

    let start = importFile.indexOf('<deck>');
    let end = importFile.indexOf('</deck>');
  
    let cards = importFile.substring(start + 6, end);
  
    cards = cards.replace(/(\r\n|\n|\r)/gm, "");
    cards = cards.replace('\t', '');
  
  
    let card = cards.split(';');
  
    for(let i in card) {
  
        let frontside = card[i].slice(0, card[i].indexOf(','));
        let backside = card[i].slice(card[i].indexOf(',')+1, card[i].length);

        $('#cards-description-div').after(`
    
            <div class="card-frontside" class="change-field">${frontside}</div>
            <div class="card-backside" class="change-field">${backside}</div>
    
        `);

    }
  
   


  
  }
  


/* create new deck */
$('#new-button').on('click', function(){

     /* clear the screen before loading a deck on screen */
     $('#cards-summary-div').empty();

    /* load deckname on screen */
    $('#cards-summary-div').append(`<div id="deck-title" class="change-field">Deck name</div>`);
    

    /* load card front and backside description on screen */
     $('#deck-title').after(`
                 
        <div id="cards-description-div">
            <div id="cards-title-frontside" class="change-field">Front side</div>
            <div id="cards-title-backside" class="change-field">Back side</div>
        </div>
     
    `);

});




/* add row to summary */
$('#add-row').on('click', function(){

    $('#cards-description-div').after(`
    
        <div class="card-frontside change-field">-</div>
        <div class="card-backside change-field">-</div>
    
    `);

});

/* edit card click */
$(document).on('click', '.change-field', function() {

    let change = prompt("Change description", $(this).text());

    if(change) {
        $(this).text(change);
    }


});


