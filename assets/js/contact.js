

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
            alert('your message has been sent');
        },

        function(error) {
            console.log("FAILED", error);
            alert('your message has not been sent!');
        }
    );

    return false;  // To block from loading a new page

}


