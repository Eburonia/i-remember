/* hides toggle menu at loading website */
$('#toggle-menu').hide();


/* toggle menu */
$('#navbar-toggle-button').on('click', function() {
    $('#toggle-menu').slideToggle('slow');
});


