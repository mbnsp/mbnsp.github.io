// script.js
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('mainContent');
    const submitCode = document.getElementById('submitCode');
    const accessCode = document.getElementById('accessCode');
    const errorMessage = document.getElementById('errorMessage');

    const correctCode = '1234'; // Przykładowy kod dostępu

    function checkAccessCode() {
        if (accessCode.value === correctCode) {
            overlay.classList.add('hidden');
            mainContent.classList.remove('hidden');
        } else {
            errorMessage.textContent = 'Incorrect code. Please try again.';
            errorMessage.style.display = 'block';
        }
    }

    submitCode.addEventListener('click', checkAccessCode);

    accessCode.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkAccessCode();
        }
    });

    // Przykład warunku wykrywania podejrzanego wejścia
    // Zastąp ten warunek swoją logiką
    const isSuspicious = true; // np. sprawdzanie IP, liczba nieudanych prób logowania itp.

    if (!isSuspicious) {
        overlay.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }
});
