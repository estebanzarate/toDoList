document.addEventListener("DOMContentLoaded", () => {

    const inputItem = document.querySelector("#inputItem"),
        btnAdd = document.querySelector("#btnAdd"),
        ul = document.querySelector("#ul"),
        btnTrash = `<i class="fa-solid fa-trash-can"></i>`;

    inputItem.focus();
    window.addEventListener("click", e => {
        if (e.target.matches("body")) inputItem.focus();
    })

    btnAdd.addEventListener("click", agregarItem);
    window.addEventListener("click", eliminarItem);

    inputItem.addEventListener("keypress", e => {
        if (e.code == "Enter" || e.code == "NumpadEnter") return agregarItem();
    })

    //Agrega tarea nueva
    function agregarItem() {
        if (inputItem.value !== "") {
            const li = document.createElement("li");
            li.classList.add("li");
            li.textContent = inputItem.value;
            li.innerHTML += btnTrash;
            ul.appendChild(li);
            inputItem.value = "";
            inputItem.focus();
        }
    }

    //Elimina tarea
    function eliminarItem(e) {
        if (e.target.matches(".fa-trash-can")) {
            e.target.parentElement.remove();
        }
    }

})