var sound = [new Audio('assets/A.mp3'), new Audio('assets/C.mp3'), new Audio('assets/F.mp3'), new Audio('assets/G.mp3'), new Audio('assets/hihat.mp3'), new Audio('assets/kick.mp3'), new Audio('assets/laugh-1.mp3'), new Audio('assets/laugh-2.mp3'), new Audio('assets/snare.mp3')];
function soundPlay(audioMP3) {
    var beat = new Audio(audioMP3);
    beat.play();
}
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("click", function () { soundPlay("assets/A.mp3"); });
    document.querySelector("#button2").addEventListener("click", function () { soundPlay("assets/C.mp3"); });
    document.querySelector("#button3").addEventListener("click", function () { soundPlay("assets/F.mp3"); });
    document.querySelector("#button4").addEventListener("click", function () { soundPlay("assets/G.mp3"); });
    document.querySelector("#button5").addEventListener("click", function () { soundPlay("assets/hihat.mp3"); });
    document.querySelector("#button6").addEventListener("click", function () { soundPlay("assets/kick.mp3"); });
    document.querySelector("#button7").addEventListener("click", function () { soundPlay("assets/snare.mp3"); });
    document.querySelector("#button8").addEventListener("click", function () { soundPlay("assets/laugh-1.mp3"); });
    document.querySelector("#button9").addEventListener("click", function () { soundPlay("assets/laugh-2.mp3"); });
});
var beats = [sound[4], sound[5], sound[8]];
var key = 0;
function playButton() {
    console.log(beats[key]);
    key++;
}
window.addEventListener("load", function () {
    document.querySelector(".playButton").addEventListener("click", playButton);
});
//# sourceMappingURL=script.js.map