const questions = [
    {
    question: "Which is the biggest continent in the world ?",
    answers: [
    { text: "North America", correct: false },
    { text: "Asia", correct: true },
    { text: "Africa", correct: false },
    { text: "Australia", correct: false }
    ]
    },
    {
    question: "Which is the longest river in the world?",
    answers: [
    { text: "Ganga", correct: false },
    { text: "Nile", correct: true },
    { text: "Amazon", correct: false },
    { text: "Niger", correct: false }
    ]
    },
    {
    question: "Which is largest  ocean in the world?",
    answers: [
    { text: "Indian", correct: false },
    { text: "Artic", correct: false },
    { text: "Atlantic", correct: false },
    { text: "Pacific", correct: true },
    ]
    },
    {
    question: "Which is the largerst animal in the world  ?",
    answers: [
    { text: "Shark", correct: false },
    { text: "Elephant", correct: true },
    { text: "Giraffe", correct: false },
    { text: "Blue Whale", correct: false }
    ]
    }
    ];
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');
    let currentQuestionIndex = 0;
    let score = 0;
    function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    }
    function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +
    currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if (answer.correct) {
    button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    });
    }
    function resetState() {
    nextButton.style;
    while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
    }
    }
    function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
    }else{
    selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === 'true') {
    button.classList.add('correct');
    }
    button.disabled = true;
    });
    nextButton.style.display = 'block';
    }
    function showScore() {
    resetState();
    questionElement.innerHTML = "You scored " + score + " out of " +
    questions.length;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = 'block';
    }
    function handelNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
    showQuestion();
    } else {
    showScore();
    }
    }
    nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
    handelNextButton();
    } else {
    startQuiz();
    }
    });
    startQuiz();