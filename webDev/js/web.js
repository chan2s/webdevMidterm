function animateText(message) {
    const container = document.getElementById("animatedText");
    container.innerHTML = ""; // reset each loop

    message.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        container.appendChild(span);

        setTimeout(() => {
            span.classList.add("show");
        }, index * 150);
    });

    // Clear and restart after animation ends
    setTimeout(() => {
        animateText(message);
    }, message.length * 150 + 2000); // wait before restart
}

// Run animation
animateText("Welcome to Our Modern Website!");
