// add my decks title field
$('#my-decks').append(`<div id="my-decks-title">My decks</div>`);


// add my decks title field
$('#my-decks').append(`

<div class="my-decks-field my-decks-field-play">play</div>
<div class="my-decks-field my-decks-field-description">description</div>
<div class="my-decks-field my-decks-field-edit">edit</div>


`);


$('.my-decks-field-play').on('click', function() {

    alert('play');

});


$('.my-decks-field-edit').on('click', function() {

    alert('edit');

});
