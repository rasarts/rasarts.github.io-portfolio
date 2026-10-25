/*let myAge = 60;
let someAge = 60;

if (myAge == someAge) {
    console.log("His age is 50");
}
*/


let blokje = document.querySelector("#blokje");
let knop = document.querySelector("#knop");
let bloem = document.querySelector("#bloem");
let bloei = false;

blokje.style.backgroundColor = "purple";
blokje.style.fontFamily = "Arial";
blokje.innerHTML = "<p>Sing the song!</p>";
bloem.style.backgroundImage = "url('images/red carnation knol.png')";

function buttonClicked() {
    blokje.innerHTML = "<p>Spring has come again!</p>";
    blokje.style.backgroundColor = "tomato";

    if (bloei == false) {
        bloem.style.backgroundImage = "url('images/red carnation bloem.png')";
        bloei = true;
    } else {
        bloem.style.backgroundImage = "url('images/red carnation knol.png')";
        bloei = false;
    }
}

knop.addEventListener("click", buttonClicked);
