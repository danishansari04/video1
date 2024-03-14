while (true) {
    var password = prompt("Please enter the password:");

    if (password === "11") {
        alert("Access granted!");
        break; // Exit the loop if the password is correct
    } else {
        alert("Access denied. Incorrect password.");
    }
}