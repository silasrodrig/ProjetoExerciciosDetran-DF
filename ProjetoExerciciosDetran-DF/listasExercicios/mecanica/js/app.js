


const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

/* Basta por a quantidade de questões que deseja, ou mudar o valor para 
"quiz.length" pois ai vai ler todo o Array de questões.*/
const questionLimit = quiz.length; 


let questionCounter = 0;
let currentQuestion;
let avaliableQuestions = [];
let avaliableOptions = [];
let correctAnswers = 0;
let attempt = 0;


//Colocando as perguntas disponíveis no Array.

function setAvaliableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        avaliableQuestions.push(quiz[i])
    }
}



//Definir o número da pergunta, pergunta e opções
function getNewQuestion() {
    

    //Definir o número da pergunta
    questionNumber.innerHTML = "Questões " + (questionCounter + 1) + " de " + questionLimit;

    // Definir o texto da pergunta  /   Obter pergunta aleatória
     const questionIndex = avaliableQuestions[Math.floor(Math.random() * avaliableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    // Obeter a posição de questionIndex do Array avaliableQuestion
    const index1 = avaliableQuestions.indexOf(questionIndex);
    // Removendo o questionIndex da matriz avaliableQuestion para que a questão não se repita
    avaliableQuestions.splice(index1, 1);

    // Definir opções
    //Obter o comprimento das Opções
    const optionLen = currentQuestion.options.length
    // Jogando as oções para a matriz de oções disponíveis
    for (let i = 0; i < optionLen; i++) {
        avaliableOptions.push(i)
    }
    optionContainer.innerHTML = '';
    let animationDelay = 0.15;
    // Criar opções em html
    for (let i = 0; i < optionLen; i++) {
        // Opções Aleatórias
        const optonIndex = avaliableOptions[Math.floor(Math.random() * avaliableOptions.length)];

        // Obtendo a posição de "optionIndex" em AvaliableOption
        const index2 = avaliableOptions.indexOf(optonIndex);

        // Removendo o optonIndex de avaliableOption, para que a opção não se repita
        avaliableOptions.splice(index2, 1);

        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = optonIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)");
    }
    questionCounter++
}

// Obtendo o resultado da pergunta da tentativa atual
function getResult(element) {
    const id = parseInt(element.id);

    // Obtendo a resposta comparando o ID da opção clicada
    if (id === currentQuestion.answer) {
        // set the gren color to the correct option
        element.classList.add("correct");

        //ADICIONA A COR CORRETA NA BOLINHA DE RESPOSTA
        updateAnswerIndicator("correct");
        correctAnswers++;
       


    } else {
        // Definindo a cor vermelha para a opção incorreta
        element.classList.add("wrong");

        //ADICIONA A COR VERMELHA NA BOLINHA DE RESPOSTA ERRADA
        updateAnswerIndicator("wrong");

        // COLOCA A COR NA RESPOSTA CORRETA!!!  if the answer is incorrect the show the correct option by adding green color the correct otpin
        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct")
            }
        }
    }
    attempt++;
    unclickableOptions();
}

// Tornar todas as opções não clicáveis uma vez que o usuário selecione uma opção (Restrito o usuário para alterar a oções novamente)
function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

//MOSTRA A RESPOSTA CORRETA EM BAIXO 
function answerIndicator() {
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = questionLimit; //ALTERADO AQUI TAMBÉM O LIMITE DAS QUESTÕES
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);

    }

}

function updateAnswerIndicator(markType) {
    answersIndicatorContainer.children[questionCounter - 1].classList.add(markType);

}

function next() {
    if (questionCounter === questionLimit) {
         quizOver();


    } else {
        getNewQuestion()
    }

}

function quizOver() {

    //hide quiz Box
    quizBox.classList.add("hide");
    // show result box
    resultBox.classList.remove("hide");
    quizResult();
}
//get the quiz Result
function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = questionLimit;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / questionLimit) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + questionLimit;
}

function resetQuiz(){
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
    avaliableQuestions = [];
    
}

function tryAgainQuiz() {
    // hid the resulbox
    resultBox.classList.add("hide");
    //sho the quizBox
    quizBox.classList.remove("hide")
    resetQuiz();
    startQuiz();

}
function goToHome(){
    // hide result box
    resultBox.classList.add("hide");

    // show home box
    homeBox.classList.remove("hide");
    resetQuiz();
}


//  #### STARTING POING ####

function startQuiz(){

    // hide home box
     homeBox.classList.add("hide");
     // show qui box
     quizBox.classList.remove("hide");

    // Primeiros definiremos todas as questões na matriz de perguntas disponívels
    setAvaliableQuestions();
    // Em Seguida, chamaremos getNewQuestion(); function
    getNewQuestion();
    //to create indicator of answers
    answerIndicator();
}

window.onload = function(){
    homeBox.querySelector(".total-question").innerHTML = questionLimit;

}