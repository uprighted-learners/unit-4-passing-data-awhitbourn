document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    var userInput = document.getElementById("user-input").value;

    if (userInput === "Friend") {
        // Redirect to the new page with the name as a URL parameter
        document.location = "/greeting.html?name=" + encodeURIComponent(userInput);
    } else {
        // Display "Go away!" message
        var responseElement = document.getElementById("computer-response");
        responseElement.textContent = "Go away!";
    }
});
