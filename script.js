const inputItem = document.querySelector("#inputItem"),
    btnAdd = document.querySelector("#btnAdd"),
    ul = document.querySelector("#ul");

window.addEventListener("click", agregarItem);

//Agrega una tarea nueva
function agregarItem(e) {
    if (inputItem.value !== "") {
        if (e.target.matches("#btnAdd")) {
            const li = document.createElement("li");
            li.textContent = inputItem.value;
            ul.appendChild(li);
            inputItem.value = "";
        }
    }
}