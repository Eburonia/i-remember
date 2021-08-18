// assets/css/editor.js
// Author: Maurice Vossen
// August 2021


// function starts the download procedure
// Credit: https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
function download(filename, text) {

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
  
  
// function loads the start screen
function loadStartScreen() {

    $('#content-editor').append(`

    <div id="editor-div"><h2>Deck Editor <i class="fas fa-pencil-alt"></i></h2></div>

    <div id="cards-summary-div"></div>

        <div id="editor-buttons-div">
        
                <input type="file" id="browse-button" title="Select a deck"/><br>
                <button class="editor-button" id="load-deck-button" title="Load the deck on screen" aria-label="click this button to load a deck file">Load Deck</button>
                <button class="editor-button" id="new-button" title="Start a new deck" aria-label="click this button to create a new deck">New Deck</button>
                <button class="editor-button" id="add-card" title="Add a card to the deck" aria-label="click this button to add a new card to your deck">Add Card</button>
                <button class="editor-button" id="export-deck" title="Export the deck to a downloadable file" aria-label="click this button to export your deck to a downloadable file">Export</button>
        </div>

    `);

    // hide load deck button
    $('#load-deck-button').hide();

    // hide add card button
    $('#add-card').hide();

    // hide export button
    $('#export-deck').hide();


}


// load the start screen
loadStartScreen();


// function load the deck on screen
// Credit: https://usefulangle.com/post/193/javascript-read-local-file
document.querySelector("#load-deck-button").addEventListener('click', function() {

        let deck;

		let file = document.querySelector("#browse-button").files[0];
		let reader = new FileReader();

        // check whether textfile is selected
        if(file.name.substring(file.name.length-4, file.name.length) === '.txt') {
           // .txt file is selected
        }

        else {
            // no .txt file is selected
            alert('select a .txt file');
            return;
        }

		reader.addEventListener('load', function(e) {

            // load file content into storage
            deck = e.target.result;


            // clear the screen before loading a deck on screen
            $('#cards-summary-div').empty();


            // load the deckname on screen
            $('#cards-summary-div').append(`<div id="deck-title" class="change-field" aria-label="click this text field to adjust the deck description">${getDeckDescription(deck)}</div>`);
    

            // load the card front and back-side description on screen
            $('#deck-title').after(`
            
                <div id="cards-description-div">
                    <div id="cards-title-frontside" class="change-field" aria-label="click this field to adjust the front side card description">${getDeckFrontSideDescription(deck)}</div>
                    <div id="cards-title-backside" class="change-field" aria-label="click this field to adjust the back side card description">${getDeckBackSideDescription(deck)}</div>
                </div>

            `);

            // load the cards on screen
            loadCardsOnScreen(deck);

		});

		reader.readAsText(file);

        // show 'Add Card' button on screen
        $('#add-card').show();

        // show 'Export' button
        $('#export-deck').show();

        // hide 'Open Deck' button
        $('#load-deck-button').hide();
        
});




// all click events from here

//on click, deck will be exported to a txt file
$('#export-deck').on('click', function(){

    // add deck name
    let exportDeck = `<deckname>${$('#deck-title').text()}</deckname>\n\n`;

    let cards = '';
    let numberOfCardsOnScreen = $('.card-frontside').length;

    // add cards front-side and back-side descriptions
    exportDeck = exportDeck + `<front-title>${$('#cards-title-frontside').text()}</front-title>\n`;
    exportDeck = exportDeck + `<back-title>${$('#cards-title-backside').text()}</back-title>\n\n`;

    // add all cards
    for(let i = 0; i < numberOfCardsOnScreen; i++) {
        cards = cards + $('.card-frontside').eq(i).text() + '+' + $('.card-backside').eq(i).text() + '|\n';
    }

    // remove last two characters
    cards = cards.substring(0, cards.length-2);

    exportDeck = exportDeck + `<deck>\n${cards}\n</deck>`;

    // show alert on screen
    alert('this deck will be downloaded as a .txt file');

    // save as .txt file
    let docName = $('#deck-title').text() + '.txt';

    // start to export deck to .txt file, will be saved on your device
    download(docName, exportDeck);

});


// function returns the deck's description
function getDeckDescription(importFile) {

    let start = importFile.indexOf('<deckname>');
    let end = importFile.indexOf('</deckname>');
  
    return importFile.substring(start+10, end);

}


// function returns the card's front-side description
function getDeckFrontSideDescription(importFile) {

    let start = importFile.indexOf('<front-title>');
    let end = importFile.indexOf('</front-title>');
  
    return importFile.substring(start + 13, end);
  
}


// function returns the card's back-side description
function getDeckBackSideDescription(importFile) {

  let start = importFile.indexOf('<back-title>');
  let end = importFile.indexOf('</back-title>');

  return importFile.substring(start + 12, end);

}


// function loads the selected deck's cards on screen
function loadCardsOnScreen(importFile) {

    let start = importFile.indexOf('<deck>');
    let end = importFile.indexOf('</deck>');
  
    // store all cards from file
    let cards = importFile.substring(start + 6, end);
  
    // remove new lines from file
    cards = cards.replace(/(\r\n|\n|\r)/gm, "");

    // remove tabs from file
    cards = cards.replace('\t', '');
  
    let card = cards.split('|');

    // import all cards on screen
    for(let i = 0; i < card.length; i++) {
  
        let frontside = card[i].slice(0, card[i].indexOf('+'));
        let backside = card[i].slice(card[i].indexOf('+') + 1, card[i].length);

        $('#cards-description-div').append(`
    
            <div class="card-frontside change-field" aria-label="click this text field to adjust the front side card description">${frontside}</div>
            <div class="card-backside change-field" aria-label="click this text field to adjust the back side card description">${backside}</div>
            <div class="delete-card" title="delete card" aria-label="click this button to delete this card"><i class="far fa-trash-alt"></i></div>
                
        `);

    }
  
}
  

// on click, a new deck will be created
$('#new-button').on('click', function(){

    // clear the screen before creating a new deck on screen
    $('#cards-summary-div').empty();

    // load empty deckname on screen
    $('#cards-summary-div').append(`<div id="deck-title" class="change-field" aria-label="click this text field to adjust the deck description">Deck name</div>`);
    
    // load card front and back-side description on screen
    $('#deck-title').after(`
                 
        <div id="cards-description-div">
            <div id="cards-title-frontside" class="change-field" aria-label="click this field to adjust the front side card description">Front side</div>
            <div id="cards-title-backside" class="change-field" aria-label="click this field to adjust the back side card description">Back side</div>
        </div>
     
    `);

    // show 'Add Card' button on screen
    $('#add-card').show();

    // show 'Export' button
    $('#export-deck').show();

});


// on click, a new card will be added on screen
$('#add-card').on('click', function(){

    $('#cards-description-div').after(`
    
        <div class="card-frontside change-field" aria-label="click this text field to adjust the front side card description">-</div>
        <div class="card-backside change-field" aria-label="click this text field to adjust the back side card description">-</div>
        <div class="delete-card" title="delete card" aria-label="click this button to delete this card"><i class="far fa-trash-alt"></i></div>

    `);

});


// on click, a card can be adjusted
$(document).on('click', '.change-field', function() {

    let change = prompt("Change description", $(this).text());
    let stopChange = false;


    // check wheter certain characters are used, these are blocked because they are used as special characters in the saved .txt file
    for(let i = 0; i < change.length; i++) {

        switch(change[i]) {

            case '+':
            alert('\'+\' is a special character which cannot be used');
            stopChange = true;
            break;

            case '|':
            alert('\'|\' is a special character which cannot be used');
            stopChange = true;
            break;

            case '<':
            alert('\'<\' is a special character which cannot be used');
            stopChange = true;
            break;

            case '>':
            alert('\'>\' is a special character which cannot be used');
            stopChange = true;
            break;

        }

    }

    // change the textfield when no special characters are used
    if(!stopChange) {

        if(change) {
           $(this).text(change);
        }

    }

});


// on click, the card will be deleted
$(document).on('click', '.delete-card', function(){

    // show confirm screen to be sure you want to delete the card
    let isExecuted = confirm("Are you sure you want to delete this card?");

    // if pressed OK
    if(isExecuted) {

        // delete the card (3x fields) at pressed index
        $('.card-frontside').eq($('.delete-card').index(this)).remove();
        $('.card-backside').eq($('.delete-card').index(this)).remove();
        $('.delete-card').eq($('.delete-card').index(this)).remove();

    }

});



// on change, show load button when a (.txt) file is selected
$('#browse-button').change(function() {

    // selected file
    let file = document.querySelector("#browse-button").files[0];


    // check wheter txt file is selected
    if(file.name.substring(file.name.length-4, file.name.length) === '.txt') {

        // file can be loaded on screen by pressing load deck button
        $('#load-deck-button').show();
    }

    // in case no .txt file is selected
    else {
        alert('please select a .txt file');

        // hide load button
        $('#load-deck-button').hide();
    }

});





