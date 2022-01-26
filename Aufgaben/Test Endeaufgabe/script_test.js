window.addEventListener("load", function () {
    //Objekt-Instanz: Karten mit Eingenschaften (Farbe und Wert)
    var cardTotal = [
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
    function shuffleCards(cardTotal) {
        cardTotal.sort(function () { return Math.random() - 0.5; });
    }
    shuffleCards(cardTotal);
    //console.log(cardTotal);
    var cardsPlayer = cardTotal.slice(0, 5);
    var cardsComputer = cardTotal.slice(5, 5);
    var cardsMitte = cardTotal.splice(10, 1);
    console.log(cardsPlayer);
    console.log(cardsComputer);
    console.log(cardsMitte);
    console.log(cardTotal);
});
//# sourceMappingURL=script_test.js.map