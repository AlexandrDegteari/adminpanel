let loginMail = document.getElementById("exampleInputEmail"),
    loginPass = document.getElementById("exampleInputPassword"),
    loginBtn = document.getElementById("loginBtn"),
    loginGoogleBtn = document.getElementById("loginGoogleBtn"),
    loginFbBtn = document.getElementById("loginFbBtn");
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

var logUser = loginMail.value;
export default logUser;
