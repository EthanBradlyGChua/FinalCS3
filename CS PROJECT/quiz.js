const quizData = [
    ["Main cause of hunger?", ["Overpopulation", "Food waste", "Poverty", "Climate change"], 2],
    ["Continent with most hunger?", ["Asia", "Africa", "Europe", "South America"], 1],
    ["Meaning of 'food insecurity'?", ["Lack of variety", "Uncertainty of meals", "Expired food", "Skipping breakfast"], 1],
    ["Organization fighting hunger?", ["WHO", "WFP", "UNICEF", "FAO"], 1]
];

const quizContainer = document.getElementById("quiz");

// Display the quiz questions
quizData.forEach((question, index) => {
    let questionHTML = `<p>${question[0]}</p>`;
    
    question[1].forEach((option, optionIndex) => {
        questionHTML += `<input type="radio" name="q${index}" value="${optionIndex}"> ${option}<br>`;
    });

    quizContainer.innerHTML += questionHTML;
});

// Function to check answers
function submitQuiz() {
    let score = 0;
    
    quizData.forEach((question, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === question[2]) {
            score++;
        }
    });

    document.getElementById("result").textContent = `Score: ${score}/${quizData.length}`;
}