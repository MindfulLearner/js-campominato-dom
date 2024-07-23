// SCRIPT COPIATO AL MIO VECCHIO ESERCIZIO INTRODUCIAMO CAMPO MINATO
// SCRIPT

// iniettiamo su html gli square gia' esistenti in css square


// ------- FUNZIONE CHE SELEZIONA LA DIFFICOLTA E RESTITUISCE LA PAROLA------------
function selezionaDifficolta() {
    let selezione = document.getElementById('difficulty').selectedIndex; 
    let difficoltaScelta = document.getElementById('difficulty').options[selezione].text;
    return difficoltaScelta;
} 
// funzioni CREA SQUARE CREA UNA VARIABILE SQUARE EASY CHE RESTITUIRA CREATE ELEMENT DIV
// RITORNERA SQUARE EASY UN DIV CON CLASS SQUARE EASY
function createSquareEasy() {
    const squareEasy = document.createElement("div");
    squareEasy.className = "square-easy";
    return squareEasy;
}
// funzioni
function createSquareMedium() {
    const squareMedium = document.createElement("div");
    squareMedium.className = "square-medium";
    return squareMedium;
}
// funzioni
function createSquareHard() {
    const squareHard = document.createElement("div");
    squareHard.className = "square-hard";
    return squareHard;
}

//  funzione che cerca un numero random tra i e difficolta,
    function bombMine(caselle) {
        let bombe = [];
        for (let i = 0; i < 16; i++) {
            let numMine = Math.floor(Math.random() * caselle) + 1;
            console.log(numMine); 
            while (bombe.includes(numMine)){
                numMine = Math.floor(Math.random() * caselle) + 1;
            }
            bombe.push(numMine);
        }
        console.log(bombe);
        return bombe;
    }


// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// al momento del click il programma va a richiamare la funzione che restituira un valore,
    // da questo valore andra a valutare la difficolta e cambiera il gioco in base alla diffficolta/
    // lo uso all'interno di un click perche cosi' va resettare ogni volta il gioco!
    document.getElementById('swag').addEventListener('click', function() {
        // prendo il valore di difficoltascelta function
        let valoreDifficolta = selezionaDifficolta();
        console.log(valoreDifficolta);
        // valutiamo il valore restituito da function e in base a quello si seleziona la difficolta
        if (valoreDifficolta == "easy"){
            let caselle = 100;



            let bombe = bombMine(caselle);


            // questo resetta cio che e' presentedentro square-container, qui direttamente cancelliamo il suo contenuto
            document.querySelector(".square-container").innerHTML = '';
            for (let i = 0; i < caselle; i++) {

                // richiamo della funzione create square che restituisce un div con la class name gia' preparata nel css
                let squareEasy = createSquareEasy();
                // i + 1 perche senno partirebbe da 0:
                squareEasy.innerText = i + 1;
                // eventlistner cliccabile, cambio del colore e stampa numero
                squareEasy.addEventListener('click', function(){
                    console.log('cliccato casella numero: ' + (i + 1)); 
                    // i+1 va a selezionare il cambio del colore in base a i 
                    //  document.querySelector(.square-easy:nth-child(${i+1})).classList.toggle("lightCoral");            

                    if (bombe.includes(i+1)){
                        this.classList.toggle("red");
                    } else {
                        this.classList.toggle("lightCoral");
                    }


                });
                document.querySelector(".square-container").appendChild(squareEasy);
            }






            // -------------------------- DA QUI IN POI E' TUTTO UGUALE -------------------------------------------
        }else if (valoreDifficolta == "medium") {
            let caselle = 81;
            let bombe = bombMine(caselle);

            document.querySelector(".square-container").innerHTML = '';
            for (let i = 0; i < caselle; i++) {
                let squareMedium = createSquareMedium();
                squareMedium.innerText = i + 1;
                // eventlistner cliccabile
                squareMedium.addEventListener('click', function(){
                    console.log('cliccato casella numero: ' + (i + 1)); 
                    // document.querySelector(`.square-medium:nth-child(${i+1})`).classList.toggle("lightCoral");            
                    if (bombe.includes(i+1)){
                        this.classList.toggle("red");
                    } else {
                        this.classList.toggle("lightCoral");
                    }
                });
                document.querySelector(".square-container").appendChild(squareMedium);
            }
        }else if (valoreDifficolta == "hard") { 
            let caselle = 49;
            let bombe = bombMine(caselle);

            document.querySelector(".square-container").innerHTML = '';
            for (let i = 0; i < caselle; i++) {
                let squareHard = createSquareHard();
                squareHard.innerText = i + 1;
                // eventlistner cliccabile
                squareHard.addEventListener('click', function(){
                    console.log('cliccato casella numero: ' + (i + 1)); 
                    // document.querySelector(`.square-hard:nth-child(${i+1})`).classList.toggle("lightCoral");            
                    // this.classList.toggle("lightCoral");
                    if (bombe.includes(i+1)){
                        this.classList.toggle("red");
                    } else {
                        this.classList.toggle("lightCoral");
                    }
                });
                document.querySelector(".square-container").appendChild(squareHard);
            }

        }
    });









