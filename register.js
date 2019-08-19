const form = document.querySelector('form');
const input = document.getElementById("exampleFirstName");
const input3 = document.getElementById("exampleInputEmail");
const input4 = document.getElementById("exampleInputPassword");
const input5 = document.getElementById("exampleRepeatPassword");
const errEmail = document.getElementById("errEmail");
const errPass = document.getElementById("errPass");
let id = localStorage.getItem('id') ? localStorage.getItem('id') : 0;

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input4.value !== input5.value) {
        errPass.style.display = "block";
        return;
    } else {
        errPass.style.display = "none";
    }
    for (var i = 0; i < itemsArray.length; i++) {
        if (input3.value == itemsArray[i].email) {
            errEmail.style.display = "block";
            return;
        } else {
            errEmail.style.display = "none"
        }
    }

    localStorage.setItem('id', JSON.stringify(id));
    let newItem = {
        username: input.value,
        User2: input2.value,
        email: input3.value,
        password: input4.value,
        id
    };
    id++;

    itemsArray.push(newItem);

    localStorage.setItem('items', JSON.stringify(itemsArray));

location.href = "login.html"
})