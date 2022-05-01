const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    //Remove any error messages displayed previously
    loginErrorMsg.style.opacity = 0;

    if (username === "roopikas" && password === "Welcome1!") {
        // If the credentials are valid, show an alert box, hide error message if any and reload the page
        alert("You have logged in successfully!");
        location.reload();
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})