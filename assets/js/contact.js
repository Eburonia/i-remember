/* assets/css/contact.js */
/* Author: Maurice Vossen */
/* August 2021 */


/* Credit: code coming from emailJS example codeInstitude */
function sendMail(contactForm) {

    emailjs.send("service_dgvknqk", "template_brfwkut", {

        receiver: 'Maurice',
        from_name: contactForm.firstname.value + " " + contactForm.lastname.value,
        to_name: contactForm.lastname.value,
        email_address: contactForm.email.value,
        message: contactForm.message.value

    })

    .then(
        function(response) {
            console.log("SUCCESS", response);

            /* clear screen when form sent */
            $('#content-index').empty();

            /* put message on screen the sending was successful */
            $('#content-index').append(`
            
                <div id="sent-message">Your message has been sent!</div>

            `);
        },

        function(error) {
            console.log("FAILED", error);
            alert('your message has not been sent!');
        }
    );

    return false;  // To block from loading a new page

}


