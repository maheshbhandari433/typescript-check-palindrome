function isPalindrome(input: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the cleanInput is equal to its reverse
    return cleanInput === cleanInput.split('').reverse().join('');
}

function runPalindromeChecker() {
    const inputString = prompt("Enter a string to check if it's a palindrome:");

    if (inputString !== null) {
        if (inputString.trim() === '') {
            alert("No input provided.");
        } else {
            const result = isPalindrome(inputString);
            if (result) {
                alert(`${inputString} is a palindrome!`);
            } else {
                alert(`${inputString} is not a palindrome.`);
            }
        }
    } else {
        alert("No input provided.");
    }
}


// Run the app
runPalindromeChecker();
