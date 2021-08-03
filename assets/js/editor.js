
$('#content-editor-page').append(`

    <div id="cards-summary-div">
    
        
    
    </div>

    <div id="cards-summary-buttons">
        
            <input type="file" id="browse-button" />
            <button id="read-button">Read File</button>
            <button id="add-row">Add Row</button>

    </div>

`);




let deck = 0;
let numberOfCardsInDeck;

document.querySelector("#read-button").addEventListener('click', function() {

		let file = document.querySelector("#browse-button").files[0];
		let reader = new FileReader();

		reader.addEventListener('load', function(e) {

	    	let text = e.target.result;
            deck = text;
            deck = JSON.parse(deck);
            numberOfCardsInDeck = deck.length;
            
            $('#cards-summary-div').empty();
            
            $('#cards-summary-div').append(`<div id="cards-summary-title">Deck Name</div>`);

            


            for(let i = 0; i < numberOfCardsInDeck; i++) {

                $('#cards-summary-title').after(`
            
                <div class="cards-summary-frontside">${deck[i].brand}</div>
                <div class="cards-summary-backside">${deck[i].color}</div>
            
                `);

            }

		});

		reader.readAsText(file);
        
});



$('#add-row').on('click', function(){

    


    $('#cards-summary-title').after(`
    
    <div class="cards-summary-frontside">-</div>
    <div class="cards-summary-backside">-</div>
    
    `);

});
