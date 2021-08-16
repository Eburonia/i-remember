// assets/css/contact.js
// Author: Maurice Vossen
// August 2021


// Credit: code coming from emailJS example codeInstitude

function sendMail(contactForm) {

    emailjs.send("service_dgvknqk", "template_brfwkut", {

        receiver: 'Maurice',
        from_name: contactForm.firstname.value + " " + contactForm.lastname.value,
        to_name: contactForm.lastname.value,
        email_address: contactForm.email.value,
        message: contactForm.message.value

    })

    .then(

        // in case of correct response
        function(response) {

            console.log("SUCCESS", response);

            // clear screen when form is sent
            $('#content-contact').empty();

            // put message on screen the sending was successful
            $('#content-contact').append(`
            
                <div id="sent-message">Your message has been sent!</div>

            `);
        },

        // in case of error 
        function(error) {

            // messages failed sending
            console.log("FAILED", error);
            alert('your message has not been sent!');
        }
    );

    return false;

}


