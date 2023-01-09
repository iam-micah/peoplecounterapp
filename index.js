let countEl = document.getElementById("count-el");
let count = 0;
let entries = document.getElementById("saved"); 

function increment() {
    count += 1;
    countEl.innerHTML = count;
}

function save() {
    let newText = count + " - ";
    entries.textContent += newText;
    count = 0;
    countEl.textContent = 0;
}