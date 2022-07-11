const questions = [
  {
    question: "In which of the following festivals are boat races a special feature?",
    a: "Rongali Bihu",
    b: "Onam",
    c: "Pongal",
    d: " Navratri",
    correct: "b",
  },
  {
    question: "The World Largest desert is :",
    a: "Thar",
    b: "Kalahari",
    c: "Namib",
    d: "Sahara",
    correct: "d",
  },
  {
    question: "MS-Word is an example of _____",
    a: "OS",
    b: "Input device",
    c: "Application Software",
    d: "Processing Device",
    correct: "c",
  },
  {
    question: "Smallest cricket stadium in the world by boundary?",
    a: "Feroz Shah Kotla",
    b: "Melbourne Cricket Ground",
    c: "Eden Parks",
    d: "Edgebaston",
    correct: "a",
  },
  {
    question: "The world famous 'Khajuraho' sculptures are located in",
    a: "Kerala",
    b: "Maharashtra",
    c: "Orrisa",
    d: "M.P.",
    correct: "d",
  },
  {
    question: "Which of the following is used in pencils?",
    a: "Charcoal",
    b: "Graphite",
    c: "Lead",
    d: "Silicon",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a = document.getElementById('a_txt')
const b = document.getElementById('b_txt')
const c = document.getElementById('c_txt')
const d = document.getElementById('d_txt')
const submit = document.getElementById('submit')
const next = document.getElementById('next')


let currentQuestion = 0
let score = 0

loadQuiz()

function loadQuiz() {

  initial()

  const currentQuestionData = questions[currentQuestion]

  question.innerText = currentQuestionData.question
  a.innerText = currentQuestionData.a
  b.innerText = currentQuestionData.b
  c.innerText = currentQuestionData.c
  d.innerText = currentQuestionData.d
}

function initial() {
  for (var i = 0; i < 4; i++) {
    answers[i].checked = false
  }
}

function getSelected() {
  let ans
  for (var i = 0; i < 4; i++) {
    if (answers[i].checked) {
      ans = answers[i].id
    }
  }
  return ans
}


submit.addEventListener('click', function () {
  var answer = getSelected()
  var activeBtn = document.querySelector('#chnge_' + answer)
  var correctAns = questions[currentQuestion].correct
  var correctAnswerBlock = document.querySelector('#chnge_' + correctAns)
  console.log(activeBtn)
  if (answer) {
    if (answer === correctAns) {
      activeBtn.classList.add('right')
      score++
      document.getElementById('scoreValue').innerText = score
    }
    else {
      correctAnswerBlock.classList.add('right')
      activeBtn.classList.add('wrong')
      score--
      document.getElementById('scoreValue').innerText = score
    }
    const disable = document.querySelector('#submit')
    disable.disabled = true
    currentQuestion++

    next.addEventListener('click', function () {
      document.querySelector('#h3').classList.add('only1TimeDisplay')
      if (currentQuestion < questions.length) {
        correctAnswerBlock.classList.remove('right')
        activeBtn.classList.remove('right')
        activeBtn.classList.remove('wrong')
        disable.disabled = false
        loadQuiz()

      } else {
        quiz.innerHTML = `
          <h2>Your Score is : ${score}</h2>
           <h2>Thanks!! For Playing</h2>
           <button onclick="location.reload()" class="btn-primary btn-lg">Reload</button>
           `
      }
    })
  }
})