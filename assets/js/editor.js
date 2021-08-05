/* assets/css/editor.js */
/* Author: Maurice Vossen */
/* August 2021 */

/* function start the download procedure */
/* Credit: https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server */
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  
  
/* function loads the start screen */
function loadStartScreen() {
    $('#content-editor-page').append(`

    <div id="editor-div">Editor</div>

    <div id="cards-summary-div"></div>

    <div id="cards-summary-buttons">
        
            <input type="file" id="browse-button" />
            <button id="read-button">Read File</button>
            <button id="new-button">New Deck</button>
            <button id="add-row">Add Row</button>
            <button id="export-deck">Export</button>

    </div>

    `);

}


/* load start screen */
loadStartScreen();


/* function load the deck on screen */
document.querySelector("#read-button").addEventListener('click', function() {

        let deck;

		let file = document.querySelector("#browse-button").files[0];
		let reader = new FileReader();

        /* check if textfile is selected */
        if(file.name.substring(file.name.length-4, file.name.length) === '.irm') {
           /* a txt file is selected */
        }
        else {
            alert('select a .irm file');
            return;
        }

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

		});

		reader.readAsText(file);
        
});


/* on click deck will be exported to a txt file */
$('#export-deck').on('click', function(){

    let exportDeck = `<deckname>${$('#deck-title').text()}</deckname>\n\n`;

    exportDeck = exportDeck + `<front-title>${$('#cards-title-frontside').text()}</front-title>\n`;
    exportDeck = exportDeck + `<back-title>${$('#cards-title-backside').text()}</back-title>\n\n`;

    
    let cards = '';

    let numberOfCardsOnScreen = $('.card-frontside').length;

    for(let i = 0; i < numberOfCardsOnScreen; i++) {
        cards = cards + $('.card-frontside').eq(i).text() + ',' + $('.card-backside').eq(i).text() + ';\n';
    }

    cards = cards.substring(0, cards.length-2);

    exportDeck = exportDeck + `<deck>\n${cards}\n</deck>`;

    alert('this deck will be downloaded as a .rm file');

    let docname = $('#deck-title').text() + '.irm';

    /* Start file download. */
    download(docname, exportDeck);


});


/* function loads the deck description */
function getDeckDescription(importFile) {

    let start = importFile.indexOf('<deckname>');
    let end = importFile.indexOf('</deckname>');
  
    return importFile.substring(start+10, end);

}


/* function loads the deck's cards front side description */
function getDeckFrontSideDescription(importFile) {

    let start = importFile.indexOf('<front-title>');
    let end = importFile.indexOf('</front-title>');
  
    return importFile.substring(start + 13, end);
  
}


/* function loads the deck's cards back side description */
function getDeckBackSideDescription(importFile) {

  let start = importFile.indexOf('<back-title>');
  let end = importFile.indexOf('</back-title>');

  return importFile.substring(start + 12, end);

}


/* function loads the deck's cards on screen */
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

        $('#cards-description-div').append(`
    
            <div class="card-frontside change-field">${frontside}</div>
            <div class="card-backside change-field">${backside}</div>
            <div class="delete-card" title="delete card"><i class="far fa-trash-alt"></i></div>
                
        `);

    }
  
}
  

/* on click a new deck will be created */
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


/* on click a new card will be added to the deck */
$('#add-row').on('click', function(){

    $('#cards-description-div').after(`
    
        <div class="card-frontside change-field">-</div>
        <div class="card-backside change-field">-</div>
        <div class="delete-card" title="delete card"><i class="far fa-trash-alt"></i></div>

    `);

});


/* on click a card can be adjusted */
$(document).on('click', '.change-field', function() {

    let change = prompt("Change description", $(this).text());

    if(change) {
        $(this).text(change);
    }


});


/* on click the card will be deleted */
$(document).on('click', '.delete-card', function(){

    // show confirm screen to be sure you want to delete the card
    let isExecuted = confirm("Are you sure you want to delete this card?");

    // if pressed OK
    if(isExecuted) {

        // delete the fields at pressed index
        $('.card-frontside').eq($('.delete-card').index(this)).remove();
        $('.card-backside').eq($('.delete-card').index(this)).remove();
        $('.delete-card').eq($('.delete-card').index(this)).remove();

    }

});



