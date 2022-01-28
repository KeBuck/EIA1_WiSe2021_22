window.addEventListener("load", function (): void {

    //Deklaration an elementen von Main Datei
    interface CardInterface {
        color: string;
        wert: number;
    }

    //Class definiert die Datenstruktur von den Karten. Bietet Vorlage der Eingenschaften (Farbe und Wert) für Objekt-Instanzen und übergibt Funktionen, um die Karten zu stylen.
    class Cards implements CardInterface {
        color: string;
        wert: number;

        //erstellt neue Karte mit eingegeben Werten
        constructor(colorToSet: string, wertToSet: number) {
            this.color = colorToSet;
            this.wert = wertToSet;
        }

        //erstellt HTML Karte Style
        generateDiv(showCard: boolean): HTMLDivElement {
            let karte = document.createElement("div");
            karte.classList.add("karteStyle");

            if (showCard) {
                karte.style.backgroundColor = this.color;
                karte.innerHTML = this.wert.toString();
                karte.style.height = "250px";
                karte.style.width = "150px";
            }
            else {
                karte.classList.add("hidden")
            }
            return karte;
        }
    }


    //Funktionen, die in die Mitte passieren
    class Mitte {

        //erstellen die Array mit die Karten von der Mitte
        cardsMitte: Cards[];
        mitteDiv: HTMLDivElement = document.querySelector("#Mitte");

        constructor(firstCards: Cards[]) {
            this.cardsMitte = firstCards;
            this.mitteDiv.style.display = "block";
        }


        //Erkennt die erste Karte in der Mitte Stapel
        getTopCard(): Cards {
            return this.cardsMitte[this.cardsMitte.length - 1];//erstellen immer die erste position von Array?
        }

        //Zeigt die gespielte Karte in der Mitte Stapel
        
        //function pushCard (TopCardLay);
        pushCard(currentCard: Cards): void {
            this.cardsMitte.push(currentCard);
        }

        getCardsForStapel(): Cards[] {
            let remainigCard = this.cardsMitte.pop();
            let newStapelCards = this.cardsMitte;
            this.shuffleCards(newStapelCards);
            this.cardsMitte = [remainigCard];
            return newStapelCards;
        }

        //Mischen die Karten
        shuffleCards(cardTotal): void {
            cardTotal.sort(() => Math.random() - 0.5);
        }

        //Vergleich ob die Karte gespielt ist gleich (Farbe oder Wert) als die erste Karte, die in der Mitte Stapel ist
        TryPlayCard(givenCard: Cards): boolean {

            let currentTopCard = this.getTopCard();

            if (givenCard.color == currentTopCard.color || givenCard.wert == currentTopCard.wert) {

                //Wenn die Karte ist Farbe oder Wert gleich, dann ist sie in die Mitte Stapel gezeigt
                this.pushCard(givenCard);

                return true;
            }
            //Wenn die Karte ist nicht gleich Farbe oder Wert, dann geht den Spiel weiter
            else {
                return false;
            }
        }

        updateUI(): void {
            this.mitteDiv.innerHTML = "";
            var newCard = this.getTopCard().generateDiv(true);
            this.mitteDiv.appendChild(newCard);
        }

    }

    //Funktionen die in Computer Gegner passiert
    class computerGegner {

        //erstellen die Array mit die Karten von den Computer

        cardsComputer: Cards[];
        mitteInstanz: Mitte;
        computerDiv: HTMLDivElement = document.querySelector("#Computer");

        constructor(pushedCards: Cards[], givenCardMitte: Mitte) {
            this.cardsComputer = pushedCards;
            this.mitteInstanz = givenCardMitte;
            this.computerDiv.style.display = "block";
        }



        //funktion um die Karte in die Mitte zu spielen
        playCard(): boolean {

            //Vergleichen jede Karte in Computer Stapel mit die erste Karte, die in Mitte ist
            for (let currentCard of this.cardsComputer) {
                if (this.mitteInstanz.TryPlayCard(currentCard)) {
                    this.removecard(currentCard);

                    return true;
                }

            }
            return false;
        }

        //Wenn die aktuell Karte von Computer Stapel ist gleich (true) als die Karte, die in Mitte Stapel is, dann die ist von den Stapel verschiebt.
        //const definiert die position in Array von die Karte, die in Mitte gespielt hat
        removecard(currentCard: Cards): void {
            let index = this.cardsComputer.indexOf(currentCard);

            //Wenn die gespielte Karte ist in den Array
            if (index > -1) {
                //Dann die Funktion lass sie weg von den Array durch die Nummer von ihre Position
                //index = Position die gespielte Karte und 1 =  lass nur ein item weg
                this.cardsComputer.splice(index, 1);

            }
        }


        //überprüfen ob die Karte Stapel von Computer Gegern ist leer
        cardsLeft(): boolean {

            //Wenn die Stapel leer ist, dann hat den Computer Gegern den Spiel gewinnen
            if (this.cardsComputer.length == 0) {
                return false;
            }
            //Wenn die Stapel nicht leer ist, dann geht den Spiel weiter
            else {
                return true;
            }
            //Funktion auf den Spieler verweisen
        }

        takeCard(givenCard: Cards): void {
            this.cardsComputer.push(givenCard);
        }

        //aktualisiert die 
        updateUI(): void {
            //leere Div erstellen, um dannach mit Karten div erfühlen
            this.computerDiv.innerHTML = "";
            //überprüft jede element in Array von Computer und übergibt die Funktion generateDiv
            for (let currentCard of this.cardsComputer) {
                let karteDiv = currentCard.generateDiv(false);
                //verbindet die Karten an die Computer Öberfläche
                this.computerDiv.appendChild(karteDiv);
            }

        }
    }


    //Funktionen die in Computer Gegner passiert
    class Spieler {

        //erstellen die Array mit die Karten von den Computer

        cardsSpieler: Cards[];
        mitteInstanz: Mitte;
        leiterInstanz: SpielLeiter;
        stapelInstanz: Stapel;
        spielerDiv: HTMLDivElement = document.querySelector("#Spieler");

        constructor(pushedCards: Cards[], givenCardMitte: Mitte, givenLeiter: SpielLeiter, givenStapel: Stapel) {
            this.cardsSpieler = pushedCards;
            this.mitteInstanz = givenCardMitte;
            this.leiterInstanz = givenLeiter;
            this.stapelInstanz = givenStapel;
            this.spielerDiv.style.display = "block";

        }



        //funktion um die Karte in die Mitte zu spielen
        playCard(cardToPlay: number): void {

            //Vergleichen jede Karte in Computer Stapel mit die erste Karte, die in Mitte ist
            if (this.mitteInstanz.TryPlayCard(this.cardsSpieler[cardToPlay])) {
                this.removecard(this.cardsSpieler[cardToPlay]);
                this.leiterInstanz.playComputer();
            }
        }

        getCardFromStapel(): void {
            this.takeCard(this.stapelInstanz.getFirstCard());
            this.leiterInstanz.playComputer();
        }

        //Wenn die aktuell Karte von Computer Stapel ist gleich (true) als die Karte, die in Mitte Stapel is, dann die ist von den Stapel verschiebt.
        //const definiert die position in Array von die Karte, die in Mitte gespielt hat
        removecard(currentCard: Cards): void {
            const index = this.cardsSpieler.indexOf(currentCard);

            //Wenn die gespielte Karte ist in den Array
            if (index > -1) {
                //Dann die Funktion lass sie weg von den Array durch die Nummer von ihre Position
                //index = Position die gespielte Karte und 1 =  lass nur ein item weg
                this.cardsSpieler.splice(index, 1);

            }
        }


        //überprüfen ob die Karte Stapel von Computer Gegern ist leer
        cardsLeft(): boolean {

            //Wenn die Stapel leer ist, dann hat den Computer Gegern den Spiel gewinnen
            if (this.cardsSpieler.length == 0) {
                return false;
            }
            //Wenn die Stapel nicht leer ist, dann geht den Spiel weiter
            else {
                return true;
            }
            //Funktion auf den Spieler verweisen
        }

        takeCard(givenCard: Cards): void {
            this.cardsSpieler.push(givenCard);
        }

        //aktualisiert die 
        updateUI(enablePlay: boolean): void {
            //leere Div erstellen, um dannach mit Karten div erfühlen
            this.spielerDiv.innerHTML = "";
            let self = this;
            //überprüft jede element in Array von Computer und übergibt die Funktion generateDiv
            for (let i = 0; i < this.cardsSpieler.length; i++) {
                let karteDiv = this.cardsSpieler[i].generateDiv(true);
                //verbindet die Karten an die Computer Öberfläche
                this.spielerDiv.appendChild(karteDiv);
                if (enablePlay) {
                    karteDiv.onclick = function () {
                        self.playCard(i);
                    }
                }
            }

            if (enablePlay) {
                this.stapelInstanz.stapelDiv.onclick = function () {
                    self.getCardFromStapel();
                };
            }
            else
            {
                this.stapelInstanz.stapelDiv.onclick = function() {};
            }
        }

    }

    class Stapel {
        restStapel: Cards[];
        mitteInstanz: Mitte;
        stapelDiv: HTMLDivElement = document.querySelector("#Stapel");

        constructor(givenStapel: Cards[], givenMitte: Mitte) {
            this.restStapel = givenStapel;
            this.mitteInstanz = givenMitte;
            this.stapelDiv.style.display = "block";
        }

        getFirstCard(): Cards {
            let returnCard = this.restStapel.pop();
            if (this.restStapel.length == 0) {
                this.restStapel = this.mitteInstanz.getCardsForStapel();
            }
            return returnCard;
        }

        updateUi(): void {
            this.stapelDiv.innerHTML = "";
            this.stapelDiv.appendChild(this.restStapel[this.restStapel.length - 1].generateDiv(false));
        }
    }

    class SpielLeiter {
        computerGegnerInstanz: computerGegner;
        mitteInstanz: Mitte;
        nachzugStapel: Stapel;
        spielerInstanz: Spieler;
        allCardsStapel: Cards[];

        constructor() {

            //Objekt-Instanz: Karten mit Eingenschaften (Farbe und Wert)
            this.allCardsStapel = [
                //rote Karte
                new Cards("red", 1),
                new Cards("red", 2),
                new Cards("red", 3),
                new Cards("red", 4),
                new Cards("red", 5),
                new Cards("red", 6),
                new Cards("red", 7),
                new Cards("red", 8),

                //blaue Karte
                new Cards("blue", 1),
                new Cards("blue", 2),
                new Cards("blue", 3),
                new Cards("blue", 4),
                new Cards("blue", 5),
                new Cards("blue", 6),
                new Cards("blue", 7),
                new Cards("blue", 8),

                //grüne Karte
                new Cards("green", 1),
                new Cards("green", 2),
                new Cards("green", 3),
                new Cards("green", 4),
                new Cards("green", 5),
                new Cards("green", 6),
                new Cards("green", 7),
                new Cards("green", 8),

                //gelbe Karte
                new Cards("yellow", 1),
                new Cards("yellow", 2),
                new Cards("yellow", 3),
                new Cards("yellow", 4),
                new Cards("yellow", 5),
                new Cards("yellow", 6),
                new Cards("yellow", 7),
                new Cards("yellow", 8),
            ];
            this.shuffleCards(this.allCardsStapel);

            let cardsPlayer = this.allCardsStapel.splice(0, 5);
            let cardsComputer = this.allCardsStapel.splice(0, 5);
            let cardsMitte = this.allCardsStapel.splice(0, 1);
            //belegt hier alle Karten als allCardsStapel
            //Aufteilung den Stapel verweisen
            this.mitteInstanz = new Mitte(cardsMitte);
            this.nachzugStapel = new Stapel(this.allCardsStapel, this.mitteInstanz);
            this.computerGegnerInstanz = new computerGegner(cardsComputer, this.mitteInstanz);
            this.spielerInstanz = new Spieler(cardsPlayer, this.mitteInstanz, this, this.nachzugStapel);
        }

        //Mischen die Karten
        shuffleCards(cardTotal): void {
            cardTotal.sort(() => Math.random() - 0.5);
        }

        updateGlobalUI(spielerEnabled: boolean = true): void {
            this.mitteInstanz.updateUI();
            this.computerGegnerInstanz.updateUI();
            this.nachzugStapel.updateUi();
            this.spielerInstanz.updateUI(spielerEnabled);
        }

        //Funktion um den Spiel zu starten
        startGame(): void {
            //Wahrend den ComputerGegner eine Karte spielt, den Spiel geht weiter
            this.updateGlobalUI();

        }

        gameDone: boolean = false;

        playComputer(): void {
            this.gameDone = !this.spielerInstanz.cardsLeft();
            this.updateGlobalUI(false);
            this.checkForEndGame("MenschSpieler");
            let self = this;
            setTimeout(function () {
                if (!self.computerGegnerInstanz.playCard()) {
                    self.computerGegnerInstanz.takeCard(self.nachzugStapel.getFirstCard());
                }
                self.gameDone = !self.computerGegnerInstanz.cardsLeft();
                self.updateGlobalUI();
                self.checkForEndGame("ComputerSpieler");
            }, 1000);
        }

        checkForEndGame(currentPlayer: string): void {
            if (this.gameDone) {
                alert("Spiel zuende! " + currentPlayer + " hat gewonnen!");
                location.reload();
            }
        }

        //Wenn nicht den Spiel ist zuende :) MVP
    }


    let startButton = document.createElement("button");
    startButton.classList.add("startBtn");
    startButton.innerHTML = "Play Game"
    document.body.appendChild(startButton);
    startButton.onclick = function () {
        startButton.style.display = "none";
        let Spiel = new SpielLeiter();
        Spiel.startGame();
        
    };

});