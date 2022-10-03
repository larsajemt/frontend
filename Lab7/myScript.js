/**
 * @file: Lab 7 Övningar i JavaScript och DOM interaction
 * @author: Lars-Erik Jemt
 * @version: 1.0
 *
 */

document.getElementById("button").addEventListener("click", function (event){
    document.getElementById("paragraf").innerText = "Denna paragraf är vb ny och fräsch.";
    console.log("klhkjh");
});

function changeLink (link) {
    document.getElementById("link").href = link;
}

function kub(width, height, length) {
    document.getElementById("result").innerHTML="Volymen blir " + width*height*length;
}


