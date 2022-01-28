window.addEventListener("load", function (): void {

    // Deklariere Interface für Karte
    interface CardInterface {
        color: string;
        wert: number;
    }

    // Hauptkartenklasse
    class Cards implements CardInterface {
        color: string;
        wert: number;

        // Erstelle neue karte mit gegebener Color und Wert
        constructor(colorToSet: string, wertToSet: number) {
            this.color = colorToSet;
            this.wert = wertToSet;
        }

        // Erstelle HTML Div Element
        generateDiv(showCard: boolean): HTMLDivElement {

            let karte = document.createElement("div");

            // Setze algemeine CSS-Klasse
            karte.classList.add("karteStyle");

            if (showCard) {
                // Wenn die Karte offen liegt, müssen die Werte entsprechend angezeigt werden
                karte.style.backgroundColor = this.color;
                karte.innerHTML = this.wert.toString();
                karte.style.height = "150px";
                karte.style.width = "50px";
            }
            else {
                // Wenn die Karte verdeckt liegt, dürfen die Werte nicht angezeigt werden -> Entsprechende CSS-Klasse anfügen
                karte.classList.add("hidden")
            }
            return karte;
        }
    }


    // Klasse die den Mittelstapel repräsentiert
    class Mitte {

        cardsMitte: Cards[];
        mitteDiv: HTMLDivElement = document.querySelector("#Mitte");

        // Erstelle neuen Mittelstapel mit angegebener erster Karte
        constructor(firstCards: Cards[]) {
            this.cardsMitte = firstCards;
            // Sicherstellen, dass DIV korrekt angezeigt wird
            this.mitteDiv.style.display = "block";
        }


        // Gibt die oberste Karte des Stapels zurück. Sie wird nicht entfernt!
        getTopCard(): Cards {
            return this.cardsMitte[this.cardsMitte.length - 1];
        }

        // Legt eine neue Karte auf den Stapel ohne vorher die Bedingungen zu prüfen (Darf nur intern aufgerufen werden!)
        pushCard(currentCard: Cards): void {
            this.cardsMitte.push(currentCard);
        }

        // Liefert gemischt die alten Karten des Ablegestapels für den Nachziehstapel zurück
        getCardsForStapel(): Cards[] {
            let remainigCard = this.cardsMitte.pop();
            let newStapelCards = this.cardsMitte;
            this.shuffleCards(newStapelCards);
            this.cardsMitte = [remainigCard];
            return newStapelCards;
        }

        // Mische die übergebenen Karten
        shuffleCards(cardTotal): void {
            cardTotal.sort(() => Math.random() - 0.5);
        }

        // Versucht eine neue Karte auf den Stapel zu legen. True wenn erfolgreich, false wenn nicht erfolgreich
        TryPlayCard(givenCard: Cards): boolean {
            let currentTopCard = this.getTopCard();
            // Prüfe Bedingung der Farbe und des Werts
            if (givenCard.color == currentTopCard.color || givenCard.wert == currentTopCard.wert) {
                this.pushCard(givenCard);
                return true;
            }
            else {
                return false;
            }
        }

        // Update die UI des Elements
        updateUI(): void {
            this.mitteDiv.innerHTML = "";
            // Erstelle neues Element und füge es zum eigenen Div hinzu
            var newCard = this.getTopCard().generateDiv(true);
            this.mitteDiv.appendChild(newCard);
        }

    }

    // Computergegnerklasse
    class computerGegner {
        
        cardsComputer: Cards[];
        mitteInstanz: Mitte;
        computerDiv: HTMLDivElement = document.querySelector("#Computer");

        constructor(pushedCards: Cards[], givenCardMitte: Mitte) {
            this.cardsComputer = pushedCards;
            this.mitteInstanz = givenCardMitte;
            this.computerDiv.style.display = "block";
        }



        // Funktion um die Karte in die Mitte zu spielen. Wenn es erfolgreich war wird true zurückgeliefert. Bei false konnte keine Karte gespielt werden
        playCard(): boolean {
            // Versuche alle Karten nacheinander zu spielen, bis eine funktioniert hat
            for (let currentCard of this.cardsComputer) {
                if (this.mitteInstanz.TryPlayCard(currentCard)) {
                    // Wenn die Karte gespielt werden konnte, muss die Karte aus der eigenen Hand noch entfernt werden
                    this.removecard(currentCard);
                    return true;
                }

            }
            return false;
        }

        // Entfernt eine Karte aus der eigenen Hand
        removecard(currentCard: Cards): void {
            let index = this.cardsComputer.indexOf(currentCard);

            // Wenn die Karte, welche entfernt werden soll im Array ist
            if (index > -1) {
                // Dann entferne sie tatsächlich mit splice
                this.cardsComputer.splice(index, 1);

            }
        }


        // Überprüft, ob der Gegner noch Karten hat
        cardsLeft(): boolean {
            return this.cardsComputer.length != 0;
        }

        // Nimmt eine neue angegebene Karte auf die Hand
        takeCard(givenCard: Cards): void {
            this.cardsComputer.push(givenCard);
        }

        // Aktualisiert die UI
        updateUI(): void {
            // Alte Elemente entfernen
            this.computerDiv.innerHTML = "";
            // Für alle Karten ein neues Div erstellen und der UI anfügen
            for (let currentCard of this.cardsComputer) {
                let karteDiv = currentCard.generateDiv(false);
                this.computerDiv.appendChild(karteDiv);
            }

        }
    }


    // Klasse die den Menschlichen Spieler repräsentiert
    class Spieler {

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

        // Funktion um eine Karte mit einem angegebenen Index zu spielen
        playCard(cardToPlay: number): void {

            // Wenn die Karte gespielt werden kann, muss die gespielte Karte aus der Hand entfernt werden und der Computer darf spielen
            if (this.mitteInstanz.TryPlayCard(this.cardsSpieler[cardToPlay])) {
                this.removecard(this.cardsSpieler[cardToPlay]);
                this.leiterInstanz.playComputer();
            }
        }

        // Funktion, damit sich der Spieler eine neue Karte vom Stapel nimmt und danach den Computer weiterspielen lässt
        getCardFromStapel(): void {
            this.takeCard(this.stapelInstanz.getFirstCard());
            this.leiterInstanz.playComputer();
        }

        // Entfernt eine Karte aus der eigenen Hand
        removecard(currentCard: Cards): void {
            let index = this.cardsSpieler.indexOf(currentCard);

            // Wenn die Karte, welche entfernt werden soll im Array ist
            if (index > -1) {
                // Dann entferne sie tatsächlich mit splice
                this.cardsSpieler.splice(index, 1);

            }
        }


        // Überprüft, ob der Spieler noch Karten hat
        cardsLeft(): boolean {
            return this.cardsSpieler.length != 0;
        }

        // Nimmt eine neue angegebene Karte auf die Hand
        takeCard(givenCard: Cards): void {
            this.cardsSpieler.push(givenCard);
        }

        // Aktualisiert die UI. EnablePlay steuert, ob der Nutzer aktuell interagieren darf oder gesperrt ist.
        updateUI(enablePlay: boolean): void {
            // Alte Elemente aus DIV löschen
            this.spielerDiv.innerHTML = "";
            // this auf Variable setzen, da onclick funktionen in anderem Kontext ausgeführt werden und so das this nicht dasselbe ist
            let self = this;
            // Geht alle Karten des Spielers durch, erstellt divs, hängt sie an den äußeren DIV an und setzt die entsprechende onclick funktion, wenn der Spieler spielen darf
            for (let i = 0; i < this.cardsSpieler.length; i++) {
                let karteDiv = this.cardsSpieler[i].generateDiv(true);
                this.spielerDiv.appendChild(karteDiv);
                if (enablePlay) {
                    karteDiv.onclick = function () {
                        self.playCard(i);
                    }
                }
            }

            // Setze funktion an dem Stapel auf eigene nachzieh funktion
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

    // Klasse die den Nachziehstapel repräsentiert
    class Stapel {

        restStapel: Cards[];
        mitteInstanz: Mitte;
        stapelDiv: HTMLDivElement = document.querySelector("#Stapel");

        constructor(givenStapel: Cards[], givenMitte: Mitte) {
            this.restStapel = givenStapel;
            this.mitteInstanz = givenMitte;
            this.stapelDiv.style.display = "block";
        }

        // Funktion zum ziehen einer Karte vom nachziehstapel
        getFirstCard(): Cards {
            let returnCard = this.restStapel.pop();
            // Wenn der Stapel leer ist neue Karten von der Mitte holen
            if (this.restStapel.length == 0) {
                this.restStapel = this.mitteInstanz.getCardsForStapel();
            }

            return returnCard;
        }

        // Aktualisiere die UI indem die oberste Karte angeschaut wird und ein DIV erstellt wird
        updateUi(): void {
            this.stapelDiv.innerHTML = "";
            this.stapelDiv.appendChild(this.restStapel[this.restStapel.length - 1].generateDiv(false));
        }
    }

    // Klasse die den Spielleiter repräsentiert
    class SpielLeiter {

        computerGegnerInstanz: computerGegner;
        mitteInstanz: Mitte;
        nachzugStapel: Stapel;
        spielerInstanz: Spieler;
        allCardsStapel: Cards[];

        constructor() {

            // Feste Karten erstellen
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
            
            // Karten mischen
            this.shuffleCards(this.allCardsStapel);

            // Kartenstapel für Spieler, Computer und mitte erstellen
            let cardsPlayer = this.allCardsStapel.splice(0, 5);
            let cardsComputer = this.allCardsStapel.splice(0, 5);
            let cardsMitte = this.allCardsStapel.splice(0, 1);

            // Mitte, Nachzugstapel, Computergegner und Spieler erstellen
            this.mitteInstanz = new Mitte(cardsMitte);
            this.nachzugStapel = new Stapel(this.allCardsStapel, this.mitteInstanz);
            this.computerGegnerInstanz = new computerGegner(cardsComputer, this.mitteInstanz);
            this.spielerInstanz = new Spieler(cardsPlayer, this.mitteInstanz, this, this.nachzugStapel);
        }

        // Karten mischen
        shuffleCards(cardTotal): void {
            cardTotal.sort(() => Math.random() - 0.5);
        }

        // Ganze UI aktualisieren
        updateGlobalUI(spielerEnabled: boolean = true): void {
            this.mitteInstanz.updateUI();
            this.computerGegnerInstanz.updateUI();
            this.nachzugStapel.updateUi();
            this.spielerInstanz.updateUI(spielerEnabled);
        }

        // Grundfunktion starten
        startGame(): void {
            this.updateGlobalUI();

        }

        // Flag ob Spiel fertig
        gameDone: boolean = false;

        playComputer(): void {
            // Spieler aktion beenden
            this.gameDone = !this.spielerInstanz.cardsLeft();
            this.updateGlobalUI(false);
            this.checkForEndGame("MenschSpieler");

            // Computeraktion starten
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

        // Prüfe ob Ende erreicht ist und Spiel beenden
        checkForEndGame(currentPlayer: string): void {
            if (this.gameDone) {
                alert("Spiel zuende! " + currentPlayer + " hat gewonnen!");
                location.reload();
            }
        }
    }


    // Startbutton erstellen und Funktion setzen

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