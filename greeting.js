document.addEventListener("DOMContentLoaded", function() {
    // Get the reference to the <h2> element
    var greetingElement = document.querySelector("#friend-greeting");
    
    // Get URL parameters
    var params = new URLSearchParams(document.location.search);
    
    // Get the 'name' parameter
    var friendName = params.get("name");
    
    // Set the greeting text
    greetingElement.textContent = "Hello, " + friendName + "!";
});
