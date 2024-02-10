var _a;
function isPalindrome(input) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check if the cleanInput is equal to its reverse
    return cleanInput === cleanInput.split('').reverse().join('');
}
(_a = document.getElementById('palindromeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var inputString = document.getElementById('inputString').value.trim();
    var outputDiv = document.getElementById('output');
    if (outputDiv === null) {
        console.error("Output div element not found.");
        return;
    }
    if (inputString === '') {
        outputDiv.innerHTML = '<p class="text-danger">Please enter a string.</p>';
        return;
    }
    var result = isPalindrome(inputString);
    if (result) {
        outputDiv.innerHTML = "<p class=\"text-success\">\"".concat(inputString, "\" is a palindrome!</p>");
    }
    else {
        outputDiv.innerHTML = "<p class=\"text-danger\">\"".concat(inputString, "\" is not a palindrome.</p>");
    }
    document.getElementById('inputString').value = ''; // Clear the input field
});
