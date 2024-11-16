document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "I like to read.",
        "I am an Engineering student.",
        "I am studying AI.",
        "I like desserts.",
        "I procrastinate a lot."
    ];

    const factDisplay = document.getElementById('fact-display');
    const generateFactButton = document.getElementById('generate-fact');

    generateFactButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    });
});
