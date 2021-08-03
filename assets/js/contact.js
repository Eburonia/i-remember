
/*function sendMail(sendForm) {

   emailjs.send('service_dgvknqk', 'template_brfwkut', {
       
    from_name: "Maurice",
    to_name: "Chris"

    });


} */


function sendMail(contactForm) {
    emailjs.send("service_dgvknqk", "template_brfwkut", {
        from_name: "Maurice",
    to_name: "Chris"
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert('works');
        },
        function(error) {
            console.log("FAILED", error);
            alert('does not works');
        }
    );
    return false;  // To block from loading a new page
}


