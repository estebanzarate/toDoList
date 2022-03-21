document.addEventListener("DOMContentLoaded", () => {

    const inputItem = document.querySelector("#inputItem"),
        btnAdd = document.querySelector("#btnAdd"),
        ul = document.querySelector("#ul"),
        btnTrash = `<i class="fa-solid fa-trash-can"></i>`;
    let list = [];

    inputItem.focus();

    window.addEventListener("click", e => {
        if (e.target.matches("body")) inputItem.focus();
    })
    btnAdd.addEventListener("click", agregarItem);
    window.addEventListener("click", eliminarItem);
    window.addEventListener("click", saveList);
    window.addEventListener("click", loadList);
    window.addEventListener("click", delList);

    inputItem.addEventListener("keypress", e => {
        if (e.code == "Enter" || e.code == "NumpadEnter") return agregarItem();
    })

    //Agregar tarea nueva
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

    //Eliminar tarea
    function eliminarItem(e) {
        if (e.target.matches(".fa-trash-can")) {
            e.target.parentElement.remove();
        }
    }

    //Guardar lista en local storage
    function saveList(e){
        if(e.target.matches("#btnSave") && ul.children.length > 0){
            list = [];
            localStorage.clear();
            for (let i = 0; i < ul.children.length; i++) {
                list.push(ul.children[i].textContent);
            }
            localStorage.setItem("list", JSON.stringify(list));
            list = [];
            ul.innerHTML = "";
        }
    }

    //Cargar lista
    function loadList(e){
        if(e.target.matches("#btnLoad") && localStorage.length > 0){
            list = JSON.parse(localStorage.getItem("list"));
            const frag = document.createDocumentFragment();
            ul.innerHTML = "";
            for (let i = 0; i < list.length; i++) {
                const li = document.createElement("li");
                li.classList.add("li");
                li.innerHTML = list[i];
                li.innerHTML += btnTrash;
                frag.appendChild(li);
            }
            ul.appendChild(frag);
        }
    }

    //Eliminar lista
    function delList(e){
        if(e.target.matches("#btnDel") && (ul.children.length > 0 || localStorage.length > 0)){
            ul.innerHTML = "";
            localStorage.clear();
        }
    }

})