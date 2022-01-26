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
    //console.log(cardTotal);

    //Teilen die Karten in computerGegner Stapel, spieler Stapel, Mitte Stapel und Rest Stapel
    let cardsPlayer = cardTotal.splice(0, 5);
    let cardsComputer = cardTotal.splice(0, 5);
    let cardsMitte = cardTotal.splice(0, 1);

    //console.log(cardsPlayer);
    //console.log(cardsComputer);
    //console.log(cardsMitte);
    //console.log(cardTotal);



    //EventListener für Karten auf Spieler Stapel nicht mehr angezeigt werden, wenn sie angeklick sind
    document.querySelector("#Karte 1").addEventListener("click", function(): void { document.getElementById("Karte1").style.display = "block"});
    document.querySelector("#Karte 2").addEventListener("click", function(): void { document.getElementById("Karte2").style.display = "block"});
    document.querySelector("#Karte 3").addEventListener("click", function(): void { document.getElementById("Karte3").style.display = "block"});
    document.querySelector("#Karte 4").addEventListener("click", function(): void { document.getElementById("Karte4").style.display = "block"});
    document.querySelector("#Karte 5").addEventListener("click", function(): void { document.getElementById("Karte1").style.display = "block"});

    //EventListener für Karten auf Töte Stapel nicht mehr angezeigt werden, wenn sie angeklick sind
    document.querySelector("#Karte 12").addEventListener("click", function(): void { document.getElementById("Karte12").style.display = "block"});

    //Funktionen für die Spielleiter 
    class spielLeiter {
        //document.querySelector("#startGame").addEventListener("click", function ():void { document.getElementById("spaceGame").style.display = "show"});

    }
    
    //Funktionen die in Computer Gegner passiert
    class computerGegner {

        //erstellen die Array mit die Karten von den Computer
    
        cardsComputer: Cards[];
        mitteInstanz: Mitte;
        
        constructor(pushedCards: Cards[], givenCardMitte: Mitte)
        {
            cardsComputer = pushedCards;
        }

        
        
        //funktion um die Karte in die Mitte zu spielen
        playCard(): boolean {

            //Vergleichen jede Karte in Computer Stapel mit die erste Karte, die in Mitte ist
            for(let currentCard of cardsComputer)
            {
                if(this.mitteInstanz.TryPlayCard(currentCard)) 
                {
                    this.removecard(currentCard);
                    document.querySelector("#Karte 6").addEventListener("click", function(): void { document.getElementById("Karte6").style.display = "block"});
                    return (true);
                }

            }
            return (false);
        }

        //Wenn die aktuell Karte von Computer Stapel ist gleich (true) als die Karte, die in Mitte Stapel is, dann die ist von den Stapel verschiebt.
        //const definiert die position in Array von die Karte, die in Mitte gespielt hat
        removecard(currentCard: Cards): void {
            const index = cardsComputer.indexOf(currentCard);
            
            //Wenn die gespielte Karte ist in den Array
            if (index > -1) {
                //Dann die Funktion lass sie weg von den Array durch die Nummer von ihre Position
                //index = Position die gespielte Karte und 1 =  lass nur ein item weg
                cardsComputer.splice(index, 1);
                        
            }
        }
                    

        //überprüfen ob die Karte Stapel von Computer Gegern ist leer
        cardsLeft() : boolean {

            //Wenn die Stapel leer ist, dann hat den Computer Gegern den Spiel gewinnen
            if(this.cardsComputer.length != 0) {
                return true;
            }
            //Wenn die Stapel nicht leer ist, dann geht den Spiel weiter
            else {
                return false;
            }
        }

    }

    //Funktionen, die in die Mitte passieren
    class Mitte {

        //erstellen die Array mit die Karten von der Mitte

        //Card [] playedCards;
        cardsMitte: Cards[];
        
        constructor(firstCards: Cards[])
        {
            cardsMitte = firstCards;
        }


        //Erkennt die erste Karte in der Mitte Stapel

        getTopCard () : Cards {
            var currentTopCard = cardsMitte[cardsMitte.length - 1];
            return currentTopCard;
            //console.log(currentTopCard);
        }

        //Zeigt die gespielte Karte in der Mitte Stapel

        
        //function pushCard (TopCardLay);
        pushCard (computerCard: Cards) : void {
            cardsMitte.push(computerCard);
        }
        


        //Vergleich ob die Karte gespielt ist gleich (Farbe oder Wert) als die erste Karte, die in der Mitte Stapel ist
        TryPlayCard (givenCard: Cards) : boolean {
            
            
            let currentTopCard = this.getTopCard();
            

            
            if(givenCard.color == currentTopCard.color || givenCard.wert == currentTopCard.wert) {
                
                //Wenn die Karte ist Farbe oder Wert gleich, dann ist sie in die Mitte Stapel gezeigt
                this.pushCard(givenCard);

            return true;
            }
            //Wenn die Karte ist nicht gleich Farbe oder Wert, dann geht den Spiel weiter
            else {
                return false;
            }
        }

    }
    



});