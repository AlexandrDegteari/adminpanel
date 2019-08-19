/*
const form = document.querySelector('form');
const input = document.getElementById("exampleInputEmail");
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));

form.addEventListener('submit', function (e) {
    e.preventDefault();

    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
});



*/

let loginMail = document.getElementById("exampleInputEmail"),
    loginPass = document.getElementById("exampleInputPassword"),
    loginBtn = document.getElementById("loginBtn"),
    loginGoogleBtn = document.getElementById("loginGoogleBtn"),
    loginFbBtn = document.getElementById("loginFbBtn");
// let userObject = [
//     {
//         userMail: "alex@mail.ru",
//         userPass: 12345
//     },
//     {
//         userMail: "vlad@mail.ru",
//         userPass: 54321
//     },
//     {
//         userMail: "vasea@mail.ru",
//         userPass: 11111
//     },
//     {
//         userMail: "fedea@mail.ru",
//         userPass: 22222
//     },
//     {
//         userMail: "jora@mail.ru",
//         userPass: 33333
//     },
// ];
loginBtn.addEventListener("click", getInfo);

function getInfo(e) {
    e.preventDefault();
    console.log("work");
    for (let i = 0; i < itemsArray.length; i++) {
        if (loginMail.value == itemsArray[i].email && loginPass.value == itemsArray[i].password) {
            console.log(loginMail.value + " logged in!!!");
            location.href = "index.html";
            return
        }
        let errLogin = document.getElementById("errLogin");
        errLogin.style.display = "block";
        console.log("Username or password incorrect")
    }

}

// let userObject = [
//     {
//         userMail: "alex@mail.ru",
//         userPass: 12345
//     },
//     {
//         userMail: "vlad@mail.ru",
//         userPass: 54321
//     },
//     {
//         userMail: "vasea@mail.ru",
//         userPass: 11111
//     },
//     {
//         userMail: "fedea@mail.ru",
//         userPass: 22222
//     },
//     {
//         userMail: "jora@mail.ru",
//         userPass: 33333
//     },
// ];
// loginBtn.addEventListener("click", getInfo);
//
// function getInfo(e) {
//     e.preventDefault();
//     console.log("work");
//     for (let i = 0; i < userObject.length; i++) {
//         if (loginMail.value == userObject[i].userMail && loginPass.value == userObject[i].userPass) {
//             console.log(loginMail.value + " logged in!!!");
//             return
//         }
//         console.log("Username or password incorrect")
//     }
//
// }



