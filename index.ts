function isPalindrome(input: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the cleanInput is equal to its reverse
    return cleanInput === cleanInput.split('').reverse().join('');
}

document.getElementById('palindromeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputString = (document.getElementById('inputString') as HTMLInputElement).value.trim();
    const outputDiv = document.getElementById('output');

    if (outputDiv === null) {
        console.error("Output div element not found.");
        return;
    }

    if (inputString === '') {
        outputDiv.innerHTML = '<p class="text-danger">Please enter a string.</p>';
        return;
    }

    const result = isPalindrome(inputString);
    if (result) {
        outputDiv.innerHTML = `<p class="text-success">"${inputString}" is a palindrome!</p>`;
    } else {
        outputDiv.innerHTML = `<p class="text-danger">"${inputString}" is not a palindrome.</p>`;
    }

    (document.getElementById('inputString') as HTMLInputElement).value = ''; // Clear the input field
});
