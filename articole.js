let nameArticol = document.getElementById("name");
let descriptionArticol = document.getElementById("description");
let addTable = document.getElementById("addTable");
let tableArticole = document.getElementById("tableArticole");

addTable.addEventListener("click", function createElementInTable() {
    if (nameArticol.value.length && descriptionArticol.value.length > 0) {
        let createTr = document.createElement("tr");
        tableArticole.appendChild(createTr);
        let createTdName = document.createElement("td");
        createTr.appendChild(createTdName);
        createTdName.innerHTML = nameArticol.value;
        let createTdDescription = document.createElement("td");
        createTr.appendChild(createTdDescription);
        createTdDescription.innerHTML = descriptionArticol.value;
        let createTdButton = document.createElement("td");
        createTr.appendChild(createTdButton);
        let createDeleteButton = document.createElement("button");
        createTdButton.appendChild(createDeleteButton);
        createDeleteButton.classList.add("delete", "btn", "btn-light");
        createDeleteButton.innerHTML = "Delete";
        createDeleteButton.addEventListener("click", function () {
            createTr.remove()
        });
    } else {
        alert("Introduceti Name & Description");
    }
});
