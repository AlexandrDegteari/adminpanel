const form = document.querySelector('form');
const firstName = document.getElementById("exampleFirstName");
const lastName = document.getElementById("exampleLastName");
const email = document.getElementById("exampleInputEmail");
const pass = document.getElementById("exampleInputPassword");
const passConf = document.getElementById("exampleRepeatPassword");
const errEmail = document.getElementById("errEmail");
const errPass = document.getElementById("errPass");
let id = localStorage.getItem('id') ? +localStorage.getItem('id') : 0;

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    id++;

    if (pass.value !== passConf.value) {
        errPass.style.display = "block";
        return;
    } else {
        errPass.style.display = "none";
    }
    for (let i = 0; i < itemsArray.length; i++) {
        if (email.value == itemsArray[i].email) {
            errEmail.style.display = "block";
            return;
        } else {
            errEmail.style.display = "none"
        }
    }
    let newItem = {
        username: firstName.value,
        User2: lastName.value,
        email: email.value,
        password: pass.value,
        id

    };

    localStorage.setItem('id', JSON.stringify(newItem.id));
    itemsArray.push(newItem);

    localStorage.setItem('items', JSON.stringify(itemsArray));

    // location.href = "login.html"
});
