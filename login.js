let loginMail = document.getElementById("exampleInputEmail"),
    loginPass = document.getElementById("exampleInputPassword"),
    loginBtn = document.getElementById("loginBtn"),
    loginGoogleBtn = document.getElementById("loginGoogleBtn"),
    loginFbBtn = document.getElementById("loginFbBtn");
loginBtn.addEventListener("click", getInfo);

function getInfo(e) {
    e.preventDefault();
    console.log("work");
    // for (let i = 0; i < itemsArray.length; i++) {
    //     if (loginMail.value == itemsArray[i].email && loginPass.value == itemsArray[i].password) {
    //         console.log(loginMail.value + " logged in!!!");
    //
    //         location.href = "index.html";
    //         return logUser
    //     }
    //     let errLogin = document.getElementById("errLogin");
    //     errLogin.style.display = "block";
    //     console.log("Username or password incorrect")
    // }
    let data = {
        email: loginMail.value,
        password: loginPass.value
    };

    $.ajax({
        type: "POST",
        url: "http://localhost:8100/users/authenticate",
        data: data,
        success: function (response) {
            location.href = "index.html"
        },
        error: function (err) {
            console.log(err)
        }
    });
}

// var logUser = loginMail.value;
// export default logUser;
