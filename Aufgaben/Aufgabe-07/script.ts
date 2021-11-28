var sound:HTMLAudioElement [] = [new Audio('assets/A.mp3'), new Audio('assets/C.mp3'), new Audio('assets/F.mp3'), new Audio('assets/G.mp3'), new Audio('assets/hihat.mp3'), new Audio('assets/kick.mp3'), new Audio('assets/laugh-2.mp3'), new Audio('assets/snare.mp3')];

var sound1:HTMLAudioElement = new Audio ('assets/A.mp3');

//var beats: string = "sound1";


var key: number = 0;

function soundPlay () {
    sound [key].play();
}

window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("click", soundPlay);
});