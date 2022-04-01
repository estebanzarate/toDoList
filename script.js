document.addEventListener("DOMContentLoaded", () => {
    const inputItem = document.querySelector("#inputItem"),
        btnAdd = document.querySelector("#btnAdd"),
        ul = document.querySelector("#ul"),
        btnTrash = `<i class="fa-solid fa-trash-can"></i>`,
        footer = document.getElementById("footer"),
        main = document.getElementById("main");

    let list = [];

    inputItem.focus();

    document.addEventListener("click", (e) => {
        if (e.target.matches("main")) inputItem.focus();
    });

    btnAdd.addEventListener("click", agregarItem);
    inputItem.addEventListener("keyup", (e) => {
        if (e.code == "Enter" || e.code == "NumpadEnter") {
            agregarItem();
        }
    });
    window.addEventListener("click", eliminarItem);
    window.addEventListener("click", saveList);
    window.addEventListener("click", loadList);
    window.addEventListener("click", delList);

    //Agregar tarea nueva
    function agregarItem() {
        if (ul.children.length == 5) {
            alert("No te hagas el que tenés que hacer tantas cosas!!");
            inputItem.value = "";
        }
        if (inputItem.value !== "") {
            const li = document.createElement("li");
            const span = document.createElement("span");
            li.classList.add("li");
            span.textContent = inputItem.value;
            li.appendChild(span);
            li.innerHTML += btnTrash;
            ul.appendChild(li);
            inputItem.value = "";
            inputItem.focus();
            modal();
        }
    }

    //Eliminar tarea
    function eliminarItem(e) {
        if (e.target.matches(".fa-trash-can")) {
            e.target.parentElement.remove();
        }
    }

    //Guardar lista en local storage
    function saveList(e) {
        if (e.target.matches("#btnSave") && ul.children.length > 0) {
            list = [];
            localStorage.clear();
            for (let i = 0; i < ul.children.length; i++) {
                list.push(ul.children[i].textContent);
            }
            localStorage.setItem("list", JSON.stringify(list));
            list = [];
            ul.innerHTML = "";
            // modal(e.target.textContent);
        }
    }

    //Cargar lista
    function loadList(e) {
        if (e.target.matches("#btnLoad") && localStorage.length > 0) {
            list = JSON.parse(localStorage.getItem("list"));
            const frag = document.createDocumentFragment();
            ul.innerHTML = "";
            for (let i = 0; i < list.length; i++) {
                const li = document.createElement("li");
                const span = document.createElement("span");
                li.classList.add("li");
                span.innerHTML = list[i];
                li.appendChild(span);
                li.innerHTML += btnTrash;
                frag.appendChild(li);
            }
            ul.appendChild(frag);
        }
    }

    //Eliminar lista
    function delList(e) {
        if (
            e.target.matches("#btnDel") &&
            (ul.children.length > 0 || localStorage.length > 0)
        ) {
            ul.innerHTML = "";
            localStorage.clear();
        }
    }

    function modal() {
        const divModal = document.createElement("div");
        divModal.classList.add("divModal");
        divModal.innerHTML = `<p>Tarea agregada!</p>`;
        main.appendChild(divModal);
        setTimeout(() => {
            divModal.parentNode.removeChild(divModal);
        }, 1000);
    }
});
