
const testData = {
    question: 'Where is the capital of Jordan',
    a:'Tashkent', 
    b:'Amaan', 
    c:'Kuwait City', 
    d:'Nairobi',
    correctAnswerIndex: b,
  };




const question = document.querySelector('.question');
const option1 = document.querySelector('#option1'); 
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3'); 
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;


const loadQuestion = () => {
    const questionList = testData[questionCount];

     question.innerText = questionList.question;

     option1.innerText = questionList.a;
     option2.innerText = questionList.b;
     option3.innerText = questionList.c;
     option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer =() => {
  let answer;

  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
      answer = curAnsElem.id;
    }
  });
  return answer;
}

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer();

  if(checkedAnswer === testData[questionCount].correctAnswerIndex){
    score++;
  };
  questionCount++;
  if(questionCount < testData.length){
    loadQuestion();
  }
  else{
    alert('Wrong Answer');
  }


});