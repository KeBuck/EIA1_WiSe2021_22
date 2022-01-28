window.addEventListener("load", function () {
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
            karte.classList.add("karteStyle");
            if (showCard) {
                karte.style.backgroundColor = this.color;
                karte.innerHTML = this.wert.toString();
                karte.style.height = "250px";
                karte.style.width = "150px";
            }
            else {
                karte.classList.add("hidden");
            }
            return karte;
        };
        return Cards;
    }());
    //Funktionen, die in die Mitte passieren
    var Mitte = /** @class */ (function () {
        function Mitte(firstCards) {
            this.mitteDiv = document.querySelector("#Mitte");
            this.cardsMitte = firstCards;
            this.mitteDiv.style.display = "block";
        }
        //Erkennt die erste Karte in der Mitte Stapel
        Mitte.prototype.getTopCard = function () {
            return this.cardsMitte[this.cardsMitte.length - 1]; //erstellen immer die erste position von Array?
        };
        //Zeigt die gespielte Karte in der Mitte Stapel
        //function pushCard (TopCardLay);
        Mitte.prototype.pushCard = function (currentCard) {
            this.cardsMitte.push(currentCard);
        };
        Mitte.prototype.getCardsForStapel = function () {
            var remainigCard = this.cardsMitte.pop();
            var newStapelCards = this.cardsMitte;
            this.shuffleCards(newStapelCards);
            this.cardsMitte = [remainigCard];
            return newStapelCards;
        };
        //Mischen die Karten
        Mitte.prototype.shuffleCards = function (cardTotal) {
            cardTotal.sort(function () { return Math.random() - 0.5; });
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
        Mitte.prototype.updateUI = function () {
            this.mitteDiv.innerHTML = "";
            var newCard = this.getTopCard().generateDiv(true);
            this.mitteDiv.appendChild(newCard);
        };
        return Mitte;
    }());
    //Funktionen die in Computer Gegner passiert
    var computerGegner = /** @class */ (function () {
        function computerGegner(pushedCards, givenCardMitte) {
            this.computerDiv = document.querySelector("#Computer");
            this.cardsComputer = pushedCards;
            this.mitteInstanz = givenCardMitte;
            this.computerDiv.style.display = "block";
        }
        //funktion um die Karte in die Mitte zu spielen
        computerGegner.prototype.playCard = function () {
            //Vergleichen jede Karte in Computer Stapel mit die erste Karte, die in Mitte ist
            for (var _i = 0, _a = this.cardsComputer; _i < _a.length; _i++) {
                var currentCard = _a[_i];
                if (this.mitteInstanz.TryPlayCard(currentCard)) {
                    this.removecard(currentCard);
                    return true;
                }
            }
            return false;
        };
        //Wenn die aktuell Karte von Computer Stapel ist gleich (true) als die Karte, die in Mitte Stapel is, dann die ist von den Stapel verschiebt.
        //const definiert die position in Array von die Karte, die in Mitte gespielt hat
        computerGegner.prototype.removecard = function (currentCard) {
            var index = this.cardsComputer.indexOf(currentCard);
            //Wenn die gespielte Karte ist in den Array
            if (index > -1) {
                //Dann die Funktion lass sie weg von den Array durch die Nummer von ihre Position
                //index = Position die gespielte Karte und 1 =  lass nur ein item weg
                this.cardsComputer.splice(index, 1);
            }
        };
        //überprüfen ob die Karte Stapel von Computer Gegern ist leer
        computerGegner.prototype.cardsLeft = function () {
            //Wenn die Stapel leer ist, dann hat den Computer Gegern den Spiel gewinnen
            if (this.cardsComputer.length == 0) {
                return false;
            }
            //Wenn die Stapel nicht leer ist, dann geht den Spiel weiter
            else {
                return true;
            }
            //Funktion auf den Spieler verweisen
        };
        computerGegner.prototype.takeCard = function (givenCard) {
            this.cardsComputer.push(givenCard);
        };
        //aktualisiert die 
        computerGegner.prototype.updateUI = function () {
            //leere Div erstellen, um dannach mit Karten div erfühlen
            this.computerDiv.innerHTML = "";
            //überprüft jede element in Array von Computer und übergibt die Funktion generateDiv
            for (var _i = 0, _a = this.cardsComputer; _i < _a.length; _i++) {
                var currentCard = _a[_i];
                var karteDiv = currentCard.generateDiv(false);
                //verbindet die Karten an die Computer Öberfläche
                this.computerDiv.appendChild(karteDiv);
            }
        };
        return computerGegner;
    }());
    //Funktionen die in Computer Gegner passiert
    var Spieler = /** @class */ (function () {
        function Spieler(pushedCards, givenCardMitte, givenLeiter, givenStapel) {
            this.spielerDiv = document.querySelector("#Spieler");
            this.cardsSpieler = pushedCards;
            this.mitteInstanz = givenCardMitte;
            this.leiterInstanz = givenLeiter;
            this.stapelInstanz = givenStapel;
            this.spielerDiv.style.display = "block";
        }
        //funktion um die Karte in die Mitte zu spielen
        Spieler.prototype.playCard = function (cardToPlay) {
            //Vergleichen jede Karte in Computer Stapel mit die erste Karte, die in Mitte ist
            if (this.mitteInstanz.TryPlayCard(this.cardsSpieler[cardToPlay])) {
                this.removecard(this.cardsSpieler[cardToPlay]);
                this.leiterInstanz.playComputer();
            }
        };
        Spieler.prototype.getCardFromStapel = function () {
            this.takeCard(this.stapelInstanz.getFirstCard());
            this.leiterInstanz.playComputer();
        };
        //Wenn die aktuell Karte von Computer Stapel ist gleich (true) als die Karte, die in Mitte Stapel is, dann die ist von den Stapel verschiebt.
        //const definiert die position in Array von die Karte, die in Mitte gespielt hat
        Spieler.prototype.removecard = function (currentCard) {
            var index = this.cardsSpieler.indexOf(currentCard);
            //Wenn die gespielte Karte ist in den Array
            if (index > -1) {
                //Dann die Funktion lass sie weg von den Array durch die Nummer von ihre Position
                //index = Position die gespielte Karte und 1 =  lass nur ein item weg
                this.cardsSpieler.splice(index, 1);
            }
        };
        //überprüfen ob die Karte Stapel von Computer Gegern ist leer
        Spieler.prototype.cardsLeft = function () {
            //Wenn die Stapel leer ist, dann hat den Computer Gegern den Spiel gewinnen
            if (this.cardsSpieler.length == 0) {
                return false;
            }
            //Wenn die Stapel nicht leer ist, dann geht den Spiel weiter
            else {
                return true;
            }
            //Funktion auf den Spieler verweisen
        };
        Spieler.prototype.takeCard = function (givenCard) {
            this.cardsSpieler.push(givenCard);
        };
        //aktualisiert die 
        Spieler.prototype.updateUI = function (enablePlay) {
            //leere Div erstellen, um dannach mit Karten div erfühlen
            this.spielerDiv.innerHTML = "";
            var self = this;
            var _loop_1 = function (i) {
                var karteDiv = this_1.cardsSpieler[i].generateDiv(true);
                //verbindet die Karten an die Computer Öberfläche
                this_1.spielerDiv.appendChild(karteDiv);
                if (enablePlay) {
                    karteDiv.onclick = function () {
                        self.playCard(i);
                    };
                }
            };
            var this_1 = this;
            //überprüft jede element in Array von Computer und übergibt die Funktion generateDiv
            for (var i = 0; i < this.cardsSpieler.length; i++) {
                _loop_1(i);
            }
            if (enablePlay) {
                this.stapelInstanz.stapelDiv.onclick = function () {
                    self.getCardFromStapel();
                };
            }
            else {
                this.stapelInstanz.stapelDiv.onclick = function () { };
            }
        };
        return Spieler;
    }());
    var Stapel = /** @class */ (function () {
        function Stapel(givenStapel, givenMitte) {
            this.stapelDiv = document.querySelector("#Stapel");
            this.restStapel = givenStapel;
            this.mitteInstanz = givenMitte;
            this.stapelDiv.style.display = "block";
        }
        Stapel.prototype.getFirstCard = function () {
            var returnCard = this.restStapel.pop();
            if (this.restStapel.length == 0) {
                this.restStapel = this.mitteInstanz.getCardsForStapel();
            }
            return returnCard;
        };
        Stapel.prototype.updateUi = function () {
            this.stapelDiv.innerHTML = "";
            this.stapelDiv.appendChild(this.restStapel[this.restStapel.length - 1].generateDiv(false));
        };
        return Stapel;
    }());
    var SpielLeiter = /** @class */ (function () {
        function SpielLeiter() {
            this.gameDone = false;
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
            var cardsPlayer = this.allCardsStapel.splice(0, 5);
            var cardsComputer = this.allCardsStapel.splice(0, 5);
            var cardsMitte = this.allCardsStapel.splice(0, 1);
            //belegt hier alle Karten als allCardsStapel
            //Aufteilung den Stapel verweisen
            this.mitteInstanz = new Mitte(cardsMitte);
            this.nachzugStapel = new Stapel(this.allCardsStapel, this.mitteInstanz);
            this.computerGegnerInstanz = new computerGegner(cardsComputer, this.mitteInstanz);
            this.spielerInstanz = new Spieler(cardsPlayer, this.mitteInstanz, this, this.nachzugStapel);
        }
        //Mischen die Karten
        SpielLeiter.prototype.shuffleCards = function (cardTotal) {
            cardTotal.sort(function () { return Math.random() - 0.5; });
        };
        SpielLeiter.prototype.updateGlobalUI = function (spielerEnabled) {
            if (spielerEnabled === void 0) { spielerEnabled = true; }
            this.mitteInstanz.updateUI();
            this.computerGegnerInstanz.updateUI();
            this.nachzugStapel.updateUi();
            this.spielerInstanz.updateUI(spielerEnabled);
        };
        //Funktion um den Spiel zu starten
        SpielLeiter.prototype.startGame = function () {
            //Wahrend den ComputerGegner eine Karte spielt, den Spiel geht weiter
            this.updateGlobalUI();
        };
        SpielLeiter.prototype.playComputer = function () {
            this.gameDone = !this.spielerInstanz.cardsLeft();
            this.updateGlobalUI(false);
            this.checkForEndGame("MenschSpieler");
            var self = this;
            setTimeout(function () {
                if (!self.computerGegnerInstanz.playCard()) {
                    self.computerGegnerInstanz.takeCard(self.nachzugStapel.getFirstCard());
                }
                self.gameDone = !self.computerGegnerInstanz.cardsLeft();
                self.updateGlobalUI();
                self.checkForEndGame("ComputerSpieler");
            }, 1000);
        };
        SpielLeiter.prototype.checkForEndGame = function (currentPlayer) {
            if (this.gameDone) {
                alert("Spiel zuende! " + currentPlayer + " hat gewonnen!");
                location.reload();
            }
        };
        return SpielLeiter;
    }());
    var startButton = document.createElement("button");
    startButton.classList.add("startBtn");
    startButton.innerHTML = "Play Game";
    document.body.appendChild(startButton);
    startButton.onclick = function () {
        startButton.style.display = "none";
        var Spiel = new SpielLeiter();
        Spiel.startGame();
    };
});
//# sourceMappingURL=script_Engeaufgabe.js.map