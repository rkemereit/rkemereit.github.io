let input = prompt("Select a number 1-100")
let num= parseInt(input)
let list = document.getElementById("list")

    while (num < 1 || num > 100){
        input = prompt("Select a number 1-100")
        num= parseInt(input)
    }

    while (num >= 0) {
        let item = document.createElement("li")
        item.textContent = num;
        list.appendChild(item);
        num -= 1;
    }

