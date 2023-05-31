const loginBtn = document.getElementById("btnLogin").addEventListener('click', (e) => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email == '') {
        $("#error-email").text("Enter email").css("border-bottom");
        $("#email").css("border-bottom", "solid red 2px");
        return false;
    }

    if (password == ''){
        $("#password").css("border-bottom", "solid red 2px");
        $("#error-password").text("Enter password");
        return false;
    }

});