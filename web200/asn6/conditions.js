

document.getElementById("submit").addEventListener("click",function() {
var Q1 = document.querySelector('input[name="woodchuck"]:checked')?.value;
var Q2 = document.querySelector('input[name="speed"]:checked')?.value;
var Q3 = document.querySelector('input[name="you"]:checked')?.value;
var score = 0

if (Q1 === "wood") {
score += 1
}
else {
    score += 0
}

if (Q2 === "Faster than a speeding bullet") {
    score += 1
}
else {
    score += 0
}

if (Q3 === "I'm me") {
    score += 1
}
else {
    score += 0
}

if (score === 0) {
    document.getElementById("response").innerHTML = "You didn't get any right :( you got 0%"
}
else if (score === 1) {
    document.getElementById("response").innerHTML = "You got 33%"
}
else if (score === 2) {
    document.getElementById("response").innerHTML = "You got 66%"
}
else {
    document.getElementById("response").innerHTML = "You got 100%!!!"
}

});
