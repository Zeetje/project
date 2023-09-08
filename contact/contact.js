function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = "";

    if (name.trim() === "") {
        error += "Please enter your name.\n";
    }

    if (email.trim() === "") {
        error += "Please enter your email address.\n";
    } else if (!validateEmail(email)) {
        error += "Please enter a valid email address.\n";
    }

    if (message.trim() === "") {
        error += "Please enter a message.\n";
    }

    if (error !== "") {
        alert(error);
        return false; // Prevent form submission if there are errors
    }
    
    // If there are no errors, perform any additional actions here
    alert("Form submitted successfully!");
    
    // Redirect to the target page
    window.location.href = "../index.html";
    
    // Prevent the form from submitting via the browser's default behavior
    return false;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

