

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



 function createQuestion(title,options,correctAnswerIndex){
    let question = {};
    question.title=title;
    question.options= options;
    question.correctAnswerIndex=correctAnswerIndex;

    question.isAnswerCorrect=function(index){
        return index === this.correctAnswerIndex;
    };
    question.getCorrectAnswer=function(){
        return this.options[this.correctAnswerIndex];
    };
        return question;
 }


 const firstQuestion = createQuestion(
    "Where is the capital of Jordan",
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
 );

 const secondQuestion = createQuestion(
    "Where is the capital of Jamaica",
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    2
 );


 