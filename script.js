// Poonam Soni - All rights reserved

// Copyright © 2021 Poonam Soni

function specs() {
    eyesNormal()
    hideAngryFace()
    hideHearts()
    addSmile()
    var coolLook = document.getElementsByClassName("hiddenSpecs")[0];
    coolLook.classList.remove("hiddenSpecs");
    coolLook.classList.add("specs");
}

function angry() {
    hideSpecs()
    hideHearts()
    hideSmile()
    angryEyes()
    var lips = document.getElementById("angry-lip");
    lips.classList.add("angryLips")
}

function angryEyes() {
     var angryEyes1 = document.getElementsByClassName("eyesLeft")[0];
    angryEyes1.style.background = "red";
    angryEyes1.style.borderRadius = "50% 50% 0% 0%";
    var angryEyes2 = document.getElementsByClassName("eyesRight")[0];
    angryEyes2.style.background = "red";
    angryEyes2.style.borderRadius = "50% 50% 0% 0%";
}

function eyesNormal() {
    var angryEyes1 = document.getElementsByClassName("eyesLeft")[0];
    angryEyes1.style.background = "black";
    angryEyes1.style.borderRadius = "50%";
    var angryEyes2 = document.getElementsByClassName("eyesRight")[0];
    angryEyes2.style.background = "black";
    angryEyes2.style.borderRadius = "50%";
}

function love() {
    hideSpecs()
    eyesNormal()
    hideAngryFace()
    addSmile()
    var lovely1 = document.getElementsByClassName("heartLeft")[0];
    var lovely2 = document.getElementsByClassName("heartRight")[0];
    lovely1.style.visibility = "visible";
    lovely2.style.visibility = "visible";
}

function hideHearts() {
    var lovelyA = document.getElementsByClassName("heartLeft")[0];
    var lovelyB = document.getElementsByClassName("heartRight")[0];
    if (lovelyA)
    lovelyA.style.visibility = "hidden";

    if (lovelyB)
    lovelyB.style.visibility = "hidden";
}

function hideSpecs() {
    let spec = document.getElementsByClassName("specs")[0];
    if (spec)
    spec.classList.add("hiddenSpecs")
}

function hideAngryFace() {
    var angryFace = document.getElementsByClassName("angryLips")[0];
    if (angryFace) {
        angryFace.classList.remove("angryLips");
    }
}

function hideSmile() {
    var angrySmile = document.getElementsByClassName("Smile")[0];
    angrySmile.style.visibility = "hidden";
}

function addSmile() {
    var happySmile = document.getElementsByClassName("Smile")[0];
    happySmile.style.visibility = "visible"
}
