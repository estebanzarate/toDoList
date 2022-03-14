document.addEventListener("DOMContentLoaded", () => {

    const inputItem = document.querySelector("#inputItem"),
        btnAdd = document.querySelector("#btnAdd"),
        ul = document.querySelector("#ul");

    inputItem.focus();
    window.addEventListener("click", e => {
        if (e.target.matches("body")) inputItem.focus();
    })

    btnAdd.addEventListener("click", agregarItem);

    inputItem.addEventListener("keypress", e => {
        if (e.code == "Enter" || e.code == "NumpadEnter") return agregarItem();
    })

    //Agrega una tarea nueva
    function agregarItem() {
        if (inputItem.value !== "") {
            const li = document.createElement("li");
            li.textContent = inputItem.value;
            ul.appendChild(li);
            inputItem.value = "";
            inputItem.focus();
        }
    }

})