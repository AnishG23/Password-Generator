document.getElementById('generate-button').addEventListener('click', function() {
  const passwordLength = document.getElementById('password-length').value;
  const passwordDisplay = document.getElementById('password-display');
  passwordDisplay.value = generatePassword(passwordLength);
});

document.getElementById('copy-button').addEventListener('click', function() {
  const passwordDisplay = document.getElementById('password-display');
  passwordDisplay.select();
  document.execCommand('copy');
  // Optionally, alert the user that the password has been copied.
  alert('Password copied to clipboard!');
});

function generatePassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
  }
  return password;
}
