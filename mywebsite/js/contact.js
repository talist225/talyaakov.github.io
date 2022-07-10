function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "talist225@gmail.com",
    Password: "password",
    To: "theleangen@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact from Enquiry",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
