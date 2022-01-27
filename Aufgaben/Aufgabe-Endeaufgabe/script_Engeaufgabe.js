window.addEventListener("load", function () {
    //Deklaration an elementen von Main Datei
    var spielerDiv = document.querySelector("#Spieler");
    var computerDiv = document.querySelector("#Computer");
    var mitteDiv = document.querySelector("#Mitte");
    var stapelDiv = document.querySelector("#Stapel");
    //Class definiert die Datenstruktur von den Karten. Bietet Vorlage der Eingenschaften (Farbe und Wert) für Objekt-Instanzen und übergibt Funktionen, um die Karten zu stylen.
    var Cards = /** @class */ (function () {
        //erstellt neue Karte mit eingegeben Werten
        function Cards(colorToSet, wertToSet) {
            this.color = colorToSet;
            this.wert = wertToSet;
        }
        //erstellt HTML Karte Style
        Cards.prototype.generateDiv = function (showCard) {
            var karte = document.createElement("div");
            if (showCard) {
                karte.style.color = this.color;
                karte.innerHTML = this.wert.toString();
            }
            else {
                karte.classList.add("hidden");
            }
            return karte;
        };
        return Cards;
    }());
    //Objekt-Instanz: Karten mit Eingenschaften (Farbe und Wert)
    var cardTotal = [
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
    //Mischen die Karten
    function shuffleCards(cardTotal) {
        cardTotal.sort(function () { return Math.random() - 0.5; });
    }
    shuffleCards(cardTotal);
    //console.log(cardTotal);
    //Teilen die Karten in computerGegner Stapel, spieler Stapel, Mitte Stapel und Rest Stapel
    var cardsPlayer = cardTotal.splice(0, 5);
    var cardsComputer = cardTotal.splice(0, 5);
    var cardsMitte = cardTotal.splice(0, 1);
    //console.log(cardsPlayer);
    //console.log(cardsComputer);
    //console.log(cardsMitte);
    //console.log(cardTotal);
    var functionCards = /** @class */ (function () {
        function functionCards(cardTotal) {
            this.showCards = cardTotal;
        }
        return functionCards;
    }());
    //Funktionen für die Spielleiter 
    var SpielLeiter = /** @class */ (function () {
        function SpielLeiter() {
            //belegt hier alle Karten als allCardsStapel
            //Aufteilung den Stapel verweisen
            this.mitteInstanz = new Mitte(cardsMitte);
            this.computerGegnerInstanz = new computerGegner(cardsComputer, this.mitteInstanz);
        }
        //Funktion um den Spiel zu starten
        SpielLeiter.prototype.startGame = function () {
            //Wahrend den ComputerGegner eine Karte spielt, den Spiel geht weiter
            while (this.computerGegnerInstanz.playCard()) {
            }
        };
        return SpielLeiter;
    }());
    var Spiel = new SpielLeiter();
    //Spiel.startGame();
    var startButton = document.createElement("button");
    startButton.classList.add("startBtn");
    document.body.appendChild(startButton);
    startButton.onclick = Spiel.startGame;
    //Funktionen die in Computer Gegner passiert
    var computerGegner = /** @class */ (function () {
        function computerGegner(pushedCards, givenCardMitte) {
            cardsComputer = pushedCards;
        }
        //funktion um die Karte in die Mitte zu spielen
        computerGegner.prototype.playCard = function () {
            //Vergleichen jede Karte in Computer Stapel mit die erste Karte, die in Mitte ist
            for (var _i = 0, cardsComputer_1 = cardsComputer; _i < cardsComputer_1.length; _i++) {
                var currentCard = cardsComputer_1[_i];
                if (this.mitteInstanz.TryPlayCard(currentCard)) {
                    this.removecard(currentCard);
                    return (true);
                }
            }
            return (false);
        };
        //Wenn die aktuell Karte von Computer Stapel ist gleich (true) als die Karte, die in Mitte Stapel is, dann die ist von den Stapel verschiebt.
        //const definiert die position in Array von die Karte, die in Mitte gespielt hat
        computerGegner.prototype.removecard = function (currentCard) {
            var index = cardsComputer.indexOf(currentCard);
            //Wenn die gespielte Karte ist in den Array
            if (index > -1) {
                //Dann die Funktion lass sie weg von den Array durch die Nummer von ihre Position
                //index = Position die gespielte Karte und 1 =  lass nur ein item weg
                cardsComputer.splice(index, 1);
            }
        };
        //überprüfen ob die Karte Stapel von Computer Gegern ist leer
        computerGegner.prototype.cardsLeft = function () {
            //Wenn die Stapel leer ist, dann hat den Computer Gegern den Spiel gewinnen
            if (this.cardsComputer.length == 0) {
                return true;
            }
            //Wenn die Stapel nicht leer ist, dann geht den Spiel weiter
            else {
                return false;
            }
            //Funktion auf den Spieler verweisen
        };
        //aktualisiert die 
        computerGegner.prototype.UpdateUI = function () {
            //leere Div erstellen, um dannach mit Karten div erfühlen
            computerDiv.innerHTML = "";
            //überprüft jede element in Array von Computer und übergibt die Funktion generateDiv
            for (var _i = 0, cardsComputer_2 = cardsComputer; _i < cardsComputer_2.length; _i++) {
                var currentCard = cardsComputer_2[_i];
                var karteDiv = currentCard.generateDiv(false);
                //verbindet die Karten an die Computer Öberfläche
                computerDiv.appendChild(karteDiv);
            }
        };
        return computerGegner;
    }());
    //Funktionen, die in die Mitte passieren
    var Mitte = /** @class */ (function () {
        function Mitte(firstCards) {
            cardsMitte = firstCards;
        }
        //Erkennt die erste Karte in der Mitte Stapel
        Mitte.prototype.getTopCard = function () {
            var currentTopCard = cardsMitte[0]; //erstellen immer die erste position von Array?
            return currentTopCard;
            //console.log(currentTopCard);
        };
        //Zeigt die gespielte Karte in der Mitte Stapel
        //function pushCard (TopCardLay);
        Mitte.prototype.pushCard = function (currentCard) {
            cardsMitte.push(currentCard);
        };
        //Vergleich ob die Karte gespielt ist gleich (Farbe oder Wert) als die erste Karte, die in der Mitte Stapel ist
        Mitte.prototype.TryPlayCard = function (givenCard) {
            var currentTopCard = this.getTopCard();
            if (givenCard.color == currentTopCard.color || givenCard.wert == currentTopCard.wert) {
                //Wenn die Karte ist Farbe oder Wert gleich, dann ist sie in die Mitte Stapel gezeigt
                this.pushCard(givenCard);
                return true;
            }
            //Wenn die Karte ist nicht gleich Farbe oder Wert, dann geht den Spiel weiter
            else {
                return false;
            }
        };
        return Mitte;
    }());
});
//# sourceMappingURL=script_Engeaufgabe.js.map