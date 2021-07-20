
/* hides toggle menu at loading website */
$('#toggle-menu').toggle();


/* toggle menu */
$('#navbar-toggle-button').on('click', function() {

    $('#toggle-menu').slideToggle('slow');

});




$('#btn-add-deck').on('click', function() {

    $('#my-decks-summary').append("<div class=\"my-decks-item\"><div class=\"my-decks-btn my-decks-play\">play</div><div class=\"my-decks-btn my-decks-desc\">description</div><div class=\"my-decks-btn my-decks-edit\">edit</div></div>");

});

        