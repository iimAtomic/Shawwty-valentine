const messages = [
    "Are you absolutely certain?",
    "Like, 100% sure??",
    "Are you reaaally sure about this?",
    "Come on, think it through!",
    "Pookie, don’t do this to me...",
    "If you say no, my heart will shatter into a million pieces...",
    "I might just cry a little...",
    "I might just cry a lot...",
    "Fine, I’ll stop… maybe.",
    "Okay, last time… just say yes! 🥺❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}