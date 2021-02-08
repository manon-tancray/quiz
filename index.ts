import data from "./data.json";

//récupère le nombre de questions
let nombreQuestion: number = parseInt(data.nombre, 10);

//clique sur un boutton et évenement 
const BUTTON = document.querySelector('.button');
BUTTON.addEventListener('click', principale);


function principale(event): void {
    let numQuestion: number = 0;
    if (event && numQuestion < nombreQuestion+1) {       
        console.log("fonction principale");
        noterQuestion(numQuestion);
        numQuestion++;
    }
}



function decompte(numQuestion: number):number {
    if (event) {
        numQuestion = 0;
    }
    return numQuestion;
    
}
function noterQuestion(numeroQ: number): void {
   
        let question = document.querySelector('h1');
        question.textContent = data.questions[numeroQ].question;
       

        //récupération des réponses
        for (let j: number = 1; j < 5; j++) {
            let valeurDeJ: number = j;
            let jString: string = valeurDeJ.toString();//transforme le int j en string 
            let valeurFinale: string = "button" + jString;

            let reponseAffichage = document.getElementById(valeurFinale);
            reponseAffichage.textContent = data.questions[numeroQ].reponse[j - 1];
            console.log(data.questions[numeroQ].reponse[j - 1]);
        }
    
}

/*
//titre du thème
const TITRE = document.querySelector('.titre');
TITRE.textContent = data.theme;



//clique sur un boutton et évenement 
const BUTTON = document.querySelector('.button');
BUTTON.addEventListener('click', noterQuestion);


function noterQuestion(event): void {
    for (let i: number = 0; i < nombreQuestion; i++) {      
        //note la question
        let question = document.querySelector('h1');
        question.textContent = data.questions[i].question;
        console.log(i);
        console.log(data.questions[i].question);
        
        //récupération des réponses
        for (let j: number = 1; j < 5; j++) {
            let valeurDeJ: number = j;
            let jString: string = valeurDeJ.toString();//transforme le int j en string 
            let valeurFinale: string = "button" + jString;

            let reponseAffichage = document.getElementById(valeurFinale);
            reponseAffichage.textContent = data.questions[i].reponse[j - 1];
            console.log(data.questions[i].reponse[j - 1]);
        }
    }
}*/