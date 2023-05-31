const registerBtn = document.getElementById("btnSignUp").addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;

    //verify username
    if (email == '') {
        $("#email").css("border-bottom", "solid red 2px");
        $("#error-email").text("Enter a valid email");
        return false;
    }else{
        $("#email").css("border-bottom", "");
    }

    if (name.length >= 20 || name.length <= 3) {
        $("#name").css("border-bottom", "solid red 2px");
        $("#error-name").text("Name should be at least 4 Characters");
        return false;
    }
    if (password == '' && confirmPassword == ''){
        $("#password").css("border-bottom", "solid red 2px");
        $("#confirm-password").css("border-bottom", "solid red 1px");
        $("#error-password").text("no password has been entered, enter password");
        $("#error-confirmPassword").text("no password has been entered, enter password");
    }else if(password !== confirmPassword) {
        $("#password").css("border-bottom", "solid red 2px");
        $("#confirm-password").css("border-bottom", "solid red 1px");
        $("#error-confirmPassword").text("Password do not match");

        return false;
    }

    // searching/fetching credentials in database if user exists before creating it
    firebase.firestore().collection("users").where("username", "==", email)
    .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.data().email == email) {
                $("#name").css("border-bottom", "solid red 2px");
                $("error-name").text("The username already exists, please choose a different one");
                return false;
            }

            });
        }).catch(error => {
            console.log("unable to fetch document", error);
        });

    {

        const today = new Date();
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
                firebase.firestore().collection("users").doc().set( {
                name: name,
                email: email,
                password: password,
                userId: userCredentials.user.uid,
                created_at: today.getFullYear() + " " + (today.getMonth() + 1) + " " + today.getDate()
            }).catch(function(error) {
                console.log('error');
            })
            alert('Registered successfully');
            window.location.href = "login.html";
        });
    } 
    
    console.log('button works');
});