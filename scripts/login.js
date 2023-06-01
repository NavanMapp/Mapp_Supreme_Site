const loginBtn = document.getElementById("btnLogin").addEventListener('click', (e) => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email == '') {
        $("#email").css("border-bottom", "solid red 2px");
        $("#error-email").text("Enter an email");
        return false;
    }

    if (password == ''){
        $("#password").css("border-bottom", "solid red 2px");
        $("#error-password").text("Enter password");
        return false;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;
        sessionStorage.setItem("uid", userCredentials.user.uid);
        swal({
            title: "Logging In",
            text: "You have Logged in successfully",
            icon: "success",
            button: "Go!"
        }).then(function() {
            window.location.href = "./main.html";
        });
    }).catch((error) => {
        console.log(error);
        swal({
            title: "Sign In",
            text: error.message,
            icon: "error",
            button: "Try Again"
        }).then(function() {
            return false;
        })
    })    
});