namespace aufgabe08 {

    //die Audios als Varianten in Arrayform definieren
    var sound:HTMLAudioElement [] = [new Audio('assets/A.mp3'), new Audio('assets/C.mp3'), new Audio('assets/F.mp3'), new Audio('assets/G.mp3'), new Audio('assets/hihat.mp3'), new Audio('assets/kick.mp3'), new Audio ('assets/laugh-1.mp3'), new Audio('assets/laugh-2.mp3'), new Audio('assets/snare.mp3')];

    //Funktion zum Abspielen von Audio entsprechend dem Dateinamen einstellen
    function soundPlay (audioMP3: string) {
        var beat:HTMLAudioElement = new Audio (audioMP3);
        beat.play();
    }

    //Drum-Pad-Klickfunktion einstellen
    window.addEventListener("load", function () {
        document.querySelector("#button1").addEventListener("click", function () {soundPlay ("assets/A.mp3")} );
        document.querySelector("#button2").addEventListener("click", function () {soundPlay ("assets/C.mp3")});
        document.querySelector("#button3").addEventListener("click", function () {soundPlay ("assets/F.mp3")});
        document.querySelector("#button4").addEventListener("click", function () {soundPlay ("assets/G.mp3")});
        document.querySelector("#button5").addEventListener("click", function () {soundPlay ("assets/hihat.mp3")});
        document.querySelector("#button6").addEventListener("click", function () {soundPlay ("assets/kick.mp3")});
        document.querySelector("#button7").addEventListener("click", function () {soundPlay ("assets/snare.mp3")});
        document.querySelector("#button8").addEventListener("click", function () {soundPlay ("assets/laugh-1.mp3")});
        document.querySelector("#button9").addEventListener("click", function () {soundPlay ("assets/laugh-2.mp3")});

    });

    //Beats als Array-Variable definieren
    var beats:HTMLAudioElement [] = [sound [4], sound [5], sound [8]];

    //Stelle Variante der Elemente definieren
    var key: number = 0;

    //Variante einstellen, um das Wiederholungsintervall zu definieren
    var trigger;

    //Funktion alle 1 Sekunde wiederholen
    function repeat () {
        trigger = setInterval(playButton, 1000);
    }

    //Funktion zum Abspielen des Tons
    function playButton () {
        //Funktion, um den Wert des Schlüsselelements zu erhöhen
        key++;

        //Bedingung, dass nach dem Abspielen aller Audios im Array das erste Element des Arrays erneut abgespielt werden soll
        if (key >= beats.length) {
            key = 0;
        }
        //test
        //console.log(beats[key]);

        beats[key].play ();

    }

    //Playtastenfunktion zum Abspielen der Audios aus dem Array und Stop
    window.addEventListener("load", function () {
        document.querySelector(".playButton").addEventListener("click", repeat);

        document.querySelector("#stopHidden").addEventListener("click", function (): void {
            clearInterval(trigger);
            console.log("stop");
        });
    });



    window.addEventListener("load", function () {
        document.querySelector("#playButton").addEventListener("click", function (): void {
            document.querySelector("#playButton").classList.add("is-hidden");
            document.querySelector("#stopHidden").classList.remove("is-hidden");
        });

        document.querySelector("#stopHidden").addEventListener("click", function (): void {
            document.querySelector("#stopHidden").classList.add("is-hidden");
            document.querySelector("#playButton").classList.remove("is-hidden");
        });

        document.querySelector("#trashButton").addEventListener("click", function (): void {
            beats = [];

            console.log ("löschen");
        });

        document.querySelector("shuffleButton").addEventListener("click", function (): void {

            var playMaschine:any = setInterval(function (): void: {
                sound[key].play ();
                
                key = Math.floor(Math.random () *9);

                console.log (key),
                500)};
            });
        };
    };    
    


