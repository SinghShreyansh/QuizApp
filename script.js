const quizData = [
    {
        question: "Q1: What is the full form of JS",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "Jordenshoe",
        ans: "ans1"
    },
    {
        question: "Q2: What is your name",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "Jordenshoe",
        ans: "ans1"
    }, {
        question: "Q3: What is id",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "Jordenshoe",
        ans: "ans1"
    }, {
        question: "Q4: What is the full name",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "Jordenshoe",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let i = 0, score = 0;

const loadQuestion = () => {

    question.innerHTML = quizData[i].question;
    option1.innerHTML = quizData[i].a;
    option2.innerHTML = quizData[i].b;
    option3.innerHTML = quizData[i].c;
    option4.innerHTML = quizData[i].d;
}

loadQuestion();

const getCheckAnswer = () => {
    let selectedAns;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            selectedAns = curAnsElem.id;
        }

    });
    return selectedAns;
}

const deselectAll= () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked= false);
}

submit.addEventListener('click', () => {


        const checkedAnswer = getCheckAnswer();
        if (quizData[i].ans == checkedAnswer) {
            score++;
            console.log("true");
        }
       
        i++;

        if(i<quizData.length){
            deselectAll();
            loadQuestion();
        }else{
            showScore.innerHTML = `
            <h2> You scored ${score}/${i}  </h2>
            <button class="btn" onclick="location.reload()"> Play Again </button> 
            `;

            showScore.classList.remove('scoreArea');
        }
    

});

