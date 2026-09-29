// Button on home page

function showMessage() {
    alert("Start your healthy journey today! Eat well, exercise and take care of yourself.");
}


// Contact form

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        document.getElementById("formMessage").innerText =
            "Please fill in all the fields.";

    } else {

        document.getElementById("formMessage").innerText =
            "Thank you, " + name + "! Your message has been submitted.";

        document.getElementById("contactForm").reset();
    }
});