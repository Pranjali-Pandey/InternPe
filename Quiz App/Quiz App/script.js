const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert= document.querySelector('.alert')

const quiz =[
    {
        question:"Q1. What does HTML stand for?",
        choices: ["Hyperlink and text markup language", "Hyper Text Markup Language",
                  "Home Tool Markup Language","Hyper And Text Makeup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question:"Q2. Who is making the Web standards?",
        choices: ["The World Wide Web Consortium","Mozilla","Google",
                   "Microsoft"],
        answer: "The World Wide Web Consortium"
    },
    {
        question:"Q3. Choose the correct HTML element for the largest heading:",
        choices:["<heading>","<h6>","<h1>","<head>"],
        answer:"<h1>"
    },
    {
        question:"Q4. What is the correct HTML element for inserting a line break?",
        choices:["<break>","<br>","<lb>","<bl>"],
        answer:"<br>"
    },
    {
        question:"Q5. Choose the correct HTML element to define important text",
        choices:["<strong>","<i>","<important>","<B>"],
        answer:"<strong>"
    },
    {
        question:"Q6. Which character is used to indicate an end tag?",
        choices:["^","#","/","!"],
        answer:"/"
    },
    {
        question:"Q7.How can you make a numbered list?",
        choices:["<li>","<ol>","<list>","<dl>"],
        answer:"<li>"
    },
    {
        question:"Q8. How can you make a bulleted list?",
        choices:["<li>","<ol>","<list>","<ul>"],
        answer:"<ul>"
    },
    {
        question:"Q9. Which HTML element defines the title of a document?",
        choices:["<title>","<body>","<meta>","<head>"],
        answer:"<title>"
    },
    {
        question:"Q10. Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        choices:["alt","src","title","longdesc"],
        answer:"alt"
    }
];
// Making Variable
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
// Arrow Function to show Question
const showQuestions = () =>{
    const questionDetails= quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent="";
    for(let i=0; i<questionDetails.choices.length; i++)
    {
        const currentChoice =questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent= currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click',()=>{
            if(choiceDiv.classList.contains('selected'))
            {
                choiceDiv.classList.remove('selected')
            }
            else
            {
                choiceDiv.classList.add('selected')
            }
        });
    }
}

    // Function to check answer
    const checkAnswer = () => {
        const selectedChoice =document.querySelector('.choice.selected');
        if(selectedChoice.textContent === quiz[currentQuestionIndex].answer){
            //alert("Correct Answer");
            displayAlert("Correct Answer!")
            score++;
        }
        else
        {
            //alert("Wrong")
            displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`)
        }
        currentQuestionIndex++;
        if(currentQuestionIndex < quiz.length){
            
            showQuestions();
        }
        else
        {
            showScore();
            quizOver=true;
        }
  
    }
// function to show score
const showScore = () =>{
    questionBox.textContent="";
    choicesBox.textContent="";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}`;
    displayAlert("You have completed the quiz");
    nextBtn.textContent="Play Again"

 }
//Function to show alert
 const displayAlert = (msg) => {
    alert.style.display="block";
    alert.textContent=msg;
    setTimeout(()=>{
        alert.style.display="none"
    }, 1500);
 }
showQuestions();
nextBtn.addEventListener('click', ()=>{
    const selectedChoice=document.querySelector('.choice.selected');
    if(!selectedChoice && nextBtn.textContent === "Next")
    {
        //alert("Selected your answer");
        displayAlert("Select Your Answer")
        return;

    }
    if(quizOver)
    {
        nextBtn.textContent="Next";
        scoreCard.textContent="";
        currentQuestionIndex=0;
        showQuestions();
        quizOver=false;
        score=0;
    }
    else
    {
        checkAnswer();
    }
    checkAnswer();
    
});