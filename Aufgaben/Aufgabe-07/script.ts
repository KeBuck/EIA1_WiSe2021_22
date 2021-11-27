var sound:HTMLAudioElement [] = [new Audio('assets/A.mp3'), new Audio('assets/C.mp3'), new Audio('assets/F.mp3'), new Audio('assets/G.mp3'), new Audio('assets/hihat.mp3'), new Audio('assets/kick.mp3'), new Audio('assets/laugh-2.mp3'), new Audio('assets/snare.mp3')];

var key: number = 0;

function soundPlay () {
    console.log(soundPlay [key] );
    key++;
}

window.addEventListener("load", function () {
    document.querySelector(".buttonSound").addEventListener("click", soundPlay);
});