const generatePassword = function (length, includeNumbers = true, includeSpecialChars = false) {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "@#$%^&*!()_+[]{}|;:,.<>?";

    let passwordCharacters = lowerCaseLetters + upperCaseLetters; // Always include lowercase and uppercase letters

    // Include numbers if required
    if (includeNumbers) {
        passwordCharacters += numbers;
    }

    // Include special characters if required
    if (includeSpecialChars) {
        passwordCharacters += specialChars;
    }

    let password = '';

    // Ensure at least one uppercase letter
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];

    // If numbers are included, ensure at least one number
    if (includeNumbers) {
        password += numbers[Math.floor(Math.random() * numbers.length)];
    }

    // If special characters are included, ensure at least one special character
    if (includeSpecialChars) {
        password += specialChars[Math.floor(Math.random() * specialChars.length)];
    }

    // Fill the rest of the password length with random characters from available set
    for (let i = password.length; i < length; i++) {
        password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }

    // Shuffle the password to ensure randomness
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
};

// Example usage:
console.log(generatePassword(10, true, true)); // Example output: "Ab1@deF2Gh"