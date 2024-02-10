function isPalindrome(input) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check if the cleanInput is equal to its reverse
    return cleanInput === cleanInput.split('').reverse().join('');
}
function runPalindromeChecker() {
    var inputField = document.getElementById('inputString');
    var outputDiv = document.getElementById('output');
    if (outputDiv === null) {
        console.error("Output div element not found.");
        return false; // Prevent form submission
    }
    var inputString = inputField.value.trim();
    if (inputString === '') {
        outputDiv.innerHTML = '<p>Please enter a string.</p>';
        return false; // Prevent form submission
    }
    var result = isPalindrome(inputString);
    if (result) {
        outputDiv.innerHTML = "<p>\"".concat(inputString, "\" is a palindrome!</p>");
    }
    else {
        outputDiv.innerHTML = "<p>\"".concat(inputString, "\" is not a palindrome.</p>");
    }
    inputField.value = ''; // Clear the input field
    return false; // Prevent form submission
}
