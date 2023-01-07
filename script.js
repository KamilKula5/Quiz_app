let modalBody = document.querySelector('.modal-body');
const deleteBtn = document.querySelector('#deleteBtn');
const addBtn=document.querySelector('#addBtn');
const newQuestion=document.querySelector('#new-question');  //pole do wpisania nowego pytania przez użytkownika
const newOdp1=document.querySelector('#odp1');   //pole do wpisania odpowiedzi przez użytkownika
const newOdp2=document.querySelector('#odp2');
const newOdp3=document.querySelector('#odp3');
const newOdp4=document.querySelector('#odp4');
const again = document.querySelector('#again');
const numQuestion = document.querySelector('#number-question');
const answer = document.querySelectorAll('.btn-outline-primary');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const scoreBtn = document.querySelector('#scoreBtn');
const firstQuestionImage = document.querySelector('#first-question-image');
const newCorrectAnswer=document.querySelector('#correct-answer');
const newImageText=document.querySelector('#choose-image-text');
const newImage=document.querySelector('#choose-image');
const addNewQuestion=document.querySelector('#add-new-question');
const goBack=document.querySelector('#back');
let newImageVariable;
let dangerAlert = document.querySelector('.alert');
let question = document.querySelector('.question');
let points = document.querySelector('#points');
let numberOfPoints = 0;
let numberOfQuestion = 1;
let wrongAnswer = false;    //zmienna odpowiadająca czy użytkownik odpowiedział źle na pytanie
let i = 0;
let j = 1;
let l = 0;
let m=0; //do dodawania pytania
let n=0;
correctAnswer = "";
//scoreBtn.style.display="none";    //przycisk wynik ukryty na początku
goBack.style.display="none";
dangerAlert.style.display="none";
newQuestion.style.display="none";
newOdp1.style.display="none";
newOdp2.style.display="none";
newOdp3.style.display="none";
newOdp4.style.display="none";
newCorrectAnswer.style.display="none";
newImageText.style.display="none";
newImage.style.display="none";
addNewQuestion.style.display="none"; //przycisk do koncowego dodania pytania
let quiz = [{
    question: "Jaka jest stolina Danii?",
    answers: ["Kopenhaga", "Berlin", "Warszawa", "Praga"],
    correctAnswer: "Kopenhaga",
    image: "denmark.jpg"
},
{
    question: "Jaki jest najpopularniejszy napój energetyczny na świecie?",
    answers: ["Monster", "Redbull", "Tiger", "Black"],
    correctAnswer: "Redbull",
    image: "napoj_energetyczny.jpg"
},
{
    question: "Jaki ładunek elektryczny ma neutron?",
    answers: ["Dodatni", "ujemny", "neutralny", "Żadne z powyższych"],
    correctAnswer: "neutralny",
    image: "neutron.jpg"
},
{
    question: "Jaką mąkę wybierzesz do wypieku biszkoptu?",
    answers: ["Typu 650", "Typ 2000", "Typu 450", "Typu 550"],
    correctAnswer: "Typu 450",
    image: "Mąka.jpg"
}
]

for (let k = 0; k < 4; k++) {  //iterowanie po odpowiedziach, żeby każdy przycisk obsługiwał zdarzenie onClick


    answer[k].addEventListener('click', function () {
        console.log(answer[k].textContent);
        console.log(quiz[i].correctAnswer);
        if (answer[k].textContent === quiz[i].correctAnswer) {   //sprawdzenie czy prawidlowa odpowiedz
            l = k

            if (k == 0) {  //kasowanie czerwonego obramowania po blednych odpowiedziach
                answer[1].disabled = true;    //robienie nieaktywnego przycisku
                answer[2].disabled = true;
                answer[3].disabled = true;
                answer[1].classList.remove("btn-outline-danger")
                answer[2].classList.remove("btn-outline-danger")
                answer[3].classList.remove("btn-outline-danger")
                answer[1].classList.add("btn-outline-primary")
                answer[2].classList.add("btn-outline-primary")
                answer[3].classList.add("btn-outline-primary")
                answer[0].disabled = true;

            }
            if (k == 1) {  //kasowanie czerwonego obramowania po blednych odpowiedziach
                answer[0].disabled = true;
                answer[2].disabled = true;
                answer[3].disabled = true;
                answer[0].classList.remove("btn-outline-danger")
                answer[2].classList.remove("btn-outline-danger")
                answer[3].classList.remove("btn-outline-danger")
                answer[0].classList.add("btn-outline-primary")
                answer[2].classList.add("btn-outline-primary")
                answer[3].classList.add("btn-outline-primary")
                answer[1].disabled = true;
            }
            if (k == 2) {  //kasowanie czerwonego obramowania po blednych odpowiedziach
                answer[1].disabled = true;
                answer[0].disabled = true;
                answer[3].disabled = true;
                answer[1].classList.remove("btn-outline-danger")
                answer[0].classList.remove("btn-outline-danger")
                answer[3].classList.remove("btn-outline-danger")
                answer[1].classList.add("btn-outline-primary")
                answer[0].classList.add("btn-outline-primary")
                answer[3].classList.add("btn-outline-primary")
                answer[2].disabled = true;
            }
            if (k == 3) {  //kasowanie czerwonego obramowania po blednych odpowiedziach
                answer[1].disabled = true;
                answer[2].disabled = true;
                answer[0].disabled = true;
                answer[1].classList.remove("btn-outline-danger")
                answer[2].classList.remove("btn-outline-danger")
                answer[0].classList.remove("btn-outline-danger")
                answer[1].classList.add("btn-outline-primary")
                answer[2].classList.add("btn-outline-primary")
                answer[0].classList.add("btn-outline-primary")
                answer[3].disabled = true;
            }
            if (wrongAnswer === false) {
                numberOfPoints++;
            }
            answer[k].classList.remove("btn-outline-primary");
            answer[k].classList.add("btn-outline-success");
            if (numberOfQuestion === quiz.length) { //Jeśli odpowiemy na wszystkie pytania
                answer[k].classList.remove("btn-outline-primary");
                answer[k].classList.add("btn-outline-success");
                points.textContent = `Punkty: ${numberOfPoints}`;
                setTimeout(endOfQuiz, 1200)
            }

            else {   //jeśli nie odpowiemy na wszystkie pytania
                numberOfQuestion++;
                setTimeout(nextAnswers, 1200)
                i++;
            }

        }
        else {   //jeśli błędna odpowiedź

            answer[k].classList.remove("btn-outline-primary");
            answer[k].classList.add("btn-outline-danger")
            wrongAnswer = true; //zmienna sprawdzajaca czy odpowiedziano zle na pytanie

        }
    })
}

nextAnswers = () => {
    wrongAnswer = false;
    answer[l].classList.remove("btn-outline-success");  //usuniecie zielonego obramowania
    answer[l].classList.add("btn-outline-primary"); //dodanie defaultowego obramowania (niebieskiego)
    answer[0].disabled = false;   //usuwanie nieaktywnego przycisku
    answer[1].disabled = false;
    answer[2].disabled = false;
    answer[3].disabled = false;
    numQuestion.textContent = `Pytanie: ${numberOfQuestion}`;
    points.textContent = `Punkty: ${numberOfPoints}`;
    image.src = quiz[j].image;    //przypisanie obrazka
    question.textContent = quiz[j].question;  //przypisanie nowego pytania
    answer1.textContent = quiz[j].answers[0]; //przypisanie następnych odpowiedzi do przycisków
    answer2.textContent = quiz[j].answers[1];
    answer3.textContent = quiz[j].answers[2];
    answer4.textContent = quiz[j].answers[3];
    l++;
    j++;
}

endOfQuiz = () => {
    scoreBtn.style.display = "block"
    modalBody.textContent = `Twój wynik to: ${numberOfPoints}/${numberOfQuestion}`;
}
again.addEventListener('click', function () {
    console.log("Powtarzam");
    reset();
})

