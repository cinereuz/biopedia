const questions = [
  {
    question: 'Apa fungsi utama dari mitokondria dalam sel?',
    answers: [
      { text: 'Pemrosesan dan penyimpanan nutrisi', correct: false },
      { text: 'Pengaturan transportasi sel', correct: false },
      { text: 'Produksi energi sel melalui respirasi seluler', correct: true },
      { text: 'Sintesis protein', correct: false },
      { text: 'Pemecahan senyawa organik kompleks', correct: false },
    ],
  },
  {
    question: 'Apa perbedaan sel eukariotik dengan sel prokariotik?',
    answers: [
      { text: 'Sel eukariotik memiliki nukleus, sedangkan sel prokariotik tidak', correct: true },
      { text: 'Sel prokariotik lebih besar dari sel eukariotik', correct: false },
      { text: 'Sel eukariotik tidak memiliki membran sel, sedangkan sel prokariotik memiliki', correct: false },
      { text: 'Sel prokariotik memiliki mitokondria, sedangkan sel eukariotik tidak', correct: false },
      { text: 'Sel eukariotik hanya ditemukan pada tumbuhan', correct: false },
    ],
  },
  {
    question: 'Proses fotosintesis terjadi di bagian tumbuhan yang disebut sebagai...',
    answers: [
      { text: 'Akar', correct: false },
      { text: 'Batang', correct: false },
      { text: 'Daun', correct: true },
      { text: 'Buah', correct: false },
      { text: 'Bunga', correct: false },
    ],
  },
  {
    question: 'Apa yang dimaksud dengan pewarisan sifat yang ditentukan oleh kromosom seks?',
    answers: [
      { text: 'Pewarisan autosom', correct: false },
      { text: 'Pewarisan dominan', correct: false },
      { text: 'Pewarisan resesif', correct: false },
      { text: 'Pewarisan X-link', correct: true },
      { text: 'Pewarisan Y-link', correct: false },
    ],
  },
  {
    question: 'Pada tahap apa sel-sel tubuh manusia mengalami pembelahan sel?',
    answers: [
      { text: 'Mitosis', correct: true },
      { text: 'Meiosis', correct: false },
      { text: 'Interfase', correct: false },
      { text: 'Sitokinesis', correct: false },
      { text: 'Anafase', correct: false },
    ],
  },
  {
    question: 'Apa peran enzim dalam reaksi kimia biologis?',
    answers: [
      { text: 'Menstabilkan struktur sel', correct: false },
      { text: 'Menghasilkan energi melalui fotosintesis', correct: false },
      { text: 'Menyandi informasi genetik', correct: false },
      { text: 'Mempercepat laju reaksi kimia', correct: true },
      { text: 'Membentuk dinding sel', correct: false },
    ],
  },
  {
    question: 'Organ apa yang bertanggung jawab untuk menghasilkan insulin dalam tubuh manusia?',
    answers: [
      { text: 'Hati', correct: false },
      { text: 'Pankreas', correct: true },
      { text: 'Ginjal', correct: false },
      { text: 'Paru-paru', correct: false },
      { text: 'Lambung', correct: false },
    ],
  },
  {
    question: 'Fungsi utama sistem peredaran darah adalah...',
    answers: [
      { text: 'Pertukaran gas', correct: false },
      { text: 'Transportasi nutrisi dan oksigen ke sel', correct: true },
      { text: 'Detoksifikasi zat beracun', correct: false },
      { text: 'Pengaturan suhu tubuh', correct: false },
      { text: 'Penghasil hormon', correct: false },
    ],
  },
  {
    question: 'Berapa pasang jumlah total kromosom pada manusia setelah pembelahan meiosis?',
    answers: [
      { text: '23', correct: true },
      { text: '46', correct: false },
      { text: '69', correct: false },
      { text: '92', correct: false },
      { text: '50', correct: false },
    ],
  },
  {
    question: 'Proses apa yang memproduksi molekul RNA dari DNA?',
    answers: [
      { text: 'Transkripsi', correct: true },
      { text: 'Replikasi', correct: false },
      { text: 'Translasi', correct: false },
      { text: 'Fagositosis', correct: false },
      { text: 'Meiosis', correct: false },
    ],
  },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
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
  nextButton.style.display = 'none';
  backButton.style.display = 'none';
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
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  if (currentQuestionIndex < questions.length - 0) {
    nextButton.style.display = 'block';
  } else {
    nextButton.style.display = 'block';
    backButton.style.display = 'block';
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Kamu benar ${score} dari ${questions.length} pertanyaan`;
  nextButton.innerHTML = 'Main lagi';
  nextButton.style.display = 'block';
  backButton.style.display = 'block';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

backButton.addEventListener('click', () => {
  window.location.href = '../index.html'; // Sesuaikan dengan path menuju index.html
});

startQuiz();
