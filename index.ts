function isPalindrome(input: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the cleanInput is equal to its reverse
    return cleanInput === cleanInput.split('').reverse().join('');
}

function runPalindromeChecker(): boolean {
    const inputField = document.getElementById('inputString') as HTMLInputElement;
    const outputDiv = document.getElementById('output');

    if (outputDiv === null) {
        console.error("Output div element not found.");
        return false; // Prevent form submission
    }

    const inputString = inputField.value.trim();

    if (inputString === '') {
        outputDiv.innerHTML = '<p>Please enter a string.</p>';
        return false; // Prevent form submission
    }

    const result = isPalindrome(inputString);
    if (result) {
        outputDiv.innerHTML = `<p>"${inputString}" is a palindrome!</p>`;
    } else {
        outputDiv.innerHTML = `<p>"${inputString}" is not a palindrome.</p>`;
    }

    inputField.value = ''; // Clear the input field
    return false; // Prevent form submission
}
