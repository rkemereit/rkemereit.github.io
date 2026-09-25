

function checkConsole(){
    document.getElementById("btn1").innerHTML = "Check the console";
    console.log("You are stupid")
    console.log("sorry that was mean :(")
    console.log("Hover over the last button please")
}

function changeBG() {
    document.body.style.backgroundColor = "Black";
}

document.getElementById("btn2").addEventListener("click", function() {
  alert("This");
});

document.getElementById("btn3").addEventListener("click", function() {
  alert("Is");
});

document.getElementById("btn4").addEventListener("click", function() {
  alert("A");
});

document.getElementById("btn5").addEventListener("click", function() {
  alert("Pretty");
});

document.getElementById("btn6").addEventListener("click", function() {
  alert("Long");
});

document.getElementById("btn7").addEventListener("click", function() {
  alert("Sentence");
});

document.addEventListener("keydown", function(event) {
    if (event.key === "m") {
        alert("Have a cookie!")
    }
})

function erase(btn) {
    btn.style.display = "none";

}
