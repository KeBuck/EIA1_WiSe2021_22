window.addEventListener("load", function(): void {

    //Interface definiert die Datenstruktur von den Karten. Bietet Vorlage der Eingenschaften (Farbe und Wert) für Objekt-Instanzen.
    interface Cards {
        color: string;
        wert: number;

    }
 
    //Objekt-Instanz: Karten mit Eingenschaften (Farbe und Wert)
    var cardTotal: Cards[]= [
        //Karten mit die rote Farbe
        {
            color: "red",
            wert: 1
        },

        {
            color: "red",
            wert: 2
        },

        {
            color: "red",
            wert: 3
        },

        {
            color: "red",
            wert: 4
        },

        {
            color: "red",
            wert: 5
        },

        {
            color: "red",
            wert: 6
        },

        {
            color: "red",
            wert: 7
        },

        {
            color: "red",
            wert: 8
        },

        //Karten mit blaue Farbe
        {
            color: "blau",
            wert: 1
        },

        {
            color: "blau",
            wert: 2
        },

        {
            color: "blau",
            wert: 3
        },

        {
            color: "blau",
            wert: 4
        },

        {
            color: "blau",
            wert: 5
        },

        {
            color: "blau",
            wert: 6
        },

        {
            color: "blau",
            wert: 7
        },

        {
            color: "blau",
            wert: 8
        },

        //Karten mit grüne Farbe
        {
            color: "grun",
            wert: 1
        },

        {
            color: "grun",
            wert: 2
        },

        {
            color: "grun",
            wert: 3
        },

        {
            color: "grun",
            wert: 4
        },

        {
            color: "grun",
            wert: 5
        },

        {
            color: "grun",
            wert: 6
        },

        {
            color: "grun",
            wert: 7
        },

        {
            color: "grun",
            wert: 8
        },


        //Karten mit gelbe Farbe
        {
            color: "gelb",
            wert: 1
        },

        {
            color: "gelb",
            wert: 2
        },

        {
            color: "gelb",
            wert: 3
        },

        {
            color: "gelb",
            wert: 4
        },

        {
            color: "gelb",
            wert: 5
        },

        {
            color: "gelb",
            wert: 6
        },

        {
            color: "gelb",
            wert: 7
        },

        {
            color: "gelb",
            wert: 8
        },
    ];


    //Mischen die Karten
    function shuffleCards (cardTotal) {
        cardTotal.sort(() => Math.random() - 0.5);
    }

    shuffleCards(cardTotal);
    console.log(cardTotal)

    //Teilen die Karten in computerGegner Stapel, spieler Stapel, Mitte Stapel und Rest Stapel
    const cardsPlayer = cardTotal.slice(0, 4);
    const cardsComputer = cardTotal.slice(5, 9);
    const cardsMitte = cardTotal.splice(10, 10);

    console.log(cardsPlayer);
    console.log(cardsComputer);
    console.log(cardsMitte);
    console.log(cardTotal);

    //Funktionen die in Computer Gegner passiert
    var computerGegner () : void => {

        //erstellen die Array mit die Karten von den Computer

        //Card [] ownCards;
        const cardsComputer;
        
        //funktion um die Karte in die Mitte zu spielen
        function playCard(): boolean {

            //Vergleichen jede Karte in Computer Stapel mit die erste Karte, die in Mitte ist
            cardsComputer.forEach(currentCard);

            console.log(cardsComputer);

                function currentCard () {
                    if(mitteStapel.TryPlayCard == currentCard) {

                    
                        //Wenn die aktuell Karte von Computer Stapel ist gleich (true) als die Karte, die in Mitte Stapel is, dann die ist von den Stapel verschiebt.
                        //const definiert die position in Array von die Karte, die in Mitte gespielt hat
                        const index = cardsComputer.indexOf(currentCard);

                        //Wenn die gespielte Karte ist in den Array 
                        if (index > -1) {

                           //Dann die Funktion lass sie weg von den Array durch die Nummer von ihre Position
                           //index = Position die gespielte Karte und 1 =  lass nur ein item weg
                            cardsComputer.splice(index, 1);
                           
                        }
                        return true;
    
                    }
                
                    //Wenn die aktuell Karte von Computer Stapel nicht ist gleich (true) als die Karte, die in Mitte Stapel is, dann fang nochmal die Vergliechung an.
                    return false;
                }

                
        }

        //überprüfen ob die Karte Stapel von Computer Gegern ist leer
        function cardsLeft() : boolean {

            //Wenn die Stapel leer ist, dann hat den Computer Gegern den Spiel gewinnen
            if(cardsComputer.length != 0) {
                return true;
            }
            //Wenn die Stapel nicht leer ist, dann geht den Spiel weiter
            else {
                return false;
            }
        }

    };

    //Funktionen, die in die Mitte passieren
    var mitteStapel () : void => {

        //erstellen die Array mit die Karten von der Mitte

        //Card [] playedCards;
        const cardsMitte;

        //Erkennt die erste Karte in der Mitte Stapel

        //function getTopCard ();
        var currentTopCard = cardsMitte.slice(0, 1).shift();
        console.log(currentTopCard);

        //Zeigt die gespielte Karte in der Mitte Stapel

        //function pushCard (TopCardLay);
        var TopCardPlayed = cardsMitte.unshift(TryPlayCard); // currentCard ??

        //Vergleich ob die Karte gespielt ist gleich (Farbe oder Wert) als die erste Karte, die in der Mitte Stapel ist
        function TryPlayCard (givenCard) : boolean {
            
            //Card currentTopCard = getTopCard(); ????

            
            if(givenCard.color == currentTopCard.color || givenCard.wert == currentTopCard.wert) { //wo ich definiert die givenCard und die currentTopCard?
                
                //Wenn die Karte ist Farbe oder Wert gleich, dann ist sie in die Mitte Stapel gezeigt
                //pushCard(givenCard)
                const index = cardsMitte.indexOf(givenCard);
                if (index > -1) {
                    cardsMitte.splice (index, 1);
                }
                return true;
            }
            //Wenn die Karte ist nicht gleich Farbe oder Wert, dann geht den Spiel weiter
            else {
                return false;
            }
        }

    }



});