reset = () => {
    modalBody.textContent = "";
    answer[0].classList.remove("btn-outline-success");
    answer[0].classList.remove("btn-outline-danger");
    answer[0].classList.add("btn-outline-primary");
    answer[1].classList.remove("btn-outline-success");
    answer[1].classList.remove("btn-outline-danger");
    answer[1].classList.add("btn-outline-primary");
    answer[2].classList.remove("btn-outline-success");
    answer[2].classList.remove("btn-outline-danger");
    answer[2].classList.add("btn-outline-primary");
    answer[3].classList.remove("btn-outline-success");
    answer[3].classList.remove("btn-outline-danger");
    answer[3].classList.add("btn-outline-primary");
    numberOfPoints = 0;
    numberOfQuestion = 1;
    i = 0;
    j = 0;
    l = 0;
    correctAnswer = "";
    answer[0].classList.remove("btn-outline-success");
    answer[0].classList.add("btn-outline-primary");
    answer[0].disabled = false;   //usuwanie nieaktywnego przycisku
    answer[1].disabled = false;
    answer[2].disabled = false;
    answer[3].disabled = false;
    numQuestion.textContent = `Pytanie: ${numberOfQuestion}`;
    points.textContent = `Punkty: ${numberOfPoints}`;
    answer1.textContent = quiz[j].answers[0]; //przypisanie następnych odpowiedzi do przycisków
    answer2.textContent = quiz[j].answers[1];
    answer3.textContent = quiz[j].answers[2];
    answer4.textContent = quiz[j].answers[3];
    image.src = quiz[l].image;
    question.textContent = quiz[l].question;
    l++;
    j++;
}

deleteBtn.addEventListener('click', function () {
    quiz.length=0;
    m=0;    //zerowanie zmiennej, żeby pytania i odpowiedzi były przypisywane od początku do tablicy po usunięciu
    for (let i=0; i <=50; i++){
        quiz.push({
            question:"",
            answers: [],
            correctAnswer: "",
            image: ""
        })
    }
    answer1.style.display='none';
    answer2.style.display='none';
    answer3.style.display='none';
    answer4.style.display='none';
    scoreBtn.style.display='none';
    firstQuestionImage.style.display='none';
    question.style.display='none';
    numQuestion.style.display='none';
    points.style.display='none';
})

addBtn.addEventListener('click',function(){
    newQuestion.style.display="block";
    goBack.style.display="block";
    newOdp1.style.display="block";
    newOdp2.style.display="block";
    newOdp3.style.display="block";
    newOdp4.style.display="block";
    newCorrectAnswer.style.display="block";
    newImageText.style.display="block";
    newImage.style.display="block";
    addNewQuestion.style.display="block";
})

addNewQuestion.addEventListener('click',function(){ //dodanie pytania do puli pytań
    quiz[m].question=newQuestion.value; //przypisanie nowego pytania
    quiz[m].answers.push(newOdp1.value, newOdp2.value, newOdp3.value, newOdp4.value);   //dodanie do tablicy odpowiedzi podanych przez użytkownika
    quiz[m].correctAnswer=newCorrectAnswer.value;   //nazwa poprawnej odpowiedzi dodanej przez użytkownika
    if (quiz[0].image === ""){  //jeśli użytkownik nie wstawi obrazka
        quiz[m].image="";
    }
    else{
        quiz[m].image=newImage.files[0].name;   //nazwa obrazka dodanego przez użytkownika
    }
    m++;
    newQuestion.value="";
    newOdp1.value="";
    newOdp2.value="";
    newOdp3.value="";
    newOdp4.value="";
    newCorrectAnswer.value="";
})

goBack.addEventListener('click', function(){
    if (quiz[0].question === "" || quiz[0].answers.length == 0 || quiz[0].correctAnswer === ""){
        dangerAlert.style.display="block";
    }
    else{
        answer1.style.display='block';
        answer2.style.display='block';
        answer3.style.display='block';
        answer4.style.display='block';
        scoreBtn.style.display='block';
        question.style.display='block';
        numQuestion.style.display='block';
        points.style.display='block';

        newQuestion.style.display="none";
        goBack.style.display="none";
        newOdp1.style.display="none";
        newOdp2.style.display="none";
        newOdp3.style.display="none";
        newOdp4.style.display="none";
        newCorrectAnswer.style.display="none";
        newImageText.style.display="none";
        newImage.style.display="none";
        addNewQuestion.style.display="none";

        question.textContent=quiz[n].question;
        answer1.textContent=quiz[n].answers[0]
        answer2.textContent=quiz[n].answers[1]
        answer3.textContent=quiz[n].answers[2]
        answer4.textContent=quiz[n].answers[3]
    }
})