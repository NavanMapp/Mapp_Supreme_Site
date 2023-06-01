const logOut = document.getElementById("signOut").addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.removeItem("uid");
    window.location.href = "./index.html";
});