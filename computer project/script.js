function openPopup(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closePopup(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function checkAnswer(inputId, resultId, correctAnswer) {
    let useranswer = document.getElementById(inputId).value;
    let message = document.getElementById(resultId);

    if (useranswer == correctAnswer) {
        message.style.color = "green";
        message.textContent = "Correct! Great job! 🎉";
    } else {
        message.style.color = "red";
        message.textContent = "Oops! Try again! ❌";
    }
}