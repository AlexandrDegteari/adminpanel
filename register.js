const form = document.querySelector('form');
const input = document.getElementById("exampleFirstName");
const input2 = document.getElementById("exampleLastName");
const input3 = document.getElementById("exampleInputEmail");
const input4 = document.getElementById("exampleInputPassword");
let ids = localStorage.getItem('id') ? localStorage.getItem('id') : 0;

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
form.addEventListener('submit', function (e) {
    e.preventDefault();
    ids++;
    localStorage.setItem('id', JSON.stringify(ids));
    itemsArray.push({username:input.value,User2:input2.value , email:input3 ,password:input4, id : ids});
    localStorage.setItem('items', JSON.stringify(itemsArray));
});