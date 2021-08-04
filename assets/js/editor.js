
$('#content-editor-page').append(`

    <div id="cards-summary-div">
    
    </div>

    <div id="cards-summary-buttons">
        
            <input type="file" id="browse-button" />
            <button id="read-button">Read File</button>
            <button id="add-row">Add Row</button>

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
            $('#cards-summary-div').append(`<div id="cards-summary-title">${getDeckDescription(deck)}</div>`);


            /* */
            alert(getDeckFrontSideDescription(deck));
    
            $('#cards-summary-title').after(`
            
            <div class="cards-summary-frontside">${deck[i].brand}</div>
            <div class="cards-summary-backside">${deck[i].color}</div>
        
            `);



            
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








$('#add-row').on('click', function(){

    
    alert(deck);

   // $('#cards-summary-title').after(`
    
    //<div class="cards-summary-frontside">-</div>
   // <div class="cards-summary-backside">-</div>
    
    //`);

});
