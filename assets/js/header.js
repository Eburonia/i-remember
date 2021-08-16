// assets/css/header.js
// Author: Maurice Vossen
// August 2021

// hides toggle navigation menu awehen website is loaded
$('#toggle-menu').hide();


// toggle navigation menu
$('#navbar-toggle-button').on('click', function() {

    $('#toggle-menu').slideToggle('slow');

});


