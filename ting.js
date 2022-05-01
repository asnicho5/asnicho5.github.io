const a1audio = new Audio("sounds/A1.mp3");
const b1audio = new Audio("sounds/B1.mp3");
const d1audio = new Audio("sounds/D1.mp3");
const e1audio = new Audio("sounds/E1.mp3");
const fsharp = new Audio("sounds/Fsharp.mp3");
const a2audio = new Audio("sounds/A2.mp3");

const a1button = document.getElementById("A1");
const b1button = document.getElementById("B");
const d1button = document.getElementById("D");
const e1button = document.getElementById("E");
const fsharpButton = document.getElementById("Fsharp");
const a2button = document.getElementById("A2");

function playA1() {
    if (!a1audio.paused) {
        a1audio.currentTime = 0;
        a1audio.play();
    } else {
        a1audio.play();
    }
}

function playA2() {
    if (!a2audio.paused) {
        a2audio.currentTime = 0;
        a2audio.play();
    } else {
        a2audio.play();
    }
}

function playB1() {
    if (!b1audio.paused) {
        b1audio.currentTime = 0;
        b1audio.play();
    } else {
        b1audio.play();
    }
}

function playD1() {
    if (!d1audio.paused) {
        d1audio.currentTime = 0;
        d1audio.play();
    } else {
        d1audio.play();
    }
}

function playE1() {
    if (!e1audio.paused) {
        e1audio.currentTime = 0;
        e1audio.play();
    } else {
        e1audio.play();
    }
}

function playFSharp() {
    if (!fsharp.paused) {
        fsharp.currentTime = 0;
        fsharp.play();
    } else {
        fsharp.play();
    }
}