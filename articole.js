let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let id = document.getElementById("id");
let addTable = document.getElementById("addTable");
let tableUsers = document.getElementById("tableUsers");


addTable.addEventListener("click", function createElementInTable() {
    if ((firstName.value.length && lastName.value.length && email.value.length && password.value.length && id.value.length) > 0
        &&
        (firstName.value && lastName.value && email.value && password.value && id.value) !== " "
        &&
        $('#email').val().indexOf('@') >= 0
    ) {
        let createTr = document.createElement("tr");
        tableUsers.appendChild(createTr);
        let createTdFirstName = document.createElement("td");
        createTr.appendChild(createTdFirstName);
        createTdFirstName.innerHTML = firstName.value;
        let createTdLastName = document.createElement("td");
        createTr.appendChild(createTdLastName);
        createTdLastName.innerHTML = lastName.value;
        let createTdEmail = document.createElement("td");
        createTr.appendChild(createTdEmail);
        createTdEmail.innerHTML = email.value;
        let createTdPassword = document.createElement("td");
        createTr.appendChild(createTdPassword);
        createTdPassword.innerHTML = password.value;
        let createTdId = document.createElement("td");
        createTr.appendChild(createTdId);
        createTdId.innerHTML = id.value;
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
        alert("Error");
    }
});