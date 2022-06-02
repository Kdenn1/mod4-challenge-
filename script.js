//select start button causes the game to start, selected by class
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-btn')


//function to start the game
function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

//randomize questions variable 
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click',startGame)




//function to run the next question after user answers 
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

//after an incorrect/correct answer the UI needs to know what to do
function selectAnswer() {

}

//questions listed here

const questions = [
    {
        question: 'commonly used datatypes DO NOT include',
        answers: [
            {text: 'strings', correct: false },
            {text: 'booleans', correct: true },
            {text: 'alerts', correct: false },
            {text: 'numbers', correct: false },
        ]
    }
    
]
