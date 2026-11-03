
const fruits = ['Apple', 'Banana', 'Grapefruit', 'Kiwi', 'Mango']

// I wanted to have each button be its own function to do the Create, Read, and Delete functionality
function add() {
let newFruit = document.getElementById("listText").value;

if (newFruit !== "") {  // make it so that if the string isn't empty, add it to the list
    fruits.push(newFruit);
    document.getElementById("listText").value = "";
}

}

function deleteItem() {
let deleteFruit = document.getElementById("listText").value;
let index = fruits.indexOf(deleteFruit);

if (index !== -1) { // if index is -1 that would mean the the input was invalid (not spelt correctly, not in the list etc.)
    fruits.splice(index, 1);
}
// also I am trying to get in the habit of commenting on my code. Is it better to give myself a whole line for the comment or can I do something
// like what I had above?
document.getElementById("listText").value = "";

}

function view() {
document.getElementById("printList").innerHTML = fruits.join("<br>");
}

function main () {
document.getElementById("add").addEventListener("click", add);
document.getElementById("delete").addEventListener("click", deleteItem);
document.getElementById("showcase").addEventListener("click", view);
}

main();

//ALSO NOTE THAT IT IS CASE SENSITIVE
//Not sure how to make it not case sensitive
