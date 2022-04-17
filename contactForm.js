function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "quentin.hoehne062@gmail.com",
        Password : "schlagzeug2019",
        To : 'quentin.hoehne06@gmail.com',
        From : "test@test.de",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}