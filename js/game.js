const questions = [
  {
    question: 'Test Question 1',
    answers: [
      { text: 'test1', correct: false },
      { text: 'test2', correct: true },
      { text: 'test3', correct: false },
      { text: 'test4', correct: false },
      { text: 'test5', correct: false },
    ],
  },
  {
    question: 'Test Question 2',
    answers: [
      { text: 'test1', correct: false },
      { text: 'test2', correct: true },
      { text: 'test3', correct: false },
      { text: 'test4', correct: false },
      { text: 'test5', correct: false },
    ],
  },
  {
    question: 'Test Question 2',
    answers: [
      { text: 'test1', correct: false },
      { text: 'test2', correct: true },
      { text: 'test3', correct: false },
      { text: 'test4', correct: false },
      { text: 'test5', correct: false },
    ],
  },
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
