let modalBody = document.querySelector('.modal-body');
const questionContainer=document.querySelector('.first-question');
const answersContainer=document.querySelector('.answers');
const deleteBtn = document.querySelector('#deleteBtn');
const addBtn=document.querySelector('#addBtn');
const newQuestion=document.querySelector('#new-question');  //pole do wpisania nowego pytania przez użytkownika
const newOdp1=document.querySelector('#odp1');   //pole do wpisania odpowiedzi przez użytkownika
const newOdp2=document.querySelector('#odp2');
const newOdp3=document.querySelector('#odp3');
const newOdp4=document.querySelector('#odp4');
const again = document.querySelector('#again');
let numQuestion = document.querySelector('#number-question');
const lineBreak=document.createElement('br');
const answer = document.querySelectorAll('.btn-outline-primary');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const scoreBtn = document.querySelector('#scoreBtn');
const scoreClass = document.querySelector('.score');
const firstQuestionImage = document.querySelector('#first-question-image');
const newCorrectAnswer=document.querySelector('#correct-answer');
const newImageText=document.querySelector('#choose-image-text');
const newImage=document.querySelector('#choose-image');
const addNewQuestion=document.querySelector('#add-new-question');
const goBack=document.querySelector('#back');
const accordion=document.querySelector('#accordion');
const divCardBody = document.createElement('div');
let createdButton=document.createElement("a");

