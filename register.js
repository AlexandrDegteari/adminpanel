const form = document.querySelector('form');
const input = document.getElementById("exampleFirstName");
const input2 = document.getElementById("exampleLastName");
const input3 = document.getElementById("exampleInputEmail");
const input4 = document.getElementById("exampleInputPassword");
const input5 = document.getElementById("exampleRepeatPassword");
const errEmail = document.getElementById("errEmail");
const errPass = document.getElementById("errPass");
let id = localStorage.getItem('id') ? localStorage.getItem('id') : 0;

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input4.value !== input5.value){
errPass.style.display = "block";
        return;
    }else{
        errPass.style.display = "none";
    }
    for (var i = 0 ; i<itemsArray.length; i++){
        if(input3.value == itemsArray[i].email){
            errEmail.style.display = "block";
return;
        }else {
            errEmail.style.display = "none"
        }}

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
    location.href = "login.html";



// var testing = {
//     test: () =>
//         emailExists({email: newItem}, itemsArray)
// }
// console.log(testing)
//
});

// const userData = {
//     "username": "asfasf",
//     "User2": "wqrwqw",
//     "email": "paul.talmaci@gmail.com",
//     "password": "rftgyhujk",
//     "id": 7
// };
//
// const existingData = [
//     {
//         "username": "22323",
//         "User2": "2323",
//         "email": "paul.talmaci@gmail.com",
//         "password": "23232323",
//         "id": 5
//     },
//     {
//         "username": "asfsafs",
//         "User2": "wqrwqw",
//         "email": "paul.talmaci@gmail.com2",
//         "password": "xdcfvgbhnjmk",
//         "id": 6
//     },
//     {
//         "username": "asfsafs",
//         "User2": "wqrwqw",
//         "email": "banan",
//         "password": "xdcfvgbhnjmk",
//         "id": 7
//     }
// ]
//
// function emailExists({email}, existingData) {
//     return existingData.some(data => data.email === email)
// }
//

// const tests = [
//     {
//         expectedValue: true,
//         description: 'first item',
//         test: () =>
//             emailExists(userData, existingData)
//     },
//     {
//         expectedValue: false,
//         description: 'new email',
//         test: () =>
//             emailExists({email: 'lol'}, existingData)
//     },
//     {
//         expectedValue: true,
//         description: 'second item',
//         test: () =>
//             emailExists({email: 'paul.talmaci@gmail.com2'}, existingData)
//     },
//     {
//         expectedValue: false,
//         description: 'empty array',
//         test: () =>
//             emailExists(userData, [])
//     },
// ];
//
// function runTests(tests) {
//     let hasErrors = false;
//     for (const test of tests) {
//
//         let result = test.test();
//         if (result !== test.expectedValue) {
//             hasError = true;
//             console.error('Error expected', test.expectedValue, 'got', result, ' in test "' + test.description + '"');
//         }
//
//
//     }
//
//     if (!hasErrors) {
//         console.log('YOURE AGENIUS! ALL TESTS PASS');
//     }
// }
//
// runTests(tests)