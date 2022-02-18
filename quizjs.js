const quizDB = [
    {
        question:"Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markeup Language",
        d: "Hypertext Markeup Language",
        ans:"ans4"
    },

    {
        question:"Q2: What is the full  of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Stule Sheeps",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans:"ans1"
    },

    {
        question:"Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocal",
        c: "Hey Transfer Protocal",
        d: "Hypertext Transfer Protocol",
        ans:"ans4"
    },

    {
        question:"Q4: What is the full form of JS?",
        a: "Javascrit",
        b: "javascrept",
        c: "Javascript",
        d: "jaavasript",
        ans:"ans1"
    }

];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{ 
        const questionList = quizDB[questionCount];
        question.innerText = questionList.question;
 
        option1.innerText = questionList.a;
        option2.innerText = questionList.b;
        option3.innerText = questionList.c;
        option4.innerText = questionList.d;
}
loadQuestion();


const getCheckAnswer = () => {
    let answer;
    // console.log(answers);

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click',() => {
            const checkedAnswer = getCheckAnswer();
            console.log(checkedAnswer);

            if(checkedAnswer === quizDB[questionCount].ans){
                score++;
            }

            questionCount++;

            deselectAll();

            if(questionCount < quizDB.length){
                loadQuestion();
            } else{
                showScore.innerHTML =`
                <h3>You have to scored ${score}/${quizDB.length}</h3>
                <button class="btn" onlick="location.reload()">Okay Again</button>
                `;
                showScore.classList.remove('scoreArea');
            }
}); 