let idAccordion=document.createElement('div');
let divCard=document.createElement('div');
let h5=document.createElement('h5');
let buttonCollapse=document.createElement('button');
let divCardHeader=document.createElement('div');
let divCollapse=document.createElement('div');
let cardBody=document.querySelector('.card-body');
let questionAddedContainer=document.querySelector('.added-questions-container');
let questionAdded=document.querySelector('#question-added-content');
let answerAdded=document.querySelector('#answer-added-content');
let questionFirst=document.querySelector('#question-first');
let newImageVariable;
let goBackClicked = false;
let dangerAlert1 = document.querySelector('#danger1');
let dangerAlert2 = document.querySelector('#danger2');
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
let z=1; //do naprawienia pojawiania sie nastepnego pytania
let tempVariable = false;
let tempFirstAnswer1="";    //do przechowywania odpowiedzi w card-body
let tempFirstAnswer2="";
let tempFirstAnswer3="";
let tempFirstAnswer4="";
correctAnswer = "";
//scoreBtn.style.display="none";    //przycisk wynik ukryty na początku
scoreClass.style.display="none";
cardBody.innerHTML="";
createdButton.style.display="none";
goBack.style.display="none";
dangerAlert1.style.display="none";
newQuestion.style.display="none";
dangerAlert2.style.display="none";
newOdp1.style.display="none";
newOdp2.style.display="none";
newOdp3.style.display="none";
newOdp4.style.display="none";
newImageText.style.display="none";
questionAddedContainer.style.display="none";
newCorrectAnswer.style.display="none";
newImage.style.display="none";
addNewQuestion.style.display="none"; //przycisk do koncowego dodania pytania
let quiz = [{
    question: "Jaka jest stolina Danii?",
    answers: ["Kopenhaga", "Berlin", "Warszawa", "Praga"],
    correctAnswer: "Kopenhaga",
    image: "images/denmark.jpg"
},
{
    question: "Jaki jest najpopularniejszy napój energetyczny na świecie?",
    answers: ["Monster", "Redbull", "Tiger", "Black"],
    correctAnswer: "Redbull",
    image: "images/napoj_energetyczny.jpg"
},
{
    question: "Jaki ładunek elektryczny ma neutron?",
    answers: ["Dodatni", "ujemny", "neutralny", "Żadne z powyższych"],
    correctAnswer: "neutralny",
    image: "images/neutron.jpg"
},
{
    question: "Jaką mąkę wybierzesz do wypieku biszkoptu?",
    answers: ["Typu 650", "Typ 2000", "Typu 450", "Typu 550"],
    correctAnswer: "Typu 450",
    image: "images/Mąka.jpg"
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
    question.textContent = quiz[z].question;  //przypisanie nowego pytania
    if (question.textContent===""){ //jeśli koniec pytań
        points.textContent = `Punkty: ${numberOfPoints}`;
        endOfQuiz();
    }
    else{
        numberOfQuestion++;
        wrongAnswer = false;
        answer[l].classList.remove("btn-outline-success");  //usuniecie zielonego obramowania
        answer[l].classList.add("btn-outline-primary"); //dodanie defaultowego obramowania (niebieskiego)
        answer[0].disabled = false;   //usuwanie nieaktywnego przycisku
        answer[1].disabled = false;
        answer[2].disabled = false;
        answer[3].disabled = false;
        points.textContent = `Punkty: ${numberOfPoints}`;
        numQuestion.textContent = `Pytanie: ${numberOfQuestion}`;
        firstQuestionImage.src = quiz[z].image;    //przypisanie obrazka
        question.textContent = quiz[z].question;  //przypisanie nowego pytania
        answer1.textContent = quiz[z].answers[0]; //przypisanie następnych odpowiedzi do przycisków
        answer2.textContent = quiz[z].answers[1];
        answer3.textContent = quiz[z].answers[2];
        answer4.textContent = quiz[z].answers[3];
        l++;
        z++;
    }
}

endOfQuiz = () => {
    m++; //dodanie, żeby dodawanie pytań do puli się nie psuło
    scoreClass.style.display = "flex";
    console.log("koniec");
    modalBody.textContent = `Twój wynik to: ${numberOfPoints}/${numberOfQuestion}`;
    questionContainer.style.display="none";
    answersContainer.style.display="none";
}
again.addEventListener('click', function () {
    console.log("Powtarzam");
    reset();
})

reset = () => {
    modalBody.textContent = "";
    answer[0].classList.remove("btn-outline-success");  //resetowanie kolorowych obramowań
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
    //image.src = quiz[l].image;
    firstQuestionImage.src=quiz[l].image;
    question.textContent = quiz[l].question;
    l++;
    j++;
    questionContainer.style.display="flex";
    answersContainer.style.display="flex";  //pojawienie sie odpowiedzi po kliknięciu przycisku powtórz
    scoreClass.style.display="none";    //ustawienie przycisku "wynik" na niewidoczny po kliknięciu powtórz
}

deleteBtn.addEventListener('click', function () {
    dangerAlert2.style.display="none";
    quiz.length=0;
    z=1;
    m=0;    //zerowanie zmiennej, żeby pytania i odpowiedzi były przypisywane od początku do tablicy po usunięciu
    for (let i=0; i <=50; i++){
        quiz.push({
            question:"",
            answers: [],
            correctAnswer: "",
            image: ""
        })
    }
    questionContainer.style.display="none";
    answer1.style.display='none';
    answer2.style.display='none';
    answer3.style.display='none';
    answer4.style.display='none';
    firstQuestionImage.style.display='none';
    question.style.display='none';
    numQuestion.style.display='none';
    points.style.display='none';
})

addBtn.addEventListener('click',function(){
    if (quiz.length == 4){
        dangerAlert2.style.display="block";
    }
    else{
        newQuestion.style.display="block";
        goBack.style.display="block";
        newOdp1.style.display="block";
        newOdp2.style.display="block";
        newOdp3.style.display="block";
        newOdp4.style.display="block";
        newCorrectAnswer.style.display="block";
        //newImageText.style.display="block";
        //newImage.style.display="block";
        addNewQuestion.style.display="block";
    }
})

addNewQuestion.addEventListener('click',function(){ //dodanie pytania do puli pytań
    if (newOdp1.value== "" || newOdp2.value == "" || newOdp3.value=="" || newOdp4.value== "" || newCorrectAnswer.value== ""){
        dangerAlert1.style.display="block";
    }
    else{

        dangerAlert1.style.disabled="none";
        questionAddedContainer.style.display="block";
        console.log(m);
        quiz[m].question=newQuestion.value; //przypisanie nowego pytania
        quiz[m].answers.push(newOdp1.value, newOdp2.value, newOdp3.value, newOdp4.value);   //dodanie do tablicy odpowiedzi podanych przez użytkownika
        if (m>0){
            let divCard = document.createElement('div');
            divCard.setAttribute("id", `card${m}`); //robienie dynamicznej zmiennej

            let divCardHeader = document.createElement('div');
            divCardHeader.setAttribute("id", `cardHeader${m}`); //robienie dynamicznej zmiennej

            let h5 = document.createElement('h5');
            h5.setAttribute("id", `cardh5${m}`); //robienie dynamicznej zmiennej

            let buttonCollapse=document.createElement('button');
            buttonCollapse.setAttribute("id", `buttonCollapse${m}`); //robienie dynamicznej zmiennej

            let divCollapse=document.createElement('div');  //robienie dynamicznej zmiennej
            divCollapse.setAttribute("id", `divCollapse${m}`);

            let divCardBody = document.createElement('div');    //robienie dynamicznej zmiennej
            divCardBody.setAttribute("id", `divCardBody${m}`);

            createdButton.style.display="block";
            accordion.appendChild(divCard);
            divCard.appendChild(divCardHeader);
            divCardHeader.appendChild(h5);
            h5.appendChild(buttonCollapse);
            
            divCard.setAttribute("class","card");
            divCardHeader.setAttribute("class", "card-header");
            divCardHeader.setAttribute("id",`heading${m+1}`);
            h5.setAttribute("class", "mb-0");
            buttonCollapse.setAttribute("class", "btn btn-link collapsed");
            buttonCollapse.setAttribute("data-toggle", "collapse");
            buttonCollapse.setAttribute("data-target", `#collapse${m+1}`);
            buttonCollapse.setAttribute("aria-expanded", "false");
            buttonCollapse.setAttribute("aria-controls", `#collapse${m+1}`);
            buttonCollapse.setAttribute("id", `question${m+1}`)

            divCard.appendChild(divCollapse);
            divCollapse.appendChild(divCardBody);
            divCollapse.setAttribute("id", `collapse${m+1}`);
            divCollapse.setAttribute("class", "collapse");
            divCollapse.setAttribute("aria-labelledby", `heading${m+1}`)
            divCollapse.setAttribute("data-parent", "#accordion")
            divCardBody.setAttribute("class", 'card-body');

            let questionNext = document.querySelector(`#question${m+1}`);
            let answersNext = document.querySelector(`#collapse${m+1} .card-body`)
            questionNext.textContent=newQuestion.value;
            if (newOdp1.value === newCorrectAnswer.value){
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                answersNext.appendChild(span);
                span.setAttribute("style", "color: green"); //kolor poprawnej odpowiedzi ustawiamy na zielony
                span.innerHTML += newCorrectAnswer.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                answersNext.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            else{
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                answersNext.appendChild(span);
                span.setAttribute("style", "color: red"); //kolor poprawnej odpowiedzi ustawiamy na czerwony
                span.innerHTML += newOdp1.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                answersNext.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            
            if (newOdp2.value === newCorrectAnswer.value){
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                answersNext.appendChild(span);
                span.setAttribute("style", "color: green"); //kolor poprawnej odpowiedzi ustawiamy na zielony
                span.innerHTML += newCorrectAnswer.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                answersNext.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            else{
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                answersNext.appendChild(span);
                span.setAttribute("style", "color: red"); //kolor poprawnej odpowiedzi ustawiamy na czerwony
                span.innerHTML += newOdp2.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                answersNext.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            if (newOdp3.value === newCorrectAnswer.value){
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                answersNext.appendChild(span);
                span.setAttribute("style", "color: green"); //kolor poprawnej odpowiedzi ustawiamy na zielony
                span.innerHTML += newCorrectAnswer.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                answersNext.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            else{
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                answersNext.appendChild(span);
                span.setAttribute("style", "color: red"); //kolor poprawnej odpowiedzi ustawiamy na czerwony
                span.innerHTML += newOdp3.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                answersNext.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            if (newOdp4.value === newCorrectAnswer.value){
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                answersNext.appendChild(span);
                span.setAttribute("style", "color: green"); //kolor poprawnej odpowiedzi ustawiamy na zielony
                span.innerHTML += newCorrectAnswer.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                answersNext.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            else{
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                answersNext.appendChild(span);
                span.setAttribute("style", "color: red"); //kolor poprawnej odpowiedzi ustawiamy na czerwony
                span.innerHTML += newOdp4.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                answersNext.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }


        }
        else{
            questionFirst.textContent=newQuestion.value; //dodanie nowego pytania do puli pytań, która jest wyświetlana dla użytkownika
            if (newOdp1.value === newCorrectAnswer.value){
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                cardBody.appendChild(span);
                span.setAttribute("style", "color: green"); //kolor poprawnej odpowiedzi ustawiamy na zielony
                span.innerHTML += newCorrectAnswer.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                cardBody.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            else{
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                cardBody.appendChild(span);
                span.setAttribute("style", "color: red"); //kolor poprawnej odpowiedzi ustawiamy na czerwony
                span.innerHTML += newOdp1.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                cardBody.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            
            if (newOdp2.value === newCorrectAnswer.value){
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                cardBody.appendChild(span);
                span.setAttribute("style", "color: green"); //kolor poprawnej odpowiedzi ustawiamy na zielony
                span.innerHTML += newCorrectAnswer.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                cardBody.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            else{
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                cardBody.appendChild(span);
                span.setAttribute("style", "color: red"); //kolor poprawnej odpowiedzi ustawiamy na czerwony
                span.innerHTML += newOdp2.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                cardBody.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            if (newOdp3.value === newCorrectAnswer.value){
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                cardBody.appendChild(span);
                span.setAttribute("style", "color: green"); //kolor poprawnej odpowiedzi ustawiamy na zielony
                span.innerHTML += newCorrectAnswer.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                cardBody.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            else{
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                cardBody.appendChild(span);
                span.setAttribute("style", "color: red"); //kolor poprawnej odpowiedzi ustawiamy na czerwony
                span.innerHTML += newOdp3.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                cardBody.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            if (newOdp4.value === newCorrectAnswer.value){
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                cardBody.appendChild(span);
                span.setAttribute("style", "color: green"); //kolor poprawnej odpowiedzi ustawiamy na zielony
                span.innerHTML += newCorrectAnswer.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                cardBody.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }
            else{
                const lineBreak2 = document.createElement('br');
                const span = document.createElement('span');
                cardBody.appendChild(span);
                span.setAttribute("style", "color: red"); //kolor poprawnej odpowiedzi ustawiamy na czerwony
                span.innerHTML += newOdp4.value; //dodanie odpowiedzi do puli pytań, która jest wyświetlana dla użytkownika
                cardBody.appendChild(lineBreak2); //dodanie przejscia do nowej linii
            }

            
        }

        quiz[m].correctAnswer=newCorrectAnswer.value;   //nazwa poprawnej odpowiedzi dodanej przez użytkownika
        // if (quiz[0].image === ""){  //jeśli użytkownik nie wstawi obrazka
        //     quiz[m].image="";
        // }
        // else{
        //     quiz[m].image=newImage.files[0].name;   //nazwa obrazka dodanego przez użytkownika
        // }
        newQuestion.value="";
        newOdp1.value="";
        newOdp2.value="";
        newOdp3.value="";
        newOdp4.value="";
        newCorrectAnswer.value="";
    }

})

goBack.addEventListener('click', function(){    //cofanie po dodaniu własnych pytań i odpowiedzi
    //m=0;
    z=1;
    goBackClicked = true;
    numberOfQuestion=1;
    scoreClass.style.display="none";
    if (quiz[0].question === "" || quiz[0].answers.length == 0 || quiz[0].correctAnswer === ""){
        dangerAlert1.style.display="block";
    }
    else{
        questionContainer.style.display="flex";
        dangerAlert1.style.display="none";
        numberOfQuestion=1;
        numberOfPoints=0;
        numQuestion.textContent=`Pytanie ${numberOfQuestion}`;
        points.textContent= `Punkty: ${numberOfPoints}`;


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
        questionAddedContainer.style.display="none";

        question.textContent=quiz[n].question;
        answer1.textContent=quiz[n].answers[0]
        answer2.textContent=quiz[n].answers[1]
        answer3.textContent=quiz[n].answers[2]
        answer4.textContent=quiz[n].answers[3]

        question.style.cssFloat="Left";
        answer1.style.display='block';
        answer2.style.display='block';
        answer3.style.display='block';
        answer4.style.display='block';
        question.style.display='block';
        numQuestion.style.display="block";
        points.style.display='block';
        answersContainer.style.display="flex";
        answer[0].disabled = false;   //usuwanie nieaktywnego przycisku
        answer[1].disabled = false;
        answer[2].disabled = false;
        answer[3].disabled = false;
        answer[0].classList.remove("btn-outline-success")
        answer[1].classList.remove("btn-outline-success")
        answer[2].classList.remove("btn-outline-success")
        answer[3].classList.remove("btn-outline-success")
        answer[0].classList.add("btn-outline-primary")
        answer[1].classList.add("btn-outline-primary")
        answer[2].classList.add("btn-outline-primary")
        answer[3].classList.add("btn-outline-primary")
        i=0; //resetowanie zmiennej 'i' zeby poprawna odpowiedz sie zgadzala
    }